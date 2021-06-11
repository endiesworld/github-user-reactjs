
import './App.css';
import Form from './components/form' ;
import React, { useState } from "react" ;
import CardList from './components/cardList' ;

function App() {
  const [githubData, setGithubUser] = useState([]) ;
  const getGithubUsers = (newUser) => {
    setGithubUser([...githubData, newUser]) ;
    console.log([...githubData, newUser])
  } 
  return (
    <div>
      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Search a GitHub User
      </h1>
      <Form setNewUser = {getGithubUsers } />
      <CardList  cards={githubData} />
  </div>
  );
}

export default App;
