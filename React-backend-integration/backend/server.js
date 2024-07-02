//Declaring the required modules
const express = require("express");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 5000;

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Define the route to retrieve the original message
app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from the back end!" });
});

// Define the route to retrieve the custom message
app.get("/api/message", (req, res) => {
    res.json({ message: "Nothing is impossible, the word itself says 'I'm possible'!" }); 
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});    