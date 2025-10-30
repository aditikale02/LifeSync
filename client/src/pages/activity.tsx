import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Activity as ActivityIcon, Plus, Award, Flame } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const weeklyActivity = [
  { day: "Mon", minutes: 30 },
  { day: "Tue", minutes: 45 },
  { day: "Wed", minutes: 0 },
  { day: "Thu", minutes: 60 },
  { day: "Fri", minutes: 30 },
  { day: "Sat", minutes: 90 },
  { day: "Sun", minutes: 45 },
];

const activityTypes = [
  { name: "Running", emoji: "🏃", color: "bg-red-100 dark:bg-red-900" },
  { name: "Yoga", emoji: "🧘", color: "bg-purple-100 dark:bg-purple-900" },
  { name: "Walking", emoji: "🚶", color: "bg-green-100 dark:bg-green-900" },
  { name: "Sports", emoji: "⚽", color: "bg-blue-100 dark:bg-blue-900" },
  { name: "Gym", emoji: "🏋️", color: "bg-orange-100 dark:bg-orange-900" },
];

interface ActivityLog {
  id: string;
  type: string;
  duration: number;
  intensity: string;
}

export default function ActivityPage() {
  const [activities, setActivities] = useState<ActivityLog[]>([
    { id: "1", type: "Running", duration: 30, intensity: "Moderate" },
  ]);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [streak, setStreak] = useState(5);

  const addActivity = () => {
    if (selectedActivity && duration) {
      setActivities([...activities, {
        id: Date.now().toString(),
        type: selectedActivity,
        duration: parseInt(duration),
        intensity: "Moderate"
      }]);
      setDuration("");
    }
  };

  const totalMinutes = weeklyActivity.reduce((sum, day) => sum + day.minutes, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Activity Dashboard</h1>
        <p className="text-muted-foreground">Record workouts and physical activities</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ActivityIcon className="h-5 w-5 text-orange-500" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalMinutes}m</div>
            <p className="text-xs text-muted-foreground mt-1">Total activity</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-red-500" />
              Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{streak} days</div>
            <p className="text-xs text-muted-foreground mt-1">Keep moving!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-1">
              <span title="5-Day Streak">🏅</span>
              <span title="Fitness Champ">💪</span>
              <span title="Early Bird">🌅</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">3 unlocked</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Log Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {activityTypes.map((activity) => (
              <button
                key={activity.name}
                onClick={() => setSelectedActivity(activity.name)}
                className={`p-4 rounded-lg border-2 transition-all hover-elevate ${
                  selectedActivity === activity.name
                    ? "border-primary bg-accent"
                    : "border-transparent"
                } ${activity.color}`}
                data-testid={`button-activity-${activity.name.toLowerCase()}`}
              >
                <div className="text-3xl mb-1">{activity.emoji}</div>
                <div className="text-xs font-medium">{activity.name}</div>
              </button>
            ))}
          </div>

          {selectedActivity && (
            <div className="flex gap-2 animate-in fade-in slide-in-from-top-2">
              <Input
                type="number"
                placeholder="Duration (minutes)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                data-testid="input-duration"
              />
              <Button onClick={addActivity} data-testid="button-log-activity">
                <Plus className="h-4 w-4 mr-2" />
                Log
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))" 
                }}
              />
              <Bar dataKey="minutes" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-accent/20">
        <CardContent className="p-6 text-center">
          <p className="text-sm italic">🐾 Wow, look at you go! So active today! 💪</p>
        </CardContent>
      </Card>
    </div>
  );
}
