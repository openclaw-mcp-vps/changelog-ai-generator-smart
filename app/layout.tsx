import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChangelogAI – AI Changelog Generator from Git Commits",
  description: "Automatically generate user-friendly changelogs from your git commits using AI. Categorizes features, fixes, and improvements for GitHub and GitLab repos."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3383ad12-c976-4a47-af7a-e20dcf8bf72d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
