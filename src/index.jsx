import { render } from 'react-dom'
import { AppRouter } from 'router'
import { polyfill } from 'es6-promise'
import fetch from 'isomorphic-fetch'
polyfill()

render(AppRouter, document.getElementById('app'))
