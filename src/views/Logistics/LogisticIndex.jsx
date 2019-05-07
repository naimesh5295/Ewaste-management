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

import LogisticHeader from "components/Headers/LogisticHeader.jsx";

class LogisticIndex extends React.Component {
  constructor(){
    super();
    this.state = {
      data :[]
    }
  };
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
      .get("http://localhost:3001/api/queries/getAllTransactionDetailsOfLogistics")
      .then(response => {
        console.log("start", response, "end");
        console.log("length",response.data.length)

        var results = response;
        // var items = results.items
     
        return results
      })
      .then(res => {
        this.setState({
          data: res.data
        });
       
        console.log(this.state.data)
        
        
      })
  }
  renderdata() {
    return this.state.data.map(item => {
      return (
        <tr>
          <td>{item.transactionId}</td>

          <td>{item.transactionInvoked}</td>
          <td>{item.transactionTimestamp}</td>
          <td>{item.transactionType}</td>

      
        </tr>
      );
    });
  }

  render() {
    return (
      <>
        <LogisticHeader />
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
                      <th scope="col">TransactionId </th>
                      <th scope="col">TransactionInvoked</th>
                      <th scope="col">Timestamp </th>
                      <th scope="col">TransactionTimestamp </th>
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
