import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, Plus, Trophy, Mountain } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  type: "short" | "long";
  targetDate: string;
  progress: number;
  completed: boolean;
}

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: "1", title: "Read 12 books this year", type: "long", targetDate: "2025-12-31", progress: 65, completed: false },
    { id: "2", title: "Exercise 3 times this week", type: "short", targetDate: "2025-11-03", progress: 100, completed: true },
    { id: "3", title: "Learn meditation", type: "short", targetDate: "2025-11-10", progress: 40, completed: false },
  ]);
  const [newGoal, setNewGoal] = useState("");
  const [goalType, setGoalType] = useState<"short" | "long">("short");
  const [targetDate, setTargetDate] = useState("");

  const addGoal = () => {
    if (newGoal.trim() && targetDate) {
      setGoals([...goals, {
        id: Date.now().toString(),
        title: newGoal,
        type: goalType,
        targetDate,
        progress: 0,
        completed: false
      }]);
      setNewGoal("");
      setTargetDate("");
    }
  };

  const completedGoals = goals.filter(g => g.completed);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Goals Dashboard</h1>
        <p className="text-muted-foreground">Set and track personal goals with motivation</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              Active Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{goals.filter(g => !g.completed).length}</div>
            <p className="text-sm text-muted-foreground mt-1">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{completedGoals.length}</div>
            <p className="text-sm text-muted-foreground mt-1">Goals completed</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-green-500" />
            Add New Goal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button
              variant={goalType === "short" ? "default" : "outline"}
              onClick={() => setGoalType("short")}
              data-testid="button-type-short"
            >
              Short-term
            </Button>
            <Button
              variant={goalType === "long" ? "default" : "outline"}
              onClick={() => setGoalType("long")}
              data-testid="button-type-long"
            >
              Long-term
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="goal">Goal Title</Label>
            <Input
              id="goal"
              placeholder="e.g., Run a 5K marathon"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              data-testid="input-goal"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Target Date</Label>
            <Input
              id="date"
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              data-testid="input-date"
            />
          </div>

          <Button onClick={addGoal} className="w-full" data-testid="button-add-goal">
            <Plus className="h-4 w-4 mr-2" />
            Add Goal
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Goals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="p-4 rounded-lg border hover-elevate space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className={`font-medium ${goal.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {goal.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Target: {new Date(goal.targetDate).toLocaleDateString()}
                  </p>
                </div>
                <Badge variant={goal.type === "short" ? "default" : "secondary"}>
                  {goal.type === "short" ? "Short-term" : "Long-term"}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} />
              </div>

              {goal.completed && (
                <div className="text-center text-sm text-green-600 dark:text-green-400 font-medium">
                  🎉 Completed! Well done!
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {completedGoals.length > 0 && (
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-orange-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <Trophy className="h-6 w-6 text-yellow-500" />
              Achievements Unlocked
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-4xl mb-4">🎉</p>
            <p className="text-sm italic">You've completed {completedGoals.length} goals!</p>
            <p className="text-sm text-muted-foreground mt-2">🐾 One step closer to your dreams 🌠 Keep going!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
