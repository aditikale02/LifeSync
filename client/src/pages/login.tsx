import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-10 w-10 text-pink-400" />
            <h1 className="text-4xl font-bold text-white">LifeSync</h1>
          </div>
          <p className="text-cyan-300">Sync Your Life, Grow Every Day</p>
        </div>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Welcome Back</CardTitle>
            <CardDescription className="text-gray-400">
              Sign in to continue your wellness journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                  data-testid="input-email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-200">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
                  data-testid="input-password"
                  required
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-login">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link href="/register">
                <a className="text-pink-400 hover:text-pink-300 font-medium" data-testid="link-register">
                  Sign Up
                </a>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
