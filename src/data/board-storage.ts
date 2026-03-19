import type { Board } from "@/data/types";
import { INITIAL_BOARDS } from "./boards";

const STORAGE_KEY = "kudoboard-boards";

export function loadBoards(_: null = null): Board[] {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return INITIAL_BOARDS;
  }

  try {
    return JSON.parse(stored) as Board[];
  } catch {
    return INITIAL_BOARDS;
  }
}

export function saveBoards(boards: Board[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(boards));
}
