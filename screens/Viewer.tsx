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
import { colors } from '../App';

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

export const Viewer = ({cvInfo}: {cvInfo: CvInfoType}) => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 50,
      }}>
      <ScrollView>
        {Object.keys(cvInfo).map(item => (
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
              {cvInfo[item as keyof typeof cvInfo].title}
            </Text>

            <Text
              style={{
                width: '100%',
                paddingVertical: 20,
                backgroundColor: colors.field,
                borderRadius: 8,
                paddingHorizontal: 10,
                color: colors.fieldText,
              }}>
              {cvInfo[item as keyof typeof cvInfo].value}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
