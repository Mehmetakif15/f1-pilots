import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import PilotCard from "./PilotCard";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Form.Control
        size="lg"
        type="search"
        placeholder="Search pilots..."
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((pilot) =>
              pilot.name.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map((pilot, index) => {
              return (
                <Col md={6} lg={4} xl={3} key={index}>
                  <PilotCard {...pilot} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
