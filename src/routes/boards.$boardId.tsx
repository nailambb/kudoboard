import { createFileRoute } from "@tanstack/react-router";
import type { Kudo } from "@/data/types";
import { useEffect, useReducer } from "react";
import AddKudoForm from "@/components/add-kudo-form.tsx";
import KudoCard from "@/components/kudo-card.tsx";
import { boardsReducer } from "@/reducers/boards";
import { loadBoards, saveBoards } from "@/data/board-storage";

export const Route = createFileRoute("/boards/$boardId")({
  component: BoardPage,
});

function BoardPage() {
  const { boardId } = Route.useParams();

  const [boards, dispatch] = useReducer(boardsReducer, null, loadBoards);

  useEffect(() => {
    saveBoards(boards);
  }, [boards]);

  const board = boards.find((b) => b.id === boardId);

  if (!board) {
    return (
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold">Board not found</h1>
        <p className="text-muted-foreground">
          The board you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  const handleAddKudo = (kudo: Kudo) => {
    dispatch({ type: "kudo_added", boardId: board.id, kudo });
  };

  const handleDeleteKudo = (kudoId: string) => {
    dispatch({ type: "kudo_deleted", boardId: board.id, kudoId });
  };

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">{board.title}</h1>
      <p className="mb-6 text-muted-foreground">{board.description}</p>
      <AddKudoForm onAdd={handleAddKudo} />

      {board.kudos.length === 0 ? (
        <p className="text-muted-foreground">
          No kudos yet. Be the first to add one!
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {board.kudos.map((kudo) => (
            <KudoCard
              key={kudo.id}
              kudo={kudo}
              onDelete={() => handleDeleteKudo(kudo.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
