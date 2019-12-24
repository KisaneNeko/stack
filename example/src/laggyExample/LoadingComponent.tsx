import React from 'react';
import { Text, View } from 'react-native';

export default function LoadingComponent({ isLoading = false }) {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: 'black',
          }}
        >
          {isLoading ? 'Loading...' : 'I am rendered screen!'}
        </Text>
      </View>
    </>
  );
}
