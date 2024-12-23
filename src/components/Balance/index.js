import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const Balance = ({saldo, gastos}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.balanceTitle}>Saldo</Text>
        <View style={styles.content}>
            <Text style={styles.balanceValor}>R$</Text>
            <Text style={styles.balance}>{saldo}</Text>

        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.balanceTitle}>Gastos</Text>
        <View style={styles.content}>
            <Text style={styles.balanceValor}>R$</Text>
            <Text style={styles.expenses}>{gastos}</Text>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingEnd:18,
        paddingStart:18,
        marginTop:-24,
        marginStart:14,
        marginEnd:14,
        borderRadius: 4,
        paddingTop:22,
        paddingBottom:22,
        zIndex:99,
    },
    item: {

    },
    balanceTitle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',

    },
    content:{
        flexDirection:'row',
        alignItems:'center',
    },
    balanceValor:{
        color: '#DADADA',
        marginRight:6,


    },
    balance:{
        fontSize: 22,
        color:"#2ecc71"
    },
    expenses:{
        fontSize:22,
        color:'#e74c3c',
    }
})