import Link from "next/link";

export const metadata = {
  title: "Page Not Found — Indo Valley Public School",
};

export default function NotFound() {
  return (
    <main id="main">
      <section className="py-[clamp(80px,14vw,160px)] relative">
        <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)] text-center">
          <p className="eyebrow justify-center">404</p>
          <h1 className="text-[clamp(30px,4.6vw,54px)] font-display">This page has wandered off</h1>
          <p className="text-text-2 text-[clamp(16.5px,1.6vw,19px)] leading-[1.72] max-w-[56ch] mx-auto mt-4">
            The page you're looking for doesn't exist or may have moved. Try one of the links below, or head back
            to the homepage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link className="btn btn--gold magnetic" href="/">
              <span>Back to homepage</span>
            </Link>
            <Link className="btn btn--ghost magnetic" href="/contact">
              <span>Contact us</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
