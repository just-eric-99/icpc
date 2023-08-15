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
        <footer className="footer items-center p-10 bg-gray-100">
          <div className="items-center grid-flow-col">
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a
              href="https://www.comp.hkbu.edu.hk/v1/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.comp.hkbu.edu.hk/v1/revamp/images/logo_650_35anniv.svg"
                alt="logo"
                className="w-96"
              />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
