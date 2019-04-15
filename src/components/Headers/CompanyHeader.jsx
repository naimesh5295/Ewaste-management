import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import axios from "axios";

class CompanyHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
 
      company_len: 0,
      company_id:localStorage.getItem("user_id")
      // total:this.state.retailer + this.state.logistic + this.state.company
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/org.example.mynetwork.Company/" + (this.state.company_id).toString())
      .then(response => {
        console.log("start", response.data, "end");
        var results = response.data.wareHouse.length;     
        return results;
      })
      .then(res => {
        this.setState({
          company_len: res
        });
        // console.log("Data",this.state.data)
      });
  }
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
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
                            Warehouse
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

export default CompanyHeader;
