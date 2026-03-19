import type { Board, Kudo } from "@/data/types";

export type BoardsAction =
  | { type: "kudo_added"; boardId: string; kudo: Kudo }
  | { type: "kudo_deleted"; boardId: string; kudoId: string };

function assertNever(value: never): never {
  throw new Error(`Unexpected action: ${JSON.stringify(value)}`);
}

export function boardsReducer(boards: Board[], action: BoardsAction): Board[] {
  switch (action.type) {
    case "kudo_added":
      return boards.map((board) =>
        board.id === action.boardId
          ? { ...board, kudos: [...board.kudos, action.kudo] }
          : board,
      );
    case "kudo_deleted":
      return boards.map((board) =>
        board.id === action.boardId
          ? {
              ...board,
              kudos: board.kudos.filter((k) => k.id !== action.kudoId),
            }
          : board,
      );
  }

  return assertNever(action);
}
