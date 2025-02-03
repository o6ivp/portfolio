import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  // Contact links data
  const contactLinks = [
    {
      href: "mailto:squiffer9@gmail.com",
      icon: Mail,
      label: "contact.email",
    },
    {
      href: "https://github.com/squiffer9",
      icon: Github,
      label: "contact.github",
    },
    {
      href: "https://linkedin.com/in/daigo-yamashita-ab6235328",
      icon: Linkedin,
      label: "contact.linkedin",
    },
  ];

  return (
    <section id="contact">
      <Card className="w-full">
        <CardHeader>
          {/* Responsive title size */}
          <CardTitle className="text-2xl sm:text-3xl">
            {t("contact.title")}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Message with responsive text size */}
          <p className="text-sm sm:text-base text-muted-foreground">
            {t("contact.message")}
          </p>

          {/* Contact links container - vertical on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto justify-start gap-3"
                >
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{t(link.label)}</span>
                </Button>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
