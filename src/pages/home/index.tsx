import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Header } from './components/header/Header';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { useProjectViewer } from './utils/hooks';

const HomePage = () => {
  const { activeProject, open, close } = useProjectViewer();

  return (
    <div className="min-h-svh overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ProjectsSection onOpen={open} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={close} />
      <CustomCursor />
    </div>
  );
};

export default HomePage;
