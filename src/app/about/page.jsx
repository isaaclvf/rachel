import HeaderBar from "@/components/header-bar";

export default function AboutPage() {
  return (
    <>
      <HeaderBar />
      <main className="px-5 py-5 lg:px-10">
        <div className="mb-3 lg:mb-10 flex flex-col lg:flex-row">
          <div className="flex w-full lg:w-2/4 flex-wrap items-center justify-center gap-3 p-4">
            <p className="my-3 text-center text-2xl lg:text-4xl">
              <b>Rachel</b> é um sistema desenvolvido para bibliotecas,
              oferecendo uma variedade de recursos e funcionalidades para
              otimizar a gestão desses espaços e para uma melhor experiência de
              seus usuários.
            </p>
          </div>
          <div className="flex w-full lg:w-2/4 flex-wrap justify-center gap-3 ">
            <img className="rounded-lg w-4/5" src="imagemLogo.jpg" />
          </div>
        </div>
        <div className="mb-3 lg:mb-10 flex flex-col-reverse lg:flex-row">
          <div className="flex w-full lg:w-2/4 flex-wrap justify-center gap-3 sm:w-full">
            <img
              className="rounded-lg w-4/5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Adonias_FIlho%2C_Rachel_de_Queiroz%2C_Gilberto_Freyre.jpg/640px-Adonias_FIlho%2C_Rachel_de_Queiroz%2C_Gilberto_Freyre.jpg"
            />
          </div>
          <div className="flex w-full lg:w-2/4 flex-wrap items-center justify-center gap-3 p-4">
            <p className="my-3 text-center text-2xl lg:text-4xl">
              A identidade do projeto foi inspirada pela grande{" "}
              <b>Rachel de Queiroz</b>, autora de O Quinze e diversos outros
              clássicos da literatura cearense, e pelo livro{" "}
              <b>A Bolsa Amarela</b>, de Lygia Bojunga.
            </p>
          </div>
        </div>
        <div className="mb-3 lg:mb-10 flex flex-col lg:flex-row">
          <div className="flex w-full lg:w-2/4 flex-wrap items-center justify-center gap-3 p-4">
            <p className="my-3 text-center text-2xl lg:text-4xl">
              Esse projeto foi desenvolvido por Antônio Rafael Cunha, João Isaac
              Alves, Leonardo Pereira e Riquelme Jatay.{" "}
              <b>Que tal seguir a equipe em suas redes socias? :)</b>
            </p>
          </div>
          <div className="flex w-full lg:w-2/4 flex-wrap justify-center gap-3">
            <div
              id="card"
              className="flex items-center rounded-lg border border-black p-3 w-4/5"
            >
              <img
                className="mr-2 max-w-16 rounded-lg"
                src="https://media.licdn.com/dms/image/D4D03AQERMkNM2hFHyg/profile-displayphoto-shrink_800_800/0/1699043027814?e=1714608000&v=beta&t=gynhBZclwcaDt97OeReNounI-Yaqh7TctuLlSobMmtc"
              />
              <div>
                <h2 className="font-serif text-xl">Antonio Rafael Cunha</h2>
                <a target="blank" href="https://github.com/devraffa">
                  GitHub{" "}
                </a>
                |
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/antonio-rafael-oliveira-da-cunha-2a104729a/"
                >
                  {" "}
                  LinkedIn
                </a>
              </div>
            </div>
            <div
              id="card"
              className="flex items-center rounded-lg border border-black p-3 w-4/5"
            >
              <img
                className="mr-2 max-w-16 rounded-lg"
                src="https://avatars.githubusercontent.com/u/75186485?v=4"
              />
              <div>
                <h2 className="font-serif text-xl">João Isaac Alves</h2>
                <a target="blank" href="https://github.com/isaaclvf">
                  GitHub{" "}
                </a>
                |
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/isaacfarias0/"
                >
                  {" "}
                  LinkedIn
                </a>
              </div>
            </div>
            <div
              id="card"
              className="flex items-center rounded-lg border border-black p-3 w-4/5"
            >
              <img
                className="mr-2 max-w-16 rounded-lg"
                src="https://avatars.githubusercontent.com/u/116222412?v=4"
              />
              <div>
                <h2 className="font-serif text-xl">Leonardo Pereira</h2>
                <a target="blank" href="https://github.com/leopsdev">
                  GitHub{" "}
                </a>
                |
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/leonardo-pereira-silva-293039233/"
                >
                  {" "}
                  LinkedIn
                </a>
              </div>
            </div>
            <div
              id="card"
              className="flex items-center rounded-lg border border-black p-3 w-4/5"
            >
              <img
                className="mr-2 max-w-16 rounded-lg"
                src="https://media.licdn.com/dms/image/C4E03AQFfh0MOYw0jwQ/profile-displayphoto-shrink_800_800/0/1625600523785?e=1714608000&v=beta&t=D36sKbwvkhUPIgiJ533GhSvGrvWGiWM3pgcIiw6oaLI"
              />
              <div>
                <h2 className="font-serif text-xl">Riquelme Jatay</h2>
                <a target="blank" href="https://github.com/RiquelmeJ">
                  GitHub{" "}
                </a>
                |
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/riquelmejatay/"
                >
                  {" "}
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
