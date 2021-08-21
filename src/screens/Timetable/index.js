import React, {useEffect, useState} from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Timetable() {
  const [isLoading, setLoading] = useState(true);
  const [timetableData, setTimetableData] = useState([]);

  useEffect(() => {
    getTimetableData();
  }, []);

  const onRefresh = React.useCallback(() => {
    getTimetableData();
  }, []);

  const getTimetableData = async () => {
    try {
      const response = await fetch('https://beta.elektronplus.pl/timetable');
      const json = await response.json();
      setTimetableData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
            />}>
            <View style={styles.dayLabel}>
              <Text style={styles.text}>Poniedziałek</Text>
            </View>
            <View style={styles.lessonItem}>
              <View style={styles.number}>
                <Text>9.</Text>
              </View>
              <View style={styles.time}>
                <Text>8:00-8:45</Text>
              </View>
              <View style={styles.column}>
                <Text>Prac aplikac-1/2 RS 10 Prac aplikac-2/2 RU W21</Text>
              </View>
            </View>
            <View style={styles.lessonItem}>
              <View style={styles.number}>
                <Text>9.</Text>
              </View>
              <View style={styles.time}>
                <Text>8:00-8:45</Text>
              </View>
              <View style={styles.column}>
                <Text>Prac aplikac-1/2 RS 10 Prac aplikac-2/2 RU W21</Text>
              </View>
            </View>
            <View style={styles.lessonItem} >
              <View style={styles.number}>
                <Text>9.</Text>
              </View>
              <View style={styles.time}>
                <Text>8:00-8:45</Text>
              </View>
              <View style={styles.column}>
                <Text>Prac aplikac-1/2 RS 10 Prac aplikac-2/2 RU W21</Text>
              </View>
            </View>
            
        </ScrollView>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      alignItems: 'center',
      backgroundColor: '#F6F7F9'
    },
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
    column: {
      flex: 6,
      padding: 10,
    },
    time: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    number: {
      flex: 0,
      marginLeft: 6,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftColor: '#65D085',
      borderLeftWidth: 2
    },
    text: {
      color: "white",
    }
  });