import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [episodes, setEpisodes] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const disable = true;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${curPage}`)
      .then((data) => data.json())
      .then((res) => {
        setEpisodes(res.results);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h4>Pagination Page</h4>

      <div className="epi">
        {episodes.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-body">
              <h5>{item.id}</h5>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="paginationbtn">
        <button
          disabled={curPage <= 1 ? disable : !disable}
          className="btn waves-effect waves-light #00c853 green accent-4"
          onClick={() => setCurPage(curPage - 1)}
        >
          Pre
        </button>
        <button
          className="btn waves-effect waves-light #00c853 green accent-4"
          onClick={() => {
            setCurPage(curPage + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
