import React from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import  stores  from './store'
const { store } = stores();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
         <Routes/>
      </Provider>
    </div>
  );
}

export default App;
