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

class LogisticTrucker extends React.Component {
  constructor() {
    super();
    this.state = {
      sellerId: 0,
      sellerName: "",
      sellerStatus: "",
      data: [],
      logistic_id:localStorage.getItem("user_id")
    };
    this.handleChangeDelete = this.handleChangeDelete.bind(this);
  }
  handleChangeAdd(event) {}

 
  handleChangeDelete(event, arg) {
    axios
      .delete(
        "http://localhost:3001/api/org.example.mynetwork.Trucker/" + arg
      )
      .then(response => {
        console.log("Delete responce", response);
      });
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/org.example.mynetwork.Logistics/"+(this.state.logistic_id).toString())
      .then(response => {
        console.log("start", response.data, "end");
        console.log("length",response.data.length)
        var results = response.data.trucker;      
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
          <td>{item.personID}</td>

          <td>{item.personName}</td>
          <td>{item.personPhone}</td>
        
          
      
      
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
                  <h3 className="mb-0">Truckers</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-flush"
                  responsive
                  bordered
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Trucker id</th>
                      <th scope="col">Trucker Name</th>
                      <th scope="col">Trucker contact</th>
                    

                      <th scope="col" />
                    </tr>
                  </thead>

                  <tbody>{this.renderdata()}</tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default LogisticTrucker;
