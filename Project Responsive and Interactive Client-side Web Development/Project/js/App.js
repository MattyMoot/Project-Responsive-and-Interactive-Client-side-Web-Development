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

export default navigation 


