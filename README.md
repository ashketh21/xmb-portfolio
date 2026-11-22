# AK • PS3 XMB Portfolio

An interactive developer portfolio for myself, built as a homage to the iconic PlayStation 3 **XrossMediaBar (XMB)** interface using TypeScript, Vite, custom WebGL GLSL shaders, and procedural Web Audio.

## Features

- **Centered Dual-Axis XMB Navigation**: Smooth horizontal category bar and aligned vertical submenus spanning **Settings**, **Profile**, **Skills**, **Education**, **Experience**, **Projects**, and **Contact**.
- **Real-Time WebGL Wave Background**: Custom GLSL fragment shader simulating the flowing PS3 silk ribbons at 60 FPS with 7 switchable themes (`Midnight Obsidian` default, `Ruby Crimson`, `PlayStation Cobalt`, `Aurora Emerald`, `Royal Gold`, `Regal Violet`, and `Dynamic Monthly Mode`).
- **Ambient Particle Field**: Drifting glowing dust motes rendered over the wave canvas with subtle mouse interaction (toggleable in Settings).
- **Procedural Web Audio Engine**: Zero-dependency Web Audio API synthesizer generating crisp navigation ticks, confirmation chirps, and cancel tones.
- **Live Customization in Settings**: Switch background themes, wave motion speed, ambient particles, sound effects, 12h/24h clock format, and display typography (`Rajdhani`, `Plus Jakarta Sans`, `Inter`, `Exo 2`) — all persisted via `localStorage`.
- **Save Data Utility (Resume Download)**: Downloadable PDF resume directly from **Profile → Save Data Utility (Resume / CV)**.
- **Multi-Input Support**: Full keyboard (`Arrow Keys` / `WASD`, `Enter` / `Space`, `Esc`), mouse click, and mobile touch swipe navigation.

## Tech Stack

- **Language & Build**: TypeScript, Vite
- **Graphics**: WebGL (custom GLSL shaders), HTML5 Canvas 2D
- **Audio**: Web Audio API
- **Styling**: Vanilla CSS3 with glassmorphism, custom font faces, and responsive layout

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)

### Local Development

```bash
# Install dependencies
npm install

# Start the Vite dev server
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build

```bash
# Type-check and build for production
npm run build

# Preview the production bundle locally
npm run preview
```

## Controls

| Input | Action |
| --- | --- |
| `←` / `→` or `A` / `D` | Switch XMB category |
| `↑` / `↓` or `W` / `S` | Navigate vertical items |
| `Enter` / `Space` / Click | Select item / open detail modal |
| `Esc` / `Backspace` | Close modal / go back |
| Swipe (Touch) | Navigate categories & items on mobile |

## Project Structure

```text
├── index.html                  # Application shell, HUD, and detail modal markup
├── public/
│   ├── favicon.svg             # Site icon
│   └── resume.pdf              # Downloadable resume (Save Data Utility)
└── src/
    ├── audio/soundEngine.ts    # Procedural Web Audio API UI sound effects
    ├── background/             # WebGL GLSL wave engine & 2D particle field
    ├── components/             # Boot sequence, HUD header, detail modal, toasts
    ├── data/portfolioData.ts   # Portfolio content (profile, skills, experience, projects)
    ├── input/inputManager.ts   # Keyboard & touch gesture navigation
    ├── state/themeState.ts     # Persistent user settings (theme, font, audio, clock)
    ├── types/index.ts          # TypeScript interfaces
    ├── main.ts                 # XMB controller & layout positioning
    └── style.css               # XMB theme, typography, and responsive styles
```

## Contact

- **Email**: [ashvinkethiswaran@gmail.com](mailto:ashvinkethiswaran@gmail.com)
- **GitHub**: [github.com/ashketh21](https://github.com/ashketh21)
- **LinkedIn**: [linkedin.com/in/ashvinkethiswaran](https://www.linkedin.com/in/ashvinkethiswaran)
