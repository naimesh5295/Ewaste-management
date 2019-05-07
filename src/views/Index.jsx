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
  Card,ButtonToolbar,
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

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
    data:[],     
    retailer_len: 0,
    logistic_len: 0,
    company_len: 0,
    customer_len:0,
    historian_len:0
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
    var urls = [
      "http://localhost:3001/api/queries/getAllCompany",
      "http://localhost:3001/api/queries/getAllRetailStore",
      "http://localhost:3001/api/queries/getAllLogistics",
      "http://localhost:3001/api/queries/getAllCustomer"

    ];
    axios.get(urls[0]).then(response => {
      this.setState({
        company_len: response.data.length
      });
    });
    axios.get(urls[1]).then(response => {
      this.setState({
        retailer_len: response.data.length
      });
    });
    axios.get(urls[2]).then(response => {
      this.setState({
        logistic_len: response.data.length
      });
    });
    axios.get(urls[3]).then(response => {
      this.setState({
        customer_len: response.data.length
      });
    });
  }
  componentDidMount() {
    
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/system/historian")
      .then(response => {
        console.log(response.data.length)
        this.setState({
          data: response.data,
          historian_len:response.data.length
        });
      })
    
  }
  renderdata() {
    return this.state.data.map(item => {
      return (
        <tr>
          <td>{item.transactionId}</td>

          <td>{item.transactionType}</td>
          {console.log("transactionType", item.transactionType)}
          <td>{item.transactionTimestamp}</td>

      
        </tr>
      );
    });
  }

  render() {
    return (
      <>
        <Header />
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
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">TransactionId</th>
                      <th scope="col">transactionType</th>
                      <th scope="col">transactionTimestamp</th>
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

export default Index;
