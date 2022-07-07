import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details',{name:'Stéphen'})}
        />
      </View>
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({})