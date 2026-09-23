import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-24">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="orb left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 bg-fx-orange/20" aria-hidden="true" />
      <div className="container-x relative text-center">
        <p className="gradient-text display text-7xl sm:text-8xl">404</p>
        <h1 className="display mt-4 text-3xl sm:text-4xl">This page went off the charts.</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist — but your brokerage&apos;s future does.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary w-full !py-4 sm:w-auto">Back home</Link>
          <Link href="/services" className="btn-ghost w-full !py-4 sm:w-auto">Browse services</Link>
        </div>
      </div>
    </section>
  );
}
