import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heart, Plus, Sparkles } from "lucide-react";

const categories = ["Health", "Family", "Nature", "Work", "Friends", "Self"];

interface GratitudeEntry {
  id: string;
  text: string;
  emoji: string;
  category: string;
  date: string;
}

export default function GratitudePage() {
  const [entries, setEntries] = useState<GratitudeEntry[]>([
    { id: "1", text: "Morning sunshine through my window", emoji: "☀️", category: "Nature", date: "Today" },
    { id: "2", text: "A warm hug from my mom", emoji: "🤗", category: "Family", date: "Today" },
  ]);
  const [newEntry, setNewEntry] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("🌸");
  const [selectedCategory, setSelectedCategory] = useState("Nature");

  const emojis = ["🌸", "❤️", "🌟", "🌈", "☀️", "💫", "🌺", "🦋"];

  const addEntry = () => {
    if (newEntry.trim()) {
      setEntries([...entries, {
        id: Date.now().toString(),
        text: newEntry,
        emoji: selectedEmoji,
        category: selectedCategory,
        date: "Today"
      }]);
      setNewEntry("");
    }
  };

  const todayEntries = entries.filter(e => e.date === "Today");
  const randomMemory = entries[Math.floor(Math.random() * entries.length)];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Gratitude Dashboard</h1>
        <p className="text-muted-foreground">Appreciate the small joys in life</p>
      </div>

      {randomMemory && (
        <Card className="bg-gradient-to-br from-yellow-50 to-pink-50 dark:from-gray-800 dark:to-pink-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              Memory Reminder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg italic">
              {randomMemory.emoji} {randomMemory.text}
            </p>
            <p className="text-sm text-muted-foreground mt-2">from {randomMemory.date}</p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-pink-500" />
            Today's Gratitude ({todayEntries.length}/3)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Choose an emoji</label>
            <div className="flex gap-2 flex-wrap">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`text-2xl p-2 rounded-lg transition-transform hover:scale-110 ${
                    selectedEmoji === emoji ? "bg-accent" : ""
                  }`}
                  data-testid={`button-emoji-${emoji}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  data-testid={`button-category-${cat.toLowerCase()}`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="What are you grateful for today?"
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addEntry()}
              data-testid="input-gratitude"
            />
            <Button onClick={addEntry} disabled={todayEntries.length >= 3} data-testid="button-add-gratitude">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {todayEntries.length >= 3 && (
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
              <p className="text-sm italic text-green-700 dark:text-green-300">
                ✨ Wonderful! You've logged 3 things today!
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Gratitude Journal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="p-4 rounded-lg border hover-elevate"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{entry.emoji}</span>
                <div className="flex-1">
                  <p className="font-medium">{entry.text}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline">{entry.category}</Badge>
                    <span className="text-xs text-muted-foreground">{entry.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-pink-50 to-yellow-50 dark:from-gray-800 dark:to-yellow-900">
        <CardContent className="p-6 text-center">
          <p className="text-sm italic">🐾 You're blessed in so many ways 🌼 Remember that.</p>
        </CardContent>
      </Card>
    </div>
  );
}
