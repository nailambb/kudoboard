import type { Board } from "./types";

export const INITIAL_BOARDS: Board[] = [
  {
    id: "thank-you-jane",
    title: "Thank You, Jane!",
    description: "A board to celebrate Jane's amazing work on the project.",
    kudos: [
      {
        id: "k1",
        author: "Alice",
        message: "Jane, your attention to detail saved us so many bugs!",
        color: "bg-blue-100",
      },
      {
        id: "k2",
        author: "Bob",
        message: "Thanks for always being so helpful during code reviews.",
        color: "bg-green-100",
      },
    ],
  },
  {
    id: "welcome-new-team",
    title: "Welcome, New Team!",
    description: "Share your warm welcome messages for the new hires.",
    kudos: [
      {
        id: "k3",
        author: "Carol",
        message:
          "So excited to have you all on board. Let's build great things!",
        color: "bg-purple-100",
      },
    ],
  },
  {
    id: "happy-birthday-sam",
    title: "Happy Birthday, Sam!",
    description: "Leave your birthday wishes for Sam here.",
    kudos: [],
  },
];
