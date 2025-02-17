import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faLink } from "@fortawesome/free-solid-svg-icons";
import styles from "./LinkBlockRenderer.module.css";
export const LinkBlockRenderer = (props) => {
  return (
    <div className={styles.linkBlockContainer}>
      <h2 className={styles.linkBlockTitle}>
        {props.title || "Related Resources"}
      </h2>

      <div className={styles.linkList}>
        {props.links.map((linkItem) => {
          let linkHref, linkSecondLine, linkIcon;
          if (linkItem.discriminant == "external") {
            linkHref = linkItem.value.url;
            linkSecondLine = "external resource";
            linkIcon = faFile;
          } else {
            linkHref = linkItem.value.file;
            linkSecondLine = "{format} file - X MB";
            linkIcon = faLink;
          }
          return (
            <Link href={linkHref} className={styles.linkGroup}>
              <FontAwesomeIcon className={styles.linkIcon} icon={linkIcon} />
              <div className={styles.linkPanel}>
                <p className={styles.linkTitle}>{linkItem.value.title}</p>
                <p className={styles.linkSecondLine}>{linkSecondLine}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
