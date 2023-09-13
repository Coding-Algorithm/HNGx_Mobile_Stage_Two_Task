/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Viewer} from './screens/Viewer';
import {Editor} from './screens/Editor';

interface CvInfoType {
  fullName: {
    title: string;
    value: string;
  };
  slackName: {
    title: string;
    value: string;
  };
  githubHandle: {
    title: string;
    value: string;
  };
  personalBio: {
    title: string;
    value: string;
  };
}

export const colors = {
  primary: '#03b1fc',
  secondary: '#006d9c',
  white: '#ffffff',
  editor: '',
  field: '#ebebeb',
  fieldText: '#7d7d7d',
  black: '#000000',
};

function App(): JSX.Element {
  const initialData = {
    fullName: {
      title: 'Full Name',
      value: 'Ibrahim Taofeek Opeyemi',
    },
    slackName: {
      title: 'Slack Name',
      value: 'Ibrahim Taofeek',
    },
    githubHandle: {
      title: 'Github Handle',
      value: 'coding-algorithm',
    },
    personalBio: {
      title: 'Personal Bio',
      value: 'Full stack react native engineer',
    },
  };

  const [showEditor, setShowEditor] = useState(false);
  const [cvInfo, setCvInfo] = useState<CvInfoType>(initialData);

  const saveEdit = (data: CvInfoType) => {
    setCvInfo(data);
    setShowEditor(false);
  };

  const cancel = () => {
    setShowEditor(false);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={false ? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {showEditor ? 'CV Editor' : 'CV Viewer'}
        </Text>
      </View>

      {!showEditor ? (
        <Viewer cvInfo={cvInfo} setShowEditor={setShowEditor} />
      ) : null}

      {showEditor ? (
        <Editor cvInfo={cvInfo} saveEdit={saveEdit} cancel={cancel} />
      ) : null}
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 20,
  },
  headerText: {
    width: '60%',
    textAlign: 'left',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
  },
});
