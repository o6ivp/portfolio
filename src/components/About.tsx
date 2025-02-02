import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent } from "../components/ui/card";
import { Calendar, MapPin, Monitor } from "lucide-react";
import { Badge } from "../components/ui/badge";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="container py-16">
      <Card>
        <CardContent className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6">
          <img
            src="/api/placeholder/200/200"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{t("about.title")}</h2>
            <p className="text-muted-foreground mb-4">
              {t("about.description")}
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-5 h-5 mr-2" />
                <span>26 {t("about.age")}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{t("about.location")}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Monitor className="w-5 h-5 mr-2" />
                <span>{t("about.remote")}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
