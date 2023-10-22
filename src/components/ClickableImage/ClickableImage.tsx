import Image from "next/image";
import styles from "./ClickableImage.module.scss"

export interface ClickableImageProps {
  href: string;
  imgProps: {
    src: string;
    width: number;
    height: number;
    alt?: string;
    title?: string;
  };
}

export default function ClickableImage({
  href,
  imgProps,
}: ClickableImageProps) {
  return (
    <a href={href} target="_blank">
      <Image
        className={styles.ClickableImage_Image}
        src={imgProps.src}
        alt={imgProps.alt ?? ""}
        width={imgProps.width}
        height={imgProps.height}
        title={imgProps.title}
      />
    </a>
  );
}
