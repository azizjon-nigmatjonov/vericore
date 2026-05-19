"use client";

import { useTranslations } from "next-intl";
import { Breadcrumb } from "@shared/ui/breadcrumb";
import { PageContent } from "@shared/ui/page-content";
import { ProjectCard } from "@widgets/project-card";
import { getAllProjects } from "@entities/project";

export function ProjectsPage() {
  const t = useTranslations();
  const projects = getAllProjects();

  return (
    <main className="bg-background pt-24 pb-24" id="main-content">
      <PageContent className="space-y-4 pb-10 lg:pb-14">
        <Breadcrumb items={[{ label: t("nav.home"), href: "/" }, { label: t("projects.title") }]} />
        <header className="max-w-2xl space-y-3">
          <span className="font-label text-primary text-xs font-bold tracking-widest uppercase">
            {t("projects.badge")}
          </span>
          <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t("projects.title")}
          </h1>
          <div className="bg-primary-container h-1 w-16 rounded-full lg:w-20" aria-hidden />
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </header>
      </PageContent>

      <PageContent>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, idx) => (
            <li key={project.slug}>
              <ProjectCard project={project} priority={idx < 2} />
            </li>
          ))}
        </ul>
      </PageContent>
    </main>
  );
}
