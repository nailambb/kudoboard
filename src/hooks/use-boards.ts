import { useEffect, useReducer } from "react";
import { boardsReducer } from "@/reducers/boards";
import { loadBoards, saveBoards } from "@/data/board-storage";
import type { Kudo } from "@/data/types";

export function useBoards() {
  const [boards, dispatch] = useReducer(boardsReducer, null, loadBoards);

  useEffect(() => {
    saveBoards(boards);
  }, [boards]);

  function addKudo(boardId: string, kudo: Kudo) {
    dispatch({ type: "kudo_added", boardId, kudo });
  }

  function deleteKudo(boardId: string, kudoId: string) {
    dispatch({ type: "kudo_deleted", boardId, kudoId });
  }

  return { boards, addKudo, deleteKudo };
}
