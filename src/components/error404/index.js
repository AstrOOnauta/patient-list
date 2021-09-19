import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Error404(){

    return(
        <Container className="text-center py-5 my-5">
            <i className="fas fa-exclamation-triangle py-5" style={{fontSize: "10rem"}}></i>
            <h1>Essa página não existe!</h1>
            <br /><br /><br /><br /><br />
            <Link to={{pathname: "/"}} style={{fontSize: "2rem", textDecoration: "none"}}>Página inicial</Link>
        </Container>
    )
}