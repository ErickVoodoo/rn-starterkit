/**
 *  @Module
 *  src/pages/index.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';

import { Splash } from '../screens/splash';
import { ProvidersWrapper } from '..';

export const SplashScreen = () => (
    <ProvidersWrapper>
        <Splash />
    </ProvidersWrapper>
);
