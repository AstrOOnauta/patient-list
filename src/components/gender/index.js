import { Container } from "react-bootstrap"

export default function Gender(props){
    return(
        <Container className="py-2">
              <form className="form-group d-flex justify-content-center">
                <input type="radio" value="all" className="btn-check" name="radio" id="all" autoComplete="off" onChange={(e)=>props.setGender(e.target.value)} />
                <label className="btn btn-outline-secondary mx-2" style={{fontSize: "16px"}} htmlFor="all">Todos</label>

                <input type="radio" value="male" className="btn-check" name="radio" id="male" autoComplete="off" onChange={(e)=>props.setGender(e.target.value)} />
                <label className="btn btn-outline-secondary mx-2" style={{fontSize: "16px"}} htmlFor="male">Homem</label>

                <input type="radio" value="female" className="btn-check" name="radio" id="female" autoComplete="off" onChange={(e)=>props.setGender(e.target.value)}/>
                <label className="btn btn-outline-secondary mx-2" style={{fontSize: "16px"}} htmlFor="female">Mulher</label>
              </form>
            </Container>
    )
}