import "./App.css";
import ContactCard from "./components/ContactCard";
import Navbar from "./components/Navbar";
import AchievementSection from "./sections/AchievementSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <div data-theme="light">
        <Navbar />
        <section>
          <AchievementSection />
          {/* more stuff here */}
          <ContactSection />
        </section>
        <footer>hello</footer>
      </div>
    </>
  );
}

export default App;
