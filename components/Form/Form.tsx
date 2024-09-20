import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";

export function Form() {
    const[side, setSide] = useState(0);
    const [area, setArea] = useState(0)

    function calcularArea(){
        let result = ((side ** 2) * Math.sqrt(3)) / 4;

        setArea(result);
    }

    return(
        <View>
            <View>
                <Text>Lado:</Text>
                <TextInput
                    onChangeText={setSide}
                    placeholder="Digite o lado em cm"
                    inputMode="numeric"
                    value={side}

                />
                <Pressable
                title = "Calcular"
                onPress={  ()=> calcularArea()}
                />
            </View>
        </View>
    );
}
