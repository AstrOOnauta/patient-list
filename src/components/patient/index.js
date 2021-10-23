import { Link, useParams } from "react-router-dom"

import { Container, Button } from "react-bootstrap"

export default function Patient(props){
    const { id } = useParams()
    console.log(props.patient.length)

    if(props.patient.length <= id){
        return(
            <h1 className="d-flex justify-content-center py-5 my-5">Carregando...</h1>
        )
    }else{
        return(
            <div className="position-fixed top-0 start-0" style={{backgroundColor: "rgba(0, 0, 0, .5)", width: "100%", height: "100vh", fontSize: "14px", zIndex: "2"}}>
              <div className="position-fixed top-50 start-50 translate-middle bg-light shadow text-center" style={{border: "1px solid rgba(0, 0, 0, .4)", borderRadius: "2rem", width: "80%", minHeight: "70vh", zIndex: "2"}}>
                <div className="position-fixed start-50 translate-middle shadow" style={{backgroundImage: `url(${props.patient[id].picture.large})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", border: "1px solid rgba(0, 0, 0, .4)", borderRadius: "50%", width: "15rem", height: "15rem"}}></div>
                <br /><br /><br /><br />
                <h1>{props.patient[id].name.first} {props.patient[id].name.last} ({props.patient[id].nat})</h1>
                <small>{props.patient[id].gender === "male" ? "Masculino" : "Feminino"}</small>
                <br /><br />
                <Container className="mx-auto" style={{maxWidth: "90%"}}>
                    <div className="text-start py-2">
                        <h4 className="d-inline">Endereço: </h4><p className="text-start d-inline">Rua {props.patient[id].location.street.name}, N° {props.patient[id].location.street.number} - {props.patient[id].location.city}/{props.patient[id].location.state} ({props.patient[id].location.country})</p>
                    </div>
                    <div className="text-start py-2"> 
                        <h4 className="d-inline">E-mail: </h4><p className="text-start d-inline">{props.patient[id].email}</p>
                    </div>
                    <div className="text-start py-2">
                        <h4 className="d-inline">Telefone: </h4><p className="text-start d-inline">{props.patient[id].phone}</p>
                    </div>
                    <br /><br />
                    <div className="text-start py-2">
                        <h4 className="d-inline">Número de ID: </h4><p className="text-start d-inline">{id}</p>
                    </div>
                    <div className="text-start py-2">
                        <h4 className="d-inline">URL de compartilhamento: </h4><Link to={`/paciente/${id}`} className="text-start d-inline">{window.location.href}</Link>
                    </div>
                </Container>
              </div>
              <Link to={"/"} style={{textDecoration: "none", color:"inherit"}}><Button className="fas fa-times position-fixed top-0 end-0 m-5 px-4 bg-dark" style={{ fontSize: "5rem", outline: "none", border: "none", borderRadius: "8rem" }} id={`close${props.index}`}></Button></Link>
            </div>
          )
    }
}