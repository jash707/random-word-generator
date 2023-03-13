import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import axios from "axios";

const Homescreen = () => {
  const [previousWord, setPreviousWord] = useState("demo");
  const [currentWord, setCurrentWord] = useState("");
  const [faviourite, setFavourite] = useState("");

  function handleNext() {
    axios
      .post("https://640da5b31a18a5db837bb563.mockapi.io/random-words", {
        currentWord: currentWord,
        faviourite: faviourite,
      })
      .then(() => {
        localStorage.setItem("previousWord", currentWord);
      });
  }

  useEffect(() => {
    setPreviousWord(localStorage.getItem("previousWord"));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Homescreen</h2>
        <Link to="/fav">
          <button className="btn btn-primary">Faviourites</button>
        </Link>
      </div>

      <form>
        <div className="form-group">
          <label className="form-label">Previous Word</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-label">Current Word</label>
          <input
            type="text"
            className="form-control"
            value={faker.name.firstName()}
            onChange={(e) => setCurrentWord(e.target.value)}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={(e) => setFavourite(e.target.checked)}
          />
          <label className="form-check-label">Mark as Faviourite</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={() => handleNext}
        >
          Next
        </button>
      </form>
    </>
  );
};

export default Homescreen;
