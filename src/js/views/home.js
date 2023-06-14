import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Cards from "../component/cards";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export const Home = () => {
  const {store, actions} = useContext(Context)
  return (
    <div  className="text-start mt-5">
		  <h3 className="text-danger">Personajes</h3>
      <div className="d-flex text-center mt-5 tarjetasPersonaje">
      {store.people.map((person, index) => (
        <Cards key={index + 1} idPersonaje={index + 1} name={person.name} gender={person.gender} hairColor={person.hair_color} eyeColor={person.eye_color} type="characters"/>
      ))}
      </div>
    </div>
  );
};
