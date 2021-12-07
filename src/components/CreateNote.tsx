import * as React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Note } from "../models/note.model";

interface ICreateNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNote: React.FC<ICreateNoteProps> = ({ notes, setNotes }) => {
  const [error, setError] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory....");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);

    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  };

  return (
    <>
      <h2>Create a Note...</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the title for the note..."
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter your notes"
            rows={3}
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            title="Choose your color"
            defaultValue="#dfdfdf"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNote;
