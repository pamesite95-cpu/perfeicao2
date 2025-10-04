import React from 'react';

const depoimentos = [
  {
    nome: 'Maria Silva',
    descricao: 'Os produtos são maravilhosos! Atendimento excelente e entrega rápida. Recomendo a todos.'
  },
  {
    nome: 'João Souza',
    descricao: 'Fiquei impressionado com a qualidade e o sabor. Com certeza voltarei a comprar!'
  },
  {
    nome: 'Ana Paula',
    descricao: 'Atendimento personalizado e produtos fresquinhos. Amei cada detalhe!'
  }
];

export default function Depoimentos() {
  return (
    <section style={{ padding: '2rem 0', background: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Depoimentos</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {depoimentos.map((dep, idx) => (
          <div key={idx} style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px #0001', padding: '1.5rem', maxWidth: 320, minWidth: 220 }}>
            <strong style={{ display: 'block', marginBottom: '1rem', fontSize: '1.1rem', color: '#d72660' }}>{dep.nome}</strong>
            <p style={{ color: '#333', fontSize: '1rem' }}>{dep.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
