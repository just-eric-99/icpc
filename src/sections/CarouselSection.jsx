import { useEffect, useState } from "react";
import count from "../data/carousel/photoCount.txt";

export default function CarouselSection() {
  const [carouselPhotos, setCarouselPhotos] = useState([]);

  useEffect(() => {
    fetch(count)
      .then((r) => r.text())
      .then((text) => {
        var tempCarouselPhotos = [];
        for (var i = 0; i < parseInt(text); i++) {
          tempCarouselPhotos.push({
            id: i,
            photoName: require("../data/carousel/" + i + ".jpg"),
          });
        }
        setCarouselPhotos(tempCarouselPhotos);
      });
  }, []);

  return (
    <>
      <div className="flex container mx-auto justify-center items-center align-middle">
        <div>
          <div className="carousel carousel-center flex justify-center w-full h-96 mx-auto">
            {carouselPhotos.map((carouselPhoto) => {
              return (
                <div
                  id={"item" + carouselPhoto.id}
                  className="carousel-item w-full"
                  key={carouselPhoto.id}
                >
                  <img src={carouselPhoto.photoName} alt="carousel" />
                </div>
              );
            })}
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            {carouselPhotos.map((carouselPhoto) => {
              return (
                <a
                  href={"#item" + carouselPhoto.id}
                  className="btn btn-xs"
                  key={carouselPhoto.id}
                >
                  {carouselPhoto.id}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
