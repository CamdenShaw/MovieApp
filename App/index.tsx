import { useState, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Redirect } from "expo-router"


export default () => {
    return <Redirect href="/(tabs)" />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})
