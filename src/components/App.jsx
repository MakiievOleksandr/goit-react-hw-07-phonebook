import { Provider } from 'react-redux';

import Contacts from './Contacts/Contacts';

import { store } from 'redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Contacts />
    </Provider>
  );
};

export default App;
