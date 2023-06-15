import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardsPeople from "../component/cardsPeople";
import VehiculosCard from "../component/navesCard.js";
import PlanetsCard from "../component/planetsCard";

export const Home = () => {
  const {store, actions} = useContext(Context)
  return (
    <div className="container">
      <div className="text-start mt-5">
        <h3 className="text-danger">Personajes</h3>
        <div className="d-flex text-center mt-5 tarjetasPersonaje">
          {store.people.map((person, index) => (
            <CardsPeople key={index + 1} idPersonaje={index + 1} name={person.name} gender={person.gender} hairColor={person.hair_color} eyeColor={person.eye_color} type="characters" />
          ))}
        </div>
      </div>
      <div className="text-start mt-5">
        <h3 className="text-danger">Planetas</h3>
        <div className="d-flex text-center mt-5 tarjetasPersonaje">
          {store.planets.map((planeta, index) => (
            <PlanetsCard key={index + 1} idPlaneta={index +1} name={planeta.name} population={planeta.population} terrain={planeta.terrain} climate={planeta.climate} type="planets" />
          ))}
        </div> 
      </div>
      <div className="text-start mt-5">
        <h3 className="text-danger">Vehículos</h3>
        <div className="d-flex text-center mt-5 tarjetasPersonaje">
          {store.starships.map((nave, index) => (
            <VehiculosCard key={index + 1} idVehiculos={index +1} name={nave.name} model={nave.model} manufacturer={nave.manufacturer} passengers={nave.passengers} type="starships" />
          ))}
        </div> 
      </div>
    </div>
  );
};
