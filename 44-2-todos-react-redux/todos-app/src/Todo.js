import React from "react";
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
import PropTypes from "prop-types";
import "./Todo.css";

/** Todo component
 * Purpose: create the todo from data in the store
 * 
 * props:
 * 
 * hooks:
 * - useSelector to get the todo data from the store
 */

function Todo( { id, task, removeTodo }) {
  const handleRemoveTodo = () => {
    removeTodo();
  }

  return (
    <li className="Todo">
      <span className="Todo-task">
        {task}
      </span>
      <Button className="Todo-deleteBtn btn-sm bg-danger" onClick={handleRemoveTodo}>
        X
      </Button>
    </li>
  );
}

Todo.propTypes = {
  task: PropTypes.string.isRequired,
};

export default Todo;