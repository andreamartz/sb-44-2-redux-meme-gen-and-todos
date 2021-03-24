import { useDispatch } from "react-redux";
import './App.css';
import TodoCreationForm from './TodoCreationForm';
import TodosContainer from './TodosContainer';

function App() {
  const dispatch = useDispatch();
  // add a todo to the store
  const addTodo = (data) => {
    dispatch({
      type: "ADD_TODO",
      payload: data   // obj containing id and task keys
    });
  }
  
  const removeTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      id
    });
  }

  return (
    <div className="App">
      <TodoCreationForm addTodo={addTodo}/>
      <hr />
      <TodosContainer removeTodo={removeTodo} />
    </div>
  );
}

export default App;
