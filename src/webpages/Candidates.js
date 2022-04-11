import React, { useEffect, useState } from "react";
import { Button, FormControl, InputGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Candidates() {
  const [users, setUsers] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [usersToList, setUsersToList] = useState("");

  let dataSort = users.sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  
  const filterValue = (e) => {
    console.log(users);
    setinputValue(e.target.value);
    
    const filteredUsers = users.filter((item, index) => {
      return item.includes(e.target.value);
    });
    setUsersToList(filteredUsers);
    console.log(usersToList);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
    
      });
  }, []);

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Filter"
          aria-label="Filter"
          aria-describedby="basic-addon1"
          value={inputValue}
          onChange={(e) => filterValue(e)}
        />
      </InputGroup>

      <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Info</th>
          </tr>
        </thead>

        <tbody>
          {dataSort
            .filter((item) => {
              if (inputValue !== "") {
                console.log(item.name);
                return item.name
                  .toLowerCase()
                  .includes(inputValue.toLowerCase());
              }
              return item;
            })
            .map((i, index) => (
              <tr key={i.id}>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.phone}</td>
                <td className="text-center">
                  {" "}
                  <Button variant="outline-info"><Link to={`/candidates/${i.id}`}>Details</Link></Button>{' '}
                  
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

    </div>
  );
}
