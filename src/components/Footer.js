import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div className="container-fluid siteFooter">
                <hr/>
                Copyright &copy; Mikołaj Pęcak 2018  -  "<span style={{color: "#5190a5"}}>There is no place like 127.0.0.1 :)</span>"
            </div>
        );
    }
}