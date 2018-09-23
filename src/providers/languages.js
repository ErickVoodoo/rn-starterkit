/**
 *  @Module
 *  src/providers/languages.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import RNLanguages from 'react-native-languages';

import translates from '../constants/translates';
import { STORAGE_LANGUAGE } from '../constants/storage';

export const LanguagesContext = React.createContext(RNLanguages.language);

class Provider extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        language: RNLanguages.language,
    };

    componentDidMount = async () => {
        const language = await AsyncStorage.getItem(STORAGE_LANGUAGE);

        this.setState({
            language,
        });
    };

    setLanguage = async (language) => {
        this.setState({
            language,
        });

        await AsyncStorage.setItem(STORAGE_LANGUAGE, language);
    };

    render() {
        const { language } = this.state;
        const { children } = this.props;

        return (
            <LanguagesContext.Provider
                value={{
                    setLanguage: this.setLanguage,
                    translates: translates[language] || translates.en,
                }}
            >
                {children}
            </LanguagesContext.Provider>
        );
    }
}

export const LanguagesProvider = Provider;
