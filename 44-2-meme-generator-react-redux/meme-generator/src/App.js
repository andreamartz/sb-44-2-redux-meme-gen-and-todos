import { useDispatch } from "react-redux";
import './App.css';
import MemeCreationForm from './MemeCreationForm';
import MemesContainer from './MemesContainer';

function App() {
  const dispatch = useDispatch();
  // add a meme to the store
  const addMeme = (data) => {
    dispatch({
      type: "ADD_MEME",
      payload: data
    });
  }
  
  const removeMeme = (id) => {
    dispatch({
      type: "REMOVE_MEME",
      id
    });
  }

  return (
    <div className="App">
      <MemeCreationForm addMeme={addMeme}/>
      <hr />
      <MemesContainer removeMeme={removeMeme} />
    </div>
  );
}

export default App;
