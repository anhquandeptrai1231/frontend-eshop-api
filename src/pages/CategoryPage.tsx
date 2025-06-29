import { useEffect, useState } from "react";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";
import {
  createCategories,
  deleteCategories,
  getCategories,
  updateCategories,
} from "../services/CategoryService";
import { Category } from "../types/Category";

const CategoryPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState<string>("");

  const fetchCategories = () => {
    getCategories()
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.error("Lỗi khi gọi API", err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  const handleThem = () =>{
    if(editName.trim() === " "){
        return;
    }
    const action = editId === null ? createCategories(editName) : updateCategories(editId, editName);
    action
      .then(() => {
        fetchCategories(); 
        setEditId(null);   
        setEditName("");
      })
      .catch((err) => console.error("Loi khi goi api them danh muc:", err));
  };
  const handleEdit = (cat:Category) =>{
    setEditId(cat.id);
    setEditName(cat.name)
  }
  const handleDelete = (id:number) => {
    if(window.confirm("Ban co muon xoa no khong?")){
        deleteCategories(id)
        .then(fetchCategories)
        .catch((err) => console.error("Loi khi xoa:", err));
    }
  };
  const handleCancel =  () =>{
    setEditId(null);
    setEditName("");
  };
  return(
    <div>
        <h1>Quan li danh muc</h1>
        <CategoryForm 
            editId={editId}
            editName={editName}
            setEditName={setEditName}
            onSubmit={handleThem}
            onCancel={handleCancel}
        
        
        />
        <CategoryList
            categories={categories}
            onEdit={handleEdit}
            onDelete={handleDelete}
        
        
        />



        
    </div>


  )

    
}
export default CategoryPage;