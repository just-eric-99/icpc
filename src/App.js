import "./App.css";
import ContactCard from "./components/ContactCard";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import AchievementSection from "./sections/AchievementSection";
import CarouselSection from "./sections/CarouselSection";
import ContactSection from "./sections/ContactSection";
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
          <ContactSection />
        </section>
        <footer>hello</footer>
      </div>
    </>
  );
}

export default App;
