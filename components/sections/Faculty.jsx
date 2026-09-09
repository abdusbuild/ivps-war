import Image from "next/image";

// `experience`, `subjects` and `bio` are intentionally blank placeholders —
// fill in real per-teacher details here; the card only renders a field when it's non-empty.
const TEACHERS = [
  { cls: "Pre-Nursery A", name: "Miss Alishba Raies", qualification: "D.L.Ed", group: "pre", experience: "", subjects: "", bio: "" },
  { cls: "Pre-Nursery B", name: "Miss Aniqua Masroor", qualification: "D.L.Ed", group: "pre", experience: "", subjects: "", bio: "" },
  { cls: "Nursery A", name: "Mrs. Rakhi Sinha", qualification: "D.L.Ed", group: "pre", experience: "", subjects: "", bio: "" },
  { cls: "Nursery B", name: "Miss Archana Singh", qualification: "B.Ed", group: "pre", experience: "", subjects: "", bio: "" },
  { cls: "Nursery C", name: "Miss Naghma Naaz", qualification: "B.Sc", group: "pre", experience: "", subjects: "", bio: "" },
  { cls: "L.K.G - A", name: "Mrs. Rekha Ojha", qualification: "D.El.Ed", group: "pre", experience: "", subjects: "", bio: "" },
  { cls: "L.K.G - B", name: "Miss Yasmin Perween", qualification: "Graduate", group: "pre", experience: "", subjects: "", bio: "" },
  { cls: "L.K.G - C", name: "Miss Sana Salahu", qualification: "B.Ed", group: "pre", experience: "", subjects: "", bio: "" },
  { cls: "U.K.G - A", name: "Mrs. Anita Sinha", qualification: "D.El.Ed", group: "pre", experience: "", subjects: "", bio: "" },
  { cls: "U.K.G - B", name: "Miss Farida Perween", qualification: "D.El.Ed", group: "pre", experience: "", subjects: "", bio: "" },
  { cls: "U.K.G - C", name: "Miss Noor Saba", qualification: "B.Com", group: "pre", experience: "", subjects: "", bio: "" },

  { cls: "Class I - A", name: "Miss Kiran Thakur", qualification: "B.Ed", group: "primary", experience: "", subjects: "", bio: "" },
  { cls: "Class I - B", name: "Miss Afreen", qualification: "B.Ed", group: "primary", experience: "", subjects: "", bio: "" },
  { cls: "Class I - C", name: "Miss Pallavi Singh", qualification: "B.Ed", group: "primary", experience: "", subjects: "", bio: "" },
  { cls: "Class II - A", name: "Miss Kriti Rani", qualification: "B.Ed", group: "primary", experience: "", subjects: "", bio: "" },
  { cls: "Class II - B", name: "Mr. Amarjeet", qualification: "B.Ed", group: "primary", experience: "", subjects: "", bio: "" },
  { cls: "Class II - C", name: "Mrs. Ranjana Shrivatsav", qualification: "B.A", group: "primary", experience: "", subjects: "", bio: "" },
  { cls: "Class III - A", name: "Mrs. Nikhat Perween", qualification: "D.El.Ed", group: "primary", experience: "", subjects: "", bio: "" },
  { cls: "Class III - B", name: "Mr. Shahid Akthar", qualification: "B.Ed", group: "primary", experience: "", subjects: "", bio: "" },
  { cls: "Class IV", name: "Mr. Antriksh Kumar", qualification: "B.Sc", group: "primary", experience: "", subjects: "", bio: "" },
  { cls: "Class V", name: "Mr. Sumit Ranjan", qualification: "D.El.Ed", group: "primary", experience: "", subjects: "", bio: "" },

  { cls: "Class VI", name: "Mr. Chandan Singh", qualification: "D.El.Ed", group: "middle", experience: "", subjects: "", bio: "" },
  { cls: "Class VII", name: "Mr. Awedesh Sinha", qualification: "Graduate, Maths", group: "middle", experience: "", subjects: "Maths", bio: "" },

  { cls: "Activity Teacher", name: "Miss Shahina", qualification: "Graduate", group: "specialist", experience: "", subjects: "", bio: "" },
  { cls: "Extra Teacher", name: "Mr. Sanjay Sinha", qualification: "Graduate", group: "specialist", experience: "", subjects: "", bio: "" },
  { cls: "Music Teacher", name: "Mr. Ramratan", qualification: "", group: "specialist", experience: "", subjects: "Music", bio: "" },
  { cls: "Music Teacher", name: "Mr. Ranjan", qualification: "", group: "specialist", experience: "", subjects: "Music", bio: "" },
  { cls: "Principal", name: "Mr. Dhananjay Pandit", qualification: "", group: "specialist", experience: "", subjects: "", bio: "" },
];

const GROUPS = [
  { id: "pre", title: "Pre-Primary Wing", note: "Pre-Nursery to U.K.G" },
  { id: "primary", title: "Primary Wing", note: "Class I to Class V" },
  { id: "middle", title: "Middle Wing", note: "Class VI to Class VII" },
  { id: "specialist", title: "Specialist Teachers & Leadership", note: "Activity, extra and music teachers, Principal" },
];

function initials(name) {
  const cleaned = name.replace(/^(Mr\.|Mrs\.|Miss\.?|Ms\.?)\s*/i, "");
  const parts = cleaned.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || parts[0]?.[1] || "")).toUpperCase();
}

function roleFor(t) {
  if (t.cls === "Principal") return "Principal";
  if (t.cls === "Activity Teacher" || t.cls === "Extra Teacher" || t.cls === "Music Teacher") return t.cls;
  return "Class teacher, " + t.cls;
}

export default function Faculty() {
  return (
    <section className="py-[clamp(48px,6vw,90px)] relative" id="faculty">
      <div className="w-full max-w-(--container-wrap) mx-auto px-[clamp(20px,4vw,40px)]">
        <header className="sec-head sec-head--center">
          <p className="eyebrow reveal" data-reveal="up">The people in the classroom</p>
          <h2 className="text-[clamp(30px,4.6vw,54px)] split" data-reveal="split">A named teacher for every class</h2>
          <p className="text-text-2 text-[clamp(16.5px,1.6vw,19px)] leading-[1.72] mt-5 reveal" data-reveal="up" data-delay="120">
            28 teachers and staff for session 2026&ndash;27, from Pre-Nursery through Class VII, each
            responsible for one class and one set of families.
          </p>
        </header>

        <figure className="faculty__photo reveal mb-[clamp(34px,5vw,50px)] relative rounded-xl overflow-hidden shadow-card-lg border border-line-2" data-reveal="up">
          <Image src="/indo/faculty-group-pic.jpeg" alt="Teachers and staff of Indo Valley Public School gathered outside the school building" width={1280} height={572} className="w-full aspect-[16/7] object-cover" />
          <figcaption className="absolute left-4 bottom-4 py-2 px-[15px] rounded-full bg-[rgba(8,21,47,.62)] text-white text-xs font-semibold tracking-[.02em] backdrop-blur-[10px]">Our teaching &amp; support staff</figcaption>
        </figure>

        {GROUPS.map((g) => (
          <div className="faculty__group mb-[clamp(38px,5vw,58px)] last:mb-0" key={g.id}>
            <div className="faculty__group-head reveal flex items-baseline gap-3 mb-5 pb-2.5 border-b border-line-2" data-reveal="up">
              <h3 className="text-[clamp(18px,2vw,22px)]">{g.title}</h3>
              <span className="text-[12.5px] font-bold text-muted">{g.note}</span>
            </div>
            <div className="faculty__grid grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              {TEACHERS.filter((t) => t.group === g.id).map((t, i) => (
                <article
                  className="faculty-card reveal flex flex-col gap-3.5 p-4.5 rounded-lg bg-card border border-line-2 shadow-card-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[3px] hover:shadow-card-md hover:border-[color-mix(in_srgb,var(--gold-500)_30%,transparent)]"
                  data-reveal="up"
                  data-delay={i * 40}
                  key={t.name + t.cls}
                >
                  <div className="flex gap-3.5">
                    <span className="faculty-card__avatar flex-none w-[52px] h-[52px] rounded-full grid place-items-center bg-[linear-gradient(135deg,var(--brand-700),var(--brand-500))] text-white font-display font-bold text-base">{initials(t.name)}</span>
                    <div className="faculty-card__body min-w-0">
                      <strong className="block font-display text-base leading-[1.25] mb-0.5">{t.name}</strong>
                      <span className="block text-[12.8px] text-muted mb-2.5">{roleFor(t)}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {t.qualification && <span className="pill">{t.qualification}</span>}
                        {t.subjects && <span className="pill">{t.subjects}</span>}
                        {t.experience && <span className="pill">{t.experience}</span>}
                      </div>
                    </div>
                  </div>
                  {t.bio && <p className="text-[13px] leading-[1.6] text-text-2 pt-3 border-t border-line-2 m-0">{t.bio}</p>}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
