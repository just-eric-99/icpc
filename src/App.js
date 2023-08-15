import "./App.css";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import AchievementSection from "./sections/AchievementSection";
import ContactSection from "./sections/ContactSection";
import LinkSection from "./sections/LinkSection";
import NewsSection from "./sections/NewsSection";
import PhotoSection from "./sections/PhotoSection";

function App() {
  return (
    <>
      <div data-theme="light">
        <Navbar />
        <section>
          <AboutSection />
          <NewsSection />
          <AchievementSection />
          <PhotoSection />
          <LinkSection />
          <ContactSection />
        </section>
        <footer>hello</footer>
      </div>
    </>
  );
}

export default App;
