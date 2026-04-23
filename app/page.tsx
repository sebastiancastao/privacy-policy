import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white text-2xl font-bold shadow-lg">
        2MB
      </div>
      <h1 className="text-5xl font-bold tracking-tight">Render Size Checker</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
        A Chrome extension for technical SEO. Instantly know whether a page&rsquo;s rendered HTML
        exceeds Google&rsquo;s <strong>2 MB rendering limit</strong> — before Googlebot truncates
        your content.
      </p>
      <Link
        href="/privacy-policy"
        className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
      >
        Read our Privacy Policy &rarr;
      </Link>
    </div>
  );
}
