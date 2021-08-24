import React, {useEffect, useState} from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TimetableComponent from '../../components/TimetableComponent';
import styled from "styled-components"

export default function Timetable() {
  const [isLoading, setLoading] = useState(true);
  const [timetableData, setTimetableData] = useState([]);

  const [timetable, setTimetable] = useState([]);
  const [timetableOpen, setTimetableOpen] = useState(false);
  const [timetableValue, setTimetableValue] = useState();

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
      let grades = json.legend.oddział.options
      let teachers = json.legend.nauczyciel.options
      let classrooms = json.legend.sala.options
      let gradesArray = [{label: '-------- Klasy --------', value: 'klasy', disabled: 'disabled'}]
      let teachersArray = [{label: '-------- Nauczyciele --------', value: 'nauczyciele', disabled: 'disabled'}]
      let classroomsArray = [{label: '-------- Sale --------', value: 'sale', disabled: 'disabled'}]
      Object.keys(grades).map((index) => {
        gradesArray.push({label: grades[index].name, value: "o"+grades[index].value})
      })
      Object.keys(teachers).map((index) => {
        teachersArray.push({label: teachers[index].name, value: "n"+teachers[index].value})
      })
      Object.keys(classrooms).map((index) => {
        classroomsArray.push({label: classrooms[index].name, value: "s"+classrooms[index].value})
      })
      setTimetable(gradesArray.concat(teachersArray, classroomsArray))

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const StyledView = styled.ScrollView`
  backgroundColor: ${props => props.theme.background}
  `

  const getTimetable = (id) => {
    setSelectedTimetable(timetableData.plany[id])
  }

    return (
        <SafeAreaView style={styles.container}>
          <DropDownPicker
            theme="DARK"
            style={{height: 60}}
            placeholder="Wybierz klasę/ nauczyciela/ sale"
            translation={{
              SEARCH_PLACEHOLDER: "Wyszukaj..."
            }}
            searchable={true}
            open={timetableOpen}
            value={timetableValue}
            items={timetable}
            maxHeight={350}
            setOpen={setTimetableOpen}
            setValue={setTimetableValue}
            onChangeValue={(value) => {
              getTimetable(value);
            }}/>
        <StyledView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
            />}>
              
            {selectedTimetable ? <TimetableComponent data={selectedTimetable} /> : null}
        </StyledView>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      alignItems: 'center'
    },
  });