import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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

export const Viewer = ({cvInfo}: {cvInfo: CvInfoType}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {Object.keys(cvInfo).map(item => (
          <View key={item} style={styles.itemWrapper}>
            <Text style={styles.title}>
              {cvInfo[item as keyof typeof cvInfo].title}
            </Text>

            <Text style={styles.value}>
              {cvInfo[item as keyof typeof cvInfo].value}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  itemWrapper: {
    marginBottom: 30,
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: '600',
    marginBottom: 5,
    color: colors.black,
  },
  value: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: colors.field,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: colors.fieldText,
  },
});
