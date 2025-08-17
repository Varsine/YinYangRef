import styles from './App.module.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeatureCard from './components/FeatureCard/FeatureCard';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <section className="container" aria-label="Features">
          {[1,2,3].map(i => (
            <FeatureCard
              key={i}
              title={`Feature ${i}`}
              text="Replace with Figma content."
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
