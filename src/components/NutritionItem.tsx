// src/components/NutritionItem.tsx
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import type { Nutrition } from "../types/Nutrition";

interface Props {
  item: Nutrition;
  onDelete: (id: number) => void;
}

const NutritionItem: React.FC<Props> = ({ item, onDelete }) => {
  return (
      <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{item.foodName}</Typography>
        <Typography>Calories: {item.calories}</Typography>
        <Typography>Protein: {item.protein}g</Typography>

        <Button
          variant="outlined"
          color="error"
          onClick={() => onDelete(item.id!)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default NutritionItem;