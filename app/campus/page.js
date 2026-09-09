import Campus from "@/components/sections/Campus";

export const metadata = {
  title: "Campus & Facilities",
  description:
    "Classrooms, laboratories, library, sports ground and transport fleet at Indo Valley Public School, War, Aurangabad.",
  alternates: { canonical: "/campus" },
};

export default function CampusPage() {
  return (
    <main id="main">
      <Campus />
    </main>
  );
}
