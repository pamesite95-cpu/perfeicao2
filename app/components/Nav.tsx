export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-pink-700">Perfeição</a>
        <div className="flex gap-6">
          <a href="#home" className="text-gray-700 hover:text-pink-600">Home</a>
          <a href="#sobre" className="text-gray-700 hover:text-pink-600">Sobre</a>
          <a href="#produtos" className="text-gray-700 hover:text-pink-600">Produtos</a>
          <a href="#depoimentos" className="text-gray-700 hover:text-pink-600">Depoimentos</a>
        </div>
      </div>
    </nav>
  );
}
