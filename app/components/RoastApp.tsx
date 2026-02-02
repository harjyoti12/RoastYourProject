"use client";

import { useState } from "react";
import { roastProject } from "../actions";
import { text } from "stream/consumers";



const themeMap = {
    mild: {
        bg: "bg-gradient-to-br from-blue-50 to-cyan-100",
        card: "bg-cyan-50",
        accent: "text-blue-700",
        border: "border-cyan-300",
        button: "bg-blue-600 hover:bg-blue-700",
        ring: "focus:ring-blue-500",
        text: "text-blue-900",
        subText: "text-blue-600",
        inputBg: "bg-blue-50",
        placeholder: "placeholder:text-blue-400",
        shadow: "shadow-xl shadow-blue-200/40",
    },

    professional: {
        bg: "bg-gradient-to-br from-purple-100 to-indigo-200",
        card: "bg-purple-50",
        accent: "text-purple-700",
        border: "border-purple-300",
        button: "bg-purple-700 hover:bg-purple-800",
        ring: "focus:ring-purple-500",
        text: "text-purple-900",
        subText: "text-purple-600",
        inputBg: "bg-purple-100",
        placeholder: "placeholder:text-purple-400",
        shadow: "shadow-xl shadow-purple-400/30",
    },

    brutal: {
        bg: "bg-black",
        card: "bg-zinc-900",
        accent: "text-orange-500",
        border: "border-orange-700/60",
        button: "bg-orange-700 hover:bg-orange-800",
        ring: "focus:ring-orange-600",
        text: "text-white",
        subText: "text-gray-400",
        inputBg: "bg-zinc-800",
        placeholder: "placeholder:text-gray-500",
        shadow: "shadow-[0_0_40px_rgba(255,140,0,0.25)]",
    },
};

export default function RoastApp() {
  const [projectDetails, setProjectDetails] = useState("");
  const [techStack, setTechStack] = useState("");
  const [tone, setTone] = useState<"mild" | "professional" | "brutal">("mild");
  const [roast, setRoast] = useState("");
  const [loading, setLoading] = useState(false);

  const theme = themeMap[tone];

  async function handleRoast() {
    if (!projectDetails.trim()) return;

    setLoading(true);
    setRoast("");

    const combinedDetails = `
Project Description:
${projectDetails}

Tech Stack Used:
${techStack || "Not specified"}
`;

    const response = await roastProject(combinedDetails, tone);
    setRoast(response);
    setLoading(false);
  }

  return (
    <main
      className={`min-h-screen ${theme.bg} flex items-center justify-center px-4 transition-colors duration-300`}
    >
      <div
        className={`w-full max-w-2xl ${theme.card} p-6 rounded-2xl shadow-lg space-y-6 border ${theme.border} transition-all duration-300`}
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className={`text-3xl font-bold ${theme.accent}`}>
            Roast My Side Project 🔥
          </h1>
          <p className="text-gray-500 text-sm">
            Submit your project. Choose your pain level.
          </p>
        </div>

        {/* Project Details */}
        <div className="space-y-2">
          <label className={`font-medium ${theme.text}`}>Project Details</label>
          <textarea
            rows={5}
            placeholder="What does your project do? What features does it have? Who is it for?"
            className={`w-full p-3 ${theme.text} rounded-lg border ${theme.border} bg-transparent focus:outline-none focus:ring-2 ${theme.ring}`}
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
          />
          <p className="text-sm text-gray-500">
            More detail = more accurate (and painful) roast.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <label className={`font-medium ${theme.text}`}>Tech Stack Used</label>
          <textarea
            rows={2}
            placeholder="Next.js, Firebase, Tailwind, etc."
            className={`w-full p-3 rounded-lg border ${theme.text} ${theme.border} bg-transparent focus:outline-none focus:ring-2 ${theme.ring}`}
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />
          <p className="text-sm text-gray-500">
            Optional, but tech choices will be judged.
          </p>
        </div>

        {/* Tone */}
        <div className="space-y-2">
          <label className={`font-medium ${theme.text}`}>Roast Tone</label>
          <select
            className={`w-full p-3 rounded-lg border ${theme.border} bg-transparent ${theme.text} focus:outline-none focus:ring-2 ${theme.ring}`}
            value={tone}
            onChange={(e) => setTone(e.target.value as any)}
          >
            <option value="mild">😄 Mild — Honest & respectful</option>
            <option value="professional">🧠 Professional — Dry & judgmental</option>
            <option value="brutal">☢️ Apocalypse — Emotional damage</option>
          </select>

          {tone === "brutal" && (
            <p className="text-sm text-red-500 font-medium animate-pulse">
              ⚠️ Apocalypse mode is intentionally cruel. You asked for this.
            </p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={handleRoast}
          disabled={loading}
          className={`w-full text-white py-3 rounded-lg font-semibold transition-all ${theme.button} disabled:opacity-50`}
        >
          {loading ? "Roasting your soul..." : "Roast My Project"}
        </button>

        {/* Result */}
        {roast && (
          <div
            className={`mt-6 p-4 rounded-lg border ${theme.border} whitespace-pre-wrap text-sm leading-relaxed`}
          >
            {roast}
          </div>
        )}
      </div>
    </main>
  );
}
