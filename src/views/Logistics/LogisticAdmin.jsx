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
import Header from "components/Headers/Header.jsx";

class LogisticAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      sellerId: 0,
      sellerName: "",
      sellerStatus: "",
      data: []
    };
    this.handleChangeDelete = this.handleChangeDelete.bind(this);

  }
  handleChangeAdd(event) {}

  handleChangeDelete(event, arg) {
    axios
      .delete(
        "http://localhost:3001/api/org.example.mynetwork.Logistics/" + arg
      )

      .then(response => {
        console.log("Delete responce", response);
      });
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/queries/getAllLogistics")
      .then(response => {
        console.log("start", response.data[0], "end");

        var results = response.data;
        // var items = results.items
        for (var i = 0; i < results.length; i++) {
          var counter = results[i];
          console.log("counter", counter);
        }
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
          <td>{item.businessID}</td>
          {console.log("transactionId", item.company)}

          <td>{item.businessName}</td>
          {console.log("transactionType", item.productID)}
          <td>{item.businessPhone}</td>

          {/* <td><a className="btn btn-info" href="/org.example.mynetwork.Product/"> */}
          <td>
            <ButtonToolbar>
              <Button
                color="danger"
                onClick={e => this.handleChangeDelete(e, item.businessID)}
              >
                Delete
              </Button>
            </ButtonToolbar>
          </td>
          
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
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-5">
                  <h3 className="mb-0">Logistics</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-flush"
                  responsive
                  bordered
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Logistic id</th>
                      <th scope="col">Logistic Name</th>
                      <th scope="col">Logistic Contact</th>
                      <th scope="col">Delete</th>
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

export default LogisticAdmin;
