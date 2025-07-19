import type { Metadata } from "next";
import { experiences } from "./experience-data";

export const metadata: Metadata = {
  title: "Experiencias",
  description: "Minhas experiências"
};

export default function Experiences() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Experiências</h1>
      <div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="mb-6 bg-white/80 dark:bg-neutral-900/80 rounded-lg p-8 shadow-md"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{experience.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {`${experience.start} - ${experience.end}`}
              </p>
            </div>
            <p className="mt-4">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
