import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Carta({el}){

    return(

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{el.username}</Card.Subtitle>
    <Card.Text>
      {el.email}
    </Card.Text>
    <Card.Link as={Link } to={`/details/${el.id}`}>Details</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>)
    
}
export default Carta