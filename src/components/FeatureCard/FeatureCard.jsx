import s from './FeatureCard.module.scss';

export default function FeatureCard({title, text}){
  return (
    <article className={s.card}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
    </article>
  );
}
