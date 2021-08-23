import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function NewsTile(props) {
const news = props.data.map((news, index) => {
    return (
        <View style={styles.announcements} key={index}>
          <Text style={styles.titleTextStyle}>{news.title}</Text>
          <View style={styles.contentStyle}>
            <Text style={styles.valueTextStyle}>
              {news.content}
            </Text>
          </View>
          <Text style={styles.footerTextStyle}>{news.date}</Text>
        </View>
      );
})
    return (news)
}
const styles = StyleSheet.create({
    announcements: {
        padding: 24,
        borderRadius: 20,
        marginTop: 15,
        width: '95%',
        backgroundColor: '#fe8f62',
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
      footerTextStyle: {
        textAlign: 'right',
        fontSize: 12,
        color: '#fff',
      },
})
