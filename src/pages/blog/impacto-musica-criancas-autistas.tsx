import React from 'react';

const BlogPost = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">O Impacto da Música em Crianças Autistas</h1>
        <div className="flex items-center text-gray-600 mb-8">
          <span>12 Mar 2024</span>
          <span className="mx-2">•</span>
          <span>5 min de leitura</span>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&w=1200&q=80" 
          alt="Criança autista em sessão de musicoterapia" 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
      </header>

      <div className="prose prose-lg max-w-none">
        <p>
          A musicoterapia tem se mostrado uma ferramenta poderosa no desenvolvimento de crianças com Transtorno do Espectro Autista (TEA). 
          Através de intervenções musicais estruturadas, é possível observar melhorias significativas em diversas áreas do desenvolvimento.
        </p>

        <h2>Benefícios Comprovados</h2>
        <ul>
          <li>Melhoria na comunicação verbal e não-verbal</li>
          <li>Desenvolvimento de habilidades sociais</li>
          <li>Redução de comportamentos repetitivos</li>
          <li>Aumento da atenção e foco</li>
          <li>Desenvolvimento da expressão emocional</li>
        </ul>

        <h2>Como a Música Auxilia no Desenvolvimento</h2>
        <p>
          A música atua como uma ponte de comunicação, permitindo que crianças com TEA se expressem de maneira mais natural e espontânea. 
          O ritmo e a melodia criam uma estrutura previsível que ajuda na organização do pensamento e das ações.
        </p>

        <h2>Abordagens Práticas</h2>
        <p>
          Durante as sessões de musicoterapia, utilizamos diferentes técnicas como:
        </p>
        <ul>
          <li>Improvisação musical</li>
          <li>Canções com gestos</li>
          <li>Jogos musicais interativos</li>
          <li>Exploração de instrumentos</li>
        </ul>

        <h2>Conclusão</h2>
        <p>
          A musicoterapia oferece um caminho único e efetivo para o desenvolvimento de crianças com TEA. 
          Através da música, podemos criar conexões significativas e promover o desenvolvimento integral dessas crianças.
        </p>
      </div>
    </article>
  );
};

export default BlogPost;
