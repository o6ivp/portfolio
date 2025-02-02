import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">{t("contact.title")}</h2>
      <div className="card">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t("contact.message")}
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:squiffer9@gmail.com"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Mail className="w-6 h-6 mr-2" />
            <span>{t("contact.email")}</span>
          </a>
          <a
            href="https://github.com/squiffer9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github className="w-6 h-6 mr-2" />
            <span>{t("contact.github")}</span>
          </a>
          <a
            href="https://linkedin.com/in/daigo-yamashita-ab6235328"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin className="w-6 h-6 mr-2" />
            <span>{t("contact.linkedin")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
