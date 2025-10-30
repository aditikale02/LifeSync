import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2 } from "lucide-react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "Morning meditation", completed: true },
    { id: "2", text: "Drink 8 glasses of water", completed: false },
    { id: "3", text: "30 minutes of exercise", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;
  const productivity = todos.length > 0 ? Math.round((completedCount / todos.length) * 100) : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">To-Do List</h1>
        <p className="text-muted-foreground">Stay organized and productive</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Productivity Score: {productivity}%</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-6">
            <Input
              placeholder="Add a new task..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              data-testid="input-new-todo"
            />
            <Button onClick={addTodo} data-testid="button-add-todo">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3 p-3 rounded-lg border hover-elevate"
              >
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                  data-testid={`checkbox-todo-${todo.id}`}
                />
                <span className={`flex-1 ${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                  {todo.text}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteTodo(todo.id)}
                  data-testid={`button-delete-${todo.id}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
