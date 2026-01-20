import { Header, Hero, Skills, Experience, Projects, Leadership, Contact, Footer } from './sections';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <div className="scanlines" />
    </div>
  );
}

export default App;
