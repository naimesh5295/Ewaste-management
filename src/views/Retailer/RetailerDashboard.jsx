import React from "react";
import axios from "axios";
// import { Flex, Box } from '@rebass/grid';
import { Modal, Alert } from "react-bootstrap/Modal";
import PropTypes from "prop-types";
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Container,
  Button,
  ButtonToolbar,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
// core components
import RetailerHeader from "components/Headers/RetailerHeader.jsx";

class RetailerDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      modalShow: false
    };
  }
  toggleModal(e) {
    console.log("Model Clicked");
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <>
        <RetailerHeader />
        {/* Page content */}

        <Container className="mt--3" fluid>
          {/* Table */}
          <Card>
            <CardHeader>New Product</CardHeader>
            <CardBody>
              <ButtonToolbar>
                <Button
                  variant="outline-primary"
                  size="lg"
                  onClick={() => this.setState({ modalShow: true })}
                >
                  Add Products
                </Button>
                <VerticleModal
                  show={this.state.modalShow}
                  onHide={modalClose}
                />
              </ButtonToolbar>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Products</CardHeader>
            <CardBody>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Retailer id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Quantity</th>
                    <th scope="col">Product Operations</th>

                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>230320</td>
                    <td>Naimesh patel</td>

                    <td className="text-right">
                      <ButtonToolbar>
                        <Button
                          variant="outline-danger"
                          size="lg"
                          placeholder="Delete"
                        />
                      </ButtonToolbar>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Container>
      </>
    );
  }
}

class VerticleModal extends React.Component {
  constructor() {
    super();
    this.state = {
      productId: 1001,
      productName: "",
      productQuantity: 0,
      productPrice: 0,
      isCompleted: "",
      shipmentStatus: "",
      customer: "",
      logistics: "",
      trucker: "",
      retailStore: "",
      company: "",
      wasteTreatment: "",
      estimatedRewardPrice: 0,
      clearanceDateTime: "",
      arrivalDate: "",
      wasteType: ""
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleid = this.handleid.bind(this);
    this.handleprice = this.handleprice.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handlecustomer = this.handlecustomer.bind(this);
    this.handlelogistics = this.handlelogistics.bind(this);
    this.handletrucker = this.handletrucker.bind(this);
    this.handleretailStore = this.handleretailStore.bind(this);
    this.handlecompany = this.handlecompany.bind(this);
    this.handlewasteTreatment = this.handlewasteTreatment.bind(this);
    this.handleestimatedRewardPrice = this.handleestimatedRewardPrice.bind(this);
    this.handleclearanceDateTime = this.handleclearanceDateTime.bind(this);
    this.handlearrivalDate = this.handlearrivalDate.bind(this);
    this.handlewasteType = this.handlewasteType.bind(this);
    this.handleshipmentStatus = this.handleshipmentStatus.bind(this);
  }

  handleName(e) {
    this.setState({
      productName: e.target.value
    });
    console.log(this.state.productName);
  }
  handleprice(e) {
    this.setState({
      productPrice: e.target.value
    });
  }
  handleid(e) {
    this.setState({
      productId: e.target.value
    });
  }

  handleCompleted(e) {
    this.setState({
      isCompleted: e.target.value
    });
  }

  handleshipmentStatus(e) {
    this.setState({
      shipmentStatus: e.target.value
    });
  }
  handlecustomer(e) {
    this.setState({
      customer: e.target.value
    });
  }

  handlelogistics(e) {
    this.setState({
      logistics: e.target.value
    });
  }

  handletrucker(e) {
    this.setState({
      trucker: e.target.value
    });
  }
  handleretailStore(e) {
    this.setState({
      retailStore: e.target.value
    });
  }

  handlecompany(e) {
    this.setState({
      company: e.target.value
    });
  }

  handlewasteTreatment(e) {
    this.setState({
      wasteTreatment: e.target.value
    });
  }

  handleestimatedRewardPrice(e) {
    this.setState({
      estimatedRewardPrice: e.target.value
    });
  }
  handleclearanceDateTime(e) {
    this.setState({
      clearanceDateTime: e.target.value
    });
  }

  handlearrivalDate(e) {
    this.setState({
      arrivalDate: e.target.value
    });
  }

  handlewasteType(e) {
    this.setState({
      wasteType: e.target.value
    });
  }
  handleshipmentStatus(e) {
    this.setState({
      shipmentStatus: e.target.value
    });
  }

  submitForm(e) {
    console.log(this.state);
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  // }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Product{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Add Product</h4>
          <Form role="form" >
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Product Id:</InputGroupText>
                </InputGroupAddon>

                <Input
                  placeholder="Product ID"
                  type="text"
                  value={this.state.productId}
                  onChange={e => this.handleid(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Product Name:</InputGroupText>
                </InputGroupAddon>

                <Input
                  placeholder="Product Name"
                  type="text"
                  value={this.state.productName}
                  onChange={e => this.handleName(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Product Estimated Price:</InputGroupText>
                </InputGroupAddon>

                <Input
                  placeholder="Product Estimated Price"
                  type="number"
                  value={this.state.productPrice}
                  onChange={e => this.handleprice(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>completed:</InputGroupText>
                </InputGroupAddon>

                <Input
                  placeholder=""
                  type="select"
                  value={this.state.isCompleted}
                  onChange={e => this.handleCompleted(e)}
                >
                  <option value="false">Not Completed</option>
                  <option value="true">Completed</option>
                </Input>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Shipment Status:</InputGroupText>
                </InputGroupAddon>

                <Input
                  placeholder="Shipment Status"
                  type="select"
                  value={this.state.shipmentStatus}
                  onChange={e => this.handleshipmentStatus(e)}
                >
                  <option value="CREATED">CREATED</option>
                  <option value="IN_TRANSIST">IN_TRANSIST</option>
                  <option value="ARRIVED">ARRIVED</option>
                </Input>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Customer Id:</InputGroupText>
                </InputGroupAddon>

                <Input
                  placeholder=""
                  type="text"
                  value={this.state.customer}
                  onChange={e => this.handlecustomer(e)}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Trucker:</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder=""
                  value={this.state.trucker}
                  onClick={e => this.handletrucker(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>RetailStore Id:</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder=""
                  value={this.state.retailStore}
                  onClick={e => this.handleretailStore(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Company Id:</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder=""
                  value={this.state.company}
                  onClick={e => this.handlecompany(e)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>waste treatment:</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="select"
                  placeholder="Select type"
                  value={this.state.wasteType}
                  onClick={e => this.handlewasteTreatment(e)}
                >
                  <option value="EWATSE">EWATSE</option>
                  <option value="DWASTE">DWASTE</option>
                  <option value="WWASTE">WWASTE</option>
                </Input>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText />
                </InputGroupAddon>
                <Input
                  type="Submit"
                  placeholder="Submit"
                  onClick={e => this.submitForm(e)}
                />
              </InputGroup>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default RetailerDashboard;
