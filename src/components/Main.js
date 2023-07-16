import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Main = ({ searchResults }) => {
  console.log('searchResults:', searchResults);

  if (!searchResults) {
    return (
      <div className="text-warning text-center">
        <h1 className="fw-bold italic">Made by: Roberto Borges</h1>
      </div>
    );
  }

  if (!Array.isArray(searchResults)) {
    return <div>Invalid search results.</div>;
  }

  return (
    
    <div className="container">
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body bg-primary">
          <h5 className="card-title text-warning fw-bold">Made by: Roberto Borges</h5>
          <p className="card-text text-warning italic">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <br />
      <br />
      {searchResults.map((result) => (
        <div key={result.defid}>
          <h1 className='text-warning fw-bold my-bouncing-animation'>{result.word}</h1>
          <p className="text-warning fw-bold">Definition: {result.definition}</p>
          <p className="text-warning italic">Example: {result.example}</p>
          <p className='text-white'>👍 {result.thumbs_up}</p>
          <p className='text-white'>👎 {result.thumbs_down}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
