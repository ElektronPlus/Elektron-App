import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import * as Progress from 'react-native-progress';
import LessonTile from '../../components/LessonTile';
import LessonHoursList from '../../components/LessonHoursList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faNewspaper,
  faUmbrellaBeach,
  faLaughBeam,
} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [homeApi, setHomeApi] = useState();
  const [lessonHours, setLessonHours] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getHomeData();
  }, []);

  const onRefresh = React.useCallback(() => {
    getHomeData();
  }, []);

  const toggleModal = () => {
    getLessonHours();
    setModalVisible(!isModalVisible);
  };

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

  const getLessonHours = async () => {
    let jsonResponse;
    try {
      const response = await fetch('https://beta.elektronplus.pl/lessonHours');
      jsonResponse = await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      setLessonHours(jsonResponse);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#121212'}}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefresh}
            tintColor="#b8b8b8"
          />
        }>
        <RNBounceable style={styles.announcements}>
          <Text style={styles.titleTextStyle}>Ogłoszenie</Text>
          <View style={styles.iconContainerStyle}>
            <FontAwesomeIcon icon={faNewspaper} size={30} color={'#fff'} />
          </View>
          <View style={styles.contentStyle}>
            {homeApi ? (
              <Text style={styles.valueTextStyle}>
                {homeApi.news[0].content}
              </Text>
            ) : null}
            {homeApi ? (
              <Text style={styles.newsFooterTextStyle}>
                {homeApi.news[0].time}
              </Text>
            ) : null}
          </View>
        </RNBounceable>

        <RNBounceable style={styles.vacationStyle}>
          <Text style={styles.titleTextStyle}>Wakacje</Text>
          <View style={styles.iconContainerStyle}>
            <FontAwesomeIcon icon={faUmbrellaBeach} size={30} color={'#fff'} />
          </View>
          <View style={styles.contentStyle}>
            {homeApi ? (
              <Text style={styles.valueTextStyle}>
                Jeszcze tylko {homeApi.vacation.daysLeft} dni do wakacji
              </Text>
            ) : null}
          </View>
          <View style={styles.contentStyle}>
            {homeApi ? (
              <Progress.Bar
                style={{marginTop: 10}}
                progress={homeApi.vacation.procent}
                width={120}
                height={10}
                color="white"
              />
            ) : null}
          </View>
        </RNBounceable>

        {homeApi ? (
          <LessonTile data={homeApi.lesson} onPress={toggleModal} />
        ) : null}
        <View style={styles.bottomSpace}></View>
      </ScrollView>

      <View>
        <Modal
          isVisible={isModalVisible}
          backdropOpacity={0}
          onBackdropPress={toggleModal}
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}>
          <View style={styles.modalContent}>
            <Text style={styles.modalContentTitle}>Dzwonki 🔔</Text>
            {lessonHours ? <LessonHoursList data={lessonHours} /> : null}
            <Button onPress={toggleModal} title="zamknij" />
          </View>
        </Modal>
      </View>
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
  vacationStyle: {
    padding: 24,
    borderRadius: 20,
    marginTop: 15,
    width: '95%',
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
    top: 1,
    right: 1,
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
    paddingVertical: 20,
  },
  modalContent: {
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
