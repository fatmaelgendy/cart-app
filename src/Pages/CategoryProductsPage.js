import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";


function CategoryProductsPage()
{
    const cat=useParams();
    const products=useSelector(state=>state.products);

       return(
        <>
       <h1 className="text-center m-2 " style={{color:"#483D8B"}}> {cat.category} Products  </h1>
       <Table striped bordered hover className="xy-2">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>discription</th>
          <th>price</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
       {products.map((product)=>
        {
        if(product.category == cat.category){
         return(
             <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td className="w-50">{product.description.slice(0,99)}...</td>
          <td>{product.price}$</td>
          <td><img src={product.image} width="100px" height="100px"/></td>
        </tr>);
        
                
            }
        })}
</tbody>
    </Table>

       

        </>
    )
}
export default CategoryProductsPage;