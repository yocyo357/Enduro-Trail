
import React, { Component } from 'react';
import {
    View,
  } from 'react-native';
  import HomeHeader from '../../Headers/HomeHeader'
  import { Container, Header, Content, Button, Text, Icon, Left, Right, Body, Item, Input } from 'native-base';
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            races:[
                {id:1, race_title: "", race_type: "", race_category_open:"",race_address:"",race_no_of_stage:"",race_info:"",race_no_of_rider_limit:""}
            ]
        };
    }
    render(){
        return(
            <Container>
                <HomeHeader/>
                <Content>
                    
                </Content>
            </Container>
        )
    }
}

export default Home