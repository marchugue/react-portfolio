import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900">
      <CursorGlow />
      <Navigation />
      <main>
        <Hero />
        <section id="profile" className="py-20 relative">
          <div className="section-padding max-w-7xl mx-auto">
            <ProfileCard />
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;