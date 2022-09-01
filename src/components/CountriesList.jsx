import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function CountriesList(props) {
    const {countries} = props
    const navigate = useNavigate()
    return(
        <div>
            {countries.map(country => {
                return(
                    <ul key={(country.name.common)}>
                        <li><NavLink to = {`${country.alpha3Code}`}> <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.apha2Code.toLowerCase()}.png`} alt="" width = "100px"/> {country.name.common}</NavLink></li>
                                                
                       <li><button onClick={() => navigate(-1)}>Go back</button></li>
                    </ul>
                )
            })}
         
        </div>
    )
}
