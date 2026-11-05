import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-gradient-to-br from-white/90 to-white/30 p-1.5 shadow-[0_12px_32px_-8px_rgb(150_90_50/0.35),0_2px_6px_rgb(150_90_50/0.12)] ring-1 ring-ring-soft dark:from-white/15 dark:to-white/5 dark:shadow-[0_12px_32px_-8px_rgb(0_0_0/0.6)]">
        <Image
          src={profile.imageUrl}
          alt={`${profile.name} 프로필 사진`}
          width={112}
          height={112}
          priority
          className="h-28 w-28 rounded-full object-cover"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">
        {profile.bio}
      </p>
    </header>
  );
}
