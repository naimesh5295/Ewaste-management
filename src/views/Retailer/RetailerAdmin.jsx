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

class RetailerAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      sellerId: 0,
      sellerName: "",
      sellerStatus: "",
      data: []
    };
    this.handleChangeDelete = this.handleChangeDelete.bind(this);
    this.handleIssue = this.handleIssue.bind(this);
  }
  handleChangeAdd(event) {}

  handleIssue(event, args) {
    const identity = {
      participant: "org.example.mynetwork.RetailStore#"+args,
      userID: args,
      options: {}
    };

    axios
      .post(
        "http://localhost:3001/api/system/identities/issue",
        {
          participant: "org.example.mynetwork.RetailStore#"+args,
          userID: args,
          options: {}
        },
        { responseType: "blob" }
      )
      .then(cardName => {
        console.log(cardName);

        const file = new File([cardName], "myCard.card", {
          type: "application/octet-stream",
          lastModified: Date.now()
        });

        const formData = new FormData();
        formData.append("card", file);

        return axios.post("http://localhost:3000/api/wallet/import", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }
        });
      });
  }
  handleChangeDelete(event, arg) {
    axios
      .delete(
        "http://localhost:3001/api/org.example.mynetwork.RetailStore/" + arg
      )
      .then(response => {
        console.log("Delete responce", response);
      });
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/queries/getAllRetailStore")
      .then(response => {
        console.log("start", response.data, "end");
        console.log("length",response.data.length)

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
          <td>
            <ButtonToolbar>
              <Button
                color="success"
                onClick={e => this.handleIssue(e, item.businessID)}
              >
                Issue
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
                  <h3 className="mb-0">Retailers</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-flush"
                  responsive
                  bordered
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Retailer id</th>
                      <th scope="col">Retailer Name</th>
                      <th scope="col">Retailer Contact</th>
                      <th scope="col">Delete</th>
                      <th scope="col">Issue</th>

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

export default RetailerAdmin;
