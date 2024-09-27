import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native";

export function Form() {
    const[height, setHeight] = useState('');
    const[weight, setWeight] = useState('');
    const[imc, setImc] = useState ('');

    function imcCalculator()
    {
        let totalImc = (weight/(height*height)).toFixed(2)

        setImc(totalImc)
    }

    function validatorImc()
    {
        if(weight !='' && height !=''){
            imcCalculator()
            setHeight('')
            setWeight('')
        }

    }
    return(
        <View>
            <View>
            <Text>Altura:</Text>
            <TextInput
                placeholder="Ex. 1.75"
                value={height}
            />
            <text>Peso:</text>
            <TextInput
            placeholder="Ex. 67.5"
            value={weight}
            />
            <Pressable
            onPress={() => validatorImc()}>
                

                <text>Calcular</text>
            </Pressable>
            <Text>{imc}</Text>
            </View>
        </View>
    );
}
