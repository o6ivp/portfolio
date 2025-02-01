import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Research from "./components/Research.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="pt-16">
          <About />
          <Skills />
          <Projects />
          <Research />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
