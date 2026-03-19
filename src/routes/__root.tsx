import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-xl font-bold">
            KudoBoard
          </Link>
          {/* 👀 Add navigation links */}
          <div className="flex gap-4">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground [&.active]:text-foreground [&.active]:font-semibold"
            >
              Boards
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground [&.active]:text-foreground [&.active]:font-semibold"
            >
              About
            </Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}


function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">Page not found.</p>
      <Link to="/" className="text-primary underline">
        Go back home
      </Link>
    </div>
  );
}
