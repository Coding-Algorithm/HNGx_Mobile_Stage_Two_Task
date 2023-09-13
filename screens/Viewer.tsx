import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
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

export const Viewer = ({
  cvInfo,
  setShowEditor,
}: {
  cvInfo: CvInfoType;
  setShowEditor: React.Dispatch<boolean>;
}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
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

        <View style={styles.controlWrapper}>
          <TouchableOpacity
            onPress={() => setShowEditor(true)}
            style={styles.editButton}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
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
  contentContainer: {
    paddingBottom: 100,
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
  controlWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  editText: {
    color: colors.white,
  },
});
