import React from 'react';
import Synonyms from './Synonyms';
import Example from './Example';
import './Meaning.css';

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      <div>
        
        <h4 className="definition">
          {props.meaning.definition.charAt(0).toUpperCase() +
            props.meaning.definition.slice(1)}
        </h4>

        <div className="example">
          <Example example={props.meaning.example} />
        </div>
        <div className="synonyms">
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    </div>
  );
}