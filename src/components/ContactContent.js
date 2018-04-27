import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import axios from 'axios';
import qs from 'qs';

export class ContactContent extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            title: "",
            message: ""
        };
    }

    onChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState ({
            [name]: value
        });
    }

    onSubmit(event) {
        if (this.state.email !== "" && this.state.title !== "" && this.state.message !== "") {
            event.preventDefault();
            const data = this.state;
            axios.post(
                "http://localhost/api/send.php",
                qs.stringify(data),
                {headers: { 'content-type': 'application/x-www-form-urlencoded' }}
            )
            .then((result) => {
                console.log(result.data);
            });
        } else {
            event.preventDefault();
            console.log("Pusty email");
        }
    }

    render() {
        return (
            <div className="container-fluid pageContent">
                <CSSTransitionGroup
                transitionName="fade"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                    <div className="pageHeader">
                        Kontakt
                    </div>
                    <hr/>
                    <div>
                        <div className="section">
                            <p>
                                E-mail: <a href="mailto: mikolajpecak@itpulse.pl">mikolajpecak@itpulse.pl</a>
                            </p>
                            <p>
                                Nr tel: <b>+48 514 686 478</b>
                            </p>
                            <p>
                                Zapraszam również na mój profil w portalu <a href="https://pl.linkedin.com/in/miko%C5%82aj-p%C4%99cak-1649a612b" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                            </p>
                        </div>
                        <div className="section">
                            <p>
                                Możesz także skorzystać bezpośrednio z formularza kontaktowego:
                            </p>
                            <form className="contactForm" onSubmit={(event) => this.onSubmit(event)}>
                                <div className="form-group">
                                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Twój adres e-mail" value={this.state.email} onChange={(event) => this.onChange(event)} name="email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Tytuł wiadomości" value={this.state.title} onChange={(event) => this.onChange(event)} name="title"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="10" placeholder="Treść wiadomości" value={this.state.message} onChange={(event) => this.onChange(event)} name="message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary formButton">Wyślij</button>
                            </form>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}