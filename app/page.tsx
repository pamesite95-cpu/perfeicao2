import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Produtos from './components/Produtos';
import Footer from './components/Footer';
import Depoimentos from './components/Depoimentos';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      <Hero />
      <Sobre />
      <Produtos />
      <Depoimentos />
      <Footer />
    </main>
  );
}
