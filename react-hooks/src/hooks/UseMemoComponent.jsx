import axios from "axios";
import { useEffect, useState, useMemo } from "react";

const UseMemoComponent = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
  
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          setData(response.data);
        });
    }, []);
  
    const findLongestName = (comments) => {
      if (!comments) return null;
  
      let longestName = "";
      for (let i = 0; i < comments.length; i++) {
        let currentName = comments[i].name;
        if (currentName.length > longestName.length) {
          longestName = currentName;
        }
      }
  
      console.log("THIS WAS COMPUTED");
  
      return longestName;
    };
  
    // save result in state from findLongestName function
    const getLongestName = useMemo(() => findLongestName(data), [ data]);
  
    return (
      <div className="App">
        <div> {getLongestName} </div>
  
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {" "}
          Toggle
        </button>
        {toggle && <h1> toggle </h1>}
      </div>
    );
}

export default UseMemoComponent