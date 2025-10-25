import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home"
      className="relative flex flex-col items-center justify-center h-[70vh] text-center"
      style={{
  backgroundImage: "url('/joinha.jpg')", // Imagem joinha da pasta public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 " />
  <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-4" style={{ color: '#e75480' }}>PERFEIÇÃO</h1>
  <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: '#e75480' }}>Joias que eternizam momentos especiais</p>
    </section>
  );
}
