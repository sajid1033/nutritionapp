// src/components/AddNutrition.tsx
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import type { Nutrition } from "../types/Nutrition";

interface Props {
  onAdd: (data: Nutrition) => void;
}

const AddNutrition: React.FC<Props> = ({ onAdd }) => {

  const [error, setError] = useState("");
  const [form, setForm] = useState<Nutrition>({
    foodName: "",
    calories: 0,
    protein: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.foodName || form.calories <= 0 || form.protein < 0) {
      setError("Please enter valid values");
      return;
    }

    setError("");

    onAdd(form);
    setForm({ foodName: "", calories: 0, protein: 0 });
  };

   return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="Food Name"
        fullWidth
        margin="normal"
        value={form.foodName}
        onChange={e => setForm({ ...form, foodName: e.target.value })}
      />

      <TextField
        label="Calories"
        type="number"
        fullWidth
        margin="normal"
        value={form.calories}
        onChange={e => setForm({ ...form, calories: Number(e.target.value) })}
      />

      <TextField
        label="Protein"
        type="number"
        fullWidth
        margin="normal"
        value={form.protein}
        onChange={e => setForm({ ...form, protein: Number(e.target.value) })}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Button variant="contained" color="primary" type="submit">
        Add Nutrition
      </Button>
    </Box>
  );
};

export default AddNutrition;