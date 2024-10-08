import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={[styles.mainContainer]}>
      <Text>App</Text>
    </View>
  )
}

export default App;

const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"yellow"
  }
})