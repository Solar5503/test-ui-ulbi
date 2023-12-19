// import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AppRouter from './router/AppRouter'

function App() {
  // const [data, setData] = useState<null | object>(null)
  // const [toggle, setToggle] = useState<boolean>(false)
  // const [value, setValue] = useState<string>('')
  // const clickHandler = () => setToggle((prev) => !prev)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setData({})
  //   }, 100)
  // }, [])
  // return (
  //   <div>
  //     <h1 data-testid="value-elem">{value}</h1>
  //     {toggle && <div data-testid="toggle-elem">toggle</div>}
  //     {data && <div style={{ color: 'red' }}>data</div>}
  //     <h1>Hello world</h1>
  //     <button data-testid="toggle-btn" onClick={clickHandler}>
  //       Click me
  //     </button>
  //     <input
  //       type="text"
  //       placeholder="input value...."
  //       onChange={(e) => setValue(e.target.value)}
  //       value={value}
  //     />
  //   </div>
  // )

  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  )
}

export default App
