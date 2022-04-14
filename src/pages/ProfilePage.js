
// import AddPlantForm from "../components/AddPlantForm";

export default function ProfilePage( { user, allPlants } ) {

 
//  let plantsOfUser 

    // if(allPlants){
    // async function filterPlants() {
    //   plantsOfUser = await allPlants.filter((plant) => {
    //     return plant.owner === user._id
    //   })
    //   }
    //   filterPlants(); 
    //   console.log("plant & user", plantsOfUser)}
  
    
  console.log(allPlants, "allplants from profilepage")

  if(!user || !allPlants){
    return <p>Loading...</p>
  }
  return (
    <div >
  
      <h1>Hello {user && user.name}</h1>
      
      {allPlants && allPlants.filter((plant) =>{
        return plant.owner === user._id
      })
      .map((plant, i) => {
        return <div key={plant.englishName + i} >
        <img className="plant-img" src={plant.image} alt="Some Plant" />
        <p> { plant.englishName } </p>
        </div>
      })
      } 
      </div>
  );
}
