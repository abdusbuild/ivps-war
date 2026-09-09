import Life from "@/components/sections/Life";

export const metadata = {
  title: "School Life",
  description:
    "Photographs from celebrations, cultural programmes and everyday campus life at Indo Valley Public School, War, Aurangabad.",
  alternates: { canonical: "/life" },
};

export default function LifePage() {
  return (
    <main id="main">
      <Life />
    </main>
  );
}
