import { useEffect, useState } from "react";
import PhotosCard from "../components/PhotosCard";
import folderName from "../data/photos/folderName.txt";

export default function PhotoSection() {
  const [photoGroups, setPhotoGroups] = useState([]);

  useEffect(() => {
    fetch(folderName)
      .then((r) => r.text())
      .then((text) => {
        var tempPhotoRecords = [];
        var rawRecord = text.split("\n");

        for (var i = 0; i < rawRecord.length; i++) {
          var photoRecordArray = rawRecord[i].split("@@");
          tempPhotoRecords.push({
            id: i,
            directoryName: photoRecordArray[0],
            photoNum: photoRecordArray[1],
          });
        }
        setPhotoGroups(tempPhotoRecords);
      });
  }, []);

  return (
    <div className="container mt-12 mx-auto px-4 pt-24" id="photos">
      <h1 className="flex flex-row text-4xl font-bold text-center content-center justify-center">
        Photos
      </h1>
      <div className="py-8 mx-auto container ">
        <div className={`flex flex-wrap justify-center items-center gap-8`}>
          {photoGroups.map((photoGroups) => {
            return (
              <div className="col-span-1" key={photoGroups.id}>
                <PhotosCard
                  key={photoGroups.id}
                  id={photoGroups.id}
                  directoryName={photoGroups.directoryName}
                  photoNum={photoGroups.photoNum}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
