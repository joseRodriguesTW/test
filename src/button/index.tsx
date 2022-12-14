import React from 'react';
import Analitics from '@joserodriguestw/facade';
import {TouchableOpacity, Text} from 'react-native';

export default () => {
  const analitics = Analitics.getInstance('test');
  return (
    <TouchableOpacity onPress={() => analitics.print()}>
      <Text>HOLA</Text>
    </TouchableOpacity>
  );
};
