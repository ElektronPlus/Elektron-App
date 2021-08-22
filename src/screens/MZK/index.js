import React, {useRef, useState, useCallback} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import BusDepartures from '../../components/BusDepartures';

export default function MZK() {
    const [loading, setLoading] = useState(false)
    const [suggestionsList, setSuggestionsList] = useState(null)
    const [selectedItem, setSelectedItem] = useState(null)
    const [departures, setDepartures] = useState(null)
    const dropdownController = useRef(null)
    const searchRef = useRef(null)

    const getSuggestions = useCallback(async (q) => {
        if (typeof q !== "string" || q.length < 1) {
            setSuggestionsList(null)
            return
        }
        setLoading(true)
        const response = await fetch("http://192.168.0.2:3000/busStops")
        const items = await response.json()
        let suggestions = []
        for (var busStop of items){
            if(busStop.name.toLowerCase().includes(q.toLowerCase())){
                suggestions.push({id: busStop.name, title: busStop.name})
            }
        }
        setSuggestionsList(suggestions)
        setLoading(false)
    }, [])

    const getBusDepartures = async () => {
        try {
            const response = await fetch('https://beta.elektronplus.pl/mzk/400');
            const json = await response.json();
            setDepartures(json)
          } catch (error) {
            console.error(error);
          }
    };

    if(selectedItem){
        getBusDepartures()
    }

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
            item && setSelectedItem(item.id)
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
