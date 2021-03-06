import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
  import * as Progress from 'react-native-progress';
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
  import { faChalkboard } from '@fortawesome/free-solid-svg-icons'

export default function LessonTile(props) {

    let isShortLessons = null;
    if(props.data.isShortLessons){
      isShortLessons = (<Text style={styles.shortLessonTextStyle}>Lekcje skrócone 🥳</Text>)
    }
    switch (props.data.type) {
        case "Lekcja":
            return (
            <TouchableOpacity style={styles.lessonStyle} onPress={props.onPress}>
              <Text style={styles.titleTextStyle}>Lekcja {props.data.number}</Text>
              <View style={styles.iconContainerStyle}>
                <FontAwesomeIcon 
                    icon={ faChalkboard } 
                    size={25}
                    color={'#fff'}/>
              </View>
              <View style={styles.contentStyle}>
                <Text style={styles.valueTextStyle}>{props.data.timeLeft} do końca</Text>
              </View>
              <Progress.Bar
                style={{marginTop: 10}}
                progress={props.data.percentage}
                width={300}
                height={10}
                color="white"/>
                {isShortLessons}
            </TouchableOpacity>
          )
        case "Przerwa":
            return (
            <TouchableOpacity style={styles.lessonStyle} onPress={props.onPress}>
              <Text style={styles.titleTextStyle}>Przerwa {props.data.number}</Text>
              <View style={styles.iconContainerStyle}>
                <FontAwesomeIcon 
                    icon={ faChalkboard } 
                    size={25}
                    color={'#fff'}/>
              </View>
              <View style={styles.contentStyle}>
                <Text style={styles.valueTextStyle}>{props.data.timeLeft} do końca</Text>
              </View>
              <Progress.Bar
                style={{marginTop: 10}}
                progress={props.data.percentage}
                width={300}
                height={10}
                color="white"/>
              {isShortLessons}
            </TouchableOpacity>
          )
        case "afternoon":
            return (
                <TouchableOpacity style={styles.lessonStyle} onPress={props.onPress}>
                <Text style={styles.titleTextStyle}>Koniec lekcji</Text>
                <View style={styles.iconContainerStyle}>
                    <FontAwesomeIcon 
                        icon={ faChalkboard } 
                        size={25}
                        color={'#fff'}/>
                </View>
                <View style={styles.contentStyle}>
                  <Text style={styles.valueTextStyle}>Miłego popołudnia</Text>
                </View>
                {isShortLessons}
              </TouchableOpacity>
            )
        case "evening":
            return (
                <TouchableOpacity style={styles.lessonStyle} onPress={props.onPress}>
                <Text style={styles.titleTextStyle}>Koniec lekcji</Text>
                <View style={styles.iconContainerStyle}>
                    <FontAwesomeIcon 
                        icon={ faChalkboard } 
                        size={25}
                        color={'#fff'}/>
                </View>
                <View style={styles.contentStyle}>
                  <Text style={styles.valueTextStyle}>Dobranoc 😴</Text>
                </View>
                {isShortLessons}
              </TouchableOpacity>
            )
        case "morning":
            return (
                <TouchableOpacity style={styles.lessonStyle} onPress={props.onPress}>
                  <Text style={styles.titleTextStyle}>Smacznej kawusi ☕</Text>
                <View style={styles.iconContainerStyle}>
                    <FontAwesomeIcon 
                        icon={ faChalkboard } 
                        size={25}
                        color={'#fff'}/>
                </View>
                <View style={styles.contentStyle}>
                  <Text style={styles.valueTextStyle}>Pozostało {props.data.timeLeft} do 1 lekcji</Text>
                </View>
                {isShortLessons}
              </TouchableOpacity>
            )
        default:
            return (<View></View>)
      }
}

const styles = StyleSheet.create({
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
    shortLessonTextStyle: {
      textAlign: 'right',
      fontSize: 12,
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
      flexDirection: 'row',
      alignItems: 'center',
    },
    valueTextStyle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '500',
    },
  });
  