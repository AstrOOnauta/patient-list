import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container } from "react-bootstrap"

import TablePatient from "./components/tablePatient";
import Menu from "./components/menu";
import LoadingMore from "./components/loadingMore";
import Search from "./components/search";
import Error404 from "./components/error404";
import Patient from "./components/patient";
import Gender from "./components/gender";

function App() {
  
  //Needed HOOKs in this application
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [gender, setGender] = useState("all")
  const [isLoading, setIsLoading]= useState(false)
  const [pages, setPages] = useState(0)

  useEffect(() => {
    fetchData() //Call the API request function when open the web app
  }, [])

  //Axios request API to get the patients registered
  const fetchData = async () => {
  setIsLoading(true)  //Switch the HOOK to loading 50 more registers from API
  await axios.get(`https://randomuser.me/api/?page=${pages}&results=50`)
      .then((response) => {
        setUsers([ ...users, ...response.data.results]) //Add 50 new registers in HOOK users from API request
        setIsLoading(false) //Switch the HOOK "isLoadind" to false after the new request of 50 register from API
        setPages(pages+1) //Add new page for new request API when click in button "Carregar mais"
      })
      .catch((error) => console.log('error', error))  //Show error in console when API call is failed
  }

  return (
    <Router>
      <Menu />  {/* Menu component */}
      <Switch>

        {/* Home route content the patients list */}
        <Route exact path="/">
          <Container>
            <Search search={search} setSearch={setSearch}/>
            <Gender setGender={setGender} />
            <TablePatient users={users} gender={gender} search={search}/>
            <LoadingMore isLoading={isLoading} onClick={fetchData}/>
          </Container>
        </Route>

        {/* Route content the individual pacient info */}
        <Route path="/paciente/:id">
          <Patient patient={users}/>
        </Route>

        {/* 404 error route*/}
        <Route path="*">
          <Error404 />
        </Route>

      </Switch>
    </Router>
  )
}

export default App;