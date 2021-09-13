import React from 'react';
import {Prompt} from 'react-router-dom';
import '../styles/Contact.css';

class ContactPage extends React.Component {
    state = {
        value: '',
        name: '',
        surname: '',
    }

    handleChangeMessage = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleChangeSurname = (e) => {
        this.setState({
            surname: e.target.value,
        })
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.name, this.state.surname, this.state.value)
        this.setState({
            value: '',
            name: '',
            surname: '',
        })
    }

    render() {
        
        const { value, name, surname } = this.state;

        return (
            <>
            <div className="message">
                <h3>Napisz do nas!</h3>
                <form className="name" onSubmit={this.handleSubmit}>
                    <textarea rows="1" cols="25" maxlength="25" value={name} 
                    onChange={this.handleChangeName} placeholder="Imie..."></textarea>
                </form>
                <form className="surname" onSubmit={this.handleSubmit}>
                    <textarea rows="1" cols="30" maxlength="30" value={surname}
                    onChange={this.handleChangeSurname} placeholder="Nazwisko..."></textarea>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={value}
                    onChange={this.handleChangeMessage} placeholder="Wiadomość..."></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt 
                 when = {value || name || surname}
                 message = "Niedokończony formularz! Czy na pewno chcesz opuścić stronę?"
                />
            </div>
            </>
         );
    }
}
 
export default ContactPage;