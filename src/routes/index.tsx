import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Boards</h1>
      <p className="text-muted-foreground">No boards yet. Check back soon!</p>
    </div>
  );
}
