import React, {useState,useEffect} from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import axios from 'axios'
import CountriesData from './countries.json'


function App() {
  const[countries, setCountries] = useState(CountriesData)
 
  useEffect(() => {
    const data = async () => {
      try{
        const apiData = await axios.get('https://ih-countries-api.herokuapp.com/countries.')
        setCountries(apiData.data)
      }
      catch(error){
          console.error(error)
      }
    }
    data()
  }, [])

  return (
    <div>
      <Navbar/>
      <div>
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:alpha3code"/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
