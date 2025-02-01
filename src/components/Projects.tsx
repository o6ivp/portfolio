import { useLanguage } from "../contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

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
      tech: "Go, React, AWS (Lambda, API Gateway, Cognito, S3, CloudFront)",
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
      tech: "C++, Flask, MySQL, Grafana",
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
      tech: "Ubuntu, WireGuard, Shell Script",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">{t("projects.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t(project.title)}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t(project.description)}
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {t(project.role)}
              </h4>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {t("projects.responsibilities")}
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {project.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {t("projects.tech")}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
