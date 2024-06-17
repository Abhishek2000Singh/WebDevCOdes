import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(false)
  const [todos, settodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but i am grocery todo"
    },
  ])

  // const Todo = ({todo}) => {
  //   return (<>
  //     <div className="m-4 border border-1 border-purple-800">
  //       <div className="todo">{todo.title}</div>
  //       <div className="todo">{todo.desc}</div>
  //     </div>
  //   </>)
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showBtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {/* if show btn is true then show the text other wise thenga  */}

      {/* {showBtn && <button>showbtn is true</button>}  */}
      {/* if show btn is true then show the text other wise show nothing the above statement use will be found many where  */}
      {/* <Todo/> */}

      {todos.map(todo => {
        // return <Todo key ={todo.title} todo={todo} />
        return (
          <div key={todo.title} className="m-4 border border-1 border-purple-800">
            
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        )
      })}
      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
