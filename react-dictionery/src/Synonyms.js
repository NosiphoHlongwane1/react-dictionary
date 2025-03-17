import React from 'react';
import "./Synonyms.css"

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <p className="synonyms">
        <span>
          <strong>Synonym: </strong>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </span>
      </p>
    );
  } else {
    return null;
  }
}