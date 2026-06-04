import LetterCard from "./LetterCard";

export default function Letters() {
  return (
    <section className="py-32 px-6">

      <div className="max-w-3xl mx-auto">

        <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 text-center">
          Cartas que talvez eu nunca tenha enviado
        </p>

        <h2 className="text-4xl font-light text-center mt-6">
          Algumas coisas que quero que você saiba
        </h2>

        <div className="mt-16 space-y-6">

          <LetterCard
            subtitle="💌 Carta 1"
            title="Sobre o nosso começo"
            content={`11 de janeiro de 2026.

            Foi o início da nossa história. Olhando você algo me dizia que encontrei a minha pessoa.
            Talvez naquele momento eu ainda não soubesse quantas memórias construiríamos juntos, mas algo me fazia ter certeza que era com você que eu queria e deveria estar
            Mas hoje sei que foi um dos dias mais importantes da minha vida.
            E sempre tenho a sensação de que, de alguma forma, eu já te amava mesmo antes de te conhecer.`}
          />

          <LetterCard
            subtitle="💌 Carta 2"
            title="O que admiro em você"
            content={`Você tem um jeito único de tornar tudo mais leve.

Admiro sua força.

Admiro seu coração.

Admiro sua forma de me amar sem medidas, o carinho que recebo e como fico profundamente grato por ter você na minha vida.

E admiro principalmente a forma como você cuida das pessoas que ama.`}
          />

          <LetterCard
            subtitle="💌 Carta 3"
            title="Sobre os nossos dias comuns"
            content={`Uma das coisas que mais gosto em nós é que não precisamos de momentos extraordinários.

Os dias simples já são especiais quando estou ao seu lado.

Um café.
Um filme.
Uma conversa.

E, de alguma forma, isso já basta.`}
          />

          <LetterCard
            subtitle="💌 Carta 4"
            title="Sobre o futuro"
            content={`Ainda temos muitas páginas para escrever.

Novas fotos.

Novas viagens.

Novas histórias.

Mas existe uma coisa que espero nunca mudar:

continuar escolhendo você todos os dias.`}
          />

        </div>

      </div>

    </section>
  );
}