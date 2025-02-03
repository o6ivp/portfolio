import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const { t } = useLanguage();

  // Project data structure
  const projects = [
    {
      title: "projects.attendance.title",
      description: "projects.attendance.description",
      role: "projects.attendance.role",
      responsibilities: [
        t("projects.attendance.responsibilities.1"),
        t("projects.attendance.responsibilities.2"),
        t("projects.attendance.responsibilities.3"),
        t("projects.attendance.responsibilities.4"),
      ],
      tech: [
        "Go",
        "React",
        "AWS Lambda",
        "API Gateway",
        "Cognito",
        "S3",
        "CloudFront",
      ],
    },
    {
      title: "projects.iot.title",
      description: "projects.iot.description",
      role: "projects.iot.role",
      responsibilities: [
        t("projects.iot.responsibilities.1"),
        t("projects.iot.responsibilities.2"),
        t("projects.iot.responsibilities.3"),
        t("projects.iot.responsibilities.4"),
      ],
      tech: ["C++", "Flask", "MySQL", "Grafana"],
    },
    {
      title: "projects.vpn.title",
      description: "projects.vpn.description",
      role: "projects.vpn.role",
      responsibilities: [
        t("projects.vpn.responsibilities.1"),
        t("projects.vpn.responsibilities.2"),
        t("projects.vpn.responsibilities.3"),
      ],
      tech: ["Ubuntu", "WireGuard", "Shell Script"],
    },
  ];

  return (
    <section id="projects">
      {/* Section header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">
          {t("projects.title")}
        </h2>
      </div>

      {/* Projects grid - single column on mobile, two columns on tablet and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                {t(project.title)}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 space-y-4">
              {/* Project description */}
              <p className="text-sm sm:text-base text-muted-foreground">
                {t(project.description)}
              </p>

              {/* Role */}
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  {t(project.role)}
                </h4>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  {t("projects.responsibilities")}
                </h4>
                <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="pl-1">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">
                  {t("projects.tech")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs sm:text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
