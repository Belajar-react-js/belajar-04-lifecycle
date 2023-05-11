import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function ListDigimon() {
  const [digimons, setDigiomons] = useState([]);
  console.log(1);

  useEffect(() => {
    // fetch("https://digimon-api.vercel.app/api/digimon")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setDigiomons(result);
    //   });
    axios("https://digimon-api.vercel.app/api/digimon")
      .then(({ data }) => setDigiomons(data))
      .catch((err) => console.log(err));

    console.log(3);
  }, []);

  console.log(digimons);

  return (
    <div>
      <h1>Digimons</h1>
      <h2 className="text-center mb-5">List Digimon </h2>
      {console.log(2)}
      {digimons.length === 0 ? (
        <span>Loading...</span>
      ) : (
        digimons.map((item, index) => (
          <div key={index}>
            <Container>
              <Row className="my-3">
                <Col>
                  <img src={item.img} alt="" width={200} />
                </Col>
                <Col>
                  <h3>{item.name}</h3>
                </Col>
                <Col>
                  <h4>{item.level}</h4>
                </Col>
              </Row>
            </Container>
          </div>
        ))
      )}
    </div>
  );
}

export default ListDigimon;
