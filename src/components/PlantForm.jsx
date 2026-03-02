// src/components/PlantForm.jsx
import { useState } from "react";

export default function PlantForm({ plant = {}, onSubmit }) {
  const [commonName, setCommonName] = useState(plant.commonName || "");
  const [scientificName, setScientificName] = useState(plant.scientificName || "");
  const [light, setLight] = useState(plant.light || "");
  const [watering, setWatering] = useState(plant.watering || "");
  const [soil, setSoil] = useState(plant.soil || "");
  const [level, setLevel] = useState(plant.level || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({id: plant.id || Date.now(), commonName, scientificName, light, watering, soil, level});
    
    setCommonName("");
    setScientificName("");
    setLight("");
    setWatering("");
    setSoil("");
    setLevel("");
  };

  return (
    <form onSubmit={handleSubmit} className="plant-form">
        <div className="input">
            <input type="text" placeholder="Common Name" value={commonName} required onChange={(e) => setCommonName(e.target.value)} />
            <input type="text" placeholder="Scientific Name" value={scientificName} onChange={(e) => setScientificName(e.target.value)} />
            <input type="text" placeholder="Light" value={light} onChange={(e) => setLight(e.target.value)} />
            <input type="text" placeholder="Watering" value={watering} onChange={(e) => setWatering(e.target.value)} />
            <input type="text" placeholder="Soil" value={soil} onChange={(e) => setSoil(e.target.value)} />
            <input type="text" placeholder="Level" value={level} onChange={(e) => setLevel(e.target.value)} />
        </div>
        <button type="submit">{plant.id ? "Update" : "Add"}</button>
    </form>
  );
}