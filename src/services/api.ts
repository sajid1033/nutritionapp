// src/services/api.ts
import axios from "axios";
import type { Nutrition } from "../types/Nutrition";

const API_URL = "http://localhost:3001/nutrition";

export const getNutrition = () => axios.get<Nutrition[]>(API_URL);

export const addNutrition = (data: Nutrition) =>
  axios.post(API_URL, data);

export const deleteNutrition = (id: number) =>
  axios.delete(`${API_URL}/${id}`);