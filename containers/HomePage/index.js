import React, { Component } from "react";
import { Image } from 'react-native';
import { Container, Header, Button, Left, Text, Body, Right, Icon, Title, Content, Thumbnail, Card, CardItem, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class HomePage extends Component{
    render(){
        return(
            <Container>
                <Header style={{backgroundColor: '#1abc9c'}} androidStatusBarColor='#1abc9c' noShadow>
                    <Left >
                        <Button transparent>    
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{color: '#FFF'}}>Survey</Text>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='close' />
                        </Button>                        
                    </Right>
                </Header>
                <Content contentContainerStyle={{flex: 1}} style={{paddingTop: 30, backgroundColor: '#1abc9c'}}>
                    <Image style={{height: 200, width: 200, alignSelf: 'center', marginBottom: 30}} source={require("../../assets/logo.png")} />
                    <Text style={{alignSelf: 'center', color: '#FFF'}}>Enter Cluster Information</Text>
                    <Form style={{alignItems: 'center', padding: 20,}}>
                        <Item floatingLabel>
                            <Label style={{color: '#FFF'}}>Cluster ID</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label style={{color: '#FFF'}}>Village or Place Name</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button block bordered light style={{alignSelf: 'center', padding: 20}}>
                        <Text>Start the Survey</Text>
                    </Button>                  
                </Content>
            </Container>
        );
    }
}