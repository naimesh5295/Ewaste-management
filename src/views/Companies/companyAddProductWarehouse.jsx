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
      estimatedreward:0,
      companyid: localStorage.getItem("user_id"),
      warehouse_arr:[],
      warehouse_data:[],
      date:""
      
    };
    this.handleAddproduct = this.handleAddproduct.bind(this);
    this.handlewarehouseid = this.handlewarehouseid.bind(this);
    this.handleproduct = this.handleproduct.bind(this);
    this.handleestimatedreward = this.handleestimatedreward.bind(this);
    this.handleiscompleted = this.handleiscompleted.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:3001/api/org.example.mynetwork.Company/" +
          this.state.companyid.toString()
      )

      .then(response => {
        console.log("response:", response.data);
        this.setState({
          warehouse_arr: response.data.wareHouse,
        });
        this.state.warehouse_arr.map(item => {
          this.state.warehouse_data.push(item.wareHouseID);
          console.log("warehouse data:", this.state.warehouse_data);
        });
      

      });
  }
  handleDate(event){
    this.setState({
      date:event.target.value
    }
    )
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
    console.log("date:",this.state.date)
    axios.post("http://localhost:3001/api/org.example.mynetwork.AfterCreation",{
        $class: "org.example.mynetwork.AfterCreation",
        generation:"2019-05-06T16:53:40.525Z",
        estimatedRewardPrice:this.state.estimatedreward,
        isCompleted:this.state.iscompleted,
        product: "resource:org.example.mynetwork.Product#"+(this.state.productid).toString()
    })
    .then(res=>{
      console.log(res.data)
    })

    axios.post("http://localhost:3001/api/org.example.mynetwork.AddProductToWareHouse",{
        $class: "org.example.mynetwork.AddProductToWareHouse",
        // product: "resource:org.example.mynetwork.Product#",
        // wareHouse: "resource:org.example.mynetwork.WareHouse#w001"
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
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>arrivalDate </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="date"
                        value={this.state.date}
                        onChange={e => this.handleDate(e)}
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
