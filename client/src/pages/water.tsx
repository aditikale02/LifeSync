import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, Plus, Minus } from "lucide-react";

export default function WaterPage() {
  const [glasses, setGlasses] = useState(6);
  const goal = 8;
  const percentage = Math.min((glasses / goal) * 100, 100);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Water Tracker</h1>
        <p className="text-muted-foreground">Stay hydrated throughout the day</p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Today's Hydration</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="relative w-48 h-48 mx-auto">
            <svg viewBox="0 0 200 200" className="transform rotate-180">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="20"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="hsl(var(--chart-2))"
                strokeWidth="20"
                strokeDasharray={`${percentage * 5.65} 565`}
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Droplet className="h-12 w-12 text-blue-500 mb-2" />
              <div className="text-4xl font-bold">{glasses}/{goal}</div>
              <div className="text-sm text-muted-foreground">glasses</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              onClick={() => setGlasses(Math.max(0, glasses - 1))}
              variant="outline"
              size="lg"
              data-testid="button-decrease-water"
            >
              <Minus className="h-5 w-5" />
            </Button>
            <Button 
              onClick={() => setGlasses(glasses + 1)}
              size="lg"
              data-testid="button-increase-water"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Glass
            </Button>
          </div>

          <p className="text-sm text-muted-foreground italic">
            {glasses >= goal 
              ? "Amazing! You've reached your goal! 💧" 
              : `${goal - glasses} more glasses to go! You're doing great 🐾`}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
