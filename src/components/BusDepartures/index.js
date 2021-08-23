import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import styled from "styled-components"

export default function BusDepartures(props) {

  const LessonItem = styled.View`
  borderBottomColor: ${props => props.theme.text}
  `
  const StyledText = styled.Text`
  color: ${props => props.theme.text}
  `

  const departures = Object.keys(props.data).map((departure) => {
    return (
      <LessonItem style={styles.lessonItem} key={departure}>
        <View style={styles.number}>
          <StyledText>{props.data[departure].linia}</StyledText>
        </View>
        <View style={styles.kierunek}>
          <StyledText>{props.data[departure].kierunek}</StyledText>
        </View>
        <View style={styles.time}>
          <StyledText>{props.data[departure].czas}</StyledText>
        </View>
      </LessonItem>
    );
  })
  return (<ScrollView>{departures}</ScrollView>)
}

const styles = StyleSheet.create({
  lessonItem: {
    padding: 4,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  time: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-end'
  },
  kierunek: {
    flex: 4,
    padding: 10,
  },
  number: {
    flex: 0,
    marginLeft: 5,
    padding: 10,
  },
})