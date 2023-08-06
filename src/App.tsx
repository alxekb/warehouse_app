import { Provider } from 'react-redux'

import './App.css'
import store from './store'
import WarehousePage from './views/pages/WarehousePage'

export default function App() {
  return (
    <>
      <div>
        <h1>Cargo Warehouse</h1>
      </div>
      <div className="card">
        <Provider store={store}>
          <WarehousePage />
        </Provider>
      </div>
    </>
  )
}
