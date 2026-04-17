import  { useEffect, useState, useMemo } from "react";
import type { Nutrition } from "./types/Nutrition"; 
import { Container, Typography, CircularProgress } from "@mui/material";
import { getNutrition, addNutrition, deleteNutrition } from "./services/api";
import NutritionList from "./components/NutritionList";
import AddNutrition from "./components/AddNutrition";

function App() {
  const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
  const [nutritionList, setNutritionList] = useState<Nutrition[]>([]);

  // Fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getNutrition();      
      setNutritionList(res.data);
    } catch {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  // Add
  const handleAdd = async (data: Nutrition) => {
     try {
      const res = await addNutrition(data);
      setNutritionList([...nutritionList, res.data]);
    } catch {
      setError("Failed to add item");
    }
  };

  // Delete
  const handleDelete = async (id: number) => {
     try {
      await deleteNutrition(id);
      setNutritionList(nutritionList.filter(item => item.id !== id));
    } catch {
      setError("Failed to delete item");
    }
  };

  // Optimization (useMemo)
  const totalCalories = useMemo(() => {
    return nutritionList.reduce((sum, item) => sum + item.calories, 0);
  }, [nutritionList]);

  // return (
  //   <div>
  //     <h1>Nutrition Tracker</h1>

  //     <AddNutrition onAdd={handleAdd} />

  //     <NutritionList data={nutritionList} onDelete={handleDelete} />

  //     <h3>Total Calories: {totalCalories}</h3>
  //   </div>
  // );
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Nutrition Tracker
      </Typography>

      <AddNutrition onAdd={handleAdd} />

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <>
          <NutritionList data={nutritionList} onDelete={handleDelete} />
          <Typography variant="h6">
            Total Calories: {totalCalories}
          </Typography>
        </>
      )}
    </Container>
  );
}

export default App;