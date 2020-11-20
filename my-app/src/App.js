 import React, { useState, useEffect } from 'react';
 import './App.css';
 import Header from './components/ui/Header'
 import CharacterGrid from './components/characters/CharacterGrid'
 import Search from './components/ui/Search'

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
            fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`) 
            .then(res => res.json())
            .then(data => {
            //console.log(data)
            setItems(data)
            setIsLoading(false)
        })
        .catch(error => {
            setError(true);
        })
    }
    fetchItems() 
  }, [query])

  return (
    <div className="container"> 
      <Header /> 
      <Search getQuery={(q) => setQuery(q)} /> 
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
