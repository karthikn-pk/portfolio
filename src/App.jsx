import Header from "./components/Header";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
    <main className="bg-gray-900 text-gray-400 body-font font-serif overflow-hidden">
      <Header />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
    </main>
  );
}

export default App;
