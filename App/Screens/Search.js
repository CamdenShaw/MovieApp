import React, { Component } from "react"
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Button as ButtonA,
    TouchableHighlight,
    Platform
} from "react-native"
import { Container, Content, Header, Item, Input, Icon, Button } from "native-base"
import axios from "axios"
import Cards from "../Components/Cards"
import { SearchURL } from "../variables/urls"

export default class TopRate extends Component {
    state = {
        text: null,
        movies: null
    }

    _handleSearch = () => {
        const { text } = this.state
        axios({
            method: "GET",
            url: SearchURL(text)
        }).then(({ data }) => this.setState({ movies: data.results }))
    }

    _keyExtractor = item => item.id

    _renderItem = ({ item }) => {
        return <Cards movie={item} key={item.id} />
    }

    componentWillUnmount() {
        this.setState({
            text: null,
            movies: null
        })
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header searchBar rounded>
                    <Item style={{ width: "80%" }}>
                        <Icon name="ios-search" />
                        <Input
                            placeholder="Search"
                            onChangeText={text => this.setState({ text })}
                        />
                        <Icon name="ios-people" />
                    </Item>
                    {Platform.OS === "ios" ? (
                        <Button
                            title="search"
                            transparent
                            onPress={() => this._handleSearch()}
                        >
                            <Text>Search</Text>
                        </Button>
                    ) : (
                        <TouchableHighlight
                            transparent
                            style={styles.ButtonA}
                            title="search"
                            onPress={() => this._handleSearch()}
                        >
                            <Text style={styles.ButtonAText}>Search</Text>
                        </TouchableHighlight>
                    )}
                </Header>
                <Content>
                    <FlatList
                        data={this.state.movies}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                paddingTop: 0
            },
            android: {
                paddingTop: 20
            }
        })
    },
    title: {
        fontSize: 25,
        color: "red"
    },
    ButtonA: {
        paddingTop: 14,
        paddingLeft: 9
    },
    ButtonAText: {
        color: "white",
        fontSize: 16
    }
})
