/**
 *  @Module
 *  src/providers/modals.js
 *
 *  @flow
 *  @prettier
 */

import React from 'react';
import Modal from 'react-native-modalbox';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const ModalsContext = React.createContext('modals');

const Root = styled.View`
    height: 100%;
    width: 100%;
    margin-top: ${getStatusBarHeight()}px;
    background-color: white;
`;

let bridge = null;

class Provider extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    static addModal = (modal) => {
        const { modals } = bridge.state;
        modals.push({
            id: Math.random().toString(),
            component: modal,
        });

        bridge.setState({
            modals,
        });
    };

    static clearModals = () => {
        bridge.setState({
            modals: [],
        });
    };

    state = {
        modals: [],
    };

    componentDidMount = () => {
        bridge = this;
    };

    hideModal = (identifier) => {
        const { modals } = this.state;

        bridge.setState({
            modals: modals.filter(({ id }) => identifier !== id),
        });
    };

    render() {
        const { modals } = this.state;
        const { children } = this.props;

        return (
            <ModalsContext.Provider
                value={{
                    addModal: this.addModal,
                    clearModals: this.clearModals,
                }}
            >
                {children}
                {modals.map(({ id, component }) => (
                    <Modal key={id} position={'top'} isOpen onClosed={() => this.hideModal(id)}>
                        <Root>{component}</Root>
                    </Modal>
                ))}
            </ModalsContext.Provider>
        );
    }
}

export const ModalsProvider = Provider;
