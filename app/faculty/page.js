import Faculty from "@/components/sections/Faculty";

export const metadata = {
  title: "Faculty",
  description:
    "The full list of class teachers at Indo Valley Public School for session 2026-27, Pre-Nursery to Class VII, with their qualifications.",
  alternates: { canonical: "/faculty" },
};

export default function FacultyPage() {
  return (
    <main id="main">
      <Faculty />
    </main>
  );
}
