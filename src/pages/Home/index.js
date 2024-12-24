
import {  FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Balance } from '../../components/Balance';
import { Moviments } from '../../components/moviments';

const lista = [
    {
        id:1, label: 'conta de luz', value:'220.00', date:'05/01/2025', type: 'despesas'
    },
    {
        id:2, label: 'Pix cliente tal', value:'300.00', date:'22/12/2024', type: 'receitas'
    },
    {
        id:3, label: 'conta de água', value:'150.00', date:'05/01/2025', type: 'despesas'
    },
    {
        id:4, label: 'Salário', value:'4.300.00', date:'05/01/2025', type: 'receitas'
    }


   
]

export default function Home() {
  return (

    <View style={styles.container}>
        <Header name= 'Osmar Mendes'/>
        <Balance saldo="3.147,25" gastos="-876,33"/>
       
       <Text style={styles.title}>Últimas movimentações</Text>
       <FlatList 
        style={styles.list}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments data={item}/>}
       
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#fff',
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff',
    marginLeft:14,
    marginTop:18,
  },
  list:{
    marginStart:14,
    marginEnd:14,

  },
 
});
