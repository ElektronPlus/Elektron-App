import React, {useEffect, useState} from 'react';
import { RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styled from "styled-components";
import SubLessonTile from '../../components/SubLessonTile';

export default function SubLessons() {
  const NewsScrollView = styled.ScrollView`
  background: ${props => props.theme.background}
`
  const [isLoading, setLoading] = useState(true);
  const [subLessons, setSubLessons] = useState(null);
  const [nextDaySubLessons, setNextDaySubLessons] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = React.useCallback(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch('https://beta.elektronplus.pl/subLessons');
      const json = await response.json();
      setSubLessons(json);
      if(json.nextDaySubLessonsDay != ""){
        setNextDaySubLessons(json)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const StyledText = styled.Text`
    color: ${props => props.theme.text}
    `

    return (
        <SafeAreaView style={styles.container}>
        <NewsScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
              tintColor='#b8b8b8'
            />}>
            {subLessons ? <SubLessonTile day={subLessons.todaySubLessonsDay} content={subLessons.todaySubLessons}/> : null}
            {nextDaySubLessons ? <SubLessonTile day={subLessons.nextDaySubLessonsDay} content={subLessons.nextDaySubLessons}/> : null}
            <View style={styles.bottomSpace}></View>
        </NewsScrollView>
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
    bottomSpace: {
        paddingVertical: 20
    }
  });