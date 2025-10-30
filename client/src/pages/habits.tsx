import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Flame, TrendingUp } from "lucide-react";

interface Habit {
  id: string;
  name: string;
  emoji: string;
  streak: number;
  completedToday: boolean;
  successRate: number;
}

export default function HabitsPage() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", name: "Read 10 pages", emoji: "📚", streak: 7, completedToday: true, successRate: 85 },
    { id: "2", name: "Stretch", emoji: "🧘", streak: 5, completedToday: false, successRate: 78 },
    { id: "3", name: "Drink water", emoji: "💧", streak: 12, completedToday: true, successRate: 95 },
  ]);
  const [newHabit, setNewHabit] = useState("");

  const toggleHabit = (id: string) => {
    setHabits(habits.map(habit => 
      habit.id === id 
        ? { ...habit, completedToday: !habit.completedToday, streak: !habit.completedToday ? habit.streak + 1 : habit.streak }
        : habit
    ));
  };

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, {
        id: Date.now().toString(),
        name: newHabit,
        emoji: "⭐",
        streak: 0,
        completedToday: false,
        successRate: 0
      }]);
      setNewHabit("");
    }
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter(h => h.id !== id));
  };

  const completedCount = habits.filter(h => h.completedToday).length;
  const totalSuccessRate = Math.round(habits.reduce((sum, h) => sum + h.successRate, 0) / habits.length);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Habits Dashboard</h1>
        <p className="text-muted-foreground">Build positive habits and maintain consistency</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Today's Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{completedCount}/{habits.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Habits completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              Best Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{Math.max(...habits.map(h => h.streak))}</div>
            <p className="text-xs text-muted-foreground mt-1">Days in a row</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalSuccessRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">Overall completion</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Add New Habit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="e.g., Exercise for 30 minutes"
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addHabit()}
              data-testid="input-new-habit"
            />
            <Button onClick={addHabit} data-testid="button-add-habit">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Habits</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {habits.map((habit) => (
            <div
              key={habit.id}
              className="flex items-center gap-3 p-4 rounded-lg border hover-elevate"
            >
              <Checkbox
                checked={habit.completedToday}
                onCheckedChange={() => toggleHabit(habit.id)}
                data-testid={`checkbox-habit-${habit.id}`}
              />
              <span className="text-2xl">{habit.emoji}</span>
              <div className="flex-1">
                <p className={`font-medium ${habit.completedToday ? 'line-through text-muted-foreground' : ''}`}>
                  {habit.name}
                </p>
                <div className="flex gap-2 mt-1">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Flame className="h-3 w-3" />
                    {habit.streak} days
                  </Badge>
                  <Badge variant="outline">{habit.successRate}% success</Badge>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteHabit(habit.id)}
                data-testid={`button-delete-habit-${habit.id}`}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {habits.some(h => h.streak >= 7) && (
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-orange-900">
          <CardContent className="p-6 text-center">
            <p className="text-sm italic">🎉 Amazing streak! You're building powerful habits 🌱</p>
            <p className="text-sm text-muted-foreground mt-2">🐾 Consistency is key — proud of you!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
