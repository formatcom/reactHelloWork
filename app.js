import React      from 'react'
import { render } from 'react-dom'
import HelloWork  from './components/HelloWork'

render(<HelloWork name="Vinicio" />, document.getElementById('app'))

setTimeout(() => {
  render(<HelloWork name="David" />, document.getElementById('app'))
}, 5000)
