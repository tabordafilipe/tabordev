import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles.Footer} w-full p-4 text-sm`}>
      <div className="text-center">
        <p>
          {"© 2023 - "}
          <a className="font-semibold" href="mailto:tabordev.code@gmail.com">
            tabordev
          </a>
        </p>
      </div>
    </footer>
  );
}
