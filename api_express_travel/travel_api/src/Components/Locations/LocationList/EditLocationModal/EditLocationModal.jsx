import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';

class EditLocationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      country: '',
      state:'',
      city: '',
      post: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    this.toggle();
    this.props.updateLocations(this.props.id, this.state);
}

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Edit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Location Blog Post</ModalHeader>
          <ModalBody>
              <div>
              <Form onSubmit={this.handleSubmit}>
                <h4>Change Info Below</h4>
                <label htmlFor='city'>Edit City:</label>
                <input type='text' name='city' placeholder='City' onChange={this.handleChange} />
                <br></br>
                <label htmlFor='state'>Edit State:</label>
                <input type='text' name='state' placeholder='State' onChange={this.handleChange} />
                <br></br>
                <label htmlFor='country'>Edit Country:</label>
                <input type="text" name='country' placeholder='Country' onChange={this.handleChange}></input>
                <br></br>
                <label htmlFor='post'>Edit Blog:</label>
                <input type="text" name='post' placeholder="Edit Post"onChange={this.handleChange}></input>
                <Button color="secondary" type='submit'>Edit Post</Button>
            </Form>
              </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditLocationModal;