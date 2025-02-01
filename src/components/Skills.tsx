import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Cpu, Database, Cloud, Server } from "lucide-react";

const Skills = () => {
  const { t } = useLanguage();

  const skills = {
    languages: [
      { name: "Golang", level: 80, years: 2 },
      { name: "Python", level: 80, years: 2 },
      { name: "Ruby", level: 60, years: 1 },
      { name: "TypeScript", level: 60, years: 1 },
      { name: "C/C++", level: 60, years: 1 },
    ],
    frameworks: [
      { name: "React", level: 75 },
      { name: "Flask", level: 75 },
      { name: "TensorFlow", level: 65 },
      { name: "Streamlit", level: 70 },
    ],
    databases: [
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "MariaDB", level: 65 },
      { name: "InfluxDB", level: 60 },
    ],
    cloud: [
      { name: "AWS Lambda", level: 75 },
      { name: "API Gateway", level: 70 },
      { name: "Cognito", level: 70 },
      { name: "S3", level: 75 },
      { name: "CloudFront", level: 70 },
    ],
  };

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">{t("skills.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Programming Languages */}
        <div className="card">
          <div className="flex items-center mb-4">
            <Cpu className="w-6 h-6 mr-2 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("skills.languages")}
            </h3>
          </div>
          {skills.languages.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {skill.years} {t("skills.years")}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Databases */}
        <div className="card">
          <div className="flex items-center mb-4">
            <Database className="w-6 h-6 mr-2 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("skills.databases")}
            </h3>
          </div>
          {skills.databases.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Cloud & AWS */}
        <div className="card">
          <div className="flex items-center mb-4">
            <Cloud className="w-6 h-6 mr-2 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("skills.cloud")}
            </h3>
          </div>
          {skills.cloud.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks */}
        <div className="card">
          <div className="flex items-center mb-4">
            <Server className="w-6 h-6 mr-2 text-orange-600" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("skills.frameworks")}
            </h3>
          </div>
          {skills.frameworks.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-orange-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
