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

class LogisticAddTrucker extends React.Component {
  constructor() {
    super();
    this.state = {
      personID: "",
      personName: "",
      personEmail: "",
      personPasswd: "",
      personPhone: 0,
      state: "",
      city: "",
      country: "",
      pincode: 0,
      logisticsid: localStorage.getItem("user_id")
   
    };
    this.handleaddtrucker = this.handleaddtrucker.bind(this);
    this.handlelogisticsid = this.handlelogisticsid.bind(this);

    this.handlepersonID = this.handlepersonID.bind(this);
    this.handlepersonName = this.handlepersonName.bind(this);
    this.handlepersonEmail = this.handlepersonEmail.bind(this);
    this.handlepersonPasswd = this.handlepersonPasswd.bind(this);
    this.handlepersonPhone = this.handlepersonPhone.bind(this);
    this.handlepersonState = this.handlepersonState.bind(this);
    this.handlepersonCity = this.handlepersonCity.bind(this);
    this.handlepersoncountry = this.handlepersoncountry.bind(this);
    this.handlepincode = this.handlepincode.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlelogisticsid(event) {
    this.setState({
      logisticsid: event.target.value
    });
  }
 
  handlepersonID(event) {
    this.setState({
      personID: event.target.value
    });
  }
  handlepersonName(event) {
    this.setState({
      personName: event.target.value
    });
  }
  handlepersonEmail(event) {
    this.setState({
      personEmail: event.target.value
    });
  }
  handlepersonPasswd(event) {
    this.setState({
      personPasswd: event.target.value
    });
  }
  handlepersonPhone(event) {
    this.setState({
      personPhone: event.target.value
    });
  }
  handlepersonState(event) {
    this.setState({
      state: event.target.value
    });
  }
  handlepersonCity(event) {
    this.setState({
      city: event.target.value
    });
  }
  handlepersoncountry(event) {
    this.setState({
      country: event.target.value
    });
  }
  handlepincode(event) {
    this.setState({
      pincode: event.target.value
    });
  }
  handleSubmitForm(event) {
    event.preventDefault();
  }
  
  handleSubmit() {
    console.log(this.state);
    axios
      .post("http://localhost:3001/api/org.example.mynetwork.Trucker", {
        $class: "org.example.mynetwork.Trucker",
        personID: this.state.personID,
        personName: this.state.personName,
        personEmail: this.state.personEmail,
        personPasswd: this.state.personPasswd,
        personPhone: this.state.personPhone,
        address: {
          $class: "org.example.mynetwork.Address",
          state: this.state.state,
          city: this.state.city,
          country: this.state.country,
          pincode: this.state.pincode
        }
      })
      .then(res => {
        console.log("Add Truck", res.data);
        this.handleaddtrucker();
      });
  }

  handleaddtrucker() {
    axios
      .post("http://localhost:3001/api/org.example.mynetwork.AddTrucker", {
        $class: "org.example.mynetwork.AddTrucker",
        trucker: this.state.personID,
        logistics: this.state.logisticsid
      })
      .then(res => {
        console.log("Addtrucker", res.data);
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
                  <h1> Add trucker</h1>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form" onSubmit={e => this.handleSubmitForm(e)}>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Trucker Id</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.personID}
                        onChange={e => this.handlepersonID(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Trucker Name</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.personName}
                        onChange={e => this.handlepersonName(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Trucker Email</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.personEmail}
                        onChange={e => this.handlepersonEmail(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Logistic id</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.logisticsid}
                        onChange={e => this.handlelogisticsid(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Password</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="password"
                        value={this.state.personPasswd}
                        onChange={e => this.handlepersonPasswd(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText> Contact</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.personPhone}
                        onChange={e => this.handlepersonPhone(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText> City</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.city}
                        onChange={e => this.handlepersonCity(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText> State</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.state}
                        onChange={e => this.handlepersonState(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText> Country</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.country}
                        onChange={e => this.handlepersoncountry(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText> pincode</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.pincode}
                        onChange={e => this.handlepincode(e)}
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
                      Add Trucker{" "}
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

export default LogisticAddTrucker;
