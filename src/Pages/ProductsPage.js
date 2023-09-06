import { useEffect} from "react";
import { Card,Button,Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductsSlice";
import { AddToCart } from "../store/CartSlice";

function ProductsPage()
{
    const products=useSelector((state)=>state.products);
   
    const dispatch=useDispatch();
   useEffect(()=>{dispatch(fetchProducts())},[]);
  
   
    return(
        <>
        <h1 className="text-center"   style={{color:"#483D8B"}}>Products</h1>
        <Row>
        {products.map(product=>{
          return(
        <div className="col-3 my-2" key={product.id}>
        <Card style={{ width:'250px', height:'350px' }}>
      <Card.Img variant="top-center" src={product.image}  style={{width:"100%",height:"100px"}} />
      <Card.Body >
        <Card.Title style={{width:"100%",height:"130px"}}>{product.title}</Card.Title>
        <Card.Text>
         Price: {product.price}$
        </Card.Text>
        <div className="text-center">
        <div  class="btn btn-outline-primary text-center" style={{width:"100%"}} onClick={()=>dispatch(AddToCart(product))}>
          Add to Cart</div>
          </div>
      </Card.Body>
    </Card>
    </div>)
         })}   
        
    </Row>
        </>
    );
}
export default ProductsPage;