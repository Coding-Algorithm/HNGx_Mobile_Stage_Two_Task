/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
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
import {colors} from '../App';

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

export const Editor = ({
  saveEdit,
  editorData,
  setEditorData,
}: {
  saveEdit: (data: CvInfoType) => void;
  setShowEditor: React.Dispatch<boolean>;
  editorData: CvInfoType;
  setEditorData: React.Dispatch<CvInfoType>;
}) => {

    const prevData

  const [localData, setLocalData] = useState(editorData);

  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 50,
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 150,
          }}
          showsVerticalScrollIndicator={false}>
          {Object.keys(localData).map(item => (
            <View
              key={item}
              style={{
                marginBottom: 30,
              }}>
              <Text
                style={{
                  textTransform: 'capitalize',
                  fontWeight: '600',
                  marginBottom: 5,
                  color: colors.black,
                }}>
                {localData[item as keyof typeof localData].title}
              </Text>

              <TextInput
                style={{
                  width: '100%',
                  paddingVertical: 14,
                  backgroundColor: colors.field,
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  color: colors.fieldText,
                  borderWidth: 1,
                  borderColor: colors.fieldText,
                }}
                placeholder={localData[item as keyof typeof localData].value}
                onChangeText={e => {
                  setLocalData(prev => {
                    console.log(editorData[item].value);
                    console.log(localData[item]?.value);
                    prev[item].value = e;
                    return prev;
                  });
                }}
              />
            </View>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
