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
import "./MemeCreationForm.css";

/** Form for adding a new meme
 * 
 * Props:
 * 
 * State:
 * 
 */

function MemeCreationForm({ addMeme }) {
  const INITIAL_STATE = { 
    imgURL: "",
    imgDescription: "",
    topText: "",
    bottomText: ""
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
    const newMemeData = { ...formData, id: uuid() };
    addMeme(newMemeData);
    setFormData(INITIAL_STATE);
  }

  const { imgURL, imgDescription, topText, bottomText } = formData;

  return (
    <section className="MemeCreationForm">
      <Card className="MemeCreationForm-Card">
        <CardBody>
          <CardTitle className="font-weight-bold text-center h1">
            Create a Meme
          </CardTitle>
          <CardText>
            We'll create that meme for you pronto after you give us a little information.
          </CardText>

          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="imgURL" sm={3}>Image URL</Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="imgURL"
                  id="imgURL"
                  value={imgURL}
                  onChange={handleChange}
                >
                </Input>
              </Col>

            </FormGroup>

            <FormGroup row>
              <Label for="imgDescription" sm={3}>Image Description</Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="imgDescription"
                  id="imgDescription"
                  value={imgDescription}
                  onChange={handleChange}
                >
                </Input>
              </Col>

            </FormGroup>

            <FormGroup row>
              <Label for="topText" sm={3}>Top Text</Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="topText"
                  id="topText"
                  value={topText}
                  onChange={handleChange}
                />                
              </Col>

            </FormGroup>

            <FormGroup row>
              <Label for="bottomText"sm={3}>Bottom Text</Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="bottomText"
                  id="bottomText"
                  value={bottomText}
                  onChange={handleChange}
                />                
              </Col>
            </FormGroup>

            <Button className="float-right btn btn-outline-light" type="submit">
              Add Meme
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default MemeCreationForm;