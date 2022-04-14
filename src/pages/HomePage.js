import "./HomePage.css";

import PlantCard from "../components/PlantCard";

export default function HomePage({ allPlants, searchedPlant, setAllPlants }) {
  return (
    <>
      <div className="header-banner-container">
      <div className="header-quote"> What Plants May Come True</div>
      </div>
      <div className="plants-container">
        {searchedPlant.map((plant, i) => {
          return (
            <PlantCard
              setAllPlants={setAllPlants}
              allPlants={allPlants}
              plant={plant}
              key={plant.englishName + i}
            />
          );
        })}
      </div>
    </>
  );
}
