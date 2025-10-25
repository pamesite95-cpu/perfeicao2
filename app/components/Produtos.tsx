const produtos = [
  {
    nome: 'Anel Feminino',
    descricao: 'Anel delicado com design moderno, perfeito para todas as ocasiões.',
    imagem: '/aneld.jpg',
  },
  {
    nome: 'Brinco Dourado',
    descricao: 'Brinco sofisticado banhado a ouro, ideal para valorizar seu estilo.',
    imagem: '/brinco.jpg',
  },
  {
    nome: 'Colar Dourado',
    descricao: 'Colar com pingente exclusivo, trazendo charme e elegância.',
    imagem: '/colardourado.jpg',
  },
  {
    nome: 'Pulseira Fina',
    descricao: 'Pulseira fina e ajustável, perfeita para compor seu visual.',
    imagem: '/pulseira.jpg',
  },
  {
    nome: 'Conjuntos Semi-Jóias',
    descricao: 'Conjunto de semi-jóias sofisticado, ideal para presentear ou se presentear.',
    imagem: '/semijoia.jpg',
  },
  {
    nome: 'Brinco Prata',
    descricao: 'Brinco em prata de alta qualidade, elegante e versátil para todas as ocasiões.',
    imagem: '/brincop.jpg'
  },
];

export default function Produtos() {
  return (
    <section className="py-16 px-4 bg-pink-50">
  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: '#808000' }}>Nossos Produtos</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {produtos.map((produto, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src={produto.imagem} alt={produto.nome} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-pink-200" />
            <h3
              className="text-xl font-semibold mb-2"
              style={
                ['Anel Feminino', 'Brinco Dourado', 'Colar Dourado', 'Pulseira Fina', 'Conjuntos Semi-Jóias', 'Brinco Prata'].includes(produto.nome)
                  ? { color: '#808000' }
                  : undefined
              }
            >
              {produto.nome}
            </h3>
            <p className="text-gray-600 mb-4 text-center">{produto.descricao}</p>
            <a href="https://wa.me/5591991795010?text=Olá! Gostaria de saber mais sobre o {produto.nome}" target="_blank" rel="noopener" className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">Pedir pelo WhatsApp</a>
          </div>
        ))}
      </div>
    </section>
  );
}
