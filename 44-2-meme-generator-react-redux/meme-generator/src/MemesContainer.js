/** MemesContainer component
 * 
 * Purpose: to hold all the memes
 * 
 * 
 */

import React from "react";
import { useSelector } from "react-redux";
import Meme from "./Meme";
import "./MemesContainer.css";

function MemesContainer({ removeMeme }) {
  const memes = useSelector(store => store.memes);
  return (
    <div className="MemesContainer">
      {memes.map(meme => (
        <Meme 
          key={meme.id}
          topText={meme.topText}
          bottomText={meme.bottomText}
          imgURL={meme.imgURL}
          imgDescription={meme.imgDescription}
          removeMeme={() => removeMeme(meme.id)}
        />
      ))}
    </div>
  );
}

export default MemesContainer;