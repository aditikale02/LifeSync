import { 
  Home, ListTodo, Timer, Droplet, Brain, Heart, BookOpen, 
  Book, Smile, UtensilsCrossed, Moon as MoonIcon, Activity, 
  Users, CheckSquare, Sparkles, Wind, Target, BarChart3, 
  Gamepad2, MessageSquare 
} from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const dashboardItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "To-Do", url: "/todo", icon: ListTodo },
  { title: "Pomodoro", url: "/pomodoro", icon: Timer },
  { title: "Water Tracker", url: "/water", icon: Droplet },
  { title: "Meditation", url: "/meditation", icon: Brain },
  { title: "Health", url: "/health", icon: Heart },
  { title: "Journal", url: "/journal", icon: BookOpen },
  { title: "Study", url: "/study", icon: Book },
  { title: "Mood", url: "/mood", icon: Smile },
  { title: "Nutrition", url: "/nutrition", icon: UtensilsCrossed },
  { title: "Sleep", url: "/sleep", icon: MoonIcon },
  { title: "Activity", url: "/activity", icon: Activity },
  { title: "Social", url: "/social", icon: Users },
  { title: "Habits", url: "/habits", icon: CheckSquare },
  { title: "Gratitude", url: "/gratitude", icon: Sparkles },
  { title: "Mindfulness", url: "/mindfulness", icon: Wind },
  { title: "Goals", url: "/goals", icon: Target },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Mind Games", url: "/games", icon: Gamepad2 },
  { title: "Feedback", url: "/feedback", icon: MessageSquare },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <div>
            <h2 className="text-lg font-semibold">LifeSync</h2>
            <p className="text-xs text-muted-foreground">Sync Your Life, Grow Every Day</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <Link href={item.url} data-testid={`link-${item.title.toLowerCase()}`}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
