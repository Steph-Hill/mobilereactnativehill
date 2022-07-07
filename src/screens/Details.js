import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({ navigation,route }) => {
   console.log(route.params)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Details... again"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      );
    }

export default DetailsScreen