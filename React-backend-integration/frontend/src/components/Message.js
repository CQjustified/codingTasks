//React and axios module import statements
import React, { useState, useEffect } from "react";
import axios from "axios";

function Message() {

  //useState to store the initial state and to update state with fetched data
  const [defaultMessage, setDefaultMessage] = useState("Loading...");
  const [customMessage, setCustomMessage] = useState("Please wait... your custom message is loading");

  /* fetchData function and useEffect to fetch data by
  sending a GET request to the backend server */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const defaultResponse = await axios.get("/api/data");
        const customResponse = await axios.get("/api/message");
        setDefaultMessage(defaultResponse.data.message);
        setCustomMessage(customResponse.data.message);
      } 
      catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <header className="App-header">
        {/* Displays the original and custom message or 
        initial loading messages if data has not yet fetched */}
        <h1>{ defaultMessage }</h1>
        <h2>{ customMessage }</h2>
      </header>
    </div>
  );
}

export default Message;