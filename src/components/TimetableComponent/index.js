import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TimetableComponent(props) {
    let hours = props.data.godziny
    let monday = props.data.tydzien[0].lekcje
    let tuesday = props.data.tydzien[1].lekcje
    let wednesday =props.data.tydzien[2].lekcje
    let thursday = props.data.tydzien[3].lekcje
    let friday = props.data.tydzien[4].lekcje

    const mondayLessons = monday.map((lesson, i) => {
      return (
        <View style={styles.lessonItem} key={lesson.index}>
          <View style={styles.number}>
            <Text>{lesson.index}.</Text>
          </View>
          <View style={styles.time}>
            <Text>{hours[i]}</Text>
          </View>
          <View style={styles.lesson}>
            <Text>{lesson.data}</Text>
          </View>
        </View>
      );
    })

    const tuesdayLessons = tuesday.map((lesson, i) => {
      return (
        <View style={styles.lessonItem} key={lesson.index}>
          <View style={styles.number}>
            <Text>{lesson.index}.</Text>
          </View>
          <View style={styles.time}>
            <Text>{hours[i]}</Text>
          </View>
          <View style={styles.lesson}>
            <Text>{lesson.data}</Text>
          </View>
        </View>
      );
    })

    const wednesdayLessons = wednesday.map((lesson, i) => {
      return (
        <View style={styles.lessonItem} key={lesson.index}>
          <View style={styles.number}>
            <Text>{lesson.index}.</Text>
          </View>
          <View style={styles.time}>
            <Text>{hours[i]}</Text>
          </View>
          <View style={styles.lesson}>
            <Text>{lesson.data}</Text>
          </View>
        </View>
      );
    })

    const thursdayLessons = thursday.map((lesson, i) => {
      return (
        <View style={styles.lessonItem} key={lesson.index}>
          <View style={styles.number}>
            <Text>{lesson.index}.</Text>
          </View>
          <View style={styles.time}>
            <Text>{hours[i]}</Text>
          </View>
          <View style={styles.lesson}>
            <Text>{lesson.data}</Text>
          </View>
        </View>
      );
    })

    const fridayLessons = friday.map((lesson, i) => {
      return (
        <View style={styles.lessonItem} key={lesson.index}>
          <View style={styles.number}>
            <Text>{lesson.index}.</Text>
          </View>
          <View style={styles.time}>
            <Text>{hours[i]}</Text>
          </View>
          <View style={styles.lesson}>
            <Text>{lesson.data}</Text>
          </View>
        </View>
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
    backgroundColor: '#007AFF',
  },
  lessonItem: {
    padding: 4,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderBottomColor: 'black',
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
    borderLeftColor: '#65D085',
    borderLeftWidth: 2
  },
  text: {
    color: "white",
  }
})
