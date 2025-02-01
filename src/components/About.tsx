import { useLanguage } from "../contexts/LanguageContext";
import { Calendar, MapPin, Monitor } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-container">
      <div className="card">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            src="/api/placeholder/200/200"
            alt={t("about.profile.alt")}
            className="w-48 h-48 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t("about.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t("about.description")}
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5 mr-2" />
                <span>26 {t("about.age")}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{t("about.location")}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Monitor className="w-5 h-5 mr-2" />
                <span>{t("about.remote")}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {t("about.keywords")
                .split(",")
                .map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {keyword.trim()}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
