// https://www.xicons.org/#/
import { App } from 'vue'
import SvgIcon from './SvgIcon.vue'

const svgRequire = require.context('./static', true, /\.svg$/)
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default {
  install: (app: App): void => {
    app.component('svg-icon', SvgIcon)
  }
}
