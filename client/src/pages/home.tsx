import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";
import { ProgressRing } from "@/components/progress-ring";
import { Droplet, Brain, Heart, Target, TrendingUp, Flame } from "lucide-react";
import natureBg from "@assets/generated_images/Nature_wellness_garden_background_ba7e9c53.png";

export default function Home() {
  return (
    <div className="space-y-8">
      <div 
        className="relative h-64 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${natureBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <h1 className="text-4xl font-bold mb-2">Welcome back! 🌸</h1>
          <p className="text-xl text-cyan-200">Let's make today peaceful and productive</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Water Intake"
          value="6/8"
          icon={Droplet}
          subtitle="glasses today"
          color="text-blue-500"
        />
        <StatCard
          title="Meditation"
          value="15m"
          icon={Brain}
          subtitle="daily average"
          color="text-purple-500"
        />
        <StatCard
          title="Wellness Score"
          value="82%"
          icon={Heart}
          trend="+5% from last week"
          color="text-pink-500"
        />
        <StatCard
          title="Goals Completed"
          value="12/15"
          icon={Target}
          subtitle="this week"
          color="text-green-500"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              Daily Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center py-6">
            <ProgressRing progress={68} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm">Completed morning meditation</span>
              <span className="ml-auto text-xs text-muted-foreground">10m ago</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm">Drank 2 glasses of water</span>
              <span className="ml-auto text-xs text-muted-foreground">1h ago</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span className="text-sm">Completed 3 tasks</span>
              <span className="ml-auto text-xs text-muted-foreground">2h ago</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
