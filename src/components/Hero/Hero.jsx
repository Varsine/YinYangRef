import s from './Hero.module.scss';

export default function Hero(){
  return (
    <section className={s.hero}>
      <div className={s.copy}>
        <h1 className={s.title}>Heading from Figma</h1>
        <p className={s.subtitle}>Replace with the exact Figma copy. I’ll match line-height, letter-spacing, and sizes (Inter/Poppins/Sora).</p>
        <div className={s.ctaRow}>
          <a className="btn" href="#">Primary CTA</a>
          <a className={s.secondary} href="#">Secondary</a>
        </div>
      </div>
      <div className={s.media} aria-hidden="true">
        <div className={s.placeholder}>Media</div>
      </div>
    </section>
  );
}
