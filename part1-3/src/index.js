import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])
  const [boolean, setBoolean] = useState(false)
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState()
  
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  const handleClick = () => {
    let randomInt = getRandomIntInclusive(0, anecdotes.length - 1)
    // console.log(randomInt)
    setSelected(randomInt) 
    setBoolean(false)
  }

  const handleVoteClick = () => {
    const updatedVotes = votes.map(vote => vote)
    if(boolean !== true ){
      updatedVotes[selected] += 1
      setBoolean(true)
    }
    setVotes(updatedVotes)
    console.log('updatedvotes', updatedVotes)
    setMostVotedAnecdote(updatedVotes.indexOf(Math.max(...updatedVotes))) 
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVoteClick} text='vote'/>
      <Button onClick={handleClick} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      {console.log('mostVotedAnecdote', mostVotedAnecdote)}
      <p>{props.anecdotes[mostVotedAnecdote]}</p>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))