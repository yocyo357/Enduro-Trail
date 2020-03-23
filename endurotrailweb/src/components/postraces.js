import React, { Component } from 'react'
import { render } from "react-dom";
import axios from 'axios';
import firebase, { storage } from 'firebase'
import { config } from '../Firebase/index'

if (!firebase.apps.length) {
    firebase.initializeApp(config())
}
class postraces extends Component {
    state = {
        raceTitle: '',
        selectedFile: null
    };
   handleOnclickSubmit = (email, fname, lname) => {

        //push og data
        firebase.database().ref('test/').push({
            email,  //mga paramerter ni sya dre
            fname,  //..
            lname   //..
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })



        //upload picture
        const { selectedFile } = this.state
        const uploadTask = firebase.storage().ref(`images/${selectedFile.name}`).put(selectedFile)
        uploadTask.on('state_changed',
            (error) => {
                console.log(error)
            },

            //getPicture
            () => {
                firebase.storage().ref('images').child(selectedFile.name).getDownloadURL().then(url => {
                    console.log(url)
                })
            })


    }


    handleChange = event => {
        this.setState({ races: event.target.value })
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })

    }
    componentDidMount() {
        // this.writeUserData('asdas','asdasd','asdasd')
    }
    render() {
        return (
            <div>
                <input type="text" name="races" onChange={this.handleChange} />
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={() => this.writeUserData('ssdd', 'assdd', 'asdsad')} type="submit">Submit</button>
            </div>
        );
    }
}

export default postraces;