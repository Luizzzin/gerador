import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/index';
import { PaginaSenhas } from './pages/paginaSenhas';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="paginaSenhas" component={PaginaSenhas} />
        </Tab.Navigator>
    )
}