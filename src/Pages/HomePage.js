import { Col, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ProductsPage from "./ProductsPage";
import CategoriesPage from "./CategoriesPage";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import CartPage from "./CartPage";
import CategoryProductsPage from "./CategoryProductsPage";

function HomePage()
{
    return(
    <>
     <BrowserRouter>
    <NavBar/>
    <div style={{height:"55px"}}></div>
    <Row>
        <div className="col-2" ><SideBar/></div>
       
        <div className="col-10" >
         <Routes>
            <Route path='/' element={<ProductsPage/>}  />
            <Route path='/categories' element={<CategoriesPage/>}  />
            <Route path='/categories/:category'  element={<CategoryProductsPage />} />
            <Route path='/cart' element={<CartPage/>}  />


            </Routes> 
            
        </div>
        </Row>
        </BrowserRouter>
    
    </>);
}
export default HomePage;