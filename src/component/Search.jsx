import React, { useState, useEffect } from "react";

// import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://fakestoreapi.com/products"
      ).then((response)=>{
        response.json().then((result)=>{
            setPosts(result);
            setLoading(false);
        })
      })
     
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
        
      />
      
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          

          .map((item) => 
         
          <h5 key={item.id}>{item.title}<img src={item.image} width="250px" /></h5>)
         )
      }
      
    </div>
  );
}

export default App;