import React from "react";
import axios from "axios";
import $ from 'jquery';

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
import RetailerHeader from "components/Headers/RetailerHeader.jsx";

class RetailerAddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      productID: "",
      productName: "",
      EstimatedProductPrice: 0,
      isCompleted: "completed",
      shipmentStatus: "CREATED",
      customer: "",
      logistics: "",
      trucker: "",
      retailStore: "",
      company: "",
      wasteTreatment: "DISPOSAL",
      estimatedRewardPrice: 0,
      clearanceDateTime: "",
      arrivalDate: "",
      wasteType: "EWASTE",
      retailer_id:localStorage.getItem("user_id")
    };
    this.handleproductID = this.handleproductID.bind(this);
    this.handleproductName = this.handleproductName.bind(this);
    this.handleEstimatedProductPrice = this.handleEstimatedProductPrice.bind(this);
    this.handleisCompleted = this.handleisCompleted.bind(this);
    this.handleshipmentStatus = this.handleshipmentStatus.bind(this);
    this.handlecustomer = this.handlecustomer.bind(this);
    this.handlelogistics = this.handlelogistics.bind(this);
    this.handletrucker = this.handletrucker.bind(this);
    this.handleretailStore = this.handleretailStore.bind(this);
    this.handlecompany = this.handlecompany.bind(this);
    this.handlewasteTreatment = this.handlewasteTreatment.bind(this);
    this.handleestimatedRewardPrice = this.handleestimatedRewardPrice.bind(this);
    this.handleclearanceDateTime = this.handleclearanceDateTime.bind(this);
    this.handlearrivalDate = this.handlearrivalDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handlewasteType = this.handlewasteType.bind(this);
  }

  handleretailStore(event) {
    this.setState({
      retailStore: event.target.value
    });
  }
  handlewasteType(event) {
    this.setState({
      wasteType: event.target.value
    });
  }
  handlecompany(event) {
    this.setState({
      company: event.target.value
    });
  }
  handlewasteTreatment(event) {
    this.setState({
      wasteTreatment: event.target.value
    });
  }
  handleestimatedRewardPrice(event) {
    this.setState({
      estimatedRewardPrice: event.target.value
    });
  }
  handleclearanceDateTime(event) {
    this.setState({
      clearanceDateTime: event.target.value
    });
  }
  handlearrivalDate(event) {
    this.setState({
      arrivalDate: event.target.value
    });
  }
  handleproductID(event) {
    this.setState({
      productID: event.target.value
    });
  }
  handleproductName(event) {
    this.setState({
      productName: event.target.value
    });
  }
  handleEstimatedProductPrice(event) {
    this.setState({
      EstimatedProductPrice: event.target.value
    });
  }
  handleisCompleted(event) {
    this.setState({
      isCompleted: event.target.value
    });
  }
  handleshipmentStatus(event) {
    this.setState({
      shipmentStatus: event.target.value
    });
  }

  handlecustomer(event) {
    this.setState({
      customer: event.target.value
    });
  }

  handlelogistics(event) {
    this.setState({
      logistics: event.target.value
    });
  }
  handletrucker(event) {
    this.setState({
      trucker: event.target.value
    });
  }
  handleSubmitForm(event) {
    event.preventDefault();
  }
  handleSubmit() {

    console.log(this.state);
    axios
    .post("http://localhost:3001/api/org.example.mynetwork.Product", {
      $class: "org.example.mynetwork.Product",
      productID:this.state.productID,
      productName:this.state.productName,
      EstimatedProductPrice:this.state.EstimatedProductPrice,
      isCompleted:this.state.isCompleted,
      shipmentStatus:this.state.shipmentStatus,
      customer:this.state.customer,
      logistics:this.state.logistics,
      trucker:this.state.trucker,
      retailStore:this.state.retailer_id,
      company:this.state.company,
      wasteTreatment:this.state.wasteTreatment,
      estimatedRewardPrice:this.state.estimatedRewardPrice,
      clearanceDateTime:this.state.clearanceDateTime,
      arrivalDate:this.state.arrivalDate,
      wasteType:this.state.wasteType,
    })
    .then(res => {
      console.log(res.data);
    });
  }
  render() {
    return (
      <>
        <RetailerHeader />
        <Container className="mt--3" fluid>
          <Col lg="9" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-center text-muted mb-4">
                  <small> Add Product</small>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form" onSubmit={e => this.handleSubmitForm(e)}>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>productID</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.productID}
                        onChange={e => this.handleproductID(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>productName</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.productName}
                        onChange={e => this.handleproductName(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>EstimatedProductPrice</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="number"
                        value={this.state.EstimatedProductPrice}
                        onChange={e => this.handleEstimatedProductPrice(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>isCompleted</InputGroupText>
                      </InputGroupAddon>
                      {/* Select field */}

                      <Input
                        type="select"
                        placeholder=""
                        value={this.state.isCompleted}
                        onChange={e => this.handleisCompleted(e)}
                      >
                        <option value="completed">completed</option>
                        <option value="Not Completed">Not completed</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>shipmentStatus</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="select"
                        value={this.state.shipmentStatus}
                        onChange={e => this.handleshipmentStatus(e)}
                      >
                        <option value="CREATED">CREATED</option>
                        <option value="IN_TRANSIST">IN_TRANSIST</option>

                        <option value="ARRIVED">ARRIVED</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>customer</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.customer}
                        onChange={e => this.handlecustomer(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>logistics</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="State"
                        type="text"
                        value={this.state.logistics}
                        onChange={e => this.handlelogistics(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>trucker </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.trucker}
                        onChange={e => this.handletrucker(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Retail Store </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.retailer_id}
                        onChange={e => this.handleretailStore(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Company </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.company}
                        onChange={e => this.handlecompany(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>wasteTreatment</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="select"
                        value={this.state.wasteTreatment}
                        onChange={e => this.handlewasteTreatment(e)}
                      >
                        <option value="DISPOSAL">Disposal</option>
                        <option value="REMANUFACTURING">Remanufacturing</option>
                        <option value="RECYCLING">Recycling</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Estimated Reward </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="number"
                        value={this.state.estimatedRewardPrice}
                        onChange={e => this.handleestimatedRewardPrice(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>clearanceDateTime </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="date"
                        value={this.state.clearanceDateTime}
                        onChange={e => this.handleclearanceDateTime(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>arrivalDate </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="date"
                        value={this.state.arrivalDate}
                        onChange={e => this.handlearrivalDate(e)}
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Waste Type </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="select"
                        value={this.state.wasteType}
                        onChange={e => this.handlewasteType(e)}
                      >
                        <option value="EWASTE" >EWaste</option>
                        <option value="DWASTE">DWaste</option>
                        <option value="WWASTE">WWaste</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                  <div className="text-center">
                    <Button
                      className="mt-4"
                      color="primary"
                      type="button"
                      onClick={this.handleSubmit}
                    >
                      Add Product
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

export default RetailerAddProduct;
