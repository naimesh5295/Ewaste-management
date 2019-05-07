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

import RetailerHeader from "components/Headers/RetailerHeader.jsx";

class RetailerIndex extends React.Component {
  constructor(){
    super()
    this.state={
      retailer_id:0,
      data:[],
      retailer_len:0
    };
  }



  state = {
    activeNav: 1,
    chartExample1Data: "data1"
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
       

        
      })
  }
  renderdata() {
    return this.state.data.map(item => {
      return (
        <tr>
          <td>{item.retailStore}</td>

          <td>{item.wasteType}</td>
          <td>{item.wasteTreatment}</td>

      
        </tr>
      );
    });
  }



  render() {
    return (
      <>
        <RetailerHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Transactions</h3>
                    </div>
                 
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Retail Store</th>
                      <th scope="col">waste type</th>
                      <th scope="col">waste treatment</th>
                    
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

export default RetailerIndex;
