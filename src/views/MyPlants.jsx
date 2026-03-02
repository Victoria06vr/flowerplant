import { useState, useEffect } from "react";
import PlantForm from "../components/PlantForm";
import SearchField from "../components/SearchField";


export default function MyPlants() {
  const [plants, setPlants] = useState(() => {
    return JSON.parse(localStorage.getItem("myPlants")) || [];
  });
  const [filterText, setFilterText] = useState("");
  const [editingId, setEditingId] = useState(null); // Track which plant is being edited

  useEffect(() => {
    localStorage.setItem("myPlants", JSON.stringify(plants));
  }, [plants]);

  const addPlant = (plant) => setPlants([...plants, plant]);
  const updatePlant = (updatedPlant) => {
    setPlants(plants.map(p => p.id === updatedPlant.id ? updatedPlant : p));
    setEditingId(null); // stop editing after update
  };
  const deletePlant = (id) => setPlants(plants.filter(p => p.id !== id));

  const filteredPlants = plants.filter(p =>
    p.commonName.toLowerCase().includes(filterText.toLowerCase()) ||
    p.scientificName.toLowerCase().includes(filterText.toLowerCase()) ||
    p.light.toLowerCase().includes(filterText.toLowerCase()) ||
    p.watering.toLowerCase().includes(filterText.toLowerCase()) ||
    p.soil.toLowerCase().includes(filterText.toLowerCase()) ||
    p.level.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleInput = (e) => setFilterText(e.target.value);

  return (
    <div className="my-plants-page">
      <h1>Add a plant:</h1>
      <PlantForm onSubmit={addPlant} />
      <SearchField filterText={filterText} handleInput={handleInput} />
      <h2 className="guideTitle">Plant care guide</h2>
      <table className="plantTable">
        <thead>
          <tr>
            <th>Common Name</th>
            <th>Scientific Name</th>
            <th>Light</th>
            <th>Watering</th>
            <th>Soil</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlants.map((plant) => (
            <tr key={plant.id}>
              {editingId === plant.id ? (
                <td colSpan={7}>
                
                  <PlantForm plant={plant} onSubmit={updatePlant} />
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </td>
              ) : (
                <>
                  <td>{plant.commonName}</td>
                  <td>{plant.scientificName}</td>
                  <td>{plant.light}</td>
                  <td>{plant.watering}</td>
                  <td>{plant.soil}</td>
                  <td>{plant.level}</td>
                  <td>
                    <button onClick={() => setEditingId(plant.id)}>Edit</button>
                    <button onClick={() => deletePlant(plant.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}