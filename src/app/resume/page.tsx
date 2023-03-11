"use client";

import "@/styles/global.css";
import "@/styles/scroll.css";
import { Fredericka_the_Great } from "@next/font/google";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineHome } from "react-icons/ai";

const fredericka = Fredericka_the_Great({
  subsets: ["latin"],
  variable: "--font-fredericka",
  weight: "400",
});

export default function Home() {
  return (
    <main className="max-w-4xl p-8 mx-auto">
      <Link
        href="/"
        className="border-2 rounded-md px-4 md:px-8 py-2 md:py-4 md:ml-auto max-w-fit text-sm flex gap-2 items-center"
      >
        <AiOutlineHome />
        Página inicial
      </Link>
      <div className="mt-8">
        <h1 className="text-4xl mb-2 font-semibold">Fernanda Oshiro</h1>
        <p className="text-lg text-gray-500 text-sm">
          Desenvolvedora Front-end
        </p>
        <div className="my-8 flex gap-2 flex-col">
          <a
            className="flex items-center gap-4 "
            href="https://github.com/fer-oshiro"
          >
            <div>
              <AiFillGithub />
            </div>
            <span>https://github.com/fer-oshiro</span>
          </a>
          <a
            className="flex items-center gap-4"
            href="https://www.linkedin.com/in/fernanda-oshiro-25664914a/"
          >
            <div>
              <AiFillLinkedin />
            </div>
            <span>https://www.linkedin.com/in/fernanda-oshiro-25664914a/</span>
          </a>
        </div>
        <div className="my-8">
          <h2 className="text-2xl mb-2 text-purple-600 font-light">Perfil</h2>
          <p className="text-lg text-gray-500 text-sm">
            Sou desenvolvedora front-end há mais de 2 anos e atualmente estou
            cursando graduação em Tecnologia da Informação. Tenho experiência no
            desenvolvimento de aplicações web e na criação de seus designs
            utilizando Figma. Além disso, já atuei na manutenção e criação de
            funcionalidades para o BFF na AWS, utilizando o framework Serverless
            e Node.js.
          </p>
        </div>
        <div className="flex gap-2">
          <h3 className="font-semibold">Especialidades:</h3>
          <p>Aplicações Web, Design, AWS</p>
        </div>
        <div className="my-8">
          <h2 className="text-2xl mb-2 text-purple-600 font-light">
            Experiência
          </h2>
          <ul className="flex gap-2 flex-col">
            <li className="flex gap-2">
              <ul>
                <li>
                  <h3 className="font-semibold mt-4">
                    Front-end júnior <span className="text-purple-600">|</span>{" "}
                    <span className="font-medium">MadeiraMadeira</span>{" "}
                    <span className="text-purple-600">|</span>{" "}
                    <span className="text-gray-400 font-normal">
                      07/2022 – atualmente
                    </span>
                  </h3>
                  <ul className="ml-8 mt-4 flex flex-col gap-4">
                    <li>
                      <h4 className="font-semibold mb-1">
                        Web app para cliente Iguanafix
                      </h4>
                      <p>
                        Website para acompanhar o status do pedido de montagem,
                        agendar e responder ao feedback. Criei o design no Figma
                        e foi aprovado pelo time de design da MM. O website pode
                        ser utilizado de forma independente para acompanhar o
                        status do pedido e do profissional, ou como parte do
                        fluxo do aplicativo MM para agendamento. O
                        desenvolvimento foi feito com tecnologia React e
                        utilizando o design system Material UI
                      </p>
                      <div className="flex gap-2 mt-3 text-sm">
                        <h5>Principais tecnologias:</h5>
                        <p>React, Github, Git, Figma</p>
                      </div>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-1">
                        Web app para os reseller das guide shop
                      </h4>
                      <p>
                        Desenvolvi um website para acompanhar o status do pedido
                        de montagem, permitindo aos usuários agendar, reagendar
                        e consultar a disponibilidade. Para o design, utilizei o
                        sistema Chakra UI em conjunto com o React Query para
                        gerenciamento de dados
                      </p>
                      <div className="flex gap-2 mt-3 text-sm">
                        <h5>Principais tecnologias:</h5>
                        <p>React, Github, Git, Figma, React Query, Chakra UI</p>
                      </div>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-1">
                        Web app para ticket da MM para Iguanafix
                      </h4>
                      <p>
                        Desenvolvi um website para criar tickets de defeito ou
                        avaria dos produtos e acompanhar o status do andamento
                        do pedido. Para o back-end, adaptei o código utilizando
                        Node com o framework serverless hospedado na AWS. Para o
                        front-end, utilizei React com o design system Chakra UI.
                      </p>
                      <div className="flex gap-2 mt-3 text-sm">
                        <h5>Principais tecnologias:</h5>
                        <p>
                          React, Github, Git, Figma, AWS, Serverless, Express
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="flex gap-2">
              <ul>
                <li>
                  <h3 className="font-semibold mt-4">
                    Estagiária <span className="text-purple-600">|</span>{" "}
                    <span className="font-medium">IguanaFix</span>{" "}
                    <span className="text-purple-600">|</span>{" "}
                    <span className="text-gray-400 font-normal">
                      07/2020 - 07/2022
                    </span>
                  </h3>
                  <ul className="ml-8 mt-4 flex flex-col gap-4">
                    <li>
                      <h4 className="font-semibold mb-1">
                        Web app para cliente Comgás
                      </h4>
                      <p>
                        Desenvolvi um website para acompanhar o status de
                        pedidos de montagem, agendamento e feedback. Realizei a
                        criação do design utilizando a ferramenta Figma, e o
                        projeto pode ser utilizado tanto de forma independente
                        para o acompanhamento de pedidos e profissionais, quanto
                        integrado ao fluxo do aplicativo MM para agendamentos.
                        Utilizei a tecnologia React em conjunto com o design
                        system Material UI para implementar as funcionalidades,
                        garantindo um resultado elegante e eficiente.
                      </p>
                      <div className="flex gap-2 mt-3 text-sm">
                        <h5>Principais tecnologias:</h5>
                        <p>React, Github, Git, Figma</p>
                      </div>
                    </li>
                    <li>
                      <h4 className="font-semibold mb-1">
                        Rota do Profissional
                      </h4>
                      <p>
                        Sistema desenvolvido para criar e gerenciar rotas dos
                        profissionais utilizando a API do Google Maps. Com ele,
                        é possível visualizar as rotas, selecionar a melhor
                        opção e adicionar prioridades para os trabalhos.
                      </p>
                      <div className="flex gap-2 mt-3 text-sm">
                        <h5>Principais tecnologias:</h5>
                        <p>React, Github, Git, Google Maps API</p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="flex gap-2">
              <ul>
                <li>
                  <h3 className="font-semibold mt-4">
                    Voluntária <span className="text-purple-600">|</span>{" "}
                    <span className="font-medium">ONG Amparo dos Pequenos</span>{" "}
                    <span className="text-purple-600">|</span>{" "}
                    <span className="text-gray-400 font-normal">
                      06/2019 - 07/2020
                    </span>
                  </h3>
                  <ul className="ml-8 mt-4 flex flex-col gap-4">
                    <li>
                      <h4 className="font-semibold mb-1">
                        Resposta automáticas para e-mail
                      </h4>
                      <p>
                        Responsável por responder aos interessados ao
                        voluntariado e responder as dúvidas dos candidatos, além
                        de marcar a entrevista. Parte das repostas foi
                        automatizado com o auxílio do google script e a
                        organização dos candidatos que responderem o e-mail e
                        confirmaram a visita também foi utilizada o google
                        script com google sheets
                      </p>
                      <div className="flex gap-2 mt-3 text-sm">
                        <h5>Principais tecnologias:</h5>
                        <p>HTML, Google Script</p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl mb-2 text-purple-600 font-light">Educação</h2>
          <ul className="py-2">
            <li>
              <h3 className="font-semibold">
                Universidade Virtual do Estado de São Paulo (UNIVESP){" "}
                <span className="text-purple-600">|</span>{" "}
                <span className="text-gray-400 font-normal">2022 - 2025</span>
              </h3>
              <p>B.S., Bacharelado em Tecnologia da Informação</p>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl mb-2 text-purple-600 font-light">
            Outros cursos
          </h2>
          <ul className="pl-8">
            <li>2021- Ignite ReactJs – Rocketseat – 60h</li>
            <li>2021- UI Design Avançado – Origamid – 30h</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
