import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";

const Header = () => {
  const { t } = useLanguage();

  const navItems = [
    { href: "#about", label: "nav.about" },
    { href: "#skills", label: "nav.skills" },
    { href: "#projects", label: "nav.projects" },
    { href: "#research", label: "nav.research" },
    { href: "#contact", label: "nav.contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background border-b z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Daigo Yamashita</h1>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {t(item.label)}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <LanguageSwitcher />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
