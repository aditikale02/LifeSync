# LifeSync Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from wellness apps like Calm, Headspace, and nature-inspired interfaces, combined with playful elements from pet companion apps.

## Core Design Principles
- **Decorative Wellness Garden**: Every screen should feel like walking through a peaceful digital garden
- **Emotional Balance**: Design must evoke calm, uplift, and motivation through visual elements
- **Playful Guidance**: Cat mascot provides personality and warmth throughout the experience
- **Data Visibility**: Charts and progress should be colorful, aesthetic, and immediately understandable

## Color Palette

**Light Theme (🌞)**
- Background: Soft pastel tones (light pink, baby blue, mint green)
- Accents: Pink, cyan, blue, green in their lighter shades
- Text: Darker variants for contrast against pastels
- Nature Elements: Colorful flowers, green leaves, soft clouds

**Dark Theme (🌙)**
- Background: Black/Navy (#0a0a1a to #1a1a2e)
- Accents: Glowing pastel highlights (neon pink, cyan, mint)
- Text: Bright pastels and white for visibility
- Nature Elements: Glowing/luminescent versions of flowers and leaves

**Special Pages**
- Login/Registration: Pure black (#000000) background for clarity and focus during data entry
- Dashboard Backgrounds: Nature-decorated with floating elements, maintaining theme consistency

## Typography

**Font Selection**: Poppins, Nunito, or Quicksand (rounded, calm, modern)

**Hierarchy**:
- Page Titles: 2.5rem (40px), semi-bold
- Section Headers: 1.75rem (28px), medium weight
- Dashboard Cards: 1.25rem (20px), medium
- Body Text: 1rem (16px), regular
- Cat Messages: 0.95rem (15px), playful/slightly italic
- Data Labels: 0.875rem (14px), regular

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

## Key Quality Standards

- Every dashboard must feel complete and feature-rich
- Charts colorful and immediately understandable
- Consistent vertical rhythm across all pages
- Nature animations present but not overwhelming
- Cat mascot contextual and delightful, not annoying
- Responsive: Mobile-first, beautiful on all screen sizes
- Performance: Fast load times despite decorative elements