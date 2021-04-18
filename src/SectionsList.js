import "./App.css";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import Section from "./Section";

function SectionsList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://content.guardianapis.com/sections?api-key=3250d0a4-97be-408b-8e38-57f599ae2398"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.response.results);
          setIsLoaded(true);
          setItems(result.response.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {items.map((item) => (
          <Section key={item.id} item={item}></Section>
        ))}
      </div>
    );
  }
}
export default SectionsList;
