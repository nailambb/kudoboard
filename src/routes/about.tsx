import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">About KudoBoard</h1>
      <p className="text-muted-foreground">
        KudoBoard lets you create boards to share kind messages and
        appreciation. Create a board for someone, then invite others to add
        their kudos!
      </p>
    </div>
  );
}
