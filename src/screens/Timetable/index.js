import React, {useEffect, useState} from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TimetableComponent from '../../components/TimetableComponent';

export default function Timetable() {
  const [isLoading, setLoading] = useState(true);
  const [timetableData, setTimetableData] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [classrooms, setClassrooms] = useState();
  const [teachers, setTeachers] = useState();
  const [grades, setGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(null);
  let plan;

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

  const getTimetable = (type, id) => {
    switch (type) {
      case "grade":
        setSelectedGrade(id)
        break;
      case "teacher":
        
        break;
      case "classroom":
        
        break;
    }
  }

    return (
        <SafeAreaView style={styles.container}>
        
      <DropDownPicker
      theme="DARK"
      open={open}
      value={value}
      items={grades}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={(value) => {
        getTimetable("grade", value);
      }}/>
      

        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
            />}>
              
            {selectedGrade ? <TimetableComponent data={timetableData.plany["o"+value]} /> : null}
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