import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";

const ClassRoom = (props) => {
  const [ActivityAuto] = useState({ title: "Finger Painting", time: "10:30" });
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  // add functionality to button to "today's activities here". Normal JS//
  return (
    <div className="home">
      <h2 className="homeTitle text-white">
        Daycare Room 187 Overview {today}
      </h2>

      <Container>
        <h4 className="text-white">Today's Activities</h4>
        {/* <Form.Label className="text-white">Today's Activities</Form.Label> */}
        <Form.Control type="title" name="title" value={ActivityAuto.title} />
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <h4 className="text-white">Kids of Classroom 187</h4>
        {/* insert database with students here */}
      </Container>

      <Button variant="primary">Admin Add Activities</Button>
    </div>
  );
};

export default ClassRoom;
