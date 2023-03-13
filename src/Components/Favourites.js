import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Faviourites = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://640da5b31a18a5db837bb563.mockapi.io/random-words")
      .then((res) => {
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://640da5b31a18a5db837bb563.mockapi.io/random-words/${id}`)
      .then(() => {
        getData();
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Faviourites</h2>
        <Link to="/">
          <button className="btn btn-primary">Homescreen</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Word</th>
            <th scope="col">Faviourite</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.word}</td>
                  <td>{eachData.Faviourite}</td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Faviourites;
