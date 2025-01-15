import { useState } from 'react'
import { questions } from './data/questions'
import './App.css'

function App() {

  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const numberQuestion = questions[current].number
  const currentQuestion = questions[current].question
  const currentAnswer = questions[current].answer

  const Next = () => {
    if (current === questions.length - 1) {
      setCurrent(questions.length - 1);
    } else {
      setCurrent(current + 1);
    }
    setShowAnswer(false);
  }
  const handleClick = () => {
    setShowAnswer(!showAnswer);
  }
  const Previous = () => {
    if (current === 0) {
      setCurrent(0);
    } else {
      setCurrent(current - 1);
    }
    setShowAnswer(false);
  }


  
  

  return (
    <div className="App">
      <h1 className="title">Flash Cards</h1>
      <header className="progress-bar max-w-xs mx-auto mt-8 flex">
        <div className="bar w-[100%] h-6 rounded-lg text-center relative flex bg-gray-500">
          <span className="w-[100%] h-6 absolute justify-center items-center text-sm">{numberQuestion/questions.length * 100}%</span>
          <div className='w-[100%] h-6 rounded-lg bg-[#1a1a1a] flex items-center self-center'
          style={{width: `${numberQuestion/questions.length * 100}%`}} 
          >
          </div>
          <span className="number absolute w-[100%] h-6 pr-1 text-xs flex items-center justify-end">{numberQuestion} of {questions.length}</span>
        </div>
      </header>
      <main className="content-questions w-[100vw] max-w-xs mx-auto rounded-lg m-1 border-">
        <nav className="question w-[100%] h-36 text-2xl flex justify-center items-center">
          {showAnswer ? currentAnswer : currentQuestion}        
        </nav>
        <footer className="buttons">
          <button onClick={Previous}>Previous</button>
          <button id='answer' onClick={handleClick}>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
          <button onClick={Next}>Next</button>
        </footer>
      </main>
    </div>
  )
}

export default App
