import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Research = () => {
  const { t } = useLanguage();

  // Implementation details as an array for better maintainability
  const implementations = [
    t("research.implementation.1"),
    t("research.implementation.2"),
    t("research.implementation.3"),
    t("research.implementation.4"),
  ];

  return (
    <section id="research">
      {/* Section title with responsive size */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">
          {t("research.title")}
        </h2>
      </div>

      <Card>
        <CardHeader className="space-y-2">
          {/* Project title */}
          <CardTitle className="text-xl sm:text-2xl">
            {t("research.project.title")}
          </CardTitle>
          {/* Subtitle with responsive text */}
          <p className="text-sm sm:text-base text-muted-foreground">
            {t("research.project.subtitle")}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Overview section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {t("research.project.overview")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              {t("research.project.description")}
            </p>
          </div>

          {/* Technical Implementation section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {t("research.project.implementation")}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground">
              {implementations.map((implementation, index) => (
                <li key={index} className="pl-1">
                  {implementation}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies section */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {t("research.project.tech")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              {t("research.tech.stack")}
            </p>
          </div>

          {/* Details section with GitHub link */}
          <div className="border-t pt-6 space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              {t("research.details")}
            </h3>

            {/* GitHub button */}
            <div>
              <a
                href="https://github.com/squiffer9/drowsiness_detection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto gap-2 text-sm sm:text-base"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  View Project on GitHub
                </Button>
              </a>
            </div>

            {/* Additional descriptions */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-muted-foreground">
                {t("research.details.description1")}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                {t("research.details.description2")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Research;
