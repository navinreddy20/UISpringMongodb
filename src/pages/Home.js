import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Typography variant="h3" align="center">
        Some tagline blah blah!
      </Typography>
      <div>
        <ul>
          <li>
            <Link to="/">
             Home
            </Link>
          </li>
          <li>
            <Link to="/employer/dashboard">
              Hire talent
            </Link>
          </li>
          <li>
            <Link to="/employee/feed">
              Get Job Now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
