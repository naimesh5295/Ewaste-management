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

class CompanyAdminCompletedProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      sellerId: 0,
      sellerName: "",
      sellerStatus: "",
      data: []
    };
  }
  handleChangeAdd(event) {}


  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/queries/ProductThatareCompleted")
      .then(response => {
        console.log("start", response.data, "end");

        var results = response.data;
        console.log("length", results.length);
        // var items = results.items
        for (var i = 0; i < results.length; i++) {
          var counter = results[i];
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
          <td>{item.productID}</td>
          <td>{item.company}</td>

          <td>{item.estimatedRewardPrice}</td>

          <td>{item.wasteTreatment}</td>
          <td>{item.wasteType}</td>


          {/* <td><a className="btn btn-info" href="/org.example.mynetwork.Product/"> */}
       
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
                  <h3 className="mb-0">Company</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-flush"
                  responsive
                  bordered
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Product id</th>
                      <th scope="col">Company id</th>

                      <th scope="col">Product EstimatedRewardPrice</th>
                      <th scope="col">wasteTreatment</th>
                      <th scope="col">wasteType</th>
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

export default CompanyAdminCompletedProduct;
