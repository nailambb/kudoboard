import { createFileRoute, Link } from "@tanstack/react-router";
import { useBoards } from "@/hooks/use-boards"; // 👀
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { boards } = useBoards(); // 👀

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Boards</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {boards.map((board) => (
          <Link
            key={board.id}
            to="/boards/$boardId"
            params={{ boardId: board.id }}
          >
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle>{board.title}</CardTitle>
                <CardDescription>{board.description}</CardDescription>
                <p className="text-sm text-muted-foreground">
                  {board.kudos.length}{" "}
                  {board.kudos.length === 1 ? "kudo" : "kudos"}
                </p>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
