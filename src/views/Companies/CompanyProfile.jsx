import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.jsx";
import axios from "axios";

class CompanyProfile extends React.Component {
  constructor(){
    super();
    this.state={
      name:"",
      email:"",
      phone:"",
      city:"",
      state:"",
      country:"",
      postle_code:"",
      company_id:localStorage.getItem("user_id"),
      userid:"",
      address:[]
    }
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/org.example.mynetwork.Company/"+(this.state.company_id).toString())
      .then(response => {
        console.log("response:",response.data)
        console.log(this.state.address.data)
        this.setState({
          name:response.data.businessName,
          email:response.data.businessEmail,
          phone:response.data.businessPhone,
          address:response.data.address,
          city:response.data.address.city,
          country:response.data.address.country,
          postle_code:response.data.address.pincode,
          state:response.data.address.state,
          userid:response.data.businessID
        });
      })
    
  }




  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                
                  </Col>
                </Row>
             
                <CardBody className="pt-0 pt-md-4">
          
                  <div className="text-center">
                    <h3>
                      {this.state.name}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
{this.state.city},{this.state.state}                    </div>
                    
                
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                   
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                            Business Id
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.userid}
                              id="input-username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              value = {this.state.email}
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                   
               
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                      <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Phone
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={this.state.phone}
                              id="input-address"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                     
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              City
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.city}
                              id="input-city"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Country
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.country}
                              type="text"
                              
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal code
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.postle_code}
                              type="number"
                              
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    
                 
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CompanyProfile;
