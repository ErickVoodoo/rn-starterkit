/**
 *  @Module
 *  src/index.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import { Button, View, Text } from 'react-native';
import { ModalsProvider } from '../providers/modals';

export const Splash = ({ setLanguage, translates }) => (
    <View>
        <Button onPress={() => setLanguage('en')} title={'En'} />
        <Button onPress={() => setLanguage('ru')} title={'Ru'} />
        <Button
            onPress={() => ModalsProvider.addModal(<Text>Hello world</Text>)}
            title={'Add Modal'}
        />
        <Text>{translates.test}</Text>
        <Text>Hello world</Text>
    </View>
);
