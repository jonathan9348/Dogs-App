import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchDog } from "../redux/actions";
import './style/SearchBar.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.lenght === 0) alert("You must enter a name to perform the search");
    else {
      dispatch(searchDog(name));
      setName("");
    }
  };

  return (
    <div>
      <div className="container">
        <input
          value={name}
          onChange={(e) => handleChange(e)}
          placeholder="search"
          type="search"
          className="sbinput"
        />
        <button
          className="sbbtn"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Look for your puppy
        </button>
      </div>
    </div>
  );
}
