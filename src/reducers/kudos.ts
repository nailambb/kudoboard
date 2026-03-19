import type { Kudo } from "@/data/types";

type KudoAction =
  | { type: "added"; kudo: Kudo }
  | { type: "deleted"; id: string };

function assertNever(value: never): never {
  throw new Error(`Unexpected action: ${JSON.stringify(value)}`);
}

export function kudosReducer(kudos: Kudo[], action: KudoAction): Kudo[] {
  switch (action.type) {
    case "added":
      return [...kudos, action.kudo];
    case "deleted":
      return kudos.filter((k) => k.id !== action.id);
  }

  return assertNever(action);
}
