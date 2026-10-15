import { Component, useState, useEffect } from "react"
import { StyleSheet, Dimensions } from "react-native"
import axios from "axios"
import Cards, { Movie, dummyMovie } from "../Components/Cards"
import { URL } from "../variables/urls"
import { FlatList } from "react-native"
import { API3 } from "../variables/keys/APIs"

export default () => {
    const [screenHeight, setScreenHeight] = useState(Dimensions.get("screen").height)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async () => {
            const {data} = await axios({
                method: "GET",
                url: URL("now_playing"),
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${API3}`
                }
            })
                .catch(message => {return message})
            setMovies(() => data?.results || [dummyMovie])
        })()
        
    }, [])

    const _keyExtractor = (item: Movie) => item.id

    const _renderItem = (obj: {item: Movie}) => {
        return <Cards movie={obj.item} key={obj.item.id} />
    }

    return (
        <FlatList
            style={screenHeight === 812 && styles.body}
            data={movies}
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
        />
    )
}

const styles = StyleSheet.create({
    body: {
        marginTop: 30
    }
})
