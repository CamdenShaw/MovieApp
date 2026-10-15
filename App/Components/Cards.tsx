import React, { Component } from "react";
import { Image as RNImage } from "react-native";
import {
  Box,
  HStack,
  VStack,
  Avatar,
  Button,
  Text,
} from "native-base";

export interface Movie {
  poster_path: string;
  title: string;
  original_title: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
  id: string;
}

export const dummyMovie = {
  poster_path: "https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png",
  title: "Test Data",
  original_title: "Testing Data",
  vote_count: 3,
  vote_average: 4,
  release_date: "16/1/2001",
  id: "1234",
}

export interface CardsProps {
  movie: Movie;
}

const reggie = /^https?\:\/\//

export default class Cards extends Component<CardsProps> {
  render() {
    const { movie } = this.props;

    if (!movie?.poster_path || !movie?.title || !movie?.original_title) {
      return null;
    }

    const posterUri = reggie.test(movie.poster_path) ? movie.poster_path : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
      <Box bg="white" rounded="md" shadow={2} overflow="hidden">
        <HStack alignItems="center" space={3} p={3}>
          <Avatar source={{ uri: posterUri }} />
          <VStack flex={1}>
            <Text>{movie.title}</Text>
            <Text color="gray.500">{movie.original_title}</Text>
          </VStack>
        </HStack>

        <RNImage
          source={{ uri: posterUri }}
          style={{ height: 200, width: "100%" }}
          resizeMode="cover"
        />

        <HStack alignItems="center" justifyContent="space-between" p={2}>
          <Button variant="ghost" leftIcon={""}>
            {String(movie.vote_count)}
          </Button>

          <Button variant="ghost" leftIcon={""}>
            {String(movie.vote_average)}
          </Button>

          <Text>{movie.release_date}</Text>
        </HStack>
      </Box>
    );
  }
}