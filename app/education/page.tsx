import type { Metadata } from "next";
import { educations } from "./education-data";

export const metadata: Metadata = {
  title: "Educação",
  description: "Minha formação acadêmica"
};

export default function Education() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Educação</h1>
      <div>
        {educations.map((education, index) => (
          <div
            key={index}
            className="mb-6 bg-white/80 dark:bg-neutral-900/80 rounded-lg p-8 shadow-md"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{education.formation}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {`${education.start} - ${education.end}`}
              </p>
            </div>
            <p className="mt-4">
              {education.institution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
