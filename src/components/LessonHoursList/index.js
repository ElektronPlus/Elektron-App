import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function LessonHoursList(props) {
const lesson = Object.keys(props.data).map((lesson) => {
    return (
        <Text key={lesson} style={styles.text}>{lesson}. {props.data[lesson].start} - {props.data[lesson].end}</Text>
    );
})
    return (<View style={styles.main}>{lesson}</View>)
}

const styles = StyleSheet.create({
    main: {
        marginBottom: 15,
    },
    text: {
        fontSize: 20,
    }
})