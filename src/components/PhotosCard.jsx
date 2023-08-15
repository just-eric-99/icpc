import { useState, useEffect } from "react";

export default function PhotosCard({ id, directoryName, photoNum }) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    var tempPhoto = [];
    for (var i = 0; i < photoNum; i++) {
      tempPhoto.push({
        key: i,
        photoLink: require(`../data/photos/${directoryName}/${i}.jpg`),
      });
    }

    setPhotos(tempPhoto);
  }, [directoryName, photoNum]);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          // window.my_modal.showModal();
          document.getElementById("my_modal_" + id).showModal();
        }}
      >
        {directoryName}
      </button>
      {/* <dialog id="my_modal" className="modal"> */}
      <dialog id={"my_modal_" + id} className="modal">
        <form
          method="dialog"
          className="modal-box w-11/12 max-w-5xl h-11/12 max-h-5xl"
        >
          <h3 className="font-bold text-lg">{directoryName}</h3>

          <div className="grid grid-cols-2 gap-8">
            {photos.map((photo) => {
              return (
                <div className="rounded-lg" key={photo.key}>
                  <img src={photo.photoLink} alt="" />
                </div>
              );
            })}
          </div>

          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
