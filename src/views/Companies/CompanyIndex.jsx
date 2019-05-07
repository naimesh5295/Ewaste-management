import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import CompanyHeader from "components/Headers/CompanyHeader.jsx";

class LogisticIndex extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
    data:[]
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/queries/RecoredOfASpecificCompany?company=resource%3Aorg.example.mynetwork.Company%23"+ localStorage.getItem("user_id"))
      .then(response => {
        console.log("rec", response.data);
        console.log("length",response.data.length)

        var results = response.data;
        // var items = results.items
     
        return results
      })
      .then(res => {
        this.setState({
        data:res
        });
       

        
      })
  }
  renderdata() {
    return this.state.data.map(item => {
      return (
        <tr>
          <td>{item.$class}</td>

          <td>{item.customer}</td>
          <td>{item.wasteType}</td>
          <td>{item.wasteTreatment}</td>


      
        </tr>
      );
    });
  }


  render() {
    return (
      <>
        <CompanyHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
        
          
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Company Transactions</h3>
                    </div>
                   
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Product id</th>
                      <th scope="col">customer id</th>
                      <th scope="col">waste type</th>
                      <th scope="col">waste Treatment</th>
                    </tr>
                  </thead>
                  <tbody>
                {this.renderdata()}
                  </tbody>
                </Table>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </>
    );
  }
}

export default LogisticIndex;
