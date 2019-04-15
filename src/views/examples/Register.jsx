import React from "react";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      name: "",
      city: "",
      contact: 0,
      state: "",
      password: "",
      email: "",
      pincode: 0,
      country: "",
      usertype: "",
      businessid: "",
      status:0
    };

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handlePincode = this.handlePincode.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleuserType = this.handleuserType.bind(this);
    this.handlebusinessid = this.handlebusinessid.bind(this);
  }

  handleSubmitForm(event) {
    event.preventDefault();
  }
  handlebusinessid(event) {
    this.setState({
      businessid: event.target.value
    });
  }
  handleCity(event) {
    this.setState({
      city: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }
  usertype;

  handleuserType(event) {
    this.setState({
      usertype: event.target.value
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleContact(event) {
    this.setState({
      contact: event.target.value
    });
  }

  handlePincode(event) {
    this.setState({
      pincode: event.target.value
    });
  }

  handleState(event) {
    this.setState({
      state: event.target.value
    });
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCountry(event) {
    this.setState({
      country: event.target.value
    });
  }

  handleOptions(e) {
    this.setState({
      country: e.target.value
    });
  }

  handleSubmit() {
    const type = this.state.usertype;

    if (type == "Logistics") {
      console.log(type);
      this.ApiLogistic();
    } else if (type == "Company") {
      console.log(type);
      this.ApiCompany();
    } else if (type == "RetailStore") {
      console.log(type);
      this.ApiRetailStore();
    }
  }



  ApiRetailStore() {
    axios
      .post("http://localhost:3001/api/org.example.mynetwork.RetailStore", {
        $class: "org.example.mynetwork.RetailStore",
        product: [],
        businessID: this.state.businessid,
        businessName: this.state.name,
        businessEmail: this.state.email,
        businessPasswd: this.state.password,
        businessPhone: this.state.contact,
        address: {
          $class: "org.example.mynetwork.Address",
          state: this.state.state,
          city: this.state.city,
          country: this.state.country,
          pincode: this.state.pincode
        }
      })
      .then(res => {
        console.log(res.data);
        window.location.href = "http://localhost:3002/auth/login";


      });
  }

  ApiCompany() {
    axios
      .post("http://localhost:3001/api/org.example.mynetwork.Company", {
        $class: "org.example.mynetwork.Company",
        wareHouse: [],
        businessID: this.state.businessid,

        businessName: this.state.name,
        businessEmail: this.state.email,
        businessPasswd: this.state.password,
        businessPhone: this.state.contact,
        address: {
          $class: "org.example.mynetwork.Address",
          state: this.state.state,
          city: this.state.city,
          country: this.state.country,
          pincode: this.state.pincode
        }
      })
      .then(res => {
        console.log(res.status);
        this.setState({
          status:res.status
        })
      //  this.alert()
      if (res.status == 200){
         
      window.location.href = "http://localhost:3002/auth/login";

      }
      });
  
  }
  ApiLogistic() {
    axios
      .post("http://localhost:3001/api/org.example.mynetwork.Logistics", {
        $class: "org.example.mynetwork.Logistics",
        trucker: [],
        truck: [],
        businessID: this.state.businessid,

        businessName: this.state.name,
        businessEmail: this.state.email,
        businessPasswd: this.state.password,
        businessPhone: this.state.contact,
        address: {
          $class: "org.example.mynetwork.Address",
          state: this.state.state,
          city: this.state.city,
          country: this.state.country,
          pincode: this.state.pincode
        }
      })
      .then(res => {
        console.log(res.data);
        window.location.href = "http://localhost:3002/auth/login";

      });
  }


  render() {

    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-center text-muted mb-4">
                <h1> Sign up </h1>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={e => this.handleSubmitForm(e)}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Enter Id</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=""
                      type="text"
                      value={this.state.businessid}
                      onChange={e => this.handlebusinessid(e)}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Name"
                      type="text"
                      value={this.state.name}
                      onChange={e => this.handleName(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Email </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      value={this.state.email}
                      onChange={e => this.handleEmail(e)}
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
                      value={this.state.password}
                      onChange={e => this.handlePassword(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText />
                    </InputGroupAddon>
                    {/* Select field */}

                    <Input
                      type="select"
                      placeholder="Select User"
                      value={this.state.usertype}
                      onChange={e => this.handleuserType(e)}
                    >
                      <option value="RetailStore">RetailStore</option>
                      <option value="Company">Company</option>
                      <option value="Logistics">Logistics</option>
                    </Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Contact </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Contact Details"
                      type="text"
                      value={this.state.contact}
                      onChange={e => this.handleContact(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
City                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=""
                      type="text"
                      value={this.state.city}
                      onChange={e => this.handleCity(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
Pincode                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=""
                      type="number"
                      value={this.state.pincode}
                      onChange={e => this.handlePincode(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>State </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=""
                      type="text"
                      value={this.state.state}
                      onChange={e => this.handleState(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Country </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=""
                      type="text"
                      value={this.state.country}
                      onChange={e => this.handleCountry(e)}
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
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
