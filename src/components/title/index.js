import React from "react"
import { View, Text } from "react-native"

export default function Title(){
    return(
        <View>
            <Text>Projeto ATV03</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'space-between',

    },
})