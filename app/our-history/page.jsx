import Link from "next/link";

export default function OurHistory() {
  const stats = [
    { number: "2,000+", label: "Adoptions completed" },
    { number: "70+", label: "Active volunteers" },
    { number: "5×", label: "State #1 in a row" },
  ];

  const milestones = [
    {
      year: "2005",
      title: "We opened our doors",
      description:
        "12 cats, 8 dogs, and a borrowed building in downtown Miami. Just a small team with a big belief that every animal deserves a home.",
    },
    {
      year: "2010",
      title: "500th adoption milestone",
      description:
        "We matched our 500th pet with a forever home — a moment that made us realise just how much demand there was for what we were doing.",
    },
    {
      year: "2016",
      title: "New facility & expanded team",
      description:
        "We moved into a larger space, doubled our volunteer base to 70+, and introduced nightly animal yoga — still one of our most loved programmes.",
    },
    {
      year: "2019",
      title: "Voted #1 in Florida",
      description:
        "We were recognised as the state's top adoption centre — an honour we've held every year since.",
    },
    {
      year: "2024",
      title: "2,000 adoptions & counting",
      description:
        "We crossed 2,000 completed adoptions this year. The heart of this place hasn't changed — and we're more excited than ever about where we're going.",
    },
  ];

  return (
    <div className="page-section">
      <div className="page-section-inner">
        <Link href="/" className="small-link">
          &laquo; Back to home
        </Link>

        <h2 className="page-section-title">Our History</h2>

        <div className="generic-page-content">
          <p>
            What started as a small corner of Miami with a handful of rescued
            animals and a group of dedicated volunteers has grown into something
            far bigger than any of us imagined. We opened our doors in 2005
            with just twelve cats and eight dogs, a borrowed building, and the
            simple belief that every animal deserves a second chance.
          </p>
        </div>

        <blockquote className="history-pull-quote">
          <p>"Every animal deserves a second chance."</p>
        </blockquote>

        <div className="history-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="history-stat-card">
              <p className="history-stat-number">{stat.number}</p>
              <p className="history-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <hr className="history-divider" />

        <div>
          <p className="history-timeline-heading">Milestones</p>

          {milestones.map((item, index) => (
            <div key={item.year} className="history-timeline-item">
              <div className="history-timeline-left">
                <div className="history-timeline-dot" />
                {index < milestones.length - 1 && (
                  <div className="history-timeline-line" />
                )}
              </div>

              <p className="history-timeline-year">{item.year}</p>

              <div className={`history-timeline-body${index < milestones.length - 1 ? " history-timeline-body--spaced" : ""}`}>
                <p className="history-timeline-title">{item.title}</p>
                <p className="history-timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}