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
import RetailerHeader from "components/Headers/RetailerHeader.jsx";

class Retailerproducts extends React.Component {
  constructor() {
    super();
    this.state = {
      sellerId: 0,
      sellerName: "",
      sellerStatus: "",
      data: [],
      retial_id:localStorage.getItem("user_id")
    };
    this.handleChangeDelete = this.handleChangeDelete.bind(this);
  }
  handleChangeAdd(event) {}

 
  handleChangeDelete(event, arg) {
    axios
      .delete(
        "http://localhost:3001/api/org.example.mynetwork.Product/" + arg
      )
      .then(response => {
        console.log("Delete responce", response);
      });
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/queries/RecoredOfASpecificRetailer?retailStore=resource%3Aorg.example.mynetwork.RetailStore%23"+ this.state.retial_id)
      .then(response => {
        console.log("start", response.data, "end");
        console.log("length",response.data.length)

        var results = response.data;
        // var items = results.items
       
        return results;
      })
      .then(res => {
        this.setState({
          data: res
        });
         console.log("Data",this.state.data)
      });
  }

  renderdata() {
    return this.state.data.map(item => {
      return (
        <tr>
          <td>{item.productID}</td>
          {console.log("transactionId", item.company)}

          <td>{item.productName}</td>
          {console.log("transactionType", item.productID)}
          <td>{item.company}</td>
          <td>{item.EstimatedProductPrice}</td>
          <td>{item.estimatedRewardPrice}</td>
          
          {/* <td><a className="btn btn-info" href="/org.example.mynetwork.Product/"> */}
          <td>
            <ButtonToolbar>
              <Button
                color="danger"
                onClick={e => this.handleChangeDelete(e, item.productID)}
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
        <RetailerHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-5">
                  <h3 className="mb-0">Products</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-flush"
                  responsive
                  bordered
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Product id</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Company</th>
                      <th scope="col">Estimated Product Price</th>
                      <th scope="col">Estimated Reward Price</th>
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

export default Retailerproducts;
