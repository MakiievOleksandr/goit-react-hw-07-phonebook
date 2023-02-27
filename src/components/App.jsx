import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import Contacts from './Contacts/Contacts';

import { store, persistor } from 'redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Contacts />
      </PersistGate>
    </Provider>
  );
};

export default App;
