// src/components/NutritionList.tsx
import React from "react";
import type { Nutrition } from "../types/Nutrition";
import NutritionItem from "./NutritionItem";

interface Props {
  data: Nutrition[];
  onDelete: (id: number) => void;
}

const NutritionList: React.FC<Props> = ({ data, onDelete }) => {
  return (
     
        <div>
        {data.map(item => (
            <NutritionItem key={item.id} item={item} onDelete={onDelete} />
        ))}
        </div> 
  );
};

export default NutritionList;