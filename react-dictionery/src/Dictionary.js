import React, { useState } from 'react';
import './Dictionary.css';
import Results from './Results';
import axios from 'axios';
import Photos from './Photos';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [message, setMessage] = useState('');

  function handleResponse(response) {
    if (
      response.data &&
      Array.isArray(response.data.meanings) &&
      response.data.meanings.length > 0
    ) {
      setResults(response.data);
      setMessage('');

  
      getImages();
    } else {
      setResults(null);
      setPhotos(null); 
      setMessage('Word not found, please enter a different word.');
    }
  }


  function getImages() {
    let imageApiKey = 'ce7c3ee7eo0a7079t0e5079cd0efcb43';
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;

    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

 
  function handleSearch(event) {
    event.preventDefault();

 
    if (!keyword.trim()) {
      setMessage('Please enter a word to search.');
      setResults(null);
      setPhotos(null);
      return;
    }

    let apiKey = 'ce7c3ee7eo0a7079t0e5079cd0efcb43';
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <section className="dictionary-form">
        <h1 className="title">English Dictionary</h1>
        <div className="full-search-input">
          <form onSubmit={handleSearch}>
            <span className="search-input">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                placeholder="Search a word.."
                onChange={handleKeywordChange}
              />
            </span>
          </form>
        </div>
        <p className="suggestions">
          Suggested words: Ambiance, Luck, Concur, Flourish...
        </p>
      </section>

      {message ? (
        <p className="error-message">{message}</p>
      ) : (
        <Results results={results} />
      )}

      <Photos photos={photos} />
    </div>
  );
}