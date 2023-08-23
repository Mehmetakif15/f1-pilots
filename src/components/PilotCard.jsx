import { useState } from "react";
import Card from "react-bootstrap/Card";

const PilotCard = ({ name, country, image, championships }) => {
  const [showImage, setshowImage] = useState(true);

  const handleClick = () => setshowImage(!showImage);
  return (
    <Card
      className="pilot-card text-center rounded-2 m-auto"
      role="button"
      onClick={handleClick}
    >
      <Card.Header>{name}</Card.Header>
      {showImage ? (
        <Card.Img variant="top" src={image} className="pilot-img" />
      ) : (
        <ul className="my-auto">
          {championships.map((item, i) => {
            return (
              <li key={i} className="text-start list-unstyled">
                🏎 {item}
              </li>
            );
          })}
        </ul>
      )}

      <Card.Footer className="text-muted">{country}</Card.Footer>
    </Card>
  );
};

export default PilotCard;
