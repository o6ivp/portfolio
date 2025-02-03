import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Research = () => {
  const { t } = useLanguage();

  const implementations = [
    t("research.implementation.1"),
    t("research.implementation.2"),
    t("research.implementation.3"),
    t("research.implementation.4"),
  ];

  return (
    <section id="research" className="container py-8 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
        {t("research.title")}
      </h2>
      <Card>
        <CardContent className="p-4 md:p-6">
          <h3 className="text-xl font-semibold mb-4">
            {t("research.project.title")}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            {t("research.project.subtitle")}
          </p>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">
              {t("research.project.overview")}
            </h4>
            <p className="text-sm md:text-base text-muted-foreground">
              {t("research.project.description")}
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">
              {t("research.project.implementation")}
            </h4>
            <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-2">
              {implementations.map((implementation, index) => (
                <li key={index}>{implementation}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">
              {t("research.project.tech")}
            </h4>
            <p className="text-sm md:text-base text-muted-foreground">
              {t("research.tech.stack")}
            </p>
          </div>
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold mb-4">
              {t("research.details")}
            </h4>
            <a
              href="https://github.com/squiffer9/drowsiness_detection"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="outline"
                className="group hover:border-primary/80"
              >
                <Github className="w-5 h-5 mr-2 group-hover:text-primary/80" />
                <span className="group-hover:text-primary/80">
                  View Project on GitHub
                </span>
              </Button>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("research.details.description1")}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("research.details.description2")}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Research;
