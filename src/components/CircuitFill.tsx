import React from 'react'

type Props = {
  width?: number
  height?: number
  strokeWidth?: number
  speed?: number // seconds for full animation
  color?: string
}

// High-tech 'circuit filling' SVG component for Next.js + TypeScript.
// - Uses inline SVG paths whose stroke is animated (stroke-dashoffset) to look like the traces are being "filled".
// - Adds glow and a moving dot effect to emphasize the filling animation.
// - Configurable via props. Tailwind can be used around this component for layout.

export default function CircuitFill({
  width = 800,
  height = 360,
  strokeWidth = 3,
  speed = 4,
  color = '#2ea6ff',
}: Props) {
  // We use a single animation-duration CSS variable so consumers can change `speed` prop.
  const styleVars = {
    ['--dur' as any]: `${speed}s`,
    ['--stroke' as any]: color,
  }

  return (
    <div className="relative w-full max-w-[900px] mx-auto" style={styleVars}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height="auto"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_8px_24px_rgba(46,166,255,0.12)]"
        aria-hidden
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#bfe9ff" />
            <stop offset="50%" stopColor={color} />
            <stop offset="100%" stopColor="#0aa0ff" />
          </linearGradient>
        </defs>

        {/* background circuit grid */}
        <g opacity="0.07">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={0}
              x2={width}
              y1={(i + 1) * (height / 13)}
              y2={(i + 1) * (height / 13)}
              stroke="#ffffff"
              strokeWidth={1}
            />
          ))}
        </g>

        {/* circuit traces - each path will animate stroke drawing */}
        <g className="circuit" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)">
          {/* primary trace */}
          <path
            className="trace trace-1"
            d={`M 40 ${height - 40} L 160 ${height - 40} Q 220 ${height - 40} 240 ${height - 80} L 360 ${height - 80} L 480 80`}
            stroke="url(#grad)"
          />

          {/* secondary trace */}
          <path
            className="trace trace-2"
            d={`M 140 ${height - 40} L 140 ${height - 160} L 260 ${height - 160} L 260 ${height - 200} L 520 ${height - 200}`}
            stroke="url(#grad)"
          />

          {/* small connectors */}
          <path
            className="trace trace-3"
            d={`M 360 ${height - 80} L 360 ${height - 180} L 520 ${height - 180}`}
            stroke="url(#grad)"
          />

          {/* terminal nodes (glowing circles) */}
          <g className="nodes">
            <circle className="node" cx={40} cy={height - 40} r={6} fill={color} />
            <circle className="node" cx={480} cy={80} r={6} fill={color} />
            <circle className="node" cx={520} cy={height - 200} r={6} fill={color} />
          </g>

          {/* moving 'fill' dot that follows the primary path - implemented with stroke-dashoffset animation on a duplicate path */}
          <path
            className="pulse-path"
            d={`M 40 ${height - 40} L 160 ${height - 40} Q 220 ${height - 40} 240 ${height - 80} L 360 ${height - 80} L 480 80`}
            stroke={color}
            strokeWidth={strokeWidth + 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 8"
            opacity="0.9"
          />
        </g>
      </svg>

      <style jsx>{`
        .circuit .trace {
          stroke-dasharray: 1200; /* large enough to cover path length */
          stroke-dashoffset: 1200;
          animation: draw var(--dur) linear forwards;
        }

        /* slight phase-shift for multiple traces */
        .circuit .trace-2 { animation-delay: calc(var(--dur) * 0.15); }
        .circuit .trace-3 { animation-delay: calc(var(--dur) * 0.3); }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }

        /* moving dashed pulse that looks like the fill progressing */
        .pulse-path {
          stroke-dasharray: 16 1000;
          animation: pulse var(--dur) linear infinite;
        }

        @keyframes pulse {
          to { stroke-dashoffset: -1200; }
        }

        /* nodes glow */
        .nodes .node {
          filter: drop-shadow(0 4px 10px rgba(46,166,255,0.6));
          transform-origin: center;
          animation: nodePulse calc(var(--dur) * 0.9) ease-in-out infinite;
        }

        @keyframes nodePulse {
          0% { transform: scale(0.95); opacity: 0.95 }
          50% { transform: scale(1.08); opacity: 1 }
          100% { transform: scale(0.95); opacity: 0.95 }
        }

        /* make animation restart on hover for demos */
        :global(svg):hover .trace { animation: none; /* reset */ }
        :global(svg):hover .trace { animation: draw var(--dur) linear forwards; }

        /* ensure CSS vars work in SSR env */
        :global(.relative[style]) { --dur: ${speed}s; --stroke: ${color}; }

      `}</style>
    </div>
  )
}

/*
Usage (Next.js page or component):
import CircuitFill from './CircuitFill'

export default function Demo() {
  return <CircuitFill width={900} height={360} speed={5} color="#2ea6ff" />
}

Notes:
- For more complex, interactive circuits you can generate the SVG paths programmatically from data.
- If you use Tailwind and want to add custom keyframes/animations globally, add them to your tailwind.config.js.
*/
