import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
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
