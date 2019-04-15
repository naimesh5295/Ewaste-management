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
import LogisticHeader from "components/Headers/LogisticHeader.jsx";
import { resolve } from "dns";

class LogisticAddTruck extends React.Component {
  constructor() {
    super();
    this.state = {
      truckID: "",
      truckName: "",truckerid:"",
      logisticsid: localStorage.getItem("user_id")

    };
    this.handleTruckid = this.handleTruckid.bind(this);
    this.handleTruckName = this.handleTruckName.bind(this);
    this.handleTrucker = this.handleTrucker.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTruckid(event) {
    this.setState({
      truckID: event.target.value
    });
  }
  handleTruckName(event) {
    this.setState({
      truckName: event.target.value
    });
  }

  handleTrucker(event) {
    this.setState({
      trucker: event.target.value
    });
  }

  handleTruckerid(event) {
    this.setState({
      truckerid: event.target.value
    });
  }
  

renderdata(res){
  this.state.trucker.map(item => {
    this.state.trucker_arr.push(item.personID)
  })
console.log("rednerdata",this.state.trucker_arr)
}

  handleSubmitForm(event) {
    event.preventDefault();
  }
  handleSubmit() {
    console.log(this.state);
    axios
    .post("http://localhost:3001/api/org.example.mynetwork.Truck", {
      $class: "org.example.mynetwork.Truck",
      truckID: this.state.truckID,
      truckName:this.state.truckName,
      trucker:"resource:org.example.mynetwork.Trucker#"+this.state.truckerid
  
    })
    .then(res => {
      console.log(res.data);
      this.handleAddtruck()
    });


  }

  handleAddtruck(){
    axios.post("http://localhost:3001/api/org.example.mynetwork.AddTruck",{
      $class: "org.example.mynetwork.AddTruck",
      truck: this.state.truckID,
      logistics: this.state.logisticsid
  
    })
    .then(res=>{
      console.log(res.data)
    })
  }

  render() {
    return (
      <>
        <LogisticHeader />
        <Container className="mt--3" fluid>
          <Col lg="9" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-center text-muted mb-4">
                  <h1> Add truck</h1>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <Form role="form" onSubmit={e => this.handleSubmitForm(e)}>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Truck Id</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.truckID}
                        onChange={e => this.handleTruckid(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Truck Name</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.truckName}
                        onChange={e => this.handleTruckName(e)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Trucker id</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder=""
                        type="text"
                        value={this.state.truckerid}
                        onChange={e => this.handleTruckerid(e)}
                      />
                    </InputGroup>
                  </FormGroup>
               

                  <div className="text-center">
                    <Button
                      className="mt-4"
                      color="primary"
                      type="button"
                      onClick={this.handleSubmit}
                    >
                      Add Truck{" "}
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

export default LogisticAddTruck;
