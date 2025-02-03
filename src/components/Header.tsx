import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { t } = useLanguage();

  // Navigation items
  const navItems = [
    { href: "/#about", label: "nav.about" },
    { href: "/#skills", label: "nav.skills" },
    { href: "/#projects", label: "nav.projects" },
    { href: "/#research", label: "nav.research" },
    { href: "/#contact", label: "nav.contact" },
  ];

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background border-b z-50">
      <div className="container py-2 sm:py-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold">Daigo Yamashita</h1>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleAnchorClick}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.label)}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden items-center gap-4">
            <LanguageSwitcher />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <a
                      href={item.href}
                      onClick={handleAnchorClick}
                      className="w-full cursor-pointer"
                    >
                      {t(item.label)}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
