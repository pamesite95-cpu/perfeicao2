
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Produtos from './components/Produtos';
import Footer from './components/Footer';
import Footer3 from './components/footer3';
import { Footer2 } from './components/Foooter2';
import { Hero2 } from './components/Hero2';
import Depoimentos from './components/Depoimentos';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50">
     {/* <Hero2 /> */}
      <Hero />
      <Sobre />
      <Produtos />
     <Depoimentos />
      <Footer />
      <Footer2 />
      <Footer3 />
     
    </main>
  );
}
  