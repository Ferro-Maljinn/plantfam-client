import "./HomePage.css";

import PlantCard from "../components/PlantCard";

export default function HomePage({
  allPlants,
  searchedPlant,
  setAllPlants,
  user,
}) {
  return (
    <>
      <div className="header-banner-container">
        <div className="header-quote">
          <h4 className="quote">What Plants May Come True</h4>
        </div>
      </div>
      <div className="plants-container">
        {searchedPlant.map((plant, i) => {
          return (
            <PlantCard
              setAllPlants={setAllPlants}
              allPlants={allPlants}
              plant={plant}
              key={plant.englishName + i}
              user={user}
            />
          );
        })}
      </div>
    </>
  );
}
