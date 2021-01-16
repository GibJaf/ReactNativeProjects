import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const Screen1 = ({ navigation }) => {
    return (
        <View>
            <Text> SCREEEN 1 </Text>
            <Button
                onPress={() => navigation.navigate('Screen2')}
                title="Go to Screen 2"
            />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default Screen1;