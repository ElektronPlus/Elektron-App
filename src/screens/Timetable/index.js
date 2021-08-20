import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default function Timetable() {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Timetable
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})