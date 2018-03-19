import React from "react"
import { TabNavigator } from "react-navigation"
import TopRate from "./Screens/TopRate"
import Search from "./Screens/Search"
import NowPlaying from "./Screens/NowPlaying"
import { Icon } from "native-base"

const Router = TabNavigator(
    {
        "Top Rated": { screen: TopRate },
        "Now Playing": { screen: NowPlaying },
        Search: { screen: Search }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                let iconName
                if (routeName === "Top Rated") {
                    iconName = `ios-closed-captioning${focused ? "" : "-outline"}`
                } else if (routeName === "Search") {
                    iconName = `ios-search${focused ? "" : "-outline"}`
                } else if (routeName === "Now Playing") {
                    iconName = `ios-videocam${focused ? "" : "-outline"}`
                }
                return <Icon name={iconName} size={25} color={tintColor} />
            }
        }),
        tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray"
        },
        tabBarPosition: "bottom",
        animationEnabled: true,
        swipeEnabled: true
    }
)

export default Router
