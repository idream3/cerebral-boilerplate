import React from 'react'
import {render} from 'react-dom'
import {Container} from 'cerebral-view-react'
import controller from 'lib/controller'
import App from 'components/App'


if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update')

  whyDidYouUpdate(React)
}

render(<Container controller={controller}><App/></Container>, document.querySelector('#app'))
