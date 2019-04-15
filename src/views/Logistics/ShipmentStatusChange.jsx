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

class ShipmentStatusChange extends React.Component {
  constructor() {
    super();
    this.state = {
      shipmentid: "",
      shipmentStatus: "",
      logisticsid: localStorage.getItem("user_id")
    };
    this.handleshipmentid = this.handleshipmentid.bind(this);

    this.handleshipmentstatus = this.handleshipmentstatus.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleshipmentid(event) {
    this.setState({
      shipmentid: event.target.value
    });
  }
 
  handleshipmentstatus(event) {
    this.setState({
      shipmentStatus: event.target.value
    });
  }
 

  handleSubmitForm(event) {
    event.preventDefault();
  }

  handleSubmit() {
    console.log(this.state);
    axios
      .post("http://localhost:3001/api/org.example.mynetwork.ChangeShipmentStatus", {
        $class: "org.example.mynetwork.ChangeShipmentStatus",
        shipmentStatus: this.state.shipmentStatus,
        shipment: "resource:org.example.mynetwork.Shipment#"+(this.state.shipmentid).toString(),
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
                  <large> Shipment Status update</large>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form" onSubmit={e => this.handleSubmitForm(e)}>
                <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Shipment Id</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.shipmentid}
                        onChange={e => this.handleshipmentid(e)}
                      >
                 
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
        {/* Table to print data */}
        
      </>
    );
  }
}

export default ShipmentStatusChange;
