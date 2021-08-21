import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import * as Progress from 'react-native-progress';
import LessonTile from '../../components/LessonTile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faNewspaper, faUmbrellaBeach, faLaughBeam } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [homeApi, setHomeApi] = useState();

  useEffect(() => {
    getHomeData();
  }, []);

  const onRefresh = React.useCallback(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    let jsonResponse;
    try {
      const response = await fetch('https://beta.elektronplus.pl/home');
      jsonResponse = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      setHomeApi(jsonResponse);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        
        <RNBounceable style={styles.announcements}>
          <Text style={styles.titleTextStyle}>Ogłoszenie</Text>
          <View style={styles.iconContainerStyle}>
          <FontAwesomeIcon 
                icon={ faNewspaper } 
                size={30}
                color={'#fff'}/>
          </View>
          <View style={styles.contentStyle}>
            {homeApi ? <Text style={styles.valueTextStyle}>{homeApi.news[0].content}</Text> : null}
            {homeApi ? <Text style={styles.newsFooterTextStyle}>{homeApi.news[0].time}</Text> : null}
          </View>
        </RNBounceable>

        <View style={{flexDirection: 'row'}}>
          <RNBounceable style={styles.luckyNumberStyle}>
            <Text style={styles.titleTextStyle}>Szczęśliwy numerek</Text>
            <View style={styles.iconContainerStyle}>
              <FontAwesomeIcon 
                  icon={ faLaughBeam } 
                  size={30}
                  color={'#fff'}/>
            </View>
            <View style={styles.contentStyle}>
              {homeApi ? <Text style={styles.numberInfoTextStyle}>{homeApi.luckyNumber.info}</Text> : null}
            </View>
            <View style={styles.footerContainerStyle}>
              {homeApi ? <Text style={styles.footerTextStyle}>{homeApi.luckyNumber.number}</Text> : null}
            </View>
          </RNBounceable>
          <RNBounceable style={styles.vacationStyle}>
            <Text style={styles.titleTextStyle}>Wakacje</Text>
            <View style={styles.iconContainerStyle}>
            <FontAwesomeIcon 
                icon={ faUmbrellaBeach } 
                size={30}
                color={'#fff'}/>
            </View>
            <View style={styles.contentStyle}>
              <Text style={styles.valueTextStyle}>
                Do wakacji pozostało 545 dni
              </Text>
            </View>
            <View style={styles.contentStyle}>
            <Progress.Bar
              style={{marginTop: 10}}
              progress={0.8}
              width={120}
              height={10}
              color="white" />
            </View>
          </RNBounceable>
        </View>
          {homeApi ? <LessonTile data={homeApi.lesson}/> : null }
        <View style={styles.bottomSpace}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    alignItems: 'center',
  },
  announcements: {
    padding: 24,
    borderRadius: 20,
    marginTop: 15,
    width: '95%',
    backgroundColor: '#FF6863',
  },
  luckyNumberStyle: {
    padding: 24,
    borderRadius: 20,
    marginTop: 15,
    width: '46%',
    marginHorizontal: 5,
    backgroundColor: '#5a65ff',
  },
  vacationStyle: {
    padding: 24,
    borderRadius: 20,
    marginTop: 15,
    width: '46%',
    marginHorizontal: 5,
    backgroundColor: '#96da45',
  },
  lessonStyle: {
    padding: 24,
    borderRadius: 20,
    marginTop: 15,
    width: '95%',
    backgroundColor: '#7954ff',
  },
  titleTextStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
  iconContainerStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 60,
    height: 60,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  iconImageStyle: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  contentStyle: {
    marginTop: 20,
  },
  valueTextStyle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  numberInfoTextStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  footerContainerStyle: {
    right: 16,
    bottom: 16,
    position: 'absolute',
  },
  footerTextStyle: {
    textAlign: 'right',
    fontSize: 35,
    color: 'rgba(255,255,255,0.9)',
  },
  newsFooterTextStyle: {
    textAlign: 'right',
    fontSize: 12,
    color: '#fff',
  },
  bottomSpace: {
    paddingVertical: 20
  }
});
