import { render } from 'react-dom'
import { AppRouter } from 'router'
import { polyfill } from 'es6-promise'
polyfill()

render(AppRouter, document.getElementById('app'))
