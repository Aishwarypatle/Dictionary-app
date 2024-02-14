import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../Redux/slice";
import { RootState } from "@reduxjs/toolkit/query";
import axios from "axios";

const SearchBox = () => {
  const { meaning } = useSelector((state: RootState) => state.meaning);
  
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch();
  let response: any;

  const handleSubmit = async () => {
    if (searchTerm) {
      try {
        response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
        );
        dispatch(updateData(response.data[0].meanings));
      } catch {
        alert("Error");
      }
      console.log("submit -", response);
    }
  };

  return (
    <div className="flex justify-center items-center p-2">
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        placeholder="Enter keyword here"
        type="search"
        className="bg-dark px-6 py-4 mx-6 w-full rounded-3xl border-0"
      ></input>
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBox;