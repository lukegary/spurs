import React, { useState, useEffect } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./App.css";

const APIData = () => {
  const [team, setTeam] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let url =
    "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=san_antonio_spurs";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setTeam({ team: response.teams[0] });
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Container className="p-3">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={!isLoading && team.team.strTeamFanart1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{!isLoading && team.team.strTeam}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={!isLoading && team.team.strTeamFanart2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={!isLoading && team.team.strTeamFanart3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={!isLoading && team.team.strTeamFanart4}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>

        <Jumbotron>
          <p>{!isLoading && team.team.strDescriptionEN}</p>
        </Jumbotron>
        <Jumbotron>
          <h1>Where they play: {!isLoading && team.team.strStadium}</h1>
          <p>{!isLoading && team.team.strStadiumDescription}</p>
          <Image
            className="d-block w-100"
            src={!isLoading && team.team.strStadiumThumb}
            alt="stadium"
          />
          <br />
          <h1>The Coach: {!isLoading && team.team.strManager}</h1>
        </Jumbotron>
      </Container>
    </>
  );
};

const App = () => <APIData />;

export default App;
