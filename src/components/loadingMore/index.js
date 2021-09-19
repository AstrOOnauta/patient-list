import { Container, Button } from "react-bootstrap"

export default function LoadingMore(props){

    return(
        <Container className="d-grid gap-2 col-2 mx-auto my-4">
          <Button variant="dark" style={{ fontSize: "16px" }} onClick={props.onClick}>
            {props.isLoading ? "Carregando..." : "Mostrar mais"}
          </Button>
        </Container>
    )
}