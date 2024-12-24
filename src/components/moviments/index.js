import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Moviments = ({data})=> {
  return (
    <TouchableOpacity style={styles.container}>
         <Text style={styles.date}> {data.date} </Text>

         <View style={styles.content}>
            <Text style={styles.label}> {data.label} </Text>
            <Text style={data.type === 'receitas' ? styles.value : styles.expense}>

                 {data.type === 'receitas' ? `R$ ${data.value}`: `R$ -${data.value}`} 
            </Text>

           

         </View>
    </TouchableOpacity>
   
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:20,
        marginBottom:24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada',

        
        
    },
    date: {
        fontSize: 16,
        color: '#fff',
        marginTop:5,
        marginBottom: 8,

    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:2,
        marginBottom:8,

    },
    label:{
        fontSize: 16,
        color: '#fff',
         fontWeight:'bold'
    },
    value:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight:'bold'
    },
    expense:{
        fontSize:16,
        color:'#ff0000',
        fontWeight:'bold',
    }
})
