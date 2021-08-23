import React, {useEffect, useState} from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TimetableComponent from '../../components/TimetableComponent';

export default function Timetable() {
  const [isLoading, setLoading] = useState(true);
  const [timetableData, setTimetableData] = useState([]);

  const [grades, setGrades] = useState([]);
  const [gradesOpen, setGradesOpen] = useState(false);
  const [gradesValue, setGradesValue] = useState();

  const [selectedTimetable, setSelectedTimetable] = useState(null);

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
      let klasy = []
      Object.keys(json.legend.oddział.options).map((index) => {
        klasy.push({label: json.legend.oddział.options[index].name, value: json.legend.oddział.options[index].value})
      })
      setGrades(klasy)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const getTimetable = (id) => {
    setSelectedTimetable(timetableData.plany["o"+id])
  }

    return (
        <SafeAreaView style={styles.container}>
          <DropDownPicker
            theme="DARK"
            open={gradesOpen}
            value={gradesValue}
            items={grades}
            setOpen={setGradesOpen}
            setValue={setGradesValue}
            onChangeValue={(value) => {
              getTimetable(value);
            }}/>

        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
            />}>
              
            {selectedTimetable ? <TimetableComponent data={selectedTimetable} /> : null}
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
  });