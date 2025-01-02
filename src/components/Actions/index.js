import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';

export const Action = ()=>{
    return(
        <ScrollView style={styles.container} horizontal={true} 
        showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="addfolder" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="tagso" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>

           
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight:84,
        marginBottom:14,
        marginTop:14,
        paddingEnd:14,
        paddingStart:14,
    },
    actionButton:{
        alignItems:'center',
        marginRight: 40,
    },
    areaButton:{
        backgroundColor:'#ecf0f1',
        height:60,
        width:60,
        borderRadius: 30,
        justifyContent:'center',
        alignItems: 'center',
    },
    labelButton:{
        marginTop:4,
        color:'#fff',
        textAlign: 'center',
        fontWeight:'bold',
    }
})