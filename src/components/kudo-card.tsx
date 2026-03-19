import type { Kudo } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

type KudoCardProps = {
  kudo: Kudo;
  onDelete: () => void;
};

function KudoCard({ kudo, onDelete }: KudoCardProps) {
  return (
    <Card className={kudo.color}>
      <CardContent className="relative pt-1">
        <button
          onClick={onDelete}
          className="absolute top-0 right-3 rounded p-0 text-muted-foreground hover:text-destructive"
          aria-label={`Delete kudo from ${kudo.author}`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
        <p className="mb-3 text-sm">{kudo.message}</p>
        <p className="text-xs font-semibold text-muted-foreground">
          — {kudo.author}
        </p>
      </CardContent>
    </Card>
  );
}

export default KudoCard;
