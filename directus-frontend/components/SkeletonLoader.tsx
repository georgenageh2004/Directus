export function SkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="aspect-video w-full animate-pulse bg-zinc-200 dark:bg-zinc-800" />
      <div className="flex flex-1 flex-col p-6 space-y-3">
        <div className="h-5 w-2/3 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-5/6 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonTeamCard() {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 space-y-4">
      <div className="h-28 w-28 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-5 w-24 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-4 w-32 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}

export default function SkeletonLoader() {
  return (
    <div className="space-y-16">
      {/* Services Skeleton */}
      <div>
        <div className="h-8 w-48 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800 mb-6" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>

      {/* News Skeleton */}
      <div>
        <div className="h-8 w-32 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800 mb-6" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>

      {/* Team Skeleton */}
      <div>
        <div className="h-8 w-40 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800 mb-6" />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <SkeletonTeamCard />
          <SkeletonTeamCard />
          <SkeletonTeamCard />
          <SkeletonTeamCard />
        </div>
      </div>
    </div>
  );
}
