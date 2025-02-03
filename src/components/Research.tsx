import { useLanguage } from "../contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Research = () => {
  const { t } = useLanguage();

  const implementations = [
    t("research.implementation.1"),
    t("research.implementation.2"),
    t("research.implementation.3"),
    t("research.implementation.4"),
  ];

  return (
    <section id="research" className="section-container">
      <h2 className="section-title">{t("research.title")}</h2>
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {t("research.project.title")}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t("research.project.subtitle")}
        </p>
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {t("research.project.overview")}
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            {t("research.project.description")}
          </p>
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {t("research.project.implementation")}
          </h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            {implementations.map((implementation, index) => (
              <li key={index}>{implementation}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {t("research.project.tech")}
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            {t("research.tech.stack")}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {t("research.details")}
          </h4>
          <a href="https://github.com/squiffer9/drowsiness_detection" className="text-gray-600 dark:text-gray-300">
            {t("research.details.item1")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
