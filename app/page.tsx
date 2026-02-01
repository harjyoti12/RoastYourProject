import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6">
      
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

        {/* Red glow left */}
        <div className="absolute -top-32 -left-32 h-[400px] w-[400px] bg-red-700/30 rounded-full blur-[120px]" />

        {/* Red glow right */}
        <div className="absolute bottom-0 -right-32 h-[500px] w-[500px] bg-red-800/20 rounded-full blur-[140px]" />

        {/* Grain / noise illusion */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center space-y-8">
        
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          Roast Your Side Project{" "}
          <span className="text-red-500">🔥</span>
        </h1>

        <p className="text-gray-400 text-lg">
          A brutally honest AI that roasts your side project the way
          senior developers do — no sugarcoating.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/roast"
            className="px-7 py-3 rounded-lg font-semibold transition
              bg-red-700 hover:bg-red-800
              shadow-[0_0_30px_rgba(255,0,0,0.35)]"
          >
            ☢️ Roast My Project
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            className="px-7 py-3 rounded-lg border border-gray-700
              hover:bg-white/5 transition"
          >
            View Source
          </a>
        </div>

        {/* Feature cards */}
        <div className="pt-12 grid sm:grid-cols-3 gap-6 text-left">
          <Feature
            title="😄 Mild"
            desc="Honest feedback without emotional damage."
            glow="hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          />
          <Feature
            title="🧠 Professional"
            desc="Dry, passive-aggressive senior dev energy."
            glow="hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          />
          <Feature
            title="☢️ Apocalypse"
            desc="No mercy. You asked for it."
            glow="hover:shadow-[0_0_35px_rgba(255,0,0,0.45)]"
            danger
          />
        </div>
      </div>
    </main>
  );
}

function Feature({
  title,
  desc,
  glow,
  danger = false,
}: {
  title: string;
  desc: string;
  glow: string;
  danger?: boolean;
}) {
  return (
    <div
      className={`
        border rounded-xl p-5 transition-all duration-300
        ${danger ? "border-red-700/60" : "border-gray-800"}
        bg-black/40 backdrop-blur-sm
        ${glow}
      `}
    >
      <h3 className={`font-semibold mb-2 ${danger ? "text-red-500" : ""}`}>
        {title}
      </h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}
