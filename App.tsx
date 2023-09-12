/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
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
  const isDarkMode = useColorScheme() === 'dark';

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
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={false ? 'light-content' : 'dark-content'} />
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: colors.primary,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingVertical: 20,
        }}>
        <Text
          style={{
            width: '60%',
            textAlign: 'left',
            fontSize: 28,
            fontWeight: 'bold',
            color: 'white',
            paddingHorizontal: 20,
          }}>
          {showEditor ? 'CV Editor' : 'CV Viewer'}
        </Text>

        <Text
          style={{
            width: showEditor ? '20%' : '30%',
            textAlign: 'center',
            fontSize: 13,
            fontWeight: 'bold',
            color: colors.secondary,
          }}
          onPress={() => {
            if (showEditor) {
              saveEdit();
            }

            setShowEditor(prev => !prev);
          }}>
          {showEditor ? 'Save' : 'Edit'}
        </Text>

        {showEditor ? (
          <Text
            style={{
              width: '20%',
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 'bold',
              color: colors.secondary,
            }}
            onPress={() => setShowEditor(prev => !prev)}>
            Cancel
          </Text>
        ) : null}
      </View>

      {!showEditor ? (
        <Viewer setShowEditor={setShowEditor} cvInfo={cvInfo} />
      ) : null}

      {showEditor ? (
        <Editor
          saveEdit={saveEdit}
          setShowEditor={setShowEditor}
          editorData={{...cvInfo}}
        />
      ) : null}
    </SafeAreaView>
  );
}

export default App;
