interface Props{
    editId : number | null;
    editName : string;
    setEditName : (name: string) => void;
    onSubmit : () => void;
    onCancel : () => void;
}
const CategoryForm = ({editId, editName, setEditName, onSubmit, onCancel}:Props) =>{
    return(
        <div>
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}
            placeholder="Enter category name"/>
            <button onClick={onSubmit}>{editId === null ? "Add" : "Update"}</button>
            {editId !==null &&(
                <button onClick={onCancel}>Huy</button>

            )}

        </div>

    );
}
export default CategoryForm;