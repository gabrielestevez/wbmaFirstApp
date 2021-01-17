import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useLoadMedia} from './hooks/ApiHooks';

// let mediaArray = [];

const uploadsUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const App = () => {
  const mediaArray = useLoadMedia();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mediaArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <ScrollView>
                <Image
                  style={{flex: 1, height: 120}}
                  source={{uri: uploadsUrl + item.thumbnails.w160}}
                />
                <View>
                  <Text>{item.title}</Text>
                  <View style={styles.header} />
                  <Text>{item.description}</Text>
                  <View style={styles.infoArea} />
                  <View style={styles.footerArea} />
                </View>
              </ScrollView>
            </TouchableOpacity>
          );
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    height: '100%',
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    width: 50,
    height: 50,
    backgroundColor: 'lightblue',
  },
  infoArea: {
    width: '100%',
    height: 50,
    backgroundColor: 'skyblue',
  },
  footerArea: {
    width: '100%',
    height: 50,
    backgroundColor: 'steelblue',
  },
});

export default App;
