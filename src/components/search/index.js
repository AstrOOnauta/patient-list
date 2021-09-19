import { Form, InputGroup, FormControl, Button } from "react-bootstrap"

export default function Search(props){


    return(
        <Form onSubmit={(e)=>e.preventDefault()}>
          <InputGroup className="my-5 mx-auto" style={{maxWidth: "90%"}}>
            <FormControl className="text-center" style={{ fontSize: "16px" }} placeholder="Pesquise um nome..." value={props.search} onChange={(e) => { props.setSearch(e.target.value) }} />
            <Button type="submit" className="fas fa-search" style={{ fontSize: "16px" }} variant="dark"></Button>
          </InputGroup>
        </Form>
    )    
}