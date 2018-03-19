import React, { Component } from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import { Icon } from "native-base"
import axios from "axios"
import Cards from "../Components/Cards"
import { URL } from "../variables/urls"
import { FlatList } from "react-native-gesture-handler"

export default class NowPlaying extends Component {
    state = {
        screenHeight: Dimensions.get("screen").height,
        movies: null
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: URL("now_playing")
        }).then(({ data }) => this.setState({ movies: data.results }))
    }

    _keyExtractor = item => item.id

    _renderItem = ({ item }) => {
        return <Cards movie={item} key={item.id} />
    }

    render() {
        return (
            <FlatList
                style={this.state.screenHeight === 812 && styles.body}
                data={this.state.movies}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    body: {
        marginTop: 30
    }
})
