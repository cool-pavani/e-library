import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class SearchScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Search Screen</Text>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#4FC3F7",
        alignItems: "center",
        justifyContent:"center"

    },
    textStyle:{
        color:"white",
        fontSize:40
    }
    
})