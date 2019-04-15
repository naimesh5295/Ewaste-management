import React from "react";
import axios from "axios";
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Button,
  ButtonToolbar
} from "reactstrap";
// core components
import LogisticHeader from "components/Headers/LogisticHeader.jsx";

class LogisticTruck extends React.Component {
  constructor() {
    super();
    this.state = {
      sellerId: 0,
      sellerName: "",
      sellerStatus: "",
      data: [],
      logistic_id:localStorage.getItem("user_id")
    };
  }
  handleChangeAdd(event) {}

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/org.example.mynetwork.Logistics/" + (this.state.logistic_id).toString() ) 
      .then(response => {
        console.log("start", response.data, "end");
        
        var results = response.data.truck;
        // var results = results.truck;
        return results;
      })
      .then(res => {
        this.setState({
          data: res
        });
        // console.log("Data",this.state.data)
      });
  }

  renderdata() {
    return this.state.data.map(item => {
      return (
        <tr>
                    <td>{item.$class}</td>

          <td>{item.truckID}</td>

          <td>{item.truckName}</td>
          <td>{item.trucker}</td>
        
          
    
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
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-5">
                  <h3 className="mb-0">Trucks</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-flush"
                  responsive
                  bordered
                >
                  <thead className="thead-light">
                    <tr>
                    <th scope="col">Class</th>

                      <th scope="col">Truck id</th>
                      <th scope="col">Truck Name</th>
                      <th scope="col">Trucker id</th>
                    

                      <th scope="col" />
                    </tr>
                  </thead>

                  {/* <tbody>{this.renderdata()}</tbody> */}
                  <tbody>
                    {this.renderdata()}
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default LogisticTruck;
