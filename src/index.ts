import 'dotenv/config'
import App from './app'
import HomeRouter from './routers/homeRouter'

const app = new App()
const home = new HomeRouter()
const PORT = process.env.PORT || '3001'

app.addRouter(home.router)
app.startServer(PORT)
