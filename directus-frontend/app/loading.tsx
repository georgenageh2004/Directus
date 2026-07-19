import SkeletonLoader from '@/components/SkeletonLoader';

export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      {/* Skeleton Top Bar */}
      <div className="h-16 border-b border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950" />
      
      {/* Skeleton Hero Banner */}
      <div className="mx-auto max-w-5xl px-4 py-20 space-y-4 flex flex-col items-center">
        <div className="h-5 w-36 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-10 w-2/3 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-1/2 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* Skeleton Cards Grids */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SkeletonLoader />
      </div>
    </div>
  );
}
