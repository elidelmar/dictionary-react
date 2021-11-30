import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
   let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
   function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey =
      "563492ad6f91700001000001a0c3a6465dbf43f99ed2ab08523490ba";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    let headers = {"Authorization" : `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

   function load() {
    setLoaded(true);
    search();
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input className="search-box" type="search" onChange={handleKeywordChange} />
      <button className="search-button">Search for Word</button>{' '}
      </form>
        <Results results={results} />
        <span><Photos photos={photos} /></span>
    </div>
  );
}
