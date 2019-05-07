import React from "react";
// reactstrap components'
import { withCookies, Cookies } from "react-cookie";

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
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      id: "",
      adminurl: "",
      accesstoken:
        "yyOEzRlWaLf4QJVMcc9KrQPhh8U7Wh7t7DQAgm3xAnJhovQpj3GJUaCdAAgfwy4L"
      // Token: this.getcookie('access_token')
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handleusername = this.handleusername.bind(this);
    this.handleid = this.handleid.bind(this);
  }
  handleid(e) {
    this.setState({
      id: e.target.value
    });
  }

  handlepassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleusername(e) {
    this.setState({
      username: e.target.value
    });
  }
  handleLogin() {
    // this.createCookie("user_id", this.state.id, 2)
    localStorage.removeItem("user_id");

    localStorage.setItem("user_id", this.state.id);
    var i = localStorage.getItem("user_id");

    console.log("cookie", i);
    var ss = this.state.id;
    var check = ss.slice(0, 3);
    console.log(check);
    if (check == "com") {
      console.log(this.state.username);

      axios
        .post("http://localhost:3001/api/org.example.mynetwork.LoginCompany", {
          $class: "org.example.mynetwork.LoginCompany",
          company: "resource:org.example.mynetwork.Company#" + (this.state.id).toString(),
          businessEmail: this.state.username,
          businessPasswd: this.state.password
        })
        .then(res => {
          console.log("response:",res);
          window.location.href = "http://localhost:3003/company/index";
        });
    } else if (check == "ret") {
      console.log(check);

      axios.post("http://localhost:3001/api/org.example.mynetwork.LoginRetailStore" ,{
            $class: "org.example.mynetwork.LoginRetailStore",
            retailStore:
              "resource:org.example.mynetwork.RetailStore#" + (this.state.id),
            businessEmail: this.state.username,
            businessPasswd: this.state.password
          }
        )
        .then(res => {
          console.log(res);
          console.log(check);
          window.location.href = "http://localhost:3003/retailer/index";
        });
    } else if (check == "log") {
      console.log(check);

      axios
        .post(
          "http://localhost:3001/api/org.example.mynetwork.LoginLogistics",
          {
            $class: "org.example.mynetwork.LoginLogistics",
            logistics:
              "resource:org.example.mynetwork.Logistics#" + (this.state.id).toString(),
            businessEmail: this.state.username,
            businessPasswd: this.state.password
          }
        )
        .then(res => {
          console.log(res);
          console.log(check);
          window.location.href = "http://localhost:3003/logistic/index";
        });
    }
  }

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <h1>Sign in</h1>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="id"
                      type="text"
                      value={this.state.id}
                      onChange={e => this.handleid(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      value={this.state.username}
                      onChange={e => this.handleusername(e)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      value={this.state.password}
                      onChange={e => this.handlepassword(e)}
                    />
                  </InputGroup>
                </FormGroup>
              
             
             
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={this.handleLogin}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
          <Col className="text-right" xs="6">
                      <a className="text-light" href="/auth/register">
                        <small>               </small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a className="text-light" href="/auth/register">
                        <small>Create new Account</small>
                      </a>
                    </Col>
                  </Row>
        </Col>
      </>
    );
  }
}

export default Login;
