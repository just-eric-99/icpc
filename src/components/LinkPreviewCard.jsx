import { ReactTinyLink } from "react-tiny-link";
import { useEffect } from "react";

export default function LinkPreviewCard({ link, linkName }) {
  useEffect(() => {}, []);

  return (
    <ReactTinyLink
      width="100%"
      cardSize="small"
      header={linkName}
      showGraphic={true}
      maxLine={2}
      minLine={1}
      url={link}
    />
  );
}
