import s from './Footer.module.scss';

export default function Footer(){
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <span>© {new Date().getFullYear()} Brand</span>
        <a href="#">Privacy</a>
      </div>
    </footer>
  );
}
