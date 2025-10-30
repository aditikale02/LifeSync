# LifeSync Design Guidelines
**"Sync Your Life, Grow Every Day"**

## Design Approach
**Reference-Based Approach**: Drawing inspiration from wellness apps like Calm, Headspace, and nature-inspired interfaces, combined with playful elements from pet companion apps.

## Core Design Principles
- **Decorative Wellness Garden**: Every screen should feel like walking through a peaceful digital garden
- **Emotional Balance**: Design must evoke calm, uplift, and motivation through visual elements
- **Playful Guidance**: Cat mascot provides personality and warmth throughout the experience
- **Data Visibility**: Charts and progress should be colorful, aesthetic, and immediately understandable

## Implemented Color Palette

### Light Theme (Pastel Nature Colors) 🌞
```css
--background: 330 50% 98%;         /* Soft pink-tinted white */
--foreground: 260 15% 25%;         /* Deep purple-gray */
--primary: 320 75% 60%;            /* Vibrant pink */
--secondary: 180 40% 85%;          /* Calming cyan */
--accent: 160 50% 88%;             /* Soft mint green */
--card: 0 0% 100%;                 /* Pure white */
--sidebar: 180 30% 96%;            /* Very light cyan */
--muted: 200 25% 92%;              /* Light gray-blue */

/* Chart Colors */
--chart-1: 320 75% 65%;            /* Pink */
--chart-2: 180 70% 55%;            /* Cyan */
--chart-3: 200 65% 60%;            /* Blue */
--chart-4: 140 70% 55%;            /* Green */
--chart-5: 280 70% 65%;            /* Purple */
```

### Dark Theme (Glowing Neon) 🌙
```css
--background: 240 30% 10%;         /* Deep navy */
--foreground: 320 20% 95%;         /* Light pink-white */
--primary: 320 80% 65%;            /* Bright neon pink */
--secondary: 180 30% 22%;          /* Deep teal */
--accent: 160 40% 25%;             /* Dark emerald */
--card: 240 25% 12%;               /* Dark navy-gray */
--sidebar: 200 25% 14%;            /* Dark teal-gray */
--muted: 200 20% 20%;              /* Dark muted blue */

/* Chart Colors (Glowing) */
--chart-1: 320 80% 70%;            /* Neon pink */
--chart-2: 180 75% 65%;            /* Neon cyan */
--chart-3: 200 70% 68%;            /* Neon blue */
--chart-4: 140 75% 65%;            /* Neon green */
--chart-5: 280 75% 70%;            /* Neon purple */
```

### Special Pages
- **Login/Registration**: Pure black (#000000) background, dark gray cards (bg-gray-900), pink and cyan highlights
- **Dashboard Backgrounds**: Nature-decorated with floating petals, maintaining theme consistency
- **Hero Sections**: Nature images with dark gradient overlay (`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))`) for text readability

## Typography

**Font Selection**: Poppins (primary), Nunito (fallback)

**Hierarchy**:
- Page Titles: text-3xl (1.875rem/30px), font-bold
- Section Headers: text-xl (1.25rem/20px), font-semibold
- Dashboard Cards: text-lg (1.125rem/18px), font-medium
- Body Text: text-base (1rem/16px), font-normal
- Cat Messages: text-sm (0.875rem/14px), italic
- Data Labels: text-xs (0.75rem/12px), font-normal
- Stats/Numbers: text-3xl to text-6xl, font-bold

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Micro spacing (between elements): p-2, gap-2
- Component padding: p-4, p-6
- Section spacing: py-8, py-12, py-16
- Page margins: px-4 (mobile), px-8 (tablet), px-12 (desktop)

**Dashboard Grid Structure**:
- Main container: max-w-7xl, centered
- Dashboard cards: Grid layout, 1 column (mobile), 2-3 columns (desktop)
- Sidebar: 280px fixed width for navigation
- Content area: Flexible, responsive

## Component Library

### Navigation
- Sidebar navigation with decorative nature icons
- Smooth transitions between dashboard sections
- Cat mascot fixed in corner (bottom-right or top-right)
- Theme toggle prominent in header

### Dashboard Cards
- Rounded corners (rounded-2xl)
- Soft shadows with color tints matching theme
- Decorative borders with subtle gradients
- Internal padding: p-6 to p-8
- Hover: Gentle lift effect (no aggressive animations)

### Forms & Inputs
- Rounded inputs (rounded-lg)
- Soft borders with theme colors
- Placeholder text: Light, friendly tone
- Focus states: Glowing border in accent color
- Login page inputs: White/light text on black background

### Buttons
- Primary: Gradient backgrounds (pink to blue, cyan to green)
- Rounded (rounded-full for pills, rounded-lg for standard)
- When on images: Backdrop blur (backdrop-blur-md), semi-transparent backgrounds
- Padding: px-6 py-3 for standard, px-8 py-4 for hero CTAs
- No custom hover states on blurred buttons (native states work universally)

### Data Visualization
- Use Recharts with custom colors matching theme palette
- Graphs: Smooth curves, colorful fills with gradients
- Progress bars: Rounded, animated fills with pastel colors
- Stat cards: Large numbers, small labels, decorative icons

### Cat Mascot
- Size: 80-120px depending on screen
- Position: Fixed bottom-right or floating top-right corner
- Animation: Subtle breathing, occasional wink/stretch/purr
- Speech bubble: Rounded, pointing to cat, appears on triggers
- Messages: Contextual to user actions and dashboard data

### Game & Feedback Cards
- Mind Games: Card grid with soft neon highlights, game icons/names
- Feedback Dashboard: Prominent Google Form button, decorative rating stars
- Both: Pastel backgrounds with decorative borders

## Animations & Motion

**Nature Elements** (Use throughout):
- Floating flower petals (slow vertical drift)
- Swaying tree branches (gentle side-to-side)
- Drifting clouds (horizontal movement)
- Leaf falling animation (occasional, not constant)
- Implementation: CSS animations or Framer Motion, low frame rate for performance

**UI Transitions**:
- Page changes: 300ms fade
- Card hovers: 200ms lift (translateY: -4px)
- Chart animations: Stagger effect on load
- Cat reactions: Quick bounce or shake (500ms)

**Performance Note**: Keep animations lightweight—decorative not distracting

## Images

**Hero Section** (Dashboard Landing):
- Large decorative illustration: Peaceful nature scene (garden, meditation space, or wellness sanctuary)
- Size: Full viewport width, 60-70vh height
- Overlay: Semi-transparent gradient for text readability
- Cat mascot integrated into hero scene

**Dashboard Backgrounds**:
- Subtle texture overlays (leaves, petals, soft patterns)
- Not full images—decorative SVG elements layered
- Maintain readability of data and charts

**Icon System**:
- Font Awesome for dashboard icons (tree, water drop, heart, brain, moon, etc.)
- Nature-themed, colorful (not monochrome)
- Size: 24-32px standard, 48-64px for feature highlights

**No Custom SVG Icons**: Use established libraries exclusively

## Accessibility

- Maintain WCAG AA contrast ratios in both themes
- Dark theme text: Bright enough against navy/black
- Light theme text: Dark enough against pastels
- All interactive elements: Minimum 44x44px touch targets
- Focus indicators: Visible ring in theme accent color
- Form inputs: Consistent implementation across all dashboards

## Special Dashboard Considerations

**Wellness Test Page**: Black background (like login), colorful progress indicator, encouraging cat presence

**Analytics Dashboard**: Largest viewport for comprehensive data, multi-column charts, summary cards at top

**Mandatory Feedback**: Visual prompt before exit, cannot be skipped, decorative thank-you message after submission

**Meditation/Mindfulness**: Most minimal design, focus on timer and nature sounds, reduced visual clutter

## Implemented Dashboards (20+ Total)

### Core Dashboards
1. **Home** - Overview with stats, daily progress ring, recent activity
2. **Health** - Mental, Physical, Social health with progress rings and weekly trends
3. **Journal** - Daily entries with mood tags, calendar, word counter
4. **Study** - Topic tracking, timer, streak counter, weekly hours graph
5. **Mood** - 8 mood options, weekly emoji graph, contextual cat reactions
6. **Nutrition** - Meal logging (Breakfast/Lunch/Dinner/Snack), weekly trends
7. **Sleep** - Bedtime/wake tracking, sleep consistency graph, quality insights
8. **Activity** - Exercise logging with 5 types, streak tracker, badges
9. **Social** - Interaction logging, feeling notes, weekly frequency graph
10. **Habits** - Custom habits with streaks, checkboxes, success rates
11. **Gratitude** - Daily 3 gratitudes, emoji tags, memory reminders
12. **Mindfulness** - Breathing animation, exercises, meditation music links
13. **Goals** - Short/long-term goals with progress bars, achievements
14. **To-Do** - Task management with productivity score
15. **Pomodoro** - Focus timer with 25/5 minute cycles
16. **Water Tracker** - Daily hydration with circular progress (8 glasses goal)
17. **Meditation** - Session duration selector, nature sounds
18. **Mind Games** - External game links (Memory, Puzzle, Sudoku, Word Search)
19. **Feedback** - Star rating, experience form, Google Form link
20. **Analytics** - LifeSync Score, combined charts, weekly/monthly trends

### Authentication
- Login page (black background)
- Registration page (black background)
- Wellness Test (onboarding questionnaire)

## Cat Mascot Implementation

**Generated Image**: AI-generated cute kawaii cat with soft pastel colors
- **Size**: 24x24 (96px)
- **Position**: `fixed bottom-6 right-6 z-50`
- **Animation**: Gentle bounce (3s duration)
- **Speech Bubble**: Rounded card with arrow pointer, max-w-xs
- **Contextual Messages**:
  - Home: "Welcome! Let's sync your life today 🐾"
  - Health: "Your energy feels balanced today 🌼 Keep it up!"
  - Journal: "Tell me about your day... I'm listening 🐾"
  - Study: "Focus time activated! You got this 💪"
  - Mood (Sad): "*virtual hug* It's okay to feel this way 💙"
  - Mood (Happy): "*happy dance* Your joy is contagious! 🎉"
  - Nutrition: "Yum! Those meals look healthy!"
  - Sleep: "You deserve a nap 😴 Don't forget to rest"
  - Activity: "Wow, look at you go! So active today! 💪"
  - Social: "A small 'hi' can brighten a day 🌞"
  - Habits: "Consistency is key — proud of you 🐾"
  - Gratitude: "You're blessed in so many ways 🌼 Remember that"
  - Mindfulness: "Take a deep breath, hold... exhale 🌿 Feel the peace"
  - Goals: "One step closer to your dreams 🌠 Keep going!"

## Nature Background Implementation

**Floating Petals Animation**:
- 8 cherry blossom emojis (`🌸`)
- Random horizontal positioning
- Vertical float from top (-50px) to bottom (100vh)
- Random animation delays (0-5s)
- Random durations (15-25s)
- Opacity fade in/out (0 → 0.3 → 0)
- 360° rotation during descent

## Component Specifications

### StatCard Component
```tsx
- Title (small text, muted)
- Large value (3xl, bold)
- Icon (5x5, colored)
- Optional subtitle/trend
- hover-elevate effect
```

### ProgressRing Component
```tsx
- Size: configurable (default 120px)
- Stroke width: configurable (default 8px)
- Color: customizable
- Displays percentage in center
- Smooth 500ms transition
```

### Sidebar Navigation
- 20 dashboard items with icons
- Grouped under "Dashboards" label
- Active state highlighting
- Fixed header with LifeSync logo and Sparkles icon
- 16rem width (configurable via CSS variables)

## Key Quality Standards

✅ **Implemented Features**:
- Every dashboard is complete and feature-rich
- Charts colorful using Recharts with theme-aware colors
- Consistent spacing and vertical rhythm (space-y-6)
- Nature animations (floating petals) on all dashboard pages
- Cat mascot fixed position with contextual messages
- Responsive grid layouts (1 col mobile → 2-3 cols desktop)
- Theme toggle with localStorage persistence
- All interactive elements have data-testid attributes
- Dark/Light theme with smooth transitions
- Performance-optimized animations

## Technical Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: TailwindCSS + Shadcn UI components
- **Charts**: Recharts library
- **Icons**: Lucide React
- **Routing**: Wouter
- **State**: React useState/useEffect
- **Forms**: React Hook Form + Zod validation
- **Theme**: Custom theme provider with dark/light modes