import { View, Text, StyleSheet, Image } from "react-native";


export default function App() {
  return (
    <View style={ESTILO.container}>
      <Text>
      <Image source={require("./assets/logo.png")} style={ESTILO.logo}/>
        app na web
      </Text>
    </View>
  )
}

const ESTILO = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 60
  }

})