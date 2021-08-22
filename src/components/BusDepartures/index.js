import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function BusDepartures(props) {
const departures = Object.keys(props.data).map((departure) => {
    return (
        <View style={styles.lessonItem} key={departure}>
        <View style={styles.number}>
          <Text>{props.data[departure].linia}</Text>
        </View>
        <View style={styles.kierunek}>
          <Text>{props.data[departure].kierunek}</Text>
        </View>
        <View style={styles.time}>
          <Text>{props.data[departure].czas}</Text>
        </View>
      </View>
    );
})
    return (<View>{departures}</View>)
}

const styles = StyleSheet.create({
    lessonItem: {
        padding: 4,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1
      },
      time: {
        flex: 1,
        padding: 10,
        alignItems: 'flex-end'
      },
      kierunek: {
        flex: 1,
        padding: 10,
      },
      number: {
        flex: 0,
        marginLeft: 6,
        padding: 10,
      },
})