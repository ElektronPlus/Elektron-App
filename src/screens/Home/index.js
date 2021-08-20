import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import icon from "../../../assets/burn.png";
import * as Progress from 'react-native-progress';

export default function Home() {
  return (
    <ScrollView refreshControl={<RefreshControl />}>
      <SafeAreaView style={styles.container}>
        <RNBounceable style={styles.announcements}>
          <Text style={styles.titleTextStyle}>Ogłoszenie</Text>
          <View style={styles.iconContainerStyle}>
            <Image source={icon} style={styles.iconImageStyle} />
          </View>
          <View style={styles.contentStyle}>
            <Text style={styles.valueTextStyle}>
              🔥 Uroczyste zakończenie roku szkolnego dla wszystkich klas w
              piątek o godz. 9:00 na boisku szkolnym.
            </Text>
          </View>
        </RNBounceable>
        <View style={{ flexDirection: "row" }}>
          <RNBounceable style={styles.luckyNumberStyle}>
            <Text style={styles.titleTextStyle}>Szczęśliwy numerek</Text>
            <View style={styles.iconContainerStyle}>
              <Image source={icon} style={styles.iconImageStyle} />
            </View>
            <View style={styles.contentStyle}>
              <Text style={styles.valueTextStyle}>15</Text>
            </View>
          </RNBounceable>
          <RNBounceable style={styles.vacationStyle}>
            <Text style={styles.titleTextStyle}>Wakacje</Text>
            <View style={styles.iconContainerStyle}>
              <Image source={icon} style={styles.iconImageStyle} />
            </View>
            <View style={styles.contentStyle}>
              <Text style={styles.valueTextStyle}>
                Do wakacji pozostało 545 dni
              </Text>
            </View>
          </RNBounceable>
        </View>
        <RNBounceable style={styles.lessonStyle}>
          <Text style={styles.titleTextStyle}>Lekcja 5</Text>
          <View style={styles.iconContainerStyle}>
            <Image source={icon} style={styles.iconImageStyle} />
          </View>
          <View style={styles.contentStyle}>
            <Text style={styles.valueTextStyle}>
              pozostało 30 minut
            </Text>
          </View>
          <Progress.Bar style={{marginTop: 10}} progress={0.8} width={300} height={10} color="white"/>
        </RNBounceable>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  announcements: {
    padding: 24,
    borderRadius: 20,
    marginTop: 15,
    width: "95%",
    backgroundColor: "#FF6863",
  },
  luckyNumberStyle: {
    padding: 24,
    borderRadius: 20,
    marginTop: 15,
    width: "46%",
    marginHorizontal: 5,
    backgroundColor: "#5a65ff",
  },
  vacationStyle: {
    padding: 24,
    borderRadius: 20,
    marginTop: 15,
    width: "46%",
    marginHorizontal: 5,
    backgroundColor: "#96da45",
  },
  lessonStyle: {
    padding: 24,
    borderRadius: 20,
    marginTop: 15,
    width: "95%",
    backgroundColor: "#7954ff",
  },
  titleTextStyle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
  iconContainerStyle: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 60,
    height: 60,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  iconImageStyle: {
    width: 25,
    height: 25,
    tintColor: "#fff",
  },
  contentStyle: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  valueTextStyle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});
