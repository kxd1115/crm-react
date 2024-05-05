import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router';
import { RouterProvider } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import 'normalize.css';
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
)
