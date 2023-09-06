import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFromCart,ClearCart } from "../store/CartSlice";

function CartPage()
{
    const cart=useSelector(state=>state.Cart);
    const dispatch=useDispatch();

    const TotalPrice=cart.reduce((acc,product)=>{
      acc += product.price;
      return acc;
    },0)
    return(
        <>
       <h1 style={{color:"#483D8B"}}>WelCome To Cart Page</h1> 
       <div className="btn btn-primary m-2" onClick={()=>{dispatch(ClearCart())}}>Clear Cart</div>
       <h5 style={{color:"#483D8B"}}>Total Price: {TotalPrice}$</h5>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>discription</th>
          <th>price</th>
          <th>image</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
    {cart.map((c)=>{
      return(
        <tr key={c.id}>
          <td>{c.id}</td>
          <td>{c.title}</td>
          <td className="w-50">{c.description.slice(0,99)}...</td>
          <td>{c.price}$</td>
          <td><img src={c.image} width="100px" height="100px"/></td>
          <td><div class="btn btn-danger" onClick={()=>{dispatch(DeleteFromCart(c))}}>Delete</div></td>
        </tr>);
        
        })}
      </tbody>
    </Table>
         
        </>
    );
}
export default CartPage;