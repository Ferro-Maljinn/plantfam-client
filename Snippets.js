// app.js

{
  /* CONNECTED TO FETCHING PLANTS FROM DB 

    {allPlants.map((plant, i) => {
      return <plantdetails key={plant.name + i} plant={plant} />
    })} */
}

{
  /* <Route
          path="/plantform"
          element={
            <AddPlantPage allPlants={allPlants} setAllPlants={setAllPlants} />
          }
        /> */
}

{
  /* </Layout> */
}


  // FETCH EXISTING PLANTS FROM DATABASE, BUGFIXING TO BE DONE

  // useEffect(() => {
  //   async function fetchAllPlants() {
  //     const response = await fetch(`${API_URL}/example`);
  //     const data = await response.json();
  //     if(!data) return;
  //     setAllPlants(data);
  //   }
  //   fetchAllPlants();
  // }, [])

  // const addNewPlant = (NewPlant) => {
  //   setAllPlants([...allPlants, NewPlant])
  // };