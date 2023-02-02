import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'

import { Layout } from 'page-components/layout'
import { store } from 'utils/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div></div>,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
