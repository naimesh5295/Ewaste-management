import React from "react";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Button,
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
import CompanyHeader from "components/Headers/CompanyHeader.jsx";
import { resolve } from "dns";

class companyProvideFund extends React.Component {
  constructor() {
    super();
    this.state = {
      productid: "",
      customerid: "",
      companyid: localStorage.getItem("user_id")
    };
    this.handleCustomerid = this.handleCustomerid.bind(this);
    this.handleProductid = this.handleProductid.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCustomerid(event) {
    this.setState({
      customerid: event.target.value
    });
  }
  handleProductid(event) {
    this.setState({
      productid: event.target.value
    });
  }

  renderdata(res) {
    this.state.trucker.map(item => {
      this.state.trucker_arr.push(item.personID);
    });
    console.log("rednerdata", this.state.trucker_arr);
  }

  handleSubmitForm(event) {
    event.preventDefault();
  }
  handleSubmit() {
    console.log(this.state);
    axios
      .post("http://localhost:3001/api/org.example.mynetwork.TransferFunds", {
        $class: "org.example.mynetwork.TransferFunds",
        product:
          "resource:org.example.mynetwork.Product#" +
          this.state.productid.toString(),
        customer:
          "resource:org.example.mynetwork.Customer#" +
          this.state.customerid.toString()
      })
      .then(res => {
        console.log(res.data);
      });
  }

  render() {
    return (
      <>
        <CompanyHeader />
        <Container className="mt--3" fluid>
          <Col lg="9" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-center text-muted mb-4">
                  <h1> Transfer Funds</h1>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form" onSubmit={e => this.handleSubmitForm(e)}>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Product Id</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.productid}
                        onChange={e => this.handleProductid(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Customer id</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.customerid}
                        onChange={e => this.handleCustomerid(e)}
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
                      Send{" "}
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

export default companyProvideFund;
