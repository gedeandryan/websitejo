"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ChatText } from "@/components/chat-text";
import {
  adminWaLink,
  defaultSuggestions,
  greetingMessage,
  type ChatMessage,
} from "@/lib/chatbot";
import { site } from "@/lib/site";

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

const initialMessages: ChatMessage[] = [
  {
    id: "greeting",
    role: "bot",
    text: greetingMessage,
    suggestions: defaultSuggestions,
    createdAt: 0,
  },
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const toggleOpen = useCallback(() => {
    setOpen((value) => {
      if (!value) setUnread(false);
      return !value;
    });
  }, []);

  const sendMessage = useCallback(
    async (rawText: string) => {
      const text = rawText.trim();
      if (!text || loading) return;

      setMessages((prev) => [
        ...prev,
        { id: createId(), role: "user", text, createdAt: Date.now() },
      ]);
      setInput("");
      setLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text }),
        });

        if (!response.ok) throw new Error("Gagal menghubungi asisten.");

        // Menyesuaikan dengan format kembalian dari route.ts (Flowise)
        // Flowise biasanya mengembalikan teks dalam properti "text"
        const data = (await response.json()) as {
          text?: string;
          reply?: string;
          suggestions?: string[];
        };

        // Ambil data.text (dari Flowise) atau data.reply (fallback)
        const botResponseText = data.text || data.reply || "Maaf, saya tidak mengerti.";

        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "bot",
            text: botResponseText,
            // Jika flowise tidak mengirim suggestions, gunakan defaultSuggestions bawaan UI
            suggestions: data.suggestions ?? defaultSuggestions,
            createdAt: Date.now(),
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: createId(),
            role: "bot",
            text: `Maaf, koneksi ke asisten sedang terganggu. Silakan hubungi admin kami di WhatsApp ${site.phone}.`,
            suggestions: defaultSuggestions,
            createdAt: Date.now(),
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading],
  );

  const lastBotSuggestions =
    [...messages].reverse().find((message) => message.role === "bot")?.suggestions ??
    [];

  return (
    <>
      {open ? (
        <section
          aria-label="Chatbot NATHSMM"
          className="animate-pop fixed bottom-24 right-4 z-50 flex h-[min(34rem,75vh)] w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-2xl shadow-black/50 sm:right-6"
        >
          <header className="flex items-center gap-3 border-b border-border-soft bg-surface-2 px-4 py-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-sm font-bold text-white">
              NB
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold leading-tight">NATHBot</p>
              <p className="flex items-center gap-1.5 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Online 24 jam
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup chat"
              className="grid h-8 w-8 place-items-center rounded-lg text-muted transition-colors hover:bg-background hover:text-foreground"
            >
              ✕
            </button>
          </header>

          <div
            ref={listRef}
            className="chat-scroll flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-sm bg-brand text-white"
                      : "rounded-bl-sm bg-surface-2 text-foreground/90"
                  }`}
                >
                  <ChatText text={message.text} />
                </div>
              </div>
            ))}

            {loading ? (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-3">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="h-1.5 w-1.5 rounded-full bg-muted"
                      style={{
                        animation: "nath-blink 1.2s infinite",
                        animationDelay: `${dot * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {lastBotSuggestions.length > 0 && !loading ? (
            <div className="flex flex-wrap gap-2 border-t border-border-soft px-4 py-3">
              {lastBotSuggestions.slice(0, 4).map((suggestion) =>
                suggestion.toLowerCase() === "chat admin" ? (
                  <a
                    key={suggestion}
                    href={adminWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 transition-colors hover:bg-emerald-500/20"
                  >
                    Chat Admin WhatsApp
                  </a>
                ) : (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void sendMessage(suggestion)}
                    className="rounded-full border border-border-soft bg-background px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-brand hover:text-brand"
                  >
                    {suggestion}
                  </button>
                ),
              )}
            </div>
          ) : null}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-border-soft bg-surface-2 px-3 py-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Tulis pesan, contoh: 1000 likes IG"
              maxLength={500}
              aria-label="Pesan untuk NATHBot"
              className="flex-1 rounded-full border border-border-soft bg-background px-4 py-2.5 text-sm outline-none placeholder:text-muted/70 focus:border-brand"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Kirim pesan"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              ➤
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        onClick={toggleOpen}
        aria-label={open ? "Tutup chatbot" : "Buka chatbot NATHSMM"}
        className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-105 sm:right-6"
      >
        <span className="text-base">{open ? "✕" : "💬"}</span>
        <span className="hidden sm:inline">{open ? "Tutup" : "Tanya NATHBot"}</span>
        {unread && !open ? (
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
        ) : null}
      </button>
    </>
  );
}