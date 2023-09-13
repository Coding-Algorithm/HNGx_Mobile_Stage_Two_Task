import React, {useEffect, useState} from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
  cvInfo,
  saveEdit,
  cancel,
}: {
  cvInfo: CvInfoType;
  saveEdit: (data: CvInfoType) => void;
  cancel: () => void;
}) => {
  const [localData, setLocalData] = useState(
    JSON.parse(JSON.stringify(cvInfo)),
  );

  return (
    <View style={styles.container}>
      <View>
        {Object.keys(localData).length > 0 && (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
            <ScrollView
              contentContainerStyle={styles.containerContentStyle}
              showsVerticalScrollIndicator={false}>
              {Object.keys(localData).map(item => (
                <View key={item} style={styles.itemWrapper}>
                  <Text style={styles.title}>
                    {localData[item as keyof typeof localData].title}
                  </Text>

                  <TextInput
                    style={styles.value}
                    placeholder={
                      localData[item as keyof typeof localData].value
                    }
                    value={localData[item as keyof typeof localData].value}
                    onChangeText={e => {
                      setLocalData(prev => {
                        const newObj = {...prev};
                        newObj[item as keyof typeof prev].value = e;
                        return newObj;
                      });
                    }}
                  />
                </View>
              ))}
              <View style={styles.controlWrapper}>
                <TouchableOpacity
                  onPress={() => saveEdit(localData)}
                  style={styles.saveButton}>
                  <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => cancel()}
                  style={styles.cancelButton}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        )}
      </View>
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
  controlWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    width: '45%',
    paddingVertical: 20,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  saveText: {
    color: colors.white,
  },
  cancelButton: {
    width: '45%',
    paddingVertical: 20,
    backgroundColor: colors.fieldText,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cancelText: {
    color: colors.white,
  },
});
