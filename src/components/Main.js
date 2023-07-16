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
