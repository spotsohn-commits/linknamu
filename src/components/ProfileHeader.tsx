import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.imageUrl}
        alt={`${profile.name} 프로필 사진`}
        width={144}
        height={144}
        priority
        className="h-36 w-36rounded-full border-2 border-neutral-200 object-cover dark:border-neutral-700"
      />
      <h1 className="mt-5 text-xl font-semibold">{profile.name}</h1>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        {profile.bio}
      </p>
    </header>
  );
}
