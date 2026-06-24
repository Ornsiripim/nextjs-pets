import Link from "next/link";

function HomeHeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-heart" viewBox="0 0 16 16">
      <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982" />
      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
      <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
      <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-heart" viewBox="0 0 16 16">
      <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
    </svg>
  );
}

export default function OurVision() {
  const pillars = [
    {
      icon: <HomeHeartIcon />,
      title: "Every pet, placed fast",
      desc: "No healthy animal waits more than a few weeks for a home in Miami.",
    },
    {
      icon: <CommunityIcon />,
      title: "A shelter worth visiting",
      desc: "A place people actively choose — not a last resort, but a destination.",
    },
    {
      icon: <HandshakeIcon />,
      title: "Shared responsibility",
      desc: "A city where caring for animals is everyone's concern, not someone else's problem.",
    },
  ];

  return (
    <div className="page-section">
      <div className="page-section-inner">
        <Link href="/" className="small-link">
          « Back to home
        </Link>

        <h2 className="page-section-title">Our Vision</h2>

        <p className="vision-opening">
          We believe the relationship between a person and a pet is one of the
          most quietly powerful things in the world — asking nothing complicated
          of either side, just presence, patience, and a willingness to show up.
        </p>

        <div className="vision-pillars">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="vision-pillar-card">
              <div className="vision-pillar-icon">
                {pillar.icon}
              </div>
              <p className="vision-pillar-title">{pillar.title}</p>
              <p className="vision-pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <hr className="vision-divider" />

        <div className="generic-page-content">
          <p>
            To get there, we're focused on more than just adoption numbers. We
            want to raise the standard for what an animal shelter can feel like
            — not a place of last resort, but a place people actively choose to
            visit, volunteer at, and support. An environment where animals are
            calm, socialized, and genuinely ready for the next chapter.
          </p>
          <p>
            The bigger picture is a community that sees caring for animals as a
            shared responsibility. We're working with local schools,
            neighborhoods, and businesses to build that culture — one adoption,
            one education event, one rescued animal at a time.
          </p>
        </div>

        <div className="vision-closing-card">
          <p className="vision-closing-label">The goal</p>
          <p className="vision-closing-text">
            Not just to find pets a home — but to make Miami a city where fewer
            animals need rescuing in the first place.
          </p>
        </div>
      </div>
    </div>
  );
}
