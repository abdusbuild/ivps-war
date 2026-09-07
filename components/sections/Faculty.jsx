import Image from "next/image";

const TEACHERS = [
  { cls: "Pre-Nursery A", name: "Miss Alishba Raies", qualification: "D.L.Ed", group: "pre" },
  { cls: "Pre-Nursery B", name: "Miss Aniqua Masroor", qualification: "D.L.Ed", group: "pre" },
  { cls: "Nursery A", name: "Mrs. Rakhi Sinha", qualification: "D.L.Ed", group: "pre" },
  { cls: "Nursery B", name: "Miss Archana Singh", qualification: "B.Ed", group: "pre" },
  { cls: "Nursery C", name: "Miss Naghma Naaz", qualification: "B.Sc", group: "pre" },
  { cls: "L.K.G - A", name: "Mrs. Rekha Ojha", qualification: "D.El.Ed", group: "pre" },
  { cls: "L.K.G - B", name: "Miss Yasmin Perween", qualification: "Graduate", group: "pre" },
  { cls: "L.K.G - C", name: "Miss Sana Salahu", qualification: "B.Ed", group: "pre" },
  { cls: "U.K.G - A", name: "Mrs. Anita Sinha", qualification: "D.El.Ed", group: "pre" },
  { cls: "U.K.G - B", name: "Miss Farida Perween", qualification: "D.El.Ed", group: "pre" },
  { cls: "U.K.G - C", name: "Miss Noor Saba", qualification: "B.Com", group: "pre" },

  { cls: "Class I - A", name: "Miss Kiran Thakur", qualification: "B.Ed", group: "primary" },
  { cls: "Class I - B", name: "Miss Afreen", qualification: "B.Ed", group: "primary" },
  { cls: "Class I - C", name: "Miss Pallavi Singh", qualification: "B.Ed", group: "primary" },
  { cls: "Class II - A", name: "Miss Kriti Rani", qualification: "B.Ed", group: "primary" },
  { cls: "Class II - B", name: "Mr. Amarjeet", qualification: "B.Ed", group: "primary" },
  { cls: "Class II - C", name: "Mrs. Ranjana Shrivatsav", qualification: "B.A", group: "primary" },
  { cls: "Class III - A", name: "Mrs. Nikhat Perween", qualification: "D.El.Ed", group: "primary" },
  { cls: "Class III - B", name: "Mr. Shahid Akthar", qualification: "B.Ed", group: "primary" },
  { cls: "Class IV", name: "Mr. Antriksh Kumar", qualification: "B.Sc", group: "primary" },
  { cls: "Class V", name: "Mr. Sumit Ranjan", qualification: "D.El.Ed", group: "primary" },

  { cls: "Class VI", name: "Mr. Chandan Singh", qualification: "D.El.Ed", group: "middle" },
  { cls: "Class VII", name: "Mr. Awedesh Sinha", qualification: "Graduate, Maths", group: "middle" },

  { cls: "Activity Teacher", name: "Miss Shahina", qualification: "Graduate", group: "specialist" },
  { cls: "Extra Teacher", name: "Mr. Sanjay Sinha", qualification: "Graduate", group: "specialist" },
  { cls: "Music Teacher", name: "Mr. Ramratan", qualification: "", group: "specialist" },
  { cls: "Music Teacher", name: "Mr. Ranjan", qualification: "", group: "specialist" },
  { cls: "Principal", name: "Mr. Dhananjay Pandit", qualification: "B.Ed", group: "specialist" },
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
    <section className="section faculty" id="faculty">
      <div className="wrap">
        <header className="sec-head sec-head--center">
          <p className="eyebrow reveal" data-reveal="up"><span className="eyebrow__dot"></span> The people in the classroom</p>
          <h2 className="h2 split" data-reveal="split">A named teacher for every class</h2>
          <p className="lede reveal" data-reveal="up" data-delay="120">
            28 teachers and staff for session 2026&ndash;27, from Pre-Nursery through Class VII, each
            responsible for one class and one set of families.
          </p>
        </header>

        <figure className="faculty__photo reveal" data-reveal="up">
          <Image src="/images/function4.jpeg" alt="Teachers and staff of Indo Valley Public School gathered outside the school building" width={1280} height={572} />
          <figcaption>Our teaching &amp; support staff</figcaption>
        </figure>

        {GROUPS.map((g) => (
          <div className="faculty__group" key={g.id}>
            <div className="faculty__group-head reveal" data-reveal="up">
              <h3>{g.title}</h3>
              <span>{g.note}</span>
            </div>
            <div className="faculty__grid">
              {TEACHERS.filter((t) => t.group === g.id).map((t, i) => (
                <article className="faculty-card reveal" data-reveal="up" data-delay={i * 40} key={t.name + t.cls}>
                  <span className="faculty-card__avatar">{initials(t.name)}</span>
                  <div className="faculty-card__body">
                    <strong>{t.name}</strong>
                    <span>{roleFor(t)}</span>
                    {t.qualification && <span className="pill">{t.qualification}</span>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
