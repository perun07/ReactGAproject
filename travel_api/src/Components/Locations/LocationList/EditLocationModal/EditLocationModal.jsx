import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditLocationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      country: '',
      city: ''
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
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              <div>
              <form onSubmit={this.handleSubmit}>
                <h4>Edit Location information</h4>
                <label htmlFor='city'>Edit City:</label>
                <input type='text' name='city' placeholder='Location City' onChange={this.handleChange} />
                <br></br>
                <label htmlFor='country'>Edit Country:</label>
                <textarea name='country' placeholder='Country Name Here' onChange={this.handleChange}></textarea>
                <input type='submit' value='edit a location' />
            </form>
              </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditLocationModal;