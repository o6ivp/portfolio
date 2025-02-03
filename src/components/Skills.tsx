import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, Cloud, Server, Wrench } from "lucide-react";

// Skill badge component with responsive design
const SkillBadge = ({ name, years, isMain = false }) => (
  <div className="group relative inline-block m-1">
    <Badge
      variant={isMain ? "default" : "secondary"}
      className={`
        text-xs sm:text-sm px-2 py-1 cursor-default transition-all
        ${isMain ? "hover:bg-primary/90" : "hover:bg-secondary/90"}
      `}
    >
      {name}
      {years && <span className="ml-1 opacity-70">• {years}y</span>}
    </Badge>
  </div>
);

// Skill section component
const SkillSection = ({ title, skills, icon: Icon, t }) => (
  <Card className="h-full">
    <CardHeader className="space-y-1">
      <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>{t(title)}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {/* Main skills section */}
        {skills.filter((skill) => skill.years && skill.years >= 2).length >
          0 && (
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              Main Skills
            </h4>
            <div className="flex flex-wrap gap-1">
              {skills
                .filter((skill) => skill.years && skill.years >= 2)
                .map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    years={skill.years}
                    isMain={true}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Other skills section */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">
            {skills.some((skill) => skill.years && skill.years >= 2)
              ? "Additional Skills"
              : "Skills"}
          </h4>
          <div className="flex flex-wrap gap-1">
            {skills
              .filter((skill) => !skill.years || skill.years < 2)
              .map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  years={skill.years}
                />
              ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Skills = () => {
  const { t } = useLanguage();

  // Skills data structure
  const skills = {
    languages: [
      { name: "Golang", years: 2 },
      { name: "Python", years: 2 },
      { name: "Ruby", years: 1 },
      { name: "TypeScript", years: 1 },
      { name: "C/C++", years: 1 },
    ],
    frameworks: [
      { name: "React", years: 1 },
      { name: "Flask", years: 2 },
      { name: "TensorFlow" },
      { name: "Streamlit" },
      { name: "Ruby on Rails" },
    ],
    databases: [
      { name: "MySQL", years: 1 },
      { name: "PostgreSQL", years: 1 },
      { name: "MariaDB" },
      { name: "InfluxDB" },
      { name: "DynamoDB" },
    ],
    cloud: [
      { name: "AWS Lambda" },
      { name: "API Gateway" },
      { name: "Cognito" },
      { name: "S3" },
      { name: "CloudFront" },
      { name: "DynamoDB" },
    ],
    tools: [
      { name: "Docker", years: 2 },
      { name: "Terraform" },
      { name: "Git", years: 2 },
      { name: "GitHub Actions" },
      { name: "Ansible" },
    ],
  };

  return (
    <section id="skills">
      {/* Section header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">{t("skills.title")}</h2>
      </div>

      {/* Skills grid - single column on mobile, two columns on tablet and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <SkillSection
          title="skills.languages"
          skills={skills.languages}
          icon={Cpu}
          t={t}
        />
        <SkillSection
          title="skills.databases"
          skills={skills.databases}
          icon={Database}
          t={t}
        />
        <SkillSection
          title="skills.cloud"
          skills={skills.cloud}
          icon={Cloud}
          t={t}
        />
        <SkillSection
          title="skills.frameworks"
          skills={skills.frameworks}
          icon={Server}
          t={t}
        />
        <SkillSection
          title="skills.tools"
          skills={skills.tools}
          icon={Wrench}
          t={t}
        />
      </div>
    </section>
  );
};

export default Skills;
