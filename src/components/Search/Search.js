import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../style.css";
import { DriverName, SearchBar, SearchButton, Wrapper } from "./style";
import axios from "axios";
import driverapi from "../../api/driverapi";

const Search = () => {
  const [searchId, setSearchId] = useState("");
  const [driver, setDriver] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSearch = () => {
    console.log(searchId);
    setLoading(true);
    driverapi.get(`/drivers/${searchId}`).then((res) => {
      setDriver(res.data);
      setLoading(false);
      console.log(driver);
    });
  };
  const search = (event) => {
    setSearchId(event.target.value);
  };
  return (
    <Wrapper>
      <Container fluid>
        <Row>
          <h1 className="heading">Search</h1>
        </Row>
        <Row>
          <SearchBar onChange={search} placeholder="Driver ID" />
          <SearchButton onClick={onSearch}>Search</SearchButton>
        </Row>

        <Row>
          {!loading ? (
            <DriverName>
              {driver.firstName} {driver.lastName}
            </DriverName>
          ) : null}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Search;
