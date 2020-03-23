import React, {Component} from 'react'
import { render } from "react-dom";
import axios from 'axios';


class postraces extends Component { 
    state = {
        raceTitle: ''
    };

    handleChange = event => {
        this.setState({ races: event.target.value })
    }

    handleOnClickSubmit = event => {
        event.preventDefault();

        const races = {
            raceTitle: this.state.raceTitle
        }

        axios
            .post(`https://endurotrail-d806b.firebaseio.com/races`, { races })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <form onSubmit={this.handleOnClickSubmit}>
                <input type="text" name="races" onChange={this.handleChange}/>

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default postraces;