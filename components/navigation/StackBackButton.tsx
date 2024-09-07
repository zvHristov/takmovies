import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StackBackButton = () => {
  const navigation = useRouter();
  return (
    <Pressable onPress={() => navigation.back()} style={{ backgroundColor: 'transparent', padding: 8, margin: -8, }}>
      <Icon name="chevron-left" size={23} color={'#rgba(53, 56, 63, 1)'} />
    </Pressable>
  );
};

export default StackBackButton;
