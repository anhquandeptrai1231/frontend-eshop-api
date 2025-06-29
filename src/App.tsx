import axios from "axios";
import { useEffect, useState } from "react";
interface Category {
  id: number;
  name: string;
}
function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tenMoi, setTenMoi] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState<string>("");
  const addTen = () => {
    if (tenMoi.trim() === "") return;
    axios.post("http://localhost:5032/api/Category", { name: tenMoi })
      .then(() => {
        return axios.get("http://localhost:5032/api/Category");
      })
      .then(res => {
        setCategories(res.data.data);
        setTenMoi("");
      })
      .catch(err => {
        console.log("Loi khi them category", err);
      });
  };
  const updateTen = () =>{
    if(!editId || editName.trim() ==="") return;
    axios.patch(`http://localhost:5032/api/Category/${editId}`, {name : editName})
    .then(()=>{
    return axios.get("http://localhost:5032/api/Category");
    })
    .then(res =>{
      setCategories(res.data.data);
      setEditId(null);
      setEditName("");
    })
    .then(err =>{
      console.log("Loi khi cap nhat category", err);
    })
  }
  const deleteTen = (id:number) =>{
    if(!window.confirm("Ban co chac chan muon xoa khong?")) return;
    axios.delete(`http://localhost:5032/api/Category/${id}`)
    .then(()=>{
      return axios.get("http://localhost:5032/api/Category");
    })
    .then(res =>{
      setCategories(res.data.data);
    })
    .then(err =>{
      console.log("Loi khi goi api xoa category", err);
    })
  }
  useEffect(() => {
    axios.get("http://localhost:5032/api/Category")
      .then(res => {
        setCategories(res.data.data);
      })
      .catch(err => {
        console.error("Loi goi api category:", err);
      });
  }, []);
  return (
    <div>
      <h1>Danh sach category</h1>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>{cat.name}
          <button onClick={()=>{
            setEditId(cat.id);
            setEditName(cat.name);
          }}>
              Edit
          </button>
          <button onClick={() => (deleteTen(cat.id))}>Delete</button>
          </li>
        ))};
      </ul>
      {
        editId !==null && (
          <div>
            <input type ="text" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="New name"/>
            <button onClick={updateTen} >Update</button>
            <button onClick={()=>{
              setEditId(null);
              setEditName("");
            }}>Exit</button>
          </div>


        )
      }
      <input type="text" value={tenMoi} onChange={(e) => setTenMoi(e.target.value)} placeholder="Enter name:" />
      <button onClick={addTen}>Add</button>
    </div>


  );

}
export default App;