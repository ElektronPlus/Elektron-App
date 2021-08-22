import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from "styled-components";

export default function LessonHoursList(props) {

const StyledView = styled.View`
marginBottom: 15,
backgroundColor: ${props => props.theme.backgroundAlt}
`
const StyledText = styled.Text`
color: ${props => props.theme.text}
`

const lesson = Object.keys(props.data).map((lesson) => {
    return (
        <StyledText key={lesson} style={styles.text}>{lesson}. {props.data[lesson].start} - {props.data[lesson].end}</StyledText>
    );
})
    return (<StyledView style={styles.main}>{lesson}</StyledView>)
}

const styles = StyleSheet.create({
    main: {
        marginBottom: 15,
    },
    text: {
        fontSize: 20,
    }
})