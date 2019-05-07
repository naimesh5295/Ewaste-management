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
import CompanyHeader from "components/Headers/CompanyHeader.jsx";

class CompanyWarehouse extends React.Component {
  constructor() {
    super();
    this.state = {
      sellerId: 0,
      sellerName: "",
      sellerStatus: "",
      data: [],
      companyid: localStorage.getItem("user_id")

    };
    this.handleChangeDelete = this.handleChangeDelete.bind(this);

  }
  handleChangeAdd(event) {}

  handleChangeDelete(event, arg) {
    axios.delete("http://localhost:3001/api/org.example.mynetwork.WareHouse/" + arg).then(response => {
      console.log("Delete responce", response);
      
    });
  }
  
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3001/api/org.example.mynetwork.Company/" + (this.state.companyid).toString())
      .then(response => {
        console.log("start", response.data, "end");

        var results = response.data.wareHouse;
        // var items = results.items
     
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
          <td>{item.wareHouseID}</td>
          {console.log("transactionId", item.businessID)}

          <td>{item.wareHouseName}</td>
          {console.log("transactionType", item.businessName)}
          <td>{item.wareHouseEmail}</td>

          <td>{item.wareHousePhone}</td>
          
          {/* <td><a className="btn btn-info" href="/org.example.mynetwork.Product/"> */}
     
      
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
                      <th scope="col">Warehouse id</th>
                      <th scope="col">Warehouse Name</th>
                      <th scope="col">Warehouse Email</th>
                      <th scope="col">Warehouse Contact</th>

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

export default CompanyWarehouse;
