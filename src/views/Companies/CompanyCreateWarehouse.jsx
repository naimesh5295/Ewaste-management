import React from "react";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardHeader,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Alert
} from "reactstrap";
// core components
import Header from "components/Headers/CompanyHeader.jsx";

class CompanyCreateWarehouse extends React.Component {
  constructor() {
    super();
    this.state = {
      wareHouseID: "",
      wareHouseName: "",
      city: "",
      wareHousePhone: 0,
      state: "",
      wareHouseEmail: "",
      pincode: 0,
      country: "",
      products: [],
      company_id:localStorage.getItem("user_id")
    };
    this.handlewareHouseID = this.handlewareHouseID.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handlewareHouseEmail = this.handlewareHouseEmail.bind(this);
    this.handlewareHousePhone = this.handlewareHousePhone.bind(this);
    this.handlePincode = this.handlePincode.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handlewareHouseName = this.handlewareHouseName.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlewareHouseID(event) {
    this.setState({
      wareHouseID: event.target.value
    });
  }
  handlewareHouseName(event) {
    this.setState({
      wareHouseName: event.target.value
    });
  }
  handlewareHouseEmail(event) {
    this.setState({
      wareHouseEmail: event.target.value
    });
  }
  handlewareHousePhone(event) {
    this.setState({
      wareHousePhone: event.target.value
    });
  }
  handleCity(event) {
    this.setState({
      city: event.target.value
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
  handleCountry(event) {
    this.setState({
      country: event.target.value
    });
  }
  handleSubmitForm(event) {
    event.preventDefault();
  }
  handleSubmit() {
    console.log(this.state);
    axios
      .post("http://localhost:3001/api/org.example.mynetwork.WareHouse", {
        $class: "org.example.mynetwork.WareHouse",
        wareHouseID: this.state.wareHouseID,
        wareHouseName: this.state.wareHouseName,
        wareHousePhone: this.state.wareHousePhone,
        wareHouseEmail: this.state.wareHouseEmail,
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
        axios
        .post("http://localhost:3001/api/org.example.mynetwork.AddWareHouse", {
          $class: "org.example.mynetwork.AddWareHouse",
          wareHouse: "resource:org.example.mynetwork.WareHouse#"+this.state.wareHouseID,
          company: "resource:org.example.mynetwork.Company#"+this.state.company_id
        })
        .then(res => {
          console.log(res.data);
        });
      });
      // resource:org.example.mynetwork.WareHouse#5783
    
    // axios
    //   .post("http://localhost:3001/api/org.example.mynetwork.AddWareHouse", {
    //     $class: "org.example.mynetwork.AddWareHouse",
    //     wareHouse: "resource:org.example.mynetwork.WareHouse#"+this.state.wareHouseID,
    //     company: "resource:org.example.mynetwork.Company#"+this.state.company_id
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //   });
  }
  render() {
    return (
      <>
        <Header />
        <Col lg="9" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-center text-muted mb-4">
                <h1> Add Warehouse</h1>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={e => this.handleSubmitForm(e)}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>wareHouseID</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=""
                      type="text"
                      value={this.state.wareHouseID}
                      onChange={e => this.handlewareHouseID(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>wareHouseName</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=""
                      type="text"
                      value={this.state.wareHouseName}
                      onChange={e => this.handlewareHouseName(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>wareHousePhone</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder=""
                      type="number"
                      value={this.state.wareHousePhone}
                      onChange={e => this.handlewareHousePhone(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>wareHouseEmail</InputGroupText>
                    </InputGroupAddon>
                    {/* Select field */}

                    <Input
                      type="text"
                      placeholder=""
                      value={this.state.wareHouseEmail}
                      onChange={e => this.handlewareHouseEmail(e)}
                    />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-pin-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="City"
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
                        <i className="ni ni-square-pin" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Pincode"
                      type="number"
                      value={this.state.pincode}
                      onChange={e => this.handlePincode(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-map-small" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="State"
                      type="text"
                      value={this.state.state}
                      onChange={e => this.handleState(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-map-big" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Country"
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
                    Create Warehouse
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

export default CompanyCreateWarehouse;
