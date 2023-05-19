// import logo from "./logo.svg";
import './App.css'
import { fetchData } from './utils/fetchData'

function App() {

  const userGetHandler = () => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      timeout: 5000,
      responseType: 'json',
    };
    const data = { test: "test" }
    fetchData('post', '/api/test/post', data, config)
  }

  return (
    <div className="App">
      <div>hi front</div>
      <button onClick={userGetHandler}>get 요청</button>
    </div>
  )
}

export default App
