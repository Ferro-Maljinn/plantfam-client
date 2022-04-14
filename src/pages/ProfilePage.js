// import AddPlantForm from "../components/AddPlantForm";
import "./ProfilePage.css"

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

  console.log(allPlants, "allplants from profilepage");

  if (!user || !allPlants) {
    return <p>Loading...</p>;
  }
  return (
    <div className="profile-container">
    <div className="hello-profile" >
      <h1>Hello {user && user.name}</h1>
      </div>
      
      {allPlants &&
        allPlants
          .filter((plant) => {
            return plant.owner === user._id;
          })
          .map((plant, i) => {
            return (
              
                <div className="outter-container">
                  <div className="orgasm-border-gradient">
                    <div className="plantDetails-andImg-container-profile">
                      <img
                        className="plant-img"
                        src={plant.image}
                        alt="Some Plant"
                      />
                       <div className="plant-details">
                      <h4 key={plant.englishName + i} > {plant.englishName} </h4>
                      <p className="plant-description">{plant.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
        
            );
          })}
    </div>
  );
}
