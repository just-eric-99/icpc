import { useEffect, useState } from "react";
import AchievementCard from "../components/AchievementCard";
import raw from "../data/acheivements.csv";
import { ReactComponent as GoldLogo } from "../assets/medal-gold.svg";
import { ReactComponent as SilverLogo } from "../assets/medal-silver.svg";
import { ReactComponent as BronzeLogo } from "../assets/medal-bronze.svg";

export default function AchievementSection() {
  const [acheivements, setAcheivements] = useState([]);

  useEffect(() => {
    setAcheivements([]);
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        var tempAchievements = [];
        var rawRecord = text.split("\n");

        for (var i = 0; i < rawRecord.length; i++) {
          var acheivementArray = rawRecord[i].split(",");
          tempAchievements.push({
            key: i,
            contest: acheivementArray[0],
            location: acheivementArray[1],
            date: acheivementArray[2],
            award: acheivementArray[3],
            coach1: acheivementArray[4],
            coach2: acheivementArray[5],
            member1: acheivementArray[6],
            member2: acheivementArray[7],
            member3: acheivementArray[8],
          });
        }
        setAcheivements(tempAchievements);
      });
  }, []);

  return (
    <>
      <div className="container mt-12 mx-auto px-4 pt-24" id="achievements">
        <h1 className="flex flex-row text-4xl font-bold text-center content-center justify-center">
          Achievements
          <GoldLogo />
          <SilverLogo />
          <BronzeLogo />
        </h1>
        <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {acheivements.map((item) => {
            return (
              <AchievementCard
                key={item.key}
                contest={item.contest}
                location={item.location}
                date={item.date}
                award={item.award}
                coach1={item.coach1}
                coach2={item.coach2}
                member1={item.member1}
                member2={item.member2}
                member3={item.member3}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
