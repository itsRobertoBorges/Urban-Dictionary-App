import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import landingImage from '../assets/landing_transparent.png';

const Main = ({ searchResults }) => {
  console.log('searchResults:', searchResults);

  if (!searchResults) {
    return (
      <div className="text-warning text-center">
        <div className="d-flex justify-content-center mt-5">
          <div className="card mt-5" style={{ width: '50vh', animation: 'myBouncingAnimationCard 2s', outline: 'none' }}>
            <img className="card-img-top shadow-lg" src={landingImage} alt="image" style={{ backgroundColor: "#0275d8" }} />
            <div className="card-body shadow-lg" style={{ backgroundColor: "#0275d8" }}>
              <h5 className="card-title text-warning fw-bold">Made by: Roberto Borges</h5>
              <p className="card-text text-warning italic">
                If you're unsure what to do right now, type in any word in the search bar and you will receive definitions from the Urban Dictionary API! Otherwise, view my portfolio.
              </p>
              <a href="http://robertoborges.ca" className="btn btn-primary bg-warning text-primary fw-bold">
                View my website
              </a>
            </div>
          </div>
        </div>
      </div>

    );
  }

  if (!Array.isArray(searchResults)) {
    return <div>Invalid search results.</div>;
  }

  if (searchResults.length === 0) {
    return null; // Return null to hide the container when searchResults is empty
  }

  return (
    <div className="container shadow-lg mt-5">
      <br />
      <br />
      {searchResults.map((result) => (
        <div key={result.defid}>
          <h1 className="text-warning fw-bold my-bouncing-animation gradient-text">{result.word}</h1>
          <p className="text-warning fw-bold">Definition: {result.definition}</p>
          <p className="text-warning italic">Author: {result.author}</p>
          <p className="text-warning italic">Example: {result.example}</p>
          <p className="text-white">👍 {result.thumbs_up}</p>
          <p className="text-white">👎 {result.thumbs_down}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
