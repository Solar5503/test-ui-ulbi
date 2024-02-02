import React, { useState } from 'react'

const HelloWorld = () => {
  const [value, setValue] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)

  const toggleHandler = () => value === 'hello' && setVisible((prev) => !prev)
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)
  return (
    <div>
      <input id="search" type="text" value={value} onChange={changeHandler} />
      <button id="toggle" onClick={toggleHandler}>
        HELLO WORLD
      </button>
      {visible && <h1 id="hello">HELLO WORLD</h1>}
    </div>
  )
}

export default HelloWorld
