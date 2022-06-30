import React, { useState, useEffect } from 'react';
import TableItem from './Components/TableItem'
import SearchForm from './Components/SearchForm'
import {Table} from "react-bootstrap"

import './App.css';

import axios from "axios";



function App() {

  const [userlist, setusers] = useState(null);

  //display 10 - 20 users your choice
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=20')
        .then(res => { 
          setusers(res.data.results)
            console.log(res.data.results)
        })
        .catch(err => console.log(err))
}, [])

// const arr = userlist.map((data, index) => {
//   return (<tr>{data}</tr>)
// })

return (<>
<div className="tableContainer">

<div className="SearchContainer">
<SearchForm />
</div>

<Table striped bordered className="table">
  <thead>
<tr>
  <th>Gender</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Address</th>
  <th>City</th>
  <th>Country</th>
  <th>Zip Code</th>
  <th>Phone Number</th>
</tr>
  </thead>
  <tbody>
{userlist && userlist.length > 0 && userlist.map((row, idx) => (
      <TableItem key={idx} data={row}/>
    ))}
  </tbody>
</Table>
</div>
   </>
)

}

export default App;
