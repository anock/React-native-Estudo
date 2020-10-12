import React, { Fragment, useEffect, useState } from 'react';
import {
    ScrollView,
    FlatList,
} from "react-native";
import lerFotos from './src/Api/feed';
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';
import { Comentarios } from "./src/Components/comentarios"

const App = () => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        lerFotos(setFotos);
    }, [])

    return (

        <FlatList
            data={fotos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
                <Fragment>
                    <Cabecalho
                        nomeUsuario={item.userName}
                        urlImage={item.userURL} />
                    <Foto
                        urlFoto={item.url}
                        descricao={item.description}
                        qntLikes={item.likes}
                    />
                    <Comentarios comentarios={item.comentarios} />
                </Fragment>}
        />

    )
};
export default App;