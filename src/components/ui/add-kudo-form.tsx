import { useState, type FormEvent } from "react";
import type { Kudo } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const COLORS = [
  "bg-blue-100",
  "bg-green-100",
  "bg-purple-100",
  "bg-yellow-100",
  "bg-pink-100",
  "bg-orange-100",
];

function AddKudoForm({ onAdd }: { onAdd: (kudo: Kudo) => void }) {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!author.trim() || !message.trim()) return;

    const newKudo: Kudo = {
      id: crypto.randomUUID(),
      author: author.trim(),
      message: message.trim(),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };

    onAdd(newKudo);
    // Reset the form
    setAuthor("");
    setMessage("");
  }

  return (
    <Card className="mb-8">
      <CardContent className="pt-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="author">Your Name</Label>
            <Input
              id="author"
              placeholder="Enter your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              placeholder="Write something nice..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button type="submit">Add Kudo</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddKudoForm;
