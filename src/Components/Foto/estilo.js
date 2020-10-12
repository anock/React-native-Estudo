
import React from 'react'
import { StyleSheet, Dimensions } from "react-native"

const cubo = Dimensions.get("screen").width

const estilo = StyleSheet.create({

    imagem: {
        width: cubo,
        height: cubo
    },
    like: {
        width: 40,
        height: 40,
        marginLeft: 10

    },

    ViewLike: {
        flexDirection: "row",
        alignItems: "center"

    }

})

export default estilo;