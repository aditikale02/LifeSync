import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Smile, Frown, Meh, Battery, Moon as MoonIcon, Zap, Wind, Clock } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const moods = [
  { emoji: "😊", label: "Happy", icon: Smile, color: "text-yellow-500" },
  { emoji: "😔", label: "Sad", icon: Frown, color: "text-blue-500" },
  { emoji: "😡", label: "Angry", icon: Zap, color: "text-red-500" },
  { emoji: "😴", label: "Tired", icon: Battery, color: "text-gray-500" },
  { emoji: "😪", label: "Sleepy", icon: MoonIcon, color: "text-purple-500" },
  { emoji: "🤩", label: "Excited", icon: Zap, color: "text-orange-500" },
  { emoji: "😌", label: "Calm", icon: Wind, color: "text-green-500" },
  { emoji: "😐", label: "Neutral", icon: Meh, color: "text-gray-400" },
];

const weeklyMoodData = [
  { day: "Mon", mood: "Calm" },
  { day: "Tue", mood: "Happy" },
  { day: "Wed", mood: "Happy" },
  { day: "Thu", mood: "Tired" },
  { day: "Fri", mood: "Excited" },
  { day: "Sat", mood: "Happy" },
  { day: "Sun", mood: "Calm" },
];

export default function MoodPage() {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");

  const handleSaveMood = () => {
    console.log("Saving mood", { mood: selectedMood, note });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mood Dashboard</h1>
        <p className="text-muted-foreground">Log your emotions and visualize mental health patterns</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How are you feeling today?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all hover-elevate ${
                  selectedMood === mood.label
                    ? "border-primary bg-accent"
                    : "border-transparent"
                }`}
                data-testid={`button-mood-${mood.label.toLowerCase()}`}
              >
                <span className="text-4xl">{mood.emoji}</span>
                <span className="text-sm font-medium">{mood.label}</span>
              </button>
            ))}
          </div>

          {selectedMood && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
              <Label htmlFor="note">What's on your mind?</Label>
              <Textarea
                id="note"
                placeholder="Explain how you're feeling..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="min-h-[100px]"
                data-testid="textarea-mood-note"
              />
              <Button onClick={handleSaveMood} className="w-full" data-testid="button-save-mood">
                <Clock className="h-4 w-4 mr-2" />
                Log Mood
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Mood Pattern</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-around items-end h-48 border-b">
            {weeklyMoodData.map((data) => {
              const moodData = moods.find(m => m.label === data.mood);
              return (
                <div key={data.day} className="flex flex-col items-center gap-2">
                  <span className="text-3xl">{moodData?.emoji || "😐"}</span>
                  <span className="text-xs font-medium">{data.day}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-6 bg-accent/20 p-4 rounded-lg text-center">
            <p className="text-sm italic">📊 You've been calmer this week than last 🌸</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900">
        <CardContent className="p-6 text-center">
          <p className="text-sm italic">
            {selectedMood === "Sad" ? "🐾 *virtual hug* It's okay to feel this way. You're not alone 💙" : ""}
            {selectedMood === "Happy" ? "🐾 *happy dance* Your joy is contagious! 🎉" : ""}
            {!selectedMood ? "🐾 Tell me how you're feeling today..." : ""}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
