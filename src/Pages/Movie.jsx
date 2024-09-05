import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/UI/Card";

const Movie = () => {
  const [data, setData] = useState([]);
  const API = `https://www.omdbapi.com/?i=tt3896198&apikey=4f8be632&s=titanic&page=1`;

  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.Search);
      console.log(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul className="container grid grid-four--cols">
      {data.map((currElem) => {
        return <Card key={currElem.imdbID} movieData={currElem} />;
      })}
    </ul>
  );
};

export default Movie;
