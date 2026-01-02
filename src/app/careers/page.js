"use client";

import { useState } from "react";
import {
  FaBriefcase,
  FaUsers,
  FaPaperPlane,
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaHeart,
  FaStar,
  FaSearch,
} from "react-icons/fa";
import SectionHeading from "@/components/Blog/SectionHeading";
import Button from "@/components/UI/Button";
import PageHero from "@/components/UI/PageHero";

export const metadata = {
  title: "Careers at MMH Technologies | Join Our Team",
  description:
    "Explore current job openings, company culture, and growth opportunities at MMH Technologies. Join us to build innovative products and grow your career.",
  keywords: [
    "MMH Technologies Careers",
    "Jobs at MMH Technologies",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Tech Jobs",
    "Company Culture",
  ],
  openGraph: {
    title: "Careers at MMH Technologies | Join Our Team",
    description:
      "Explore current job openings, company culture, and growth opportunities at MMH Technologies. Join us to build innovative products and grow your career.",
    url: "https://www.mmhtechnologies.com/careers",
    siteName: "MMH Technologies",
    // images: [
    //   {
    //     url: "/images/og-careers.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Careers at MMH Technologies | Join Our Team",
  //   description:
  //     "Explore current job openings, company culture, and growth opportunities at MMH Technologies. Join us to build innovative products and grow your career.",
  //   images: ["/images/og-careers.webp"],
  //   creator: "@MMHTech",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function CareersPage() {
  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote / India",
      type: "Full-Time",
      department: "Engineering",
      description:
        "Work on React, Next.js, and modern frontend frameworks to build scalable applications.",
      responsibilities: [
        "Develop new user-facing features",
        "Ensure high performance on mobile and desktop",
        "Collaborate with backend developers and designers",
      ],
      qualifications: [
        "3+ years in frontend development",
        "Strong knowledge of React, Next.js",
        "Experience with REST APIs and Git",
      ],
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Remote / India",
      type: "Full-Time",
      department: "Engineering",
      description:
        "Design and implement robust APIs, databases, and backend systems for our platform.",
      responsibilities: [
        "Develop and maintain APIs",
        "Optimize server performance",
        "Ensure security and scalability",
      ],
      qualifications: [
        "3+ years backend experience",
        "Proficiency in Node.js, Express, or similar frameworks",
        "Database design and SQL/NoSQL knowledge",
      ],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote / India",
      type: "Contract",
      department: "Design",
      description:
        "Create intuitive interfaces, interactive prototypes, and enhance user experiences.",
      responsibilities: [
        "Design wireframes and prototypes",
        "Collaborate with developers for implementation",
        "Conduct user research and testing",
      ],
      qualifications: [
        "2+ years experience in UI/UX",
        "Strong portfolio in web & mobile design",
        "Proficiency with Figma, Adobe XD or Sketch",
      ],
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("");

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(filter.toLowerCase()) ||
      job.department.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <section className="text-center">
        <PageHero
          heading="Join Our Team"
          subHeading="Opportunities to grow and make an impact"
          description="We’re looking for passionate individuals who want to shape the future of technology. Explore roles that challenge you, inspire you, and help you grow."
        />
      </section>

      {/* Job Listings */}
      <section className="pt-16 pb-32">
        <div className="container-custom space-y-8">
          <SectionHeading
            heading="Open Positions"
            subHeading="Find a role that fits your skills"
          />

          {/* Filter Input */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-lg">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] z-10" />

              <input
                type="text"
                placeholder="Search by title or department..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className=" w-full bg-[var(--color-white)] border border-[var(--border-input)] rounded-full py-3 pl-12 pr-5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition "
              />
            </div>
          </div>


          {filteredJobs.length === 0 ? (
            <p className="text-[var(--text-muted)] text-center">
              No jobs match your search.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-[var(--border-input)] bg-[var(--color-white)] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-[var(--color-quaternary)]">
                      {job.title}
                    </h3>
                    <span className="text-sm text-[var(--text-muted)] px-3 py-1 bg-[var(--color-background-soft)] rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-[var(--text-muted)] mb-3">{job.description}</p>
                  <div className="flex flex-wrap gap-4 text-[var(--text-muted)] text-sm">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarCheck /> {job.department}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-start z-50 overflow-auto py-16 px-4">
          <div className="bg-[var(--color-white)] rounded-2xl max-w-3xl w-full p-8 relative shadow-xl animate-slideIn">
            <button
              className="absolute top-4 right-4 text-[var(--color-quaternary)] text-2xl font-bold hover:text-[var(--color-primary)]"
              onClick={() => setSelectedJob(null)}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
              {selectedJob.title}
            </h2>
            <p className="text-[var(--text-muted)] mb-6">{selectedJob.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-[var(--color-quaternary)] mb-2">
                Responsibilities:
              </h4>
              <ul className="list-disc list-inside text-[var(--text-muted)] space-y-1">
                {selectedJob.responsibilities.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-[var(--color-quaternary)] mb-2">
                Qualifications:
              </h4>
              <ul className="list-disc list-inside text-[var(--text-muted)] space-y-1">
                {selectedJob.qualifications.map((qual, idx) => (
                  <li key={idx}>{qual}</li>
                ))}
              </ul>
            </div>

            <div className="sticky bottom-0 bg-[var(--color-white)] py-4 text-center mt-6">
              <Button label="Apply for this Role" />
            </div>
          </div>
        </div>
      )}

      {/* Culture & Perks Section */}
      <section className="py-24 bg-[var(--color-background-soft)]">
        <div className="container-custom space-y-12">
          <SectionHeading
            heading="Our Culture"
            subHeading="What makes MMH Technologies a great place to work"
          />
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-[var(--color-white)] rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <FaHeart className="text-5xl text-[var(--color-primary)] mx-auto mb-4" />
              <h4 className="font-semibold mb-2">
                Collaboration
              </h4>
              <p className="text-[var(--text-muted)]">
                We believe teamwork and open communication drive innovation.
              </p>
            </div>
            <div className="p-8 bg-[var(--color-white)] rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <FaStar className="text-5xl text-[var(--color-primary)] mx-auto mb-4" />
              <h4 className="font-semibold mb-2">
                Excellence
              </h4>
              <p className="text-[var(--text-muted)]">
                We aim for quality and continuous improvement in all we do.
              </p>
            </div>
            <div className="p-8 bg-[var(--color-white)] rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <FaUsers className="text-5xl text-[var(--color-primary)] mx-auto mb-4" />
              <h4 className="font-semibold mb-2">
                Diversity & Inclusion
              </h4>
              <p className="text-[var(--text-muted)]">
                We celebrate diverse perspectives and foster an inclusive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-(--color-white) text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <FaPaperPlane className="text-6xl mx-auto mb-2 animate-bounce text-(--color-primary)" />
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to <span className="text-(--color-primary)">Join Our Team?</span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90">
            Submit your resume and be part of MMH Technologies’ journey to innovation.
          </p>
          <Button label="Submit Resume" className="bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white" />
        </div>
      </section>
    </>
  );
}
