import { Category } from "../types/Category";
interface Props{
    categories : Category[];
    onEdit : (cat: Category) => void;
    onDelete:(id : number) => void;
}
const CategoryList =  ({categories, onEdit, onDelete }:Props)=>{
    return (
        <ul>
        {
            categories.map((cat) =>(
                <li key={cat.id}>
                    {cat.name}{" "}
                    <button onClick={()=> onEdit(cat)}>Edit</button>
                    <button onClick={() => onDelete(cat.id)}>Delete</button>
                </li>
            ))
        }
        
        </ul>
    )
}
export default CategoryList;