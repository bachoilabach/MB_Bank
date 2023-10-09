import React, { useState } from "react";
import {View,Text,TouchableOpacity,StyleSheet,Button} from 'react-native';

function Submit ({buttonText}){
    const [name, setName] = useState(buttonText)
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{paddingTop: 6,paddingBottom:6}}>
                <Button title={name} fontSize={'18'} color={'#fff'} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e27ce',
        borderRadius: 5
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    textButton : {
        fontSize: 15,
        color: '#fff',
    }
})
export default Submit