import { useState, useEffect } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import driverapi from "../../api/driverapi";
import { DriverInfo } from "../../components/Search/style";
import {
  DeleteButton,
  DriverDetailItem,
  DriverNameTitle,
  InfoContainer,
  InfoRow,
  Wrapper,
} from "./style";

function DriverDetail(props) {
  const { driverId } = useParams();
  const [driver, setDriver] = useState(null);
  const [violations, setViolations] = useState([]);

  useEffect(() => {
    driverapi.get(`/drivers/${driverId}`).then((res) => {
      setDriver(res.data);
      console.log(res.data.violationsDto);
    });

    // driverapi.get(`/drivers/${driverId}/violations`).then((res) => {
    //   setViolations(res.data);
    //   console.log(res.data);
    // });
  }, []);

  if (driver === null) {
    return <></>;
  }

  return (
    <Wrapper>
      <Container>
        <h1>Driver</h1>

        <Row>
          <DriverNameTitle>
            {driver.firstName} {driver.lastName}
          </DriverNameTitle>
          <InfoContainer>
            <InfoRow>
              <DriverDetailItem>{driver.city}</DriverDetailItem>
              <DriverDetailItem>{driver.state}</DriverDetailItem>
              <DriverDetailItem>{driver.zip}</DriverDetailItem>
            </InfoRow>
            <InfoRow>
              <DriverDetailItem>{driver.age}</DriverDetailItem>
              <DriverDetailItem>{driver.gender}</DriverDetailItem>
              <DriverDetailItem>{driver.licenseNumber}</DriverDetailItem>
            </InfoRow>
          </InfoContainer>
        </Row>

        <Row>
          <h1>Violations</h1>
          <Table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Description</td>
                <td>Type</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {driver.violationsDto.map((violation, index) => {
                return (
                  <tr>
                    <td>{violation.id}</td>
                    <td>{violation.description}</td>
                    <td>{violation.violationType}</td>
                    <td>
                      <DeleteButton>Delete</DeleteButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default DriverDetail;
