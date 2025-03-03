export function Home() {
  return (
    <div>
      <div className="relative w-full h-[705px] bg-black">
        <img
          src="/assets/home.jpeg"
          alt="Banner"
          className="w-full object-cover opacity-[0.2] h-[705px]"
        />

        <div className="absolute top-[15%] left-[10%] w-[80%] text-left text-6xl sm:text-2xl font-medium text-white">
          <h1>Dê um check na sua produtividade</h1>
        </div>

        <div className="absolute top-[34%] sm:top-[25%] left-[20%] w-[60%] text-2xl sm:text-base text-white text-justify">
          <p>
            Gerenciar tarefas em projetos pode ser um desafio, mas com
            organização tudo flui melhor. Divida grandes objetivos em pequenas
            etapas e acompanhe o progresso com clareza. Mantenha prazos,
            distribua responsabilidades e evite surpresas no caminho. Com
            planejamento certo, cada tarefa concluída é um passo mais perto do
            sucesso! Afinal, projetos bem estruturados tornam qualquer meta mais
            alcançável.
          </p>
        </div>
      </div>
    </div>
  );
}
