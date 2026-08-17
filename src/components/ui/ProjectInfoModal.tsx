"use client";

import { useState } from "react";

type Props = {
  project: {
    title: string;
    description: string;
    category: string;
    url?: string;
    services?: string[];
    challenges?: {
      title: string;
      description: string;
    }[];
  };
};

export default function ProjectInfoModal({ project }: Props) {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer transition hover:opacity-80"
      >
        Project Info
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 p-4"
          onClick={closeModal}
        >
          <div
            className="flex max-h-120 max-w-100 flex-col gap-4 rounded-xl bg-foreground p-6 text-background shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden overflow-y-auto">
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-xl font-semibold md:text-2xl">
                  Services
                </h2>

                {project.services?.length ? (
                  <ul className="mb-8 flex flex-wrap items-center gap-2 text-foreground">
                    {project.services.map((service) => (
                      <li
                        key={service}
                        className="rounded-lg bg-neutral-900 p-2 text-xs md:text-sm"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {project.challenges?.length ? (
                <div className="flex flex-col gap-8">
                  {project.challenges.map((challenge) => (
                    <div
                      key={challenge.title}
                      className="flex flex-col items-start"
                    >
                      <h2 className="text-xl font-semibold md:text-2xl">
                        {challenge.title}
                      </h2>

                      <p className="text-start text-xs md:text-sm text-accent">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-neutral-900 p-2 text-center text-lg text-foreground transition hover:bg-neutral-900/80"
                >
                  Visit Website
                </a>
              )}

              <button
                onClick={closeModal}
                className="rounded-xl bg-neutral-900 p-2 text-lg text-foreground transition hover:bg-neutral-900/80"
              >
                Close Info
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}