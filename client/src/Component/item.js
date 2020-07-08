import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class item extends Component {
    constructor(props){
        super(props);
        this.state = {snackbaropen: false, snackbarmsg: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({snackbaropen:false})
    }

    handleSubmit(e){
        e.preventDefault();

        const id = e.target.id.value;
        console.log(id)
        fetch('http://localhost:8080/api/update-item/' + id, {
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id: e.target.id.value,
                title: e.target.title.value,
                description: e.target.description.value,
                URL : e.target.URL.value
            })
        })
            .then(res => res.json())
            .then((result) =>{
                this.setState({snackbaropen:true, snackbarmsg:result})
            },
             this.setState({snackbaropen:true, snackbarmsg:'failed'})
            )
   
    }
    render() {
        // const { id, title, description, URL } = this.state
        return (
            <div className="form-class">
                <Snackbar anchorOrigin={{vertical: 'bottom', horizontal:'center'}} open = {this.state.snackbaropen} autoHideDuration = {3000} onClose={this.snackbarClose} message = {<span id="message-id">{this.state.snackbarmsg}
                
                </span>}
                
                action={[
                    <IconButton key="close" arial-label="Close" color="inherit" onClick={this.snackbarClose}>
                        x
                    </IconButton>
                ]}
                />
                    <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Edit Item
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Row>
                                <Col sm={6}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="id">
                                            <Form.Label>ID: </Form.Label>
                                            <Form.Control type="text" name="id" defaultValue = {this.props.editId} required placeholder="ID" />
                                        </Form.Group>

                                        <Form.Group controlId="title">
                                            <Form.Label>Title: </Form.Label>
                                            <Form.Control type="text" name="title" defaultValue = {this.props.editTitle} required placeholder="Title" />
                                        </Form.Group>

                                        <Form.Group controlId="description">
                                            <Form.Label>Description: </Form.Label>
                                            <Form.Control type="text" name="description" defaultValue = {this.props.editDescription} required placeholder="Description" />
                                        </Form.Group>

                                        <Form.Group controlId="URL">
                                            <Form.Label>URL: </Form.Label>
                                            <Form.Control type="text" name="URL" defaultValue = {this.props.editURL} required placeholder="URL" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Button variant="primary" type="submit">
                                                Update Item
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>


                    
                    
            </div>
        );
    }

}

export default item;