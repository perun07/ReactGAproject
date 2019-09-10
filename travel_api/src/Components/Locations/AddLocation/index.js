import React, { Component } from  'react'
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AddLocation extends Component {
    constructor(){
        super()
        this.state = {
            country: "",
            state: "",
            city: "",
            post: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] :e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(typeof(this.props.createLocation))
        this.props.createLocation(this.state)
    }

    render(){
        return(
            <Container>
            <Form onSubmit={this.handleSubmit}>
                <h2>Add Your Location To Blog About</h2>
                <FormGroup row>
                <Label for= "city">City:</Label>
                <Input type = "text" name = "city" placeholder="this is a placeholder" onChange = {this.handleChange}/>
                </FormGroup>
                <FormGroup row>
                <Label for= "state">State:</Label>
                <Input type = "text" name = "state" onChange = {this.handleChange}/>
                </FormGroup>
                <FormGroup row>
                <Label for="country">Country:</Label>
                <Input type = "text" name = "country" onChange = {this.handleChange}></Input>
                </FormGroup>
                <FormGroup row>
                <Label for = "post">Blog Post:</Label>
                <Input type = 'text' name = 'post' onChange = {this.handleChange}></Input>
                <Button type="submit" color="primary">Add a Location</Button>
                </FormGroup>
            </Form>
            </Container>
        )
    }
}

export default AddLocation