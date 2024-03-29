import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/index';
import { PaginaSenhas } from './pages/paginaSenhas';
import { Ionicons } from '@expo/vector-icons/';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={35} color={"#392de9"} name="home" />)
                        }
                        return (<Ionicons size={25} color={"#392de9"} name="home-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="paginaSenhas"
                component={PaginaSenhas}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={35} color={"#392de9"} name="lock-closed" />)
                        }
                        return (<Ionicons size={25} color={"#392de9"} name="lock-closed-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}