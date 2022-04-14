import PlantCard from "../components/PlantCard";
import "./ProfilePage.css";

export default function ProfilePage({ user, allPlants }) {
  //  let plantsOfUser

  // if(allPlants){
  // async function filterPlants() {
  //   plantsOfUser = await allPlants.filter((plant) => {
  //     return plant.owner === user._id
  //   })
  //   }
  //   filterPlants();
  //   console.log("plant & user", plantsOfUser)}

  if (!user || !allPlants) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="user-welcome">
        <h1>Hello {user && user.currentUser.name}</h1>
      </div>
      <div className="plants-container">
        {allPlants &&
          allPlants
            .filter((plant) => {
              return plant.owner === user.currentUser._id;
            })
            .map((plant, i) => {
              return (
                <PlantCard
                  key={plant.englishName + i}
                  plant={plant}
                  user={user}
                />
              );
            })}
      </div>
      s
    </div>
  );
}
