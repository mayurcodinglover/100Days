import { useState } from 'react'
import './App.css'
import Header from './Header';
import Card from './Card';

function App() {

  return (
    <>
      <Header />
       <Card
          title="Understanding React Context"
          description="React Context API allows you to share state across components without prop drilling. It's perfect for global settings like themes."
          tag="React"
          date="February 25, 2026"
          author="John Doe"
        />
    </>
  )
}

export default App
