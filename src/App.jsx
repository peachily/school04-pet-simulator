import { useState } from "react";
import { petCatalog, petConfigs } from "./data/pets";
import HomePage from "./pages/HomePage";
import PetGamePage from "./pages/PetGamePage";
import PetSelectPage from "./pages/PetSelectPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedPetId, setSelectedPetId] = useState(null);

  const selectPet = (petId) => {
    if (!petConfigs[petId]) return;
    setSelectedPetId(petId);
    setPage("game");
  };

  if (page === "home") {
    return <HomePage onStart={() => setPage("select")} />;
  }

  if (page === "select") {
    return (
      <PetSelectPage
        pets={petCatalog}
        onBack={() => setPage("home")}
        onSelect={selectPet}
      />
    );
  }

  return (
    <PetGamePage
      key={selectedPetId}
      pet={petConfigs[selectedPetId]}
      onExit={() => setPage("select")}
    />
  );
}
