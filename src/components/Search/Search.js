import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../style.css";
import {
  DriverInfo,
  DriverName,
  DriverView,
  SearchBar,
  SearchButton,
  SearchRow,
  Wrapper,
} from "./style";
import { Link } from "react-router-dom";
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
          {!loading && driver != null ? (
            <div>
              <DriverName>
                {driver.firstName} {driver.lastName}
              </DriverName>
              <SearchRow>
                <DriverInfo>{driver.city}</DriverInfo>
                <DriverInfo>{driver.state}</DriverInfo>
                <Link to={`/drivers/${driver.id}`}>
                  <DriverView>View</DriverView>
                </Link>
              </SearchRow>
            </div>
          ) : null}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Search;
