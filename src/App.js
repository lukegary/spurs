import React, { useState, useEffect } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";

import "./App.css";

const APIData = ({ children }) => {
  const [show, toggleShow] = useState(true);
  const [team, setTeam] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let url =
    "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=san_antonio_spurs";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setTeam({ team: response.teams[0].strTeam });
        setIsLoading(false);
      });
  }, []);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">{team.team}</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header"></h1>
      <APIData>
        We now have Spurs
        <span role="img" aria-label="tada">
          🎉
        </span>
      </APIData>
    </Jumbotron>
  </Container>
);

export default App;
