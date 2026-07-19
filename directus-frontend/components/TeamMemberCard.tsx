import Image from 'next/image';
import { TeamMember } from '@/types/directus';
import { getDirectusAssetUrl } from '@/lib/directus';

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const imageUrl = member.image ? getDirectusAssetUrl(member.image) : null;

  return (
    <div className="group flex flex-col items-center text-center p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 shadow-inner">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={member.name}
            fill
            sizes="112px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-400 dark:text-zinc-600 bg-zinc-100 dark:bg-zinc-900">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
        {member.position}
      </p>
    </div>
  );
}
