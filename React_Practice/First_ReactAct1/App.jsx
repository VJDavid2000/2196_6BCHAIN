import { useState } from 'react'
import './App.css' 
import TodoList from './components/TodoList'
import MovieList from './components/MovieList'
import BookList from './components/BookList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
      <MovieList />
      <BookList />
    </>
  )
}

export default App