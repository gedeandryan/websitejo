"use client";

import type { ReactNode } from "react";

/**
 * Merender teks balasan bot: mendukung *bold* dan baris baru,
 * tanpa memakai dangerouslySetInnerHTML.
 */
export function ChatText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, lineIndex) => (
        <span key={`${lineIndex}-${line}`} className="block min-h-[0.5rem]">
          {renderBold(line)}
        </span>
      ))}
    </>
  );
}

function renderBold(line: string): ReactNode[] {
  return line.split(/(\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.slice(1, -1)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}
