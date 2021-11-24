import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";


export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}