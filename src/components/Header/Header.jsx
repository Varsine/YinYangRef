import s from './Header.module.scss';

export default function Header(){
  return (
    <header className={s.header}>
      <div className={s.logo}>Brand</div>
      <nav className={s.nav} aria-label="Main">
        <a className={s.link} href="#">Home</a>
        <a className={s.link} href="#">Features</a>
        <a className={s.link} href="#">Pricing</a>
      </nav>
    </header>
  );
}
