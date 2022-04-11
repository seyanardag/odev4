import "./App.css";
import React from "react";
import { Container, Nav, Navbar,  } from "react-bootstrap";


function App() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/candidates">CANDIDATES</Nav.Link>
            <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default App;

// •	Home sayfasında "Canditates" ve "About Us" sayfalarına link olması beklenmektedir (Header’da).
// •	"Home" sayfası, bir adet slider olan genel tanıtım bilgilerinin yer aldığı ve bir iletişim formunun olduğu statik bir sayfa olacak. (form gerçek manada çalışmayacak ancak bilgiler doldurulup Gönder’e basınca “mesajınız gönderildi” diye uyarı verecek.)
// •	"About Us" sayfası şirket bilgilerinin yer aldığı statik bir sayfa olacak.
// •	"Canditates" sayfasında ise kullanıcıların bilgilerinin listelendiği bir tablo beklenmektedir.
// •	İlgili tabloda her bir satır adayın adı, soyadı ve telefon bilgisini içermeli ve ada göre alfabetik sıralı gösterilmelidir. Ayrıca tablonun üstünde search alanı olmalı ve ad soyad bilgilerine göre filtreleme yapabilmelidir.
// •	Satır sonunda yer alan "Detail" butonuna tıklandığında kullanıcı ile ilgili daha detaylı bilgilerin yer aldığı bir sayfa açılmalıdır. Bu sayfa, adayın ad, soyad, telefon, email, web site bilgilerini içermelidir.
