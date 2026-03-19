import { createFileRoute } from "@tanstack/react-router";
import { INITIAL_BOARDS } from "@/data/boards";
import type { Kudo } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/boards/$boardId")({
  component: BoardPage,
});

function BoardPage() {
  const { boardId } = Route.useParams(); // 👀 Read the dynamic param
  const board = INITIAL_BOARDS.find((b) => b.id === boardId);

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

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">{board.title}</h1>
      <p className="mb-6 text-muted-foreground">{board.description}</p>

      {board.kudos.length === 0 ? (
        <p className="text-muted-foreground">
          No kudos yet. Be the first to add one!
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {board.kudos.map((kudo) => (
            <KudoCard key={kudo.id} kudo={kudo} />
          ))}
        </div>
      )}
    </div>
  );
}

function KudoCard({ kudo }: { kudo: Kudo }) {
  return (
    <Card className={kudo.color}>
      <CardContent className="pt-1">
        <p className="mb-3 text-sm">{kudo.message}</p>
        <p className="text-xs font-semibold text-muted-foreground">
          — {kudo.author}
        </p>
      </CardContent>
    </Card>
  );
}
