import React, {useEffect, useState} from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import NewsTile from '../../components/NewsTile';

export default function SchoolNews() {
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
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={onRefresh}
            />}>

            {schoolNewsData ? (<NewsTile data={schoolNewsData}/>) : (null) }
            
            <View style={styles.bottomSpace}></View>
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
    bottomSpace: {
        paddingVertical: 20
    }
  });