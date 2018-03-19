import React, { Component } from "react"
import {
    Card,
    CardItem,
    Body,
    Thumbnail,
    Button,
    Icon,
    Right,
    Left,
    Text
} from "native-base"
import { Image } from "react-native"

export default class Cards extends Component {
    render() {
        const { movie } = this.props
        return (
            !!movie.poster_path &&
            !!movie.title &&
            !!movie.original_title && (
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={{
                                    uri: `https://image.tmdb.org/t/p/w500/${
                                        movie.poster_path
                                    }`
                                }}
                            />
                            <Body>
                                <Text>{movie.title}</Text>
                                <Text note>{movie.original_title}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={{
                                uri: `https://image.tmdb.org/t/p/w500/${
                                    movie.poster_path
                                }`
                            }}
                            style={{ height: 200, width: null, flex: 1 }}
                        />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>{movie.vote_count}</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>{movie.vote_average}</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>{movie.release_date}</Text>
                        </Right>
                    </CardItem>
                </Card>
            )
        )
    }
}
