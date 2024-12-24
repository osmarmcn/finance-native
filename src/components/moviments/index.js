import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Moviments = ({data})=> {
  return (
    <TouchableOpacity style={StyleSheet.container}>
         <Text style={styles.date}> {data.date} </Text>

         <View style={styles.content}>
            <Text style={styles.title}> {data.label} </Text>
            <Text style={styles.value}>R$: {data.value} </Text>

         </View>
    </TouchableOpacity>
   
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom:24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada',
        
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:2,
        marginBottom: 8,

    },
    date:{
        color:'#dadada',
        fontWeight:'bold',
    },
    title:{
        fontWeight:'bold',
        fontSize: 16,
        color:'#dadada'
    }
})
