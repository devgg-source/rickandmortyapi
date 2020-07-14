import React, { useState, useEffect } from "react";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/?name=${query}`)
      .then((res) => res.json())
      .then((data) => setEpisodes(data.results))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h4>EpisodeList</h4>
      <div id="searchBarWrap">
        <input
          value={query}
          id="searchBar"
          type="text"
          name="searchbar"
          placeholder="Search here..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <div id="searchBtn">
          <i className="fa fa-search"></i>
        </div>
      </div>

      <div className="epi">
        {episodes ? (
          episodes.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>{item.air_date}</p>
                <p>{item.episode}</p>
              </div>
            </div>
          ))
        ) : (
          <h4>No item Foud!</h4>
        )}
      </div>
    </div>
  );
}

export default Episodes;
