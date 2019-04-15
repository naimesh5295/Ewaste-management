import React from "react";

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

class CompanyDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      sellerId:0,
      sellerName:'',
      sellerStatus:''
    };
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
  }
  handleChangeAdd(event) {

  }
  handleChangeDelete(event) {

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
                  <h3 className="mb-0">Companies</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-flush"
                  responsive
                  bordered
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Business id</th>
                      <th scope="col">Business Name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Operations</th>

                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>230320</td>
                      <td>Naimesh patel</td>
                      <td>
                        <Badge color="black" className="badge-dot">
                          <i className="bg-danger" />
                          Activated
                        </Badge>
                      </td>

                      
                    </tr>
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

export default CompanyDashboard;
