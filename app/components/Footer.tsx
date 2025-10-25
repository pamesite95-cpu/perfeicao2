import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-pink-700 text-white py-8 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
        <span className="font-semibold text-lg mb-4 md:mb-0">Todos os direitos reservados a Perfeição © {new Date().getFullYear()}</span>
        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-pink-300 text-2xl"><FaInstagram /></a>
          <a href="https://www.facebook.com/pamelapaola.vieirabarroso" target="_blank" rel="noopener" className="hover:text-pink-300 text-2xl"><FaFacebook /></a>
          <a href="https://wa.me/5591991795010" target="_blank" rel="noopener" className="hover:text-pink-300 text-2xl"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
}
