import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


export default function CountryDetails (){
    const {id} = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get(id)
                setCountry(response.data)

            } catch (error) {
                console.error(error)
                
            }
          }
          getDetails()

    },[id])
    
         
    return(
        <div>
            {country &&(
                <div>
                    <h2> Name:{country.name.common}</h2> <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=""/>
                    <p> Capital: {country.capital}</p>
                    <p> Region: {country.region}</p>
                </div>
            )
                }
        </div>
    )
}
