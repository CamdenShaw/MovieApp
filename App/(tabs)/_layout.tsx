import { Tabs } from "expo-router";
import { Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Router = () => {
    return <Tabs
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color}) => {
                let iconName;
                if (route.name === "TopRate") {
                    iconName = `star-${focused ? "sharp" : "outline"}`
                } else if (route.name === "Search") {
                    iconName = `search${focused ? "" : "-outline"}`
                } else if (route.name === "index") {
                    iconName = `videocam${focused ? "" : "-outline"}`
                }
                return <Icon name={iconName} ml={4} as={Ionicons} color="gray.500" />
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
        })}
    >
        <Tabs.Screen name="index" options={{ title: "Now Playing"}} />
        <Tabs.Screen name="Search" options={{ title: "Search"}} />
        <Tabs.Screen name="TopRate" options={{ title: "Top Rated"}} />
    </Tabs>
}

export default Router
