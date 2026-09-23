import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import { FadeIn } from "@/components/Reveal";
import { POSTS } from "@/data/posts";
import { SITE } from "@/data/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const p = POSTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    openGraph: {
      title: `${p.title} | BridgingFX Blog`,
      description: p.excerpt,
      type: "article",
      publishedTime: p.date,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = POSTS.find((x) => x.slug === params.slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  const others = POSTS.filter((x) => x.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url,
          image: `${SITE.url}${post.cover}`,
          datePublished: post.date,
          author: { "@type": "Organization", name: "BridgingFX", url: SITE.url },
          publisher: { "@type": "Organization", name: "BridgingFX", url: SITE.url },
        }}
      />

      <article className="relative overflow-hidden pb-10 pt-32 sm:pt-40">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="orb left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 bg-fx-orange/20 sm:h-96 sm:w-96" aria-hidden="true" />
        <div className="container-x relative max-w-3xl">
          <FadeIn>
            <Link href="/blog" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white">
              <span aria-hidden="true">←</span> All articles
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-fx-orange/10 px-3 py-1 font-semibold text-fx-orange">{post.category}</span>
              {post.sample && (
                <span className="rounded-full bg-white/5 px-3 py-1 font-semibold text-slate-400">
                  Sample editorial article
                </span>
              )}
              <span className="text-slate-500">{post.readTime}</span>
            </div>
            <h1 className="display mt-4 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{post.excerpt}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">
              BridgingFX editorial · {post.date}
            </p>
          </FadeIn>
        </div>
      </article>

      <div className="container-x max-w-3xl">
        <FadeIn>
          <div className="relative mb-10 overflow-hidden rounded-[24px] shadow-card">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="prose-dark">
            <p className="!text-slate-200 text-lg">{post.intro}</p>
            {post.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((b, i) => (
                  <p key={i}>{b}</p>
                ))}
              </section>
            ))}
            <div className="mt-10 rounded-[22px] border border-fx-orange/25 bg-fx-orange/10 p-6 sm:p-8">
              <h3 className="!mt-0 text-lg font-semibold text-white">The takeaway</h3>
              <p className="!mt-3">{post.takeaway}</p>
            </div>
            {post.sample && (
              <p className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-500">
                <span className="font-semibold text-slate-300">Editorial note:</span> this is
                a sample article written to demonstrate the blog&apos;s voice and depth.
                Real publishing cadence and topics will be confirmed with the BridgingFX team.
              </p>
            )}
          </div>
        </FadeIn>

        {others.length > 0 && (
          <FadeIn className="mt-14">
            <h2 className="display text-2xl">Keep <span className="gradient-text">reading</span></h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/blog/${o.slug}`}
                  className="glass card-hover rounded-[20px] p-6"
                >
                  <span className="text-xs font-semibold text-fx-orange">{o.category}</span>
                  <h3 className="display mt-2 text-base leading-snug">{o.title}</h3>
                  <span className="mt-3 inline-flex min-h-[40px] items-center text-sm font-semibold text-fx-orange">
                    Read <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </FadeIn>
        )}
      </div>

      <div className="mt-6">
        <CTABand
          eyebrow="Blog"
          title="Building something this article made you think of?"
          description="Let's scope it — honestly, and in writing."
        />
      </div>
    </>
  );
}
