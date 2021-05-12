import { server } from './src/gladejs-server.js'
import { browser } from './src/gladejs-browser.js'

import {
    serializer,
    moduleChunking,
    stylesChunking,
} from './src/gladejs-utils.js'

export default {
    server,
    browser,
    serializer,
    moduleChunking,
    stylesChunking,
}
