import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import axios from "axios";

class RetailerHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      retailer_len: 0,
      logistic_len: 0,
      company_len: 0,
      customer_len:0
      // total:this.state.retailer + this.state.logistic + this.state.company
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/queries/RecoredOfASpecificRetailer?retailStore=resource%3Aorg.example.mynetwork.RetailStore%23"+ localStorage.getItem("user_id"))
      .then(response => {
        console.log("start", response, "end");
        console.log("length",response.data.length)

        var results = response;
        // var items = results.items
     
        return results
      })
      .then(res => {
        this.setState({
          data: res.data,
          retailer_len:res.data.length
        });
      axios.get("http://localhost:3001/api/queries/getAllCompany")
      .then(response =>{
        this.setState({
          company_len: response.data.length
        });
      });
      axios.get("http://localhost:3001/api/queries/getAllLogistics")
      .then(response =>{
        console.log("log",response.data)
        this.setState({
          logistic_len: response.data.length
        });
      });
        
      })
  }
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container className="mt--3" fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                           Total Products
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                          {/* Companies data  */}
                            {this.state.retailer_len}{" "}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                            <i className="fas fa-desktop" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/* <span className="text-nowrap">Since last month</span> */}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col></Col>
                <Col lg="7" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                             Logistics
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                          {/* Companies data  */}
                            {this.state.logistic_len}{" "}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                            <i className="fas fa-truck" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/* <span className="text-nowrap">Since last month</span> */}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                    <Col></Col>
                <Col lg="7" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                             Companies
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                          {/* Companies data  */}
                            {this.state.company_len}{" "}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/* <span className="text-nowrap">Since last month</span> */}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default RetailerHeader;
