import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function SideBar()
{
    return(
        <>
        <Container style={{backgroundColor:'#e9ecef', height:"1670px"}}>
         <div className="mb-2" style={{color:"#8B0000"}}>
        <Link to="/" style={{textDecoration: 'none'}} >  Products  </Link><br/>
        </div>
        <div className="mb-2" style={{color:"#8B0000"}}>
        <Link to="/categories" style={{textDecoration: 'none'}} >  Categories  </Link>
        </div>
        </Container>
        
        </>
    );
}
export default SideBar;