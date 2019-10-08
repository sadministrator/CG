import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store, persist } from './config/store'
import { PersistGate } from 'redux-persist/integration/react'
import ExampleScreen from './screens/Example';

export default class App extends Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persist}>
                    {/* Implement routes before screen */}
                    <ExampleScreen/>
                </PersistGate>
            </Provider>
        )
    }
}