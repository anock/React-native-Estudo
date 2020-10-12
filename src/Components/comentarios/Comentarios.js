import React, { Fragment, useEffect, useState } from 'react';
import {
    FlatList,
    Text,
    TextInput,
    Image,
    View,
    TouchableOpacity

} from "react-native";

import estilo from './estilo'

const Comentarios = ({ comentarios }) => {
    const [estComentario, setComentario] = useState(comentarios)

    const adicionarComenatrio = () => {
        console.warn(conteudoCampoInput)
        campoInput.clear();

        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "Bugan"
        }
        setComentario([...estComentario, novoComentario])
    }
    let conteudoCampoInput = "";
    let campoInput;
    return (
        <Fragment>
            <FlatList
                data={estComentario}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={estilo.inline}>
                        <Text>{item.userName} -- </Text>
                        <Text>{item.text}</Text>
                    </View>
                }
            />
            <View style={estilo.inline}>
                <TextInput
                    ref={textInput => campoInput = textInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                    placeholder={"Deixe seu comentário"}
                    style={{ flex: 1 }}
                />
                <TouchableOpacity onPress={adicionarComenatrio}>

                    <Image source={require("../../../res/img/send.png")}

                        style={estilo.imgSend}

                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
}

export default Comentarios;