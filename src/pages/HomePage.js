import "./HomePage.css";

import PlantCard from "../components/PlantCard"

export default function HomePage({ allPlants, searchedPlant }) {
console.log(allPlants, "Here are all plants from home")
return (
  <div className="plants-container">
    {searchedPlant.map((plant, i) => {
      return <PlantCard allPlants={allPlants} plant={plant} key={plant.englishName + i} />;
    })}
  </div>
);
}
