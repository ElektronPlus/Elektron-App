import React, {useRef, useState, useCallback} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import BusDepartures from '../../components/BusDepartures';

export default function MZK() {
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

  return (
    <SafeAreaView style={styles.container}>
    <Text>Wpisz nazwę lub numer przystanku</Text>
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
            clearInterval(runTask)
            setFetchingAPI(true)
            getBusDepartures(id)
            let run = setInterval(() => {
              getBusDepartures(id)
            }, 10000)
            setRunTask(run)
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
            placeholder: "Staszica",
            autoCorrect: false,
            autoCapitalize: "none",
            style: {
              color: "black",
              paddingLeft: 18
            }
          }}
          inputHeight={50}
          showChevron={false}
        />
        {fetchingAPI ? <ActivityIndicator size="small" color="#0000ff" /> : null}
        {departures ? <BusDepartures data={departures}/> : null}
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
  text: {
    color: 'white',
  },
});
