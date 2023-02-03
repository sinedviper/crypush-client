import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { Provider } from 'react-redux'

import { Layout, Home } from 'page-components'
import { store, persistor } from 'utils/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App
