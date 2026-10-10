import { LazyMotion, MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Header } from './components/header/Header';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { WelcomeIntro } from './components/WelcomeIntro';
import { useProjectViewer } from './utils/hooks';

const loadMotionFeatures = () => import('./utils/motionFeatures').then((module) => module.default);

const HomePage = () => {
  const { activeProject, open, close } = useProjectViewer();

  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
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
          <WelcomeIntro />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
};

export default HomePage;
