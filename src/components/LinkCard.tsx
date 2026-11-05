import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-glass-border bg-glass px-6 py-4 text-center text-[15px] font-semibold shadow-[0_4px_20px_-6px_rgb(150_90_50/0.18)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-glass-hover hover:shadow-[0_8px_28px_-8px_rgb(150_90_50/0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 active:translate-y-0 dark:shadow-[0_4px_20px_-6px_rgb(0_0_0/0.5)]"
    >
      {link.title}
    </a>
  );
}
