import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { CatMascot } from "@/components/cat-mascot";
import { NatureBackground } from "@/components/nature-background";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import NotFound from "@/pages/not-found";
import Login from "@/pages/login";
import Register from "@/pages/register";
import WellnessTest from "@/pages/wellness-test";
import Home from "@/pages/home";
import TodoPage from "@/pages/todo";
import PomodoroPage from "@/pages/pomodoro";
import WaterPage from "@/pages/water";
import MeditationPage from "@/pages/meditation";
import GamesPage from "@/pages/games";
import FeedbackPage from "@/pages/feedback";
import AnalyticsPage from "@/pages/analytics";
import { useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/wellness-test" component={WellnessTest} />
      <Route path="/" component={Home} />
      <Route path="/todo" component={TodoPage} />
      <Route path="/pomodoro" component={PomodoroPage} />
      <Route path="/water" component={WaterPage} />
      <Route path="/meditation" component={MeditationPage} />
      <Route path="/games" component={GamesPage} />
      <Route path="/feedback" component={FeedbackPage} />
      <Route path="/analytics" component={AnalyticsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const [catMessage, setCatMessage] = useState("Welcome! Let's sync your life today 🐾");
  const [showCatMessage, setShowCatMessage] = useState(true);

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <div className="flex h-screen w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1">
                <header className="flex items-center justify-between p-4 border-b sticky top-0 bg-background z-40">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <ThemeToggle />
                </header>
                <main className="flex-1 overflow-auto p-6">
                  <NatureBackground />
                  <Router />
                </main>
              </div>
              <CatMascot message={catMessage} showMessage={showCatMessage} />
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
