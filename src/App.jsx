import React, { useEffect, useState } from "react";
import Header from './components/Header.jsx';
import Search from "./components/Search.jsx";
import Main from "./components/Main.jsx";
import Axios from "axios";

export default function App(){
  const [users, setUsers] = useState("");
  const [data, setData] = useState({});
  const [inputData, setInputData] = useState(null);

  const getUser = () => {
    if (users.trim() !== "") {  // Ensure user input is not empty
      Axios.get(`https://api.github.com/users/${users}`)
        .then((res) => {
          console.log("User found:", res.data);
          setData(res.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            console.error("User not found:", error);
            setData({}); // Clear data if the user is not found
          } else {
            console.error("An error occurred:", error);
          }
        });
    } else {
      console.error("Please enter a GitHub username.");
    }
  };

  const handleChange = (event) => {
    setUsers(event.target.value);
  };

  useEffect(() => {
    getUser();
  }, []);

  return(
    <div className="App">
      <Header />
      <Search 
        users={users}
        getUser={getUser}
        handleChange={handleChange} 
      />
      <Main data={data}/>
    </div>
  );
}
