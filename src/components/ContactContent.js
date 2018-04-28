import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import axios from 'axios';
import qs from 'qs';
import { FormAlert } from './FormAlert';

export class ContactContent extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            title: "",
            message: "",
            hideAlert: true,
            alertClass: "alert alert-danger",
            alertText: ""
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
            const data = {
                email: this.state.email,
                title: this.state.title,
                message: this.state.message
            };
            axios.post(
                "http://localhost/api/send.php",
                qs.stringify(data),
                {headers: { 'content-type': 'application/x-www-form-urlencoded' }}
            )
            .then((result) => {
                if (result.status === 200) {
                    this.setState({
                        hideAlert: false,
                        alertClass: "alert alert-success",
                        alertText: "Wiadomość wysłana. Postaram się odpisać w najbliższym czasie."
                    });
                } else {
                    this.setState({
                        hideAlert: false,
                        alertText: "Coś poszło nie tak. Spróbuj ponownie później."
                    });
                }
            })
            .catch(function (error) {
                this.setState({
                    hideAlert: false,
                    alertText: "Coś poszło nie tak. Spróbuj ponownie później."
                });
            });
        } else {
            event.preventDefault();
            this.setState({
                hideAlert: false,
                alertText: "Wypełnij wszystkie pola."
            });
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
                                <FormAlert hide={this.state.hideAlert} class={this.state.alertClass} text={this.state.alertText}/>
                            </form>
                        </div>
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}