import "./HomePage.css";

import PlantCard from "../components/PlantCard"

export default function HomePage({ allPlants, searchedPlant, setAllPlants }) {
  console.log('homepage is rendering')
return (
  <div className="plants-container">
    {searchedPlant.map((plant, i) => {
      return <PlantCard setAllPlants={setAllPlants} allPlants={allPlants} plant={plant} key={plant.englishName + i} />;
    })}
  </div>
);
}
