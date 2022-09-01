import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function CountriesList(props) {
    const {countries} = props
    const navigate = useNavigate()
    return(
        <div>
            {countries.map(element => {
                return(
                    <ul key={(element.name.common)}>
                        <li><NavLink to = {`/${element.alpha3Code}`}> {element.name.common}</NavLink></li>
                         <li><button onClick={() => navigate(-1)}>Go back</button></li>
                    </ul>
                )
            })}
            <Outlet/>
         
        </div>
    )
}
