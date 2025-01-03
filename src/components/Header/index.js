import React from "react"
import {  StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import {Feather} from '@expo/vector-icons'
import { MotiText, MotiView } from "moti"

const statusBarheight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export const Header = ({name}) =>{
    return (
        <View style={styles.container}>
            <MotiView 
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0
                }}
                animate={{
                    translateY: 0,
                    opacity: 1,
                }}
                transition={{duration: 500, type:'timing', delay:300,}}
            
            
            >
                <MotiText 
                    style={styles.username}
                    from={{
                        translateX:-300,
                        
                    }}
                    animate={{
                        translateX:0,
                        duration:600,
                        delay:800,
                    }}
                >
                    {name}
                </MotiText>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={24} color="white" />
                </TouchableOpacity>
            </MotiView >
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#8000ff',
        paddingTop: statusBarheight,
        flexDirection:'row',
        paddingStart:16,
        paddingEnd:16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    username: {
        color: 'white',
        fontSize: 18,
        fontWeight:'bold'
    },
    buttonUser:{
        width:44,
        height:44,
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 44 /2,


    }
})