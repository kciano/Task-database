import React, { Component } from 'react';
import axios from 'axios'
import '../App.css'

class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            description: '',
            URL: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/api/add-item', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { id, title, description, URL } = this.state
        return (
            <div className="form-class">
                <h3>Add Project item</h3>
                <br></br>
                <br></br>
                <br></br>
                    <form  onSubmit={this.submitHandler}>
                        <div>
                            <label>ID: </label>
                            <input 
                            type="text" 
                            name="id" 
                            value = {id} 
                            onChange = {this.changeHandler}
                            /><br /><br />
                        </div>
                        <div>
                            <label>Title: </label>
                            <input 
                            type="text" 
                            name="title" 
                            value = {title} 
                            onChange = {this.changeHandler}
                            /><br /><br />
                        </div>
                        <div>
                            <label>Description: </label>
                            <input type="text" 
                            name="description" 
                            value = {description} 
                            onChange = {this.changeHandler}
                            /><br /><br />
                        </div>
                        <div>
                            <label>URL: </label>
                            <input 
                            type="text" 
                            name="URL" 
                            value = {URL} 
                            onChange = {this.changeHandler}/>
                        </div>
                        <button type = "submit">Submit</button>
                    </form>   
            </div>
        );
    }
}

export default AddItem;

