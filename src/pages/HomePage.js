import "./HomePage.css";

import PlantCard from "../components/PlantCard"

export default function HomePage({ allPlants }) {
console.log(allPlants, "Here are all plants from home")
  return (
    <div className="plants-container">
      {allPlants.map((plant, i) => {
        return <PlantCard plant={plant} key={plant.englishName + i} />;
      })}
    </div>
  );
}
