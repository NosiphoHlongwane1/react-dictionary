
import React from 'react';
import Meaning from './Meaning';
import './Results.css';

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="results-word">
          <h2>{props.results.word}</h2>
          <h5>{props.results.phonetic}</h5>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index} className="results-meaning">
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
