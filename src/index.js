/**
 *  @Module
 *  src/index.js
 *
 *  @flow
 *  @prettier
 */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Button, View, Text, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { LanguagesProvider, LanguagesContext } from './providers/languages';

const Root = styled.View`
    height: 100%;
    width: 100%;
    margin-top: ${getStatusBarHeight()}px;
    background-color: teal;
`;

const App = () => (
    <Fragment>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <LanguagesProvider>
            <Root>
                <LanguagesContext.Consumer>
                    {({ setLanguage, translates }) => (
                        <View>
                            <Button onPress={() => setLanguage('en')} title={'En'} />
                            <Button onPress={() => setLanguage('ru')} title={'Ru'} />
                            <Text>{translates.test}</Text>
                        </View>
                    )}
                </LanguagesContext.Consumer>
            </Root>
        </LanguagesProvider>
    </Fragment>
);

export default App;
