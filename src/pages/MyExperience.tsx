import PageWrapper from "../components/PageWrapper";
import ScatterText from "../components/ScatterText";
import teknikSpranget from "../assets/teknikspranget.jpg";
import lnuLarge from "../assets/lnu-L.jpg";

interface Role {
  years: string;
  title: string;
  place: string;
  dates: string;
  image?: { src: string; alt: string; width: number; height: number };
  description?: string;
}

// Newest first.
const roles: Role[] = [
  {
    years: "2025–now",
    title: "Software Developer",
    place: "Vivicta",
    dates: "Oct 2025 – present",
  },
  {
    years: "2024–2025",
    title: "Software Developer",
    place: "Tietoevry",
    dates: "Nov 2024 – Oct 2025 (1 year)",
  },
  {
    years: "2021–2024",
    title: "Web Development",
    place: "Linnaeus University",
    dates: "Aug 2021 – Jun 2024 (3 years)",
    image: {
      src: lnuLarge,
      alt: "A Linnaeus University building by the water at sunset",
      width: 900,
      height: 323,
    },
    description:
      "Solid computer-science foundation with a focus on web programming, honed skills in developing and deploying robust web applications with high code quality across various platforms.",
  },
  {
    years: "2019",
    title: "IT Support Technician",
    place: "Region Kalmar län",
    dates: "Aug – Dec 2019 (5 months)",
    image: {
      src: teknikSpranget,
      alt: "Two people smiling at the camera in an office during Tekniksprånget",
      width: 311,
      height: 162,
    },
    description:
      "Part of Tekniksprånget, worked with the IT support and distribution department, resolving technical issues and assisting users across Region Kalmar County.",
  },
  {
    years: "2019",
    title: "Care Assistant",
    place: "Kalmar County",
    dates: "Jun – Aug 2019 (3 months)",
    description:
      "Worked in a group home, developed strong teamwork skills, sensitivity to others’ needs, and the ability to handle challenging situations professionally.",
  },
];

function MyExperience() {
  return (
    <PageWrapper id="experience">
      <ScatterText text="My experience" className="title" />

      <ol className="mt-[clamp(2.5rem,6vw,5rem)] border-b border-rule">
        {roles.map((role) => (
          <li
            key={`${role.place}-${role.years}`}
            className="grid gap-x-8 gap-y-2 border-t border-rule py-8 md:grid-cols-12 md:py-10"
          >
            <p className="caption md:col-span-2 md:text-base md:text-ink">
              {role.years}
            </p>

            <div className="flex flex-col gap-2 md:col-span-10 lg:col-span-6">
              <h3 className="entry-title">{role.title}</h3>
              <p>
                {role.place}
                <span className="caption block">{role.dates}</span>
              </p>
              {role.description && (
                <p className="mt-2 max-w-[58ch]">{role.description}</p>
              )}
            </div>

            {role.image && (
              <img
                src={role.image.src}
                alt={role.image.alt}
                width={role.image.width}
                height={role.image.height}
                loading="lazy"
                className="mt-4 w-full max-w-[19rem] md:col-span-10 md:col-start-3 lg:col-span-4 lg:col-start-9 lg:mt-1 lg:justify-self-end"
              />
            )}
          </li>
        ))}
      </ol>
    </PageWrapper>
  );
}

export default MyExperience;
