import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`${styles.Footer} w-full py-4 px-4 md:px-12 text-sm`}>
      <div className="flex justify-between">
        <div>
          {`© ${currentYear} - `}
          <a className="font-semibold" href="mailto:tabordev.code@gmail.com">
            tabordev
          </a>
        </div>
        <a
          className="font-semibold"
          target="_blank"
          href="https://github.com/tabordafilipe/tabordev"
        >
          Source code
        </a>
      </div>
    </footer>
  );
}
