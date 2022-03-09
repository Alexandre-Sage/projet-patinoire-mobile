import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Component} from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
      fetch(`http://localhost:4000/inscription/countriesInscriptionForm`)
      .then(response => response.json())
      .then(data => this.setState({data: [data]}));
  } render(){
      console.log(this.state.data);
      const textJsx= this.state.data.map((countries, key)=>(
          countries.map((country, key)=>(
            <View>
                <Text>{country.countryName}</Text>
            </View>
        ))
    ))
      console.log(textJsx);
      return(
        <View>
            <Text>Hello§</Text>
                {textJsx}
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
