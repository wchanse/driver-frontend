import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Table,
  Card,
  Button,
  Modal,
  Form,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import driverapi from '../../api/driverapi';
import { DriverInfo } from '../../components/Search/style';
import './DriverDetail.css';
import {
  AddButton,
  DeleteButton,
  DriverDetailItem,
  DriverNameTitle,
  InfoContainer,
  InfoRow,
  Wrapper,
} from './style';

function DriverDetail(props) {
  const { driverId } = useParams();
  const [driver, setDriver] = useState(null);
  const [violations, setViolations] = useState([]);

  const [addFormData, setAddFormData] = useState({
    description: '',
    violationType: '',
  });

  const [value, setValue] = useState(0); // integer state for forceUpdate

  const history = useHistory();

  useEffect(() => {
    driverapi.get(`/drivers/${driverId}`).then((res) => {
      setDriver(res.data);
      setViolations(res.data.violationsDto);
      console.log(res.data.violationsDto);
    });
  }, []);

  // for add driver modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (driver === null) {
    return <></>;
  }

  // handles deletion in edit row
  const handleDelete = (id) => {
    const deleteFromDB = async () => {
      await driverapi.delete(`/violations/${id}`);
    };
    deleteFromDB();
    const newViolations = violations.filter((violation) => violation.id !== id);
    setViolations(newViolations);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    // make copy of old data to avoid mutating the state
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = async () => {
    await driverapi.post(`/drivers/${driverId}/violations`, addFormData);
    setShow(false);
    setValue((value) => value + 1);
  };

  return (
    <Wrapper>
      <Button onClick={() => history.goBack()}>Back</Button>
      <Container className="mt-5">
        <h1>Driver</h1>
        <Row>
          <Card border="light" style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>
                <DriverNameTitle>
                  {driver.firstName} {driver.lastName}
                </DriverNameTitle>
              </Card.Title>
              <Card.Text>
                <InfoContainer>
                  <InfoRow>
                    <DriverDetailItem>
                      {driver.city}
                      {', '}
                      {driver.state} {driver.zip}
                    </DriverDetailItem>
                    {/* <DriverDetailItem>{driver.state}</DriverDetailItem>
                    <DriverDetailItem>{driver.zip}</DriverDetailItem> */}
                  </InfoRow>
                  <InfoRow>
                    <DriverDetailItem>{driver.age}</DriverDetailItem>
                    <DriverDetailItem>{driver.gender}</DriverDetailItem>
                    <DriverDetailItem>{driver.licenseNumber}</DriverDetailItem>
                  </InfoRow>
                </InfoContainer>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>

        <Row>
          <h1>Violations</h1>
          <AddButton onClick={handleShow}>Add</AddButton>
          <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
            <Modal.Header>
              <Modal.Title>Add Violation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleAddFormSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <input
                    type="text"
                    name="description"
                    required="required"
                    placeholder="Enter description"
                    className="form-control"
                    onChange={handleAddFormChange}
                  />
                  <Form.Label>Type</Form.Label>
                  <input
                    type="text"
                    name="violationType"
                    required="required"
                    placeholder="Enter type"
                    className="form-control"
                    onChange={handleAddFormChange}
                  />
                </Form.Group>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddFormSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <Table striped bordered hover size="sm" className="mt-5">
            <thead>
              <tr>
                <td>ID</td>
                <td>Description</td>
                <td>Type</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {violations.map((violation, index) => {
                return (
                  <tr>
                    <td>{violation.id}</td>
                    <td>{violation.description}</td>
                    <td>{violation.violationType}</td>
                    <td>
                      <DeleteButton onClick={() => handleDelete(violation.id)}>
                        Delete
                      </DeleteButton>
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
