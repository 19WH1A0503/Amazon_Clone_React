import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import './Search_bar.css';

function SearchBar() {
  const [search, setSearch] = useState('');
  const navigate  = useNavigate(); 

  
  const handleSearch = () => {
    
    navigate(`/SearchResults/${search}`);
  };

  return (
    <div className="searchBarSection">
      <div className="searchBar">
        <input
          className="input"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <SearchIcon className="searchIcon" onClick={handleSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
