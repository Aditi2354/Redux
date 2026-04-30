
import './App.css'
import { Counter } from './features/counter/Counter'
import { store } from './app/store.js'
import {Provider} from 'react-redux'
import { store1 } from './app/store1.js'
import { Message } from './features/counter/Message.jsx'
function App() {
  

  return (
    <>
    <div>
   <Provider store={store}>
   <Counter/>
   </Provider>
    </div>
    <br></br>
    <br></br>
   <>
    <div>
      <Provider store={store1}>
        <Message/>
      </Provider>
    </div>
   </>
    </>
  )
}

export default App
