import React from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
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
  editorData,
  setEditorData,
}: {
  editorData: CvInfoType;
  setEditorData: React.Dispatch<(arg: CvInfoType) => CvInfoType>;
}) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
        <ScrollView
          contentContainerStyle={styles.containerContentStyle}
          showsVerticalScrollIndicator={false}>
          {Object.keys(editorData).map(item => (
            <View key={item} style={styles.itemWrapper}>
              <Text style={styles.title}>
                {editorData[item as keyof typeof editorData].title}
              </Text>

              <TextInput
                style={styles.value}
                placeholder={editorData[item as keyof typeof editorData].value}
                onChangeText={e => {
                  setEditorData(prev => {
                    prev[item as keyof typeof prev].value = e;
                    return {...prev};
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  containerContentStyle: {
    paddingBottom: 150,
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
    paddingVertical: 14,
    backgroundColor: colors.field,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: colors.fieldText,
    borderWidth: 1,
    borderColor: colors.fieldText,
  },
});
