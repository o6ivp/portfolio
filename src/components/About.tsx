import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Monitor } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about">
      <Card className="w-full">
        <CardContent className="p-4 sm:p-6">
          {/* Flex container - vertical on mobile, horizontal on tablet and above */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Profile image - smaller on mobile */}
            <div className="w-32 h-32 sm:w-48 sm:h-48 shrink-0">
              <img
                src="/api/placeholder/200/200"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Text content container */}
            <div className="flex-1 text-center sm:text-left">
              {/* Title - responsive font size */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                {t("about.title")}
              </h2>

              {/* Description - responsive font size and margins */}
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                {t("about.description")}
              </p>

              {/* Info icons - center aligned on mobile, left aligned on tablet+ */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center sm:items-start">
                {/* Age info */}
                <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span>26 {t("about.age")}</span>
                </div>

                {/* Location info */}
                <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span>{t("about.location")}</span>
                </div>

                {/* Remote work info */}
                <div className="flex items-center text-muted-foreground text-sm sm:text-base">
                  <Monitor className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span>{t("about.remote")}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
