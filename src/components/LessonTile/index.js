import React from 'react';
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native';
  import RNBounceable from '@freakycoder/react-native-bounceable';
  import * as Progress from 'react-native-progress';
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
  import { faChalkboard } from '@fortawesome/free-solid-svg-icons'

export default function LessonTile(props) {
    switch (props.data.type) {
        case "Lekcja":
            return (
            <RNBounceable style={styles.lessonStyle}>
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
            </RNBounceable>
          )
        case "Przerwa":
            return (
            <RNBounceable style={styles.lessonStyle}>
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
            </RNBounceable>
          )
        case "afternoon":
            return (
                <RNBounceable style={styles.lessonStyle}>
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
              </RNBounceable>
            )
        case "evening":
            return (
                <RNBounceable style={styles.lessonStyle}>
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
              </RNBounceable>
            )
        case "morning":
            return (
                <RNBounceable style={styles.lessonStyle}>
                <View style={styles.iconContainerStyle}>
                    <FontAwesomeIcon 
                        icon={ faChalkboard } 
                        size={25}
                        color={'#fff'}/>
                </View>
                <View style={styles.contentStyle}>
                  <Text style={styles.valueTextStyle}>Smacznej kawusi ☕</Text>
                </View>
              </RNBounceable>
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
      flexDirection: 'row',
      alignItems: 'center',
    },
    valueTextStyle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '500',
    },
  });
  