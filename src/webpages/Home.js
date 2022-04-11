import React from "react";
import { Carousel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "./pages.css"

export default function Home() {
  const submitOnclicked = () => {
    alert("Formunuz başarılı şekilde gönderilmiştir.");
  };

  return (
    <div>
      <div className="d-block firstCarousel">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100  resim"
              src="https://d31f902anbz5po.cloudfront.net/2128/291216_3_master.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="sliderh3">
                SUPERIOR KING ROOM
              </h3>
              <p className="sliderParag" >
              This King Room features a King bed and a bathroom stocked with amenities, and approximately 180 to 200 square feet create the right environment for a business or leisure stay.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 resim"
              src="https://d31f902anbz5po.cloudfront.net/2128/291213_2_master.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="sliderh3">SUPERIOR QUEEN ROOM</h3>
              <p className="sliderParag">This Queen Room features one Queen bed and a bathroom stocked with amenities, and approximately 180 to 200 square feet create the right environment for a business or leisure stay.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 resim"
              src="https://d31f902anbz5po.cloudfront.net/2128/300541_1_master.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="sliderh3">SUPERIOR QUEEN ROOM ADA</h3>
              <p className="sliderParag">
              Accessible King Bed with Roll-in shower, and approximately 180 to 200 square feet create the right environment for a business or leisure stay.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div
        className=" "
      
      >
        <div className=" d-block formDiv">

       
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NAME SURNAME</Form.Label>
            <Form.Control type="text" placeholder="" />
            {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control type="password" placeholder="********" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Please inform me about further opportunities"
            />
          </Form.Group>
          <Button
            onClick={() => submitOnclicked()}
            variant="primary"
            type="submit"
          >
           SEND
          </Button>
        </Form>
        </div>
      </div>
    </div>
  );
}
