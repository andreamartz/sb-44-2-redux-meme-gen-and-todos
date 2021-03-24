import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap";
import { v4 as uuid } from 'uuid';
import "./TodoCreationForm.css";

/** Form for adding a new todo
 * 
 * Props:
 * 
 * State:
 * 
 */

function TodoCreationForm({ addTodo }) {
  const INITIAL_STATE = { 
    id: "",
    task: ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value
    }));
  };

  // need to validate the form data

  const handleSubmit = evt => {
    evt.preventDefault();
    const newTodoData = { ...formData, id: uuid() };
    addTodo(newTodoData);
    setFormData(INITIAL_STATE);
  }

  const { task } = formData;

  return (
    <section className="TodoCreationForm">
      <Card className="TodoCreationForm-Card">
        <CardBody>
          <CardTitle className="font-weight-bold text-center h1">
            Create a Todo
          </CardTitle>
          <CardText>
            What is one task you need to add to your list of todos?
          </CardText>

          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="task" sm={3}>Task</Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="task"
                  id="task"
                  value={task}
                  onChange={handleChange}
                >
                </Input>
              </Col>
            </FormGroup>

            <Button className="float-right btn btn-outline-light" type="submit">
              Add Todo
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default TodoCreationForm;