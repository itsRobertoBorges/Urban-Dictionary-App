import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Main from './Main';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
      params: { term: searchTerm },
      headers: {
        'X-RapidAPI-Key': 'cdf3d91edfmsh0cf7c8cf234009cp1458dfjsn632413f374b4',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data.list;
      setSearchResults(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <nav className="navbar bg-warning bg-gradient shadow-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-primary fw-bold fw-italic">Urban Dictionary API Application</a>
          <form className="d-flex" onSubmit={handleSearch} role="search">
            <input
              className="form-control me-2 shadow"
              type="search"
              style={{ width: '270px' }}
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button className="btn btn-outline-success bg-primary text-white shadow" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {searchResults && <Main searchResults={searchResults} />}
    </div>
  );
};

export default Navbar;
