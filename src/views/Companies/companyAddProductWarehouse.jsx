import React from "react";
import axios from "axios";

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";
// core components
import CompanyHeader from "components/Headers/CompanyHeader.jsx";

class companyAddProductWarehouse extends React.Component {
  constructor() {
    super();
    this.state = {
      truckID: "",
      productid: "",
      warehouseid: "",
      iscompleted:"",
      estimatedreward:0

    };
    this.handleAddproduct = this.handleAddproduct.bind(this);
    this.handlewarehouseid = this.handlewarehouseid.bind(this);
    this.handleproduct = this.handleproduct.bind(this);
    this.handleestimatedreward = this.handleestimatedreward.bind(this);
    this.handleiscompleted = this.handleiscompleted.bind(this);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handlewarehouseid(event) {
    this.setState({
      warehouseid: event.target.value
    });
  }
  handleproduct(event) {
    this.setState({
      productid: event.target.value
    });
  }
  handleiscompleted(event) {
    this.setState({
      iscompleted: event.target.value
    });
  }
  handleestimatedreward(event) {
    this.setState({
        estimatedreward: event.target.value
    });
  }
  handleSubmitForm(event) {
    event.preventDefault();
  }
//   "$class": "org.example.mynetwork.AfterCreation",
//   "generation": "2019-04-14T22:17:42.809Z",
//   "estimatedRewardPrice": 0,
//   "isCompleted": false,
//   "product": "resource:org.example.mynetwork.Product#7353"

  handleAddproduct(){
    axios.post("http://localhost:3001/api/org.example.mynetwork.AfterCreation",{
        $class: "org.example.mynetwork.AfterCreation",
        generation:"string",
        estimatedRewardPrice:this.state.estimatedreward,
        isCompleted:this.state.iscompleted,
        product: "resource:org.example.mynetwork.Product#"+(this.state.productid).toString()
    })
    .then(res=>{
      console.log(res.data)
    })

    axios.post("http://localhost:3001/api/org.example.mynetwork.AddProductToWareHouse",{
        $class: "org.example.mynetwork.AddProductToWareHouse",
        product: "resource:org.example.mynetwork.Product#"+(this.state.productid).toString(),
        wareHouse: "resource:org.example.mynetwork.WareHouse#"+(this.state.warehouseid).toString()
    })
    .then(res=>{
      console.log(res.data)
    })
  }

  render() {
    return (
      <>
        <CompanyHeader />
        <Container className="mt--3" fluid>
          <Col lg="9" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-center text-muted mb-4">
                  <h1> Create and Add Product</h1>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form" onSubmit={e => this.handleSubmitForm(e)}>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Enter Productid</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.productid}
                        onChange={e => this.handleproduct(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Estimated reward</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.estimatedreward}
                        onChange={e => this.handleestimatedreward(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>is completed</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="select"
                        value={this.state.iscompleted}
                        onChange={e => this.handleiscompleted(e)}
                      >
                      <option value="true">Completed</option>
                      <option value="false">Not Completed</option>

                      </Input>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Warehouse id</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.warehouseid}
                        onChange={e => this.handlewarehouseid(e)}
                      />
                    </InputGroup>
                  </FormGroup>
               

                  <div className="text-center">
                    <Button
                      className="mt-4"
                      color="primary"
                      type="button"
                      onClick={this.handleAddproduct}
                    >
                      Add Product to wareHouse{" "}
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Container>
        </>
    );
  }
}

export default companyAddProductWarehouse;
