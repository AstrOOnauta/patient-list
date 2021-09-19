import { Table, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function TablePatient(props){

    if(props.gender==="all"){
      return(
          <Table striped bordered hover responsive="sm" className="my-5 mx-auto text-center" style={{maxWidth: "90%"}}>
            <thead style={{ fontSize: "16px" }}>
              <tr>
                <th>Nome</th>
                <th>Gênero</th>
                <th>Data de Nascimento</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "14px" }}>
              {props.users.map((user, index) => {
                if( props.search.toUpperCase() === user.name.first.toUpperCase() ||
                    props.search.toUpperCase() === user.name.last.toUpperCase()  ||
                    props.search.toUpperCase() === (user.name.first.toUpperCase()+" "+user.name.last.toUpperCase()) ||
                    props.search.toUpperCase() === ""){
                      return(
                        <tr key={index}>
                          <td>{user.name.first} {user.name.last}</td>
                          <td>{user.gender === "male" ? "Masculino" : "Feminino"}</td>
                          <td>{user.dob.date.substr(8, 2) + "/" + user.dob.date.substr(5, 2) + "/" + user.dob.date.substr(0, 4)}</td>
                          <td><Button size="lg" variant="dark"><Link to={`/paciente/${index}`} style={{textDecoration: "none", color:"inherit"}}>Visualizar</Link></Button></td>
                        </tr>
                      )
                    }
              })}
            </tbody>
          </Table>
      )
    }else if(props.gender==="male"){
      return(
        <Table striped bordered hover responsive="sm" className="my-5 mx-auto text-center" style={{maxWidth: "90%"}}>
          <thead style={{ fontSize: "16px" }}>
            <tr>
              <th>Nome</th>
              <th>Gênero</th>
              <th>Data de Nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "14px" }}>
            {props.users.map((user, index) => {
              if(user.gender === "male"){
                if( props.search.toUpperCase() === user.name.first.toUpperCase() ||
                    props.search.toUpperCase() === user.name.last.toUpperCase()  ||
                    props.search.toUpperCase() === (user.name.first.toUpperCase()+" "+user.name.last.toUpperCase()) ||
                    props.search.toUpperCase() === ""){
                      return (
                        <>
                          <tr key={index}>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>
                              {user.gender === "male" ? "Masculino" : "Feminino"}
                            </td>
                            <td>{user.dob.date.substr(8, 2) + "/" + user.dob.date.substr(5, 2) + "/" + user.dob.date.substr(0, 4)}</td>
                            <td><Button size="lg" variant="dark"><Link to={`/paciente/${index}`} style={{textDecoration: "none", color:"inherit"}}>Visualizar</Link></Button></td>
                          </tr>
                        </>
                      )
                    }
              }
            })}
          </tbody>
        </Table>
    )
    }else if(props.gender==="female"){
      return(
        <Table striped bordered hover responsive="sm" className="my-5 mx-auto text-center" style={{maxWidth: "90%"}}>
          <thead style={{ fontSize: "16px" }}>
            <tr>
              <th>Nome</th>
              <th>Gênero</th>
              <th>Data de Nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "14px" }}>
            {props.users.map((user, index) => {
              if(user.gender === "female"){
                if( props.search.toUpperCase() === user.name.first.toUpperCase() ||
                    props.search.toUpperCase() === user.name.last.toUpperCase()  ||
                    props.search.toUpperCase() === (user.name.first.toUpperCase()+" "+user.name.last.toUpperCase()) ||
                    props.search.toUpperCase() === ""){
                      return (
                        <>
                          <tr key={index}>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>
                              {user.gender === "female" ? "Feminino" : "Masculino"}
                            </td>
                            <td>{user.dob.date.substr(8, 2) + "/" + user.dob.date.substr(5, 2) + "/" + user.dob.date.substr(0, 4)}</td>
                            <td><Button size="lg" variant="dark"><Link to={`/paciente/${index}`} style={{textDecoration: "none", color:"inherit"}}>Visualizar</Link></Button></td>
                          </tr>
                        </>
                      )
                    }
              }
            })}
          </tbody>
        </Table>
    )
    }
}