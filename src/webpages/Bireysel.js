import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fullDatam from "../fullDatam";
import { FiPhoneCall,FiMail } from "react-icons/fi";
import { VscGlobe } from "react-icons/vsc";
import './pages.css'


export default function Bireysel() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  let params = useParams();
  console.log(params);

  useEffect(() => {
    fullDatam.map((item, index) => {
      if (Number(params.candidatesName) == item.id) setUsername(item.name);
      setEmail(item.email);
      setPhone(item.phone);
      setWebsite(item.website);
    });
  }, []);

  return (
    <div className="bireyselOuther">
      
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Header>
          <div style={{ width: "18rem" , fontWeight: "800"}}>{username}</div> 
            </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {" "}
              <span className="spanList">
                <FiPhoneCall/>
              </span>{" "}
              {phone} 
              
            </ListGroup.Item>
            <ListGroup.Item>
            <span className="spanList">
            <FiMail/>
            </span>{" "}
             {email}
            </ListGroup.Item>
            <ListGroup.Item>
            <span className="spanList">
              <VscGlobe/>
              </span>{" "}
              {website}
            </ListGroup.Item>
          </ListGroup>
        </Card>

        <br />
      </>
    </div>
  );
}
