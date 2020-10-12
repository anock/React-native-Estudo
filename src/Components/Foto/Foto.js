import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { curtirFoto, ImgLike } from '../../Api/curtidas';

import estilo from './estilo';

const Foto = ({ urlFoto, descricao, qntLikes }) => {
    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLlikes] = useState(qntLikes)

    const clicouCurtir = () => {
        const [novoEstCurtir, qnt] = curtirFoto(curtiu, likes)
        setLlikes(qnt)
        setCurtiu(novoEstCurtir)
    }

    return (
        <Fragment>

            <Image
                source={{ uri: urlFoto }}
                style={estilo.imagem}
            />
            <Text>{descricao}</Text>
            <View style={estilo.ViewLike}>
                <TouchableOpacity onPress={curtirFoto}>
                    <Image source={ImgLike(curtiu)}
                        style={estilo.like}
                    />
                </TouchableOpacity>
                <Text>Curtidas{likes}</Text>
            </View>
        </Fragment>
    )
};



export default Foto;