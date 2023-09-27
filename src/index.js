import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
// import { addedBook, removedBook } from './redux/books/bookSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log('initialState', store.getState());
// const unSubscribe = store.subscribe(() => {
//   console.log('updatedState', store.getState());
// });
// store.dispatch(addedBook(1));
// store.dispatch(removedBook());

// unSubscribe();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
