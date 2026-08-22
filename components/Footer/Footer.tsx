// import Image from "next/image";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: nick_fc</p>
          <p>
            Contact us:
            <a href="<nick3fc@gmail.com>"> nick3fc@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
