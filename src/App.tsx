import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Note } from "./models/note.model";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "My Meets",
      text: "Schdule Demo meet",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  const handleNotes = () => {
    // setNotes("Hello man");
  };
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
