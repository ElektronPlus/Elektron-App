import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from "styled-components"

export default function TimetableComponent(props) {
    let hours = props.data.godziny
    let monday = props.data.tydzien[0].lekcje
    let tuesday = props.data.tydzien[1].lekcje
    let wednesday =props.data.tydzien[2].lekcje
    let thursday = props.data.tydzien[3].lekcje
    let friday = props.data.tydzien[4].lekcje

    const LessonItem = styled.View`
    borderBottomColor: ${props => props.theme.text}
    `

    const StyledText = styled.Text`
    color: ${props => props.theme.text}
    `

    const mondayLessons = monday.map((lesson, i) => {
      return (
        <LessonItem style={styles.lessonItem} key={lesson.index}>
          <View style={styles.number}>
            <StyledText>{lesson.index}.</StyledText>
          </View>
          <View style={styles.time}>
            <StyledText>{hours[i]}</StyledText>
          </View>
          <View style={styles.lesson}>
            <StyledText>{lesson.data}</StyledText>
          </View>
        </LessonItem>
      );
    })

    const tuesdayLessons = tuesday.map((lesson, i) => {
      return (
        <LessonItem style={styles.lessonItem} key={lesson.index}>
          <View style={styles.number}>
            <StyledText>{lesson.index}.</StyledText>
          </View>
          <View style={styles.time}>
            <StyledText>{hours[i]}</StyledText>
          </View>
          <View style={styles.lesson}>
            <StyledText>{lesson.data}</StyledText>
          </View>
        </LessonItem>
      );
    })

    const wednesdayLessons = wednesday.map((lesson, i) => {
      return (
        <LessonItem style={styles.lessonItem} key={lesson.index}>
          <View style={styles.number}>
            <StyledText>{lesson.index}.</StyledText>
          </View>
          <View style={styles.time}>
            <StyledText>{hours[i]}</StyledText>
          </View>
          <View style={styles.lesson}>
            <StyledText>{lesson.data}</StyledText>
          </View>
        </LessonItem>
      );
    })

    const thursdayLessons = thursday.map((lesson, i) => {
      return (
        <LessonItem style={styles.lessonItem} key={lesson.index}>
          <View style={styles.number}>
            <StyledText>{lesson.index}.</StyledText>
          </View>
          <View style={styles.time}>
            <StyledText>{hours[i]}</StyledText>
          </View>
          <View style={styles.lesson}>
            <StyledText>{lesson.data}</StyledText>
          </View>
        </LessonItem>
      );
    })

    const fridayLessons = friday.map((lesson, i) => {
      return (
        <LessonItem style={styles.lessonItem} key={lesson.index}>
          <View style={styles.number}>
            <StyledText>{lesson.index}.</StyledText>
          </View>
          <View style={styles.time}>
            <StyledText>{hours[i]}</StyledText>
          </View>
          <View style={styles.lesson}>
            <StyledText>{lesson.data}</StyledText>
          </View>
        </LessonItem>
      );
    })

    return (
    <View style={{width: '100%'}}>
            <View style={styles.dayLabel}>
              <Text style={styles.text}>Poniedziałek</Text>
            </View>
            {mondayLessons}

            <View style={styles.dayLabel}>
              <Text style={styles.text}>Wtorek</Text>
            </View>
            {tuesdayLessons}

            <View style={styles.dayLabel}>
              <Text style={styles.text}>Środa</Text>
            </View>
            {wednesdayLessons}

            <View style={styles.dayLabel}>
              <Text style={styles.text}>Czwartek</Text>
            </View>
            {thursdayLessons}

            <View style={styles.dayLabel}>
              <Text style={styles.text}>Piątek</Text>
            </View>
            {fridayLessons}
  </View>
  )
}

const styles = StyleSheet.create({
  dayLabel: {
    padding: 8,
    width: '100%',
    backgroundColor: '#3960CF',
  },
  lessonItem: {
    padding: 4,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  lesson: {
    flex: 6,
    padding: 10,
    justifyContent: 'center',
  },
  time: {
    flex: 3,
    padding: 10,
    justifyContent: 'center',
  },
  number: {
    flex: 0,
    marginLeft: 6,
    padding: 10,
    justifyContent: 'center',
    borderLeftColor: '#3960CF',
    borderLeftWidth: 2
  },
  text: {
    color: "white",
  }
})
