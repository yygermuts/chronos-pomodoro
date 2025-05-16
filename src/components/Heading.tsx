import "../styles/theme.css";
import "../styles/global.css";
import styles from "./Heading.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
