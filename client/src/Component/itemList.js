import React, { Component } from 'react';
import axios from 'axios'
import Item from './item'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'



class itemList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            id: '',
            title: '',
            description: '',
            URL: '',
            itemShow:false
        }

        
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/')
            .then(response => {
                console.log(response)
                this.setState({items: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }


    deleteDep(id) {
        if (window.confirm('Are you sure?')){
            fetch('http://localhost:8080/api/delete-item/' + id, {
                method: 'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'
            }
            })
        }
    }

    render() {
        const { items } = this.state
        const { id, title, description, URL } = this.state

        let itemShow = () => this.setState({itemShow:false});

        let value = this.state.value;
        return (
            <div>
                <h1>Project Item list</h1>
                
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                {
                    items.length ?
                    items.map(items => 
                            
                        <tbody>
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.title}</td>
                                <td>{items.description}</td>
                                <td>{items.URL}</td>
                                <td><Button variant="primary" onClick={() => this.setState({itemShow:true, id: items.id, title:items.title, description:items.description, URL:items.URL})}>Edit</Button><Item show ={this.state.itemShow} onHide={itemShow} editId = {id} editTitle = {title} editDescription = {description} editURL = {URL} /></td>
                                {/* <td><Button variant="primary" onClick={() => this.setState({ id: items.id, title:items.title, description:items.description, URL:items.URL})}>Edit</Button><Item editId = {id} editTitle = {title} editDescription = {description} editURL = {URL} /></td> */}
                                <td><Button onClick={()=> this.deleteDep(items.id)} variant="danger">Delete</Button></td>
                            </tr>
                        </tbody>
                               
                            
                    ) : null
                }
                </Table>


                <a href = "/item">Add Item</a>
      
                
                
                
            </div>
        );
    }
}

export default itemList;