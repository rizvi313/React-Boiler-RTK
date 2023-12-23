import React from 'react'
import { Provider } from 'react-redux'
import store from './store.js'
import './scss/style.scss'
import Navigation from './Navigation'
import { Toaster } from 'react-hot-toast'

const App = () => {
  React.useLayoutEffect(() => {
    console.debug('process', process.env.REACT_APP_ENVIORNMENT)
    if (process.env.REACT_APP_ENVIORNMENT === 'prod') {
      console.debug = function () {}
    }
  }, [])

  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      </Provider>
    </>
  )
}

export default App
