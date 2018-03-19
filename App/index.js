import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Router from "./Router"
import { Font, AppLoading } from "expo"

export default class App extends React.Component {
    state = {
        loading: true
    }
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        })
        this.setState({ loading: false })
    }
    render() {
        return this.state.loading ? <AppLoading /> : <Router />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})
