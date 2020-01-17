import React, { Component } from "react"
import ReactDom from "reactdom"

class navigation extends Component {
    render() {
        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
    }
}

class nameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Name: '', Counrty: '', description: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('Thank you for Submiting the form' + this.state.Name, 'from' + this.state.Counrty, 'your favourite place in New Zealand is:' + this.state.description)
        event.preventDefault();
    }

    render() {
        return ();
    }
}

export default all 


