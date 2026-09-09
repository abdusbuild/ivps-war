import Academics from "@/components/sections/Academics";

export const metadata = {
  title: "Academics",
  description:
    "The academic journey at Indo Valley Public School — four clear stages from Nursery to Class X, following an English-medium CBSE curriculum.",
  alternates: { canonical: "/academics" },
};

export default function AcademicsPage() {
  return (
    <main id="main">
      <Academics />
    </main>
  );
}
