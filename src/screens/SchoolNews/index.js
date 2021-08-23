import React, {useEffect, useState} from 'react';
import { RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NewsTile from '../../components/NewsTile';
import styled from "styled-components";

export default function SchoolNews() {
  const NewsScrollView = styled.ScrollView`
  background: ${props => props.theme.background}
`
  const [isLoading, setLoading] = useState(true);
  const [schoolNewsData, setSchoolNewsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = React.useCallback(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch('https://beta.elektronplus.pl/schoolNews');
      const json = await response.json();
      setSchoolNewsData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

    return (
        <SafeAreaView style={styles.container}>
        <NewsScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
            />}>

            {schoolNewsData ? (<NewsTile data={schoolNewsData}/>) : (null) }
            
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