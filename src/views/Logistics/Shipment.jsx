import React from "react";
import axios from "axios";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Button,
  ButtonToolbar,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";
// core components
import LogisticHeader from "components/Headers/LogisticHeader.jsx";

class Shipment extends React.Component {
  constructor() {
    super();
    this.state = {
      shipmentid: "",
      wastetype: "",
      shipmentStatus: "",
      product: "",
      uintCount: "",
      sailingDate: "",
      logisticsid: localStorage.getItem("user_id")
    };
    this.handleshipmentid = this.handleshipmentid.bind(this);
    this.handlewastetype = this.handlewastetype.bind(this);

    this.handleshipmentstatus = this.handleshipmentstatus.bind(this);
    this.handleproductid = this.handleproductid.bind(this);
    this.handleuintcount = this.handleuintcount.bind(this);
    this.handlesailingDate = this.handlesailingDate.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleshipmentid(event) {
    this.setState({
      shipmentid: event.target.value
    });
  }
  handlewastetype(event) {
    this.setState({
      wastetype: event.target.value
    });
  }
  handleshipmentstatus(event) {
    this.setState({
      shipmentStatus: event.target.value
    });
  }
  handleproductid(event) {
    this.setState({
      product: event.target.value
    });
  }
  handleuintcount(event) {
    this.setState({
      uintCount: event.target.value
    });
  }
  handlesailingDate(event) {
    this.setState({
      sailingDate: event.target.value
    });
  }

  handleSubmitForm(event) {
    event.preventDefault();
  }

  handleSubmit() {
    console.log(this.state);
    axios
      .post("http://localhost:3001/api/org.example.mynetwork.Shipment", {
        $class: "org.example.mynetwork.Shipment",
        ShipmentID: this.state.shipmentid,
        wasteType: this.state.wastetype,
        shipmentStatus: this.state.shipmentStatus,
        product: this.state.product,
        uintCount: this.state.uintCount,
        sailingDate: this.state.sailingDate
      })
      .then(res => {
        console.log("Add shipment", res.data);
      });
  }

  render() {
    return (
      <>
        <LogisticHeader />
        <Container className="mt--3" fluid>
          <Col lg="9" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-center text-muted mb-4">
                  <large> Shipment Management</large>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form" onSubmit={e => this.handleSubmitForm(e)}>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Shipment Id</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.shipmentid}
                        onChange={e => this.handleshipmentid(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>WasteType</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="select"
                        value={this.state.wastetype}
                        onChange={e => this.handlewastetype(e)}
                      >
                        <option value="EWASTE">EWaste</option>
                        <option value="DWASTE">DWaste</option>
                        <option value="WWASTE">WWaste</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Shipment Status</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="select"
                        value={this.state.shipmentStatus}
                        onChange={e => this.handleshipmentstatus(e)}
                      >
                        <option value="CREATED">CREATED</option>
                        <option value="IN_TRANSIST">IN_TRANSIST</option>
                         <option value="ARRIVED">ARRIVED</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>product id</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.product}
                        onChange={e => this.handleproductid(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Uint count</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.uintCount}
                        onChange={e => this.handleuintcount(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText> sailingDate</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="date"
                        value={this.state.sailingDate}
                        onChange={e => this.handlesailingDate(e)}
                      />
                    </InputGroup>
                  </FormGroup>
              
                  <div className="text-center">
                    <Button
                      className="mt-4"
                      color="primary"
                      type="button"
                      onClick={this.handleSubmit}
                    >
                      Shipment{" "}
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Container>
        
      </>
    );
  }
}

export default Shipment;
