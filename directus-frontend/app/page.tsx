import { getServices, getNews, getTeamMembers } from '@/lib/directus';
import ServiceCard from '@/components/ServiceCard';
import NewsCard from '@/components/NewsCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import { Service, NewsItem, TeamMember } from '@/types/directus';

// Force dynamic fetching to get live data from the Directus CMS
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  let services: Service[] = [];
  let news: NewsItem[] = [];
  let team: TeamMember[] = [];
  let errorMessage: string | null = null;
  let isConnected = false;

  try {
    // Fetch data from all three collections in parallel
    const [fetchedServices, fetchedNews, fetchedTeam] = await Promise.all([
      getServices(),
      getNews(),
      getTeamMembers(),
    ]);

    services = fetchedServices;
    news = fetchedNews;
    team = fetchedTeam;
    isConnected = true;
  } catch (error: any) {
    console.error('[AppRouter] Directus data load failed:', error);
    errorMessage = error.message || 'Failed to establish connection with Directus API.';
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">

      {/* Top Banner / Navigation */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${isConnected ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
              <span className={`relative inline-flex h-3 w-3 rounded-full ${isConnected ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
            </span>
            <span className="text-sm font-semibold tracking-wide uppercase text-zinc-500 dark:text-zinc-400">
              TechNova Solutions
            </span>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="#services" className="text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors">Services</a>
            <a href="#news" className="text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors">News</a>
            <a href="#team" className="text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors">Team Members</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 dark:bg-zinc-950">
        <div className="absolute inset-0 bg-radial-gradient from-indigo-50/40 via-transparent to-transparent dark:from-indigo-950/20" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
            Trusted Technology Partner
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl md:text-6xl">
            Building Innovative <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">Digital Solutions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We help businesses transform their ideas into scalable digital products through modern web development,
            cloud solutions, and innovative technology. Explore our latest services, company news, and meet the
            talented professionals driving our success.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-20">

        {/* Error Alert Display */}
        {errorMessage && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-6 text-rose-900 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-200">
            <div className="flex gap-3">
              <svg className="h-6 w-6 shrink-0 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold tracking-tight">Directus Server Connection Error</h3>
                <p className="mt-2 text-sm leading-relaxed">
                  We were unable to load items from Directus. Please make sure:
                </p>
                <ul className="mt-2 list-inside list-disc text-sm space-y-1">
                  <li>Your Directus instance is running at <code className="font-mono bg-rose-100/80 px-1 rounded dark:bg-rose-900/40">http://localhost:8055</code></li>
                  <li>The Directus collections (<code className="font-mono bg-rose-100/80 px-1 rounded dark:bg-rose-900/40">Services</code>, <code className="font-mono bg-rose-100/80 px-1 rounded dark:bg-rose-900/40">News</code>, <code className="font-mono bg-rose-100/80 px-1 rounded dark:bg-rose-900/40">Team_Members</code>) have **Read** access enabled for the **Public** role.</li>
                  <li>Your <code className="font-mono bg-rose-100/80 px-1 rounded dark:bg-rose-900/40">.env.local</code> has the correct <code className="font-mono">NEXT_PUBLIC_DIRECTUS_URL</code>.</li>
                </ul>
                <p className="mt-4 text-xs font-mono opacity-80">
                  System message: {errorMessage}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Services Section */}
        <section id="services" className="scroll-mt-20">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5 mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
              Services We Provide
            </h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Professional and scalable capabilities fetched directly from the database.
            </p>
          </div>

          {services.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            !errorMessage && (
              <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl">
                <p className="text-zinc-500 dark:text-zinc-400">No services have been published yet.</p>
              </div>
            )
          )}
        </section>

        {/* News Section */}
        <section id="news" className="scroll-mt-20">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5 mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
              Latest News & Insights
            </h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Stay up to date with updates and articles from our corporate blog.
            </p>
          </div>

          {news.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            !errorMessage && (
              <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl">
                <p className="text-zinc-500 dark:text-zinc-400">No blog posts found in the archives.</p>
              </div>
            )
          )}
        </section>

        {/* Team Members Section */}
        <section id="team" className="scroll-mt-20">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5 mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
              Meet Our Team
            </h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              The experts behind our success and client satisfaction.
            </p>
          </div>

          {team.length > 0 ? (
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {team.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            !errorMessage && (
              <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl">
                <p className="text-zinc-500 dark:text-zinc-400">No team members have been configured yet.</p>
              </div>
            )
          )}
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Building scalable, high-performance digital experiences with Next.js and Directus Headless CMS.
          </p>
        </div>
      </footer>
    </div>
  );
}
