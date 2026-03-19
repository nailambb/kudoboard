import { createFileRoute } from "@tanstack/react-router";
import { INITIAL_BOARDS } from "@/data/boards";
import type { Kudo } from "@/data/types";
import { useReducer } from "react"; // 👀
import AddKudoForm from "@/components/add-kudo-form";
import KudoCard from "@/components/kudo-card";
import { kudosReducer } from "@/reducers/kudos";

export const Route = createFileRoute("/boards/$boardId")({
  component: BoardPage,
});

function BoardPage() {
  const { boardId } = Route.useParams();
  const board = INITIAL_BOARDS.find((b) => b.id === boardId);

  const [kudos, dispatch] = useReducer(kudosReducer, board?.kudos ?? []); // 👀

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

  function handleAddKudo(kudo: Kudo) {
    dispatch({ type: "added", kudo }); // 👀 Dispatch instead of setState
  }

  function handleDeleteKudo(id: string) {
    dispatch({ type: "deleted", id }); // 👀 New: delete action
  }

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">{board.title}</h1>
      <p className="mb-6 text-muted-foreground">{board.description}</p>
      <AddKudoForm onAdd={handleAddKudo} />

      {kudos.length === 0 ? (
        <p className="text-muted-foreground">
          No kudos yet. Be the first to add one!
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kudos.map((kudo) => (
            <KudoCard
              key={kudo.id}
              kudo={kudo}
              onDelete={() => handleDeleteKudo(kudo.id)} // 👀
            />
          ))}
        </div>
      )}
    </div>
  );
}
