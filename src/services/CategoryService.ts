import axios from "axios";
import { Category } from "../types/Category";
const API_URL =  "http://localhost:5032/api/Category";
export const getCategories =  () =>  {
   return axios.get<{data : Category[]}>(API_URL);
}
export const  createCategories =  (name : string) =>{
  return  axios.post(API_URL, {name});
}
export const updateCategories = (id:number, name:string)=>{
  return   axios.patch(`${API_URL}/${id}`, {name});
}
export const deleteCategories = (id:number) => {
  return  axios.delete(`${API_URL}/${id}`);
}