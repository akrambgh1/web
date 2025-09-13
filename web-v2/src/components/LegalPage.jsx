import React from "react";

export default function LegalPage({ title, children }) {
  return (
    <section className="min-h-screen w-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 px-4">
      <div className="max-w-3xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
        <div className="bg-white dark:bg-zinc-800 p-6 md:p-10 rounded-2xl shadow-lg space-y-6 text-base leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
