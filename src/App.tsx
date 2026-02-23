import { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';

const Services = lazy(() => import('./components/sections/Services').then((module) => ({ default: module.Services })));
const Stats = lazy(() => import('./components/sections/Stats').then((module) => ({ default: module.Stats })));
const FitCheck = lazy(() => import('./components/sections/FitCheck').then((module) => ({ default: module.FitCheck })));
const Differentiators = lazy(() =>
  import('./components/sections/Differentiators').then((module) => ({ default: module.Differentiators })),
);
const Testimonial = lazy(() =>
  import('./components/sections/Testimonial').then((module) => ({ default: module.Testimonial })),
);
const Contact = lazy(() => import('./components/sections/Contact').then((module) => ({ default: module.Contact })));

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return null;
};

const SectionFallback = () => <div className="h-16" aria-hidden="true" />;

const App = () => {
  return (
    <div className="bg-brand-bgPrimary text-brand-textPrimary">
      <ScrollToSection />
      <Navbar />
      <main>
        <div id="top-sentinel" className="h-px w-full opacity-0" aria-hidden="true" />
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#services">Revenue Systems Architect</a>
            </li>
          </ol>
        </nav>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <Stats />
          <FitCheck />
          <Differentiators />
          <Testimonial />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
