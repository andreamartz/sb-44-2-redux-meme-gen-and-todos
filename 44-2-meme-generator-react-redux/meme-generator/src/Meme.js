import React from "react";
import {
  Button
} from "reactstrap";
import PropTypes from "prop-types";
import "./Meme.css";

/** Meme component
 * Purpose: create the meme from data in the store
 * 
 * props:
 * 
 * hooks:
 * - useSelector to get the meme data from the store
 */

function Meme( { id, topText, bottomText, imgURL, imgDescription, removeMeme }) {
  const handleRemoveMeme = () => {
    removeMeme(id);
  }

  return (
    <div className="Meme">
      <figure className="Meme-imgContainer">
        <img className="Meme-img" src={imgURL} alt={imgDescription}></img>
        <span className="Meme-topText">{topText}</span>
        <span className="Meme-bottomText">{bottomText}</span>
        <Button className="Meme-deleteBtn" onClick={handleRemoveMeme}>
          DELETE
        </Button>
      </figure>
    </div>
  );
}

Meme.propTypes = {
  topText: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgDescription: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};

export default Meme;