import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SubLessonTile(props) {
    return (
        <View style={styles.announcements}>
          <Text style={styles.titleTextStyle}>{props.day}</Text>
          <View style={styles.contentStyle}>
            <Text style={styles.valueTextStyle}>
              {props.content}
            </Text>
          </View>
        </View>
      )
}
const styles = StyleSheet.create({
    announcements: {
        padding: 24,
        borderRadius: 20,
        marginTop: 15,
        width: '95%',
        backgroundColor: '#2bc3ff',
    },
    titleTextStyle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
    },
    contentStyle: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      valueTextStyle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
      },
})
