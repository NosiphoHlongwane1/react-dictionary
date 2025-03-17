import React from 'react';

export default function Example(props) {
  if (props.example) {
    return (
      <p>
        <em>
          {props.example.charAt(0).toUpperCase() + props.example.slice(1)}
        </em>
      </p>
    );
  } else {
    return null;
  }
}