import { useState } from "react";
import PlantForm from "./PlantForm";

export default function PlantCard({ plant, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);

  return (
    <div className="plant-card">
      {editing ? (
        <PlantForm
          plant={plant}
          onSubmit={(updated) => {
            onUpdate(updated);
            setEditing(false);
          }}
        />
      ) : (
        <>
          <h3>{plant.commonName}</h3>
          <p><em>{plant.scientificName}</em></p>
          <ul>
            <li>Light: {plant.light}</li>
            <li>Watering: {plant.watering}</li>
            <li>Soil:{plant.soil}</li>
            <li>Level: {plant.level}</li>
          </ul>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(plant.id)}>Delete</button>
        </>
      )}
    </div>
  );
}