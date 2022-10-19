import { useState } from 'react';
import { View, StyleSheet, Button } from "react-native"
import * as Speech from 'expo-speech';

export default function Audio(){
    const [text, setText] = useState('Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. João capitulo: 3 Versiculo: 16','ola');

    function speak(){
        Speech.speak(text, {
            language:'pt-BR'
        })
    }
    
    function pause(){
        Speech.pause ({

        })
    }

    function resume(){
        Speech.resume ({

        })
    }


    function stop(){
        Speech.stop({

        })
    }


    return(
        <View style={style.Button}>
            <text>REPRODUTOR DE AUDIO</text>
            //////////////////////////////////////////////////
            <Button title="PLAY" onPress={speak}/>
            ----------------------------------------
            <Button title="PAUSE" onPress={pause}/>
            ----------------------------------------
            <Button title="RESUME" onPress={resume}/>
            ----------------------------------------
            <Button title="STOP" onPress={stop}/>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

    });