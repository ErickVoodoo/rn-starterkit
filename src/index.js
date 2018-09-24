/**
 *  @Module
 *  src/index.js
 *
 *  @flow
 *  @prettier
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { LanguagesProvider, LanguagesContext } from './providers/languages';
import { ModalsProvider, ModalsContext } from './providers/modals';

const Root = styled.View`
    height: 100%;
    width: 100%;
    margin-top: ${getStatusBarHeight()}px;
    background-color: teal;
`;

export const ProvidersWrapper = ({ children }) => (
    <Fragment>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <ModalsProvider>
            <LanguagesProvider>
                <Root>
                    <ModalsContext.Consumer>
                        {() => (
                            <LanguagesContext.Consumer>
                                {(languages) => React.cloneElement(children, { ...languages })}
                            </LanguagesContext.Consumer>
                        )}
                    </ModalsContext.Consumer>
                </Root>
            </LanguagesProvider>
        </ModalsProvider>
    </Fragment>
);

ProvidersWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
