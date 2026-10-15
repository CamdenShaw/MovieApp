import { useState, useEffect } from "react"
import {
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    Platform
} from "react-native"
import { Container, Box, Heading, Input, Icon, Button, HStack } from "native-base"
import axios from "axios"
import Cards, { Movie, dummyMovie } from "../Components/Cards"
import { SearchURL } from "../variables/urls"
import { Ionicons } from "@expo/vector-icons"
import { API3 } from "../variables/keys/APIs"

export default () => {
    const [textStr, setText] = useState("")
    const [movies, setMovies] = useState([])

    const _handleSearch = () => {
        (async () => {
            const {data} = await axios({
                method: "GET",
                url: SearchURL(textStr),
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${API3}`
                }
            })
                .catch(err => {return err})
            setMovies(() => data?.results || [dummyMovie])
        })
    }

    const _keyExtractor = (item:Movie) => item.id

    const _renderItem = (obj: { item:Movie }) => {
        return <Cards movie={obj.item} key={obj.item.id} />
    }

    useEffect(() => {
        return () => {
            setText(() => "")
            setMovies(() => [])
        }
    }, [])

    return (
        <Container style={styles.container}>
            <Heading>
                <HStack w="80%">
                    <Input 
                        outlineWidth={0}
                        flex={1}
                        placeholder="Search"
                        value={textStr}
                        onChangeText={text => setText(() => text)}
                        InputLeftElement={
                            <Icon 
                                as={Ionicons}
                                name="search-outline"
                                ml={3}
                                color="gray.500"
                            />
                        }
                        InputRightElement={
                            <Icon 
                                name="people-outline" 
                                as={Ionicons}
                                mr={3}
                                color="gray.500"
                            />
                        }
                    />
                </HStack>
                {Platform.OS === "ios" ? (
                    <Button
                        onPress={() => _handleSearch()}
                    >
                        <Text>Search</Text>
                    </Button>
                ) : (
                    <TouchableHighlight
                        style={styles.ButtonA}
                        onPress={() => _handleSearch()}
                    >
                        <Text style={styles.ButtonAText}>Search</Text>
                    </TouchableHighlight>
                )}
            </Heading>
            <Box>
                <FlatList
                    data={movies}
                    keyExtractor={_keyExtractor}
                    renderItem={_renderItem}
                />
            </Box>
        </Container>
    )
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
