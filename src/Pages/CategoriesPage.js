import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/CategoriesSlice";
import { Link } from "react-router-dom";

function CategoriesPage()
{
    const categories=useSelector(state=>state.Categories);

    const dispatch=useDispatch();
    useEffect(()=>{dispatch(fetchCategories())},[]);
   
        return(
        <>
        <h1 className="text-center"   style={{color:"#483D8B"}}>Categories </h1>
        <div className="text-center">
       { categories.map((category)=>{
        return(
            <Link to={`/categories/${category}`} className="btn btn-primary m-4 "> {category} </Link>
       )})}
       </div>
        </>
    );
}
export default CategoriesPage;