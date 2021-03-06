import PlantCard from "../components/PlantCard";
import "./ProfilePage.css";

export default function ProfilePage({ user, allPlants }) {
  if (!user || !allPlants) {
    return <p>Loading...</p>;
  }


  console.log(user.currentUser._id, "current user")

  return (
    <div className="profile-container">
      <div className="user-welcome">
        <h1>Hello {user && user.currentUser && user.currentUser.name}</h1>
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
    </div>
  );
}
