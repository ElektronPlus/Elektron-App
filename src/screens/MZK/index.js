import React, {useRef, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Button,
} from 'react-native';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import BusDepartures from '../../components/BusDepartures';
import styled from "styled-components"

export default function MZK() {
  const MainView = styled.SafeAreaView`
  background: ${props => props.theme.background}
  `
  const StyledText = styled.Text`
  color: ${props => props.theme.text}
  `

    const [loading, setLoading] = useState(false)
    const [suggestionsList, setSuggestionsList] = useState(null)
    const [departures, setDepartures] = useState(null)
    const [fetchingAPI, setFetchingAPI] = useState(false)
    const [runTask, setRunTask] = useState()
    const dropdownController = useRef(null)
    const searchRef = useRef(null)

    const getSuggestions = useCallback(async (q) => {
        if (typeof q !== "string" || q.length < 1) {
            setSuggestionsList(null)
            return
        }
        setLoading(true)
        const response = await fetch("https://beta.elektronplus.pl/busStops")
        const items = await response.json()
        let suggestions = []
        for (var busStop of items){
            if(busStop.name.toLowerCase().includes(q.toLowerCase())){
                suggestions.push({id: busStop.name.split('(').pop().split(')')[0], title: busStop.name})
            }
        }
        setSuggestionsList(suggestions)
        setLoading(false)
    }, [])

    const getBusDepartures = async (id) => {
        try {
            const response = await fetch('https://beta.elektronplus.pl/mzk/'+id);
            const json = await response.json();
            setDepartures(json)
            setFetchingAPI(false)
            console.log("fetch " + id)
          } catch (error) {
            console.error(error);
          } 
    };

    const onSelectItem = (id) => {
      clearInterval(runTask)
      setFetchingAPI(true)
      getBusDepartures(id)
      const run = setInterval(() => {
        getBusDepartures(id)
      }, 10000)
      setRunTask(run)
    }

  return (
    <SafeAreaView style={{backgroundColor: "#383b42"}}>
    <AutocompleteDropdown
          ref={searchRef}
          controller={(controller) => {
            dropdownController.current = controller
          }}
          dataSet={suggestionsList}
          onChangeText={getSuggestions}
          onSelectItem={(item) => {
            let id = item && item.id
            if(!id) return
            onSelectItem(id)
          }}
          onClear={() => {
            clearInterval(runTask)
            setDepartures(null)
          }}
          suggestionsListMaxHeight={500}
          debounce={600}
          loading={loading}
          useFilter={false}
          textInputProps={{
            placeholder: "Wpisz nazw?? lub numer przystanku",
            autoCorrect: false,
            autoCapitalize: "none",
            style: {
              backgroundColor: "#383b42",
              color: "#fff",
              paddingLeft: 18
            }
          }}
          rightButtonsContainerStyle={{
            right: 8,
            height: 30,
            top: 10,
            alignSelfs: "center",
            backgroundColor: "#383b42"
          }}
          inputContainerStyle={{
            backgroundColor: "transparent"
          }}
          inputHeight={50}
          showChevron={false}
        />
    
    <MainView style={{height: "100%"}}>
        {fetchingAPI ? <ActivityIndicator size="small" color="#0000ff" /> : null}
        {departures ? <BusDepartures data={departures}/> : 
    <View>
      <View style={styles.row}>
        <StyledText style={styles.title}>
          Staszica
        </StyledText>
        <Button
          title="??? Centrum przesiadkowe/ PKP"
          onPress={() => onSelectItem(281)}/>
        <View style={styles.separator}></View>
        <Button
          title="??? Wyspia??skiego/ Sulechowska"
          onPress={() => onSelectItem(280)}/>
      </View>
      <View style={styles.row}>
        <StyledText style={styles.title}>
        Centrum przesiadkowe
        </StyledText>
        <Button
          title="??? Centrum"
          onPress={() => onSelectItem(400)}/>
        <View style={styles.separator}></View>
        <Button
          title="??? Staszica"
          onPress={() => onSelectItem(279)}/>
      </View>
      <View style={styles.row}>
        <StyledText style={styles.title}>
        Dolina Zielona
        </StyledText>
        <Button
          title="??? Centrum"
          onPress={() => onSelectItem(135)}/>
        <View style={styles.separator}></View>
        <Button
          title="??? Batorego/ Chyn??w"
          onPress={() => onSelectItem(136)}/>
      </View>
    </View>}
    </MainView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    alignItems: 'center',
    backgroundColor: '#F6F7F9',
  },
  dayLabel: {
    padding: 8,
    width: '100%',
    backgroundColor: '#007AFF',
  },
  lessonItem: {
    padding: 4,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  column: {
    flex: 6,
    padding: 10,
  },
  time: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    flex: 0,
    marginLeft: 6,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: '#65D085',
    borderLeftWidth: 2,
  },
  row: {
    marginHorizontal: 16,
    marginTop: 40,
    zIndex: 0
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    margin: 10
  },
});