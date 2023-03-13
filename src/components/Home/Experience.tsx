import mm_agendamento from "@/assets/mm_agendamento.png";
import mm_home from "@/assets/mm_home.png";
import mm_trajeto from "@/assets/mm_trajeto.png";

import suporte_chat from "@/assets/suporte_chat.png";
import suporte_home from "@/assets/suporte_home.png";
import suporte_user from "@/assets/suporte_user.png";

import plus_optimizer from "@/assets/plus_optimizer.png";
import plus_rota from "@/assets/plus_rota.png";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineRight,
} from "react-icons/ai";
import Modal from "../common/Modal";

const img = {
  1: mm_home,
  2: mm_agendamento,
  3: mm_trajeto,
  4: suporte_home,
  5: suporte_user,
  6: suporte_chat,
  7: plus_rota,
  8: plus_optimizer,
};

type keys = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const slashMotion = {
  rest: { ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    right: 6,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
      yoyo: Infinity,
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
};

export default function Exp() {
  const [selectedId, setSelectedId] = useState<keys | null>(null);

  return (
    <section id="experience" className="pt-16 p-8 md:p-16">
      <h1 className="text-5xl md:text-6xl font-semibold">Experiência</h1>
      <div>
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold pt-8">
            Front-end Developer
          </h2>
          <h3 className="text-lg md:text-2xl font-semibold pt-4">
            MadeiraMadeira
          </h3>
          <p className="md:text-xl text-sm py-2">2022 - Presente</p>
          <p className="md:text-xl">
            Como desenvolvedora, fui responsável por criar soluções completas em
            React.js e AWS, incluindo o desenvolvimento do back-end em Node.js e
            Express. Trabalhei de forma autônoma para garantir que o back-end
            fosse desenvolvido de acordo com as necessidades do projeto e que
            fosse integrado de forma eficiente com o front-end. Minha habilidade
            em trabalhar de forma independente me permitiu entregar soluções
            completas e bem projetadas que ofereciam uma excelente experiência
            ao usuário.
          </p>
          <div className="py-8">
            <h4 className="text-2xl font-semibold">Tecnologias</h4>
            <ul className="pt-2 flex gap-4 flex-wrap">
              <li className="p-2 px-4 border-2 border-pink-600 rounded-md bg-pink-50 text-pink-700">
                React.js
              </li>
              <li className="p-2 px-4 border-2 border-green-600 rounded-md bg-green-50 text-green-700">
                Node.js
              </li>
              <li className="p-2 px-4 border-2 border-green-600 rounded-md bg-green-50 text-green-700">
                Express
              </li>
              <li className="p-2 px-4 border-2 border-amber-600 rounded-md bg-amber-50 text-amber-700">
                AWS
              </li>
              <li className="p-2 px-4 border-2 border-gray-600 rounded-md bg-gray-50 text-gray-700">
                Git
              </li>
              <li className="p-2 px-4 border-2 border-red-600 rounded-md bg-red-50 text-red-700">
                HTML
              </li>
              <li className="p-2 px-4 border-2 border-blue-600 rounded-md bg-blue-50 text-blue-700">
                CSS
              </li>
              <li className="p-2 px-4 border-2 border-yellow-600 rounded-md bg-yellow-50 text-yellow-700">
                JavaScript
              </li>
              <li className="p-2 px-4 border-2 border-cyan-600 rounded-md bg-cyan-50 text-cyan-700">
                Material UI
              </li>
              <li className="p-2 px-4 border-2 border-lime-600 rounded-md bg-lime-50 text-lime-700">
                Chakra UI
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Projetos</h4>
            <ul className="py-8 flex flex-col gap-16">
              <li>
                <h5 className="text-lg font-semibold">WebApp de Cliente</h5>
                <p className="p-6 py-2">
                  Aplicação web completa que permite aos usuários acompanhar o
                  trajeto do profissional, agendar ou remarcar uma data e
                  fornecer feedback. O aplicativo foi projetado para oferecer
                  aos usuários uma experiência de usuário agradável e intuitiva
                </p>
                <div className="mx-auto w-fit text-center">
                  <div className="flex gap-4 overflow-auto md:overflow-hidden py-8">
                    <Image
                      onClick={() => setSelectedId(1)}
                      className="w-auto object-contain h-60 cursor-pointer"
                      src={mm_home}
                      width={300}
                      height={300}
                      alt="Site MadeiraMadeira para cliente na página inicial com dois produtos para ser agendado a data de montagem"
                    />

                    <Image
                      onClick={() => setSelectedId(2)}
                      className="w-auto object-contain h-60 cursor-pointer"
                      src={mm_agendamento}
                      width={300}
                      height={300}
                      alt="Site MadeiraMadeira para cliente com 3 produtos para ser agendado"
                    />
                    <Image
                      onClick={() => setSelectedId(3)}
                      className="w-auto object-contain h-60 cursor-pointer"
                      src={mm_trajeto}
                      width={300}
                      height={300}
                      alt="Site MadeiraMadeira para cliente onde mostra o local do cliente e o trajeto do profissional"
                    />
                  </div>
                  <p className="text-sm text-gray-500 py-4">
                    Imagens ilustrativas, nenhuma imagem utilizou dados reais de
                    clientes
                  </p>
                </div>
              </li>
              <li>
                <h5 className="text-lg font-semibold">Suporte Ao Cliente</h5>
                <p className="p-6 py-2">
                  Eu desenvolvi uma aplicação web completa, abrangendo o design,
                  o front-end e o back-end, que possibilita a equipe de
                  operações da empresa Madeira entrar em contato com a equipe da
                  Iguanafix. Por meio dessa plataforma, eles podem discutir
                  questões pertinentes, tais como o cancelamento de pedidos,
                  problemas de qualidade dos produtos e outras informações
                  relevantes.
                </p>
                <div className="mx-auto w-fit text-center overflow-auto">
                  <div className="flex gap-8 py-8">
                    <Image
                      onClick={() => setSelectedId(4)}
                      className="w-auto object-contain h-48 cursor-pointer"
                      src={suporte_home}
                      width={300}
                      height={300}
                      alt="Site MadeiraMadeira para cliente na página inicial com dois produtos para ser agendado a data de montagem"
                    />

                    <Image
                      onClick={() => setSelectedId(5)}
                      className="w-auto object-contain h-48 cursor-pointer"
                      src={suporte_user}
                      width={300}
                      height={300}
                      alt="Site MadeiraMadeira para cliente com 3 produtos para ser agendado"
                    />
                    <Image
                      onClick={() => setSelectedId(6)}
                      className="w-auto object-contain h-48 cursor-pointer"
                      src={suporte_chat}
                      width={300}
                      height={300}
                      alt="Site MadeiraMadeira para cliente onde mostra o local do cliente e o trajeto do profissional"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold pt-8">
            Estagiária
          </h2>
          <h3 className="text-lg md:text-2xl font-semibold pt-4">IguanaFix</h3>
          <p className="md:text-xl text-sm py-2">2020 - 2020</p>
          <p className="md:text-xl">
            Como estagiária, fui responsável pela criação de uma rota que
            encontrava o menor caminho, além de ter criado um website para que o
            cliente pudesse se comunicar sobre a localização do profissional.
            Também desenvolvi alguns endpoints em Python na AWS.
          </p>
        </div>
        <div className="py-8">
          <h4 className="text-2xl font-semibold">Tecnologias</h4>
          <ul className="pt-2 flex gap-4 flex-wrap">
            <li className="p-2 px-4 border-2 border-pink-600 rounded-md bg-pink-50 text-pink-700">
              React.js
            </li>
            <li className="p-2 px-4 border-2 border-blue-600 rounded-md bg-blue-50 text-blue-700">
              Python
            </li>
            <li className="p-2 px-4 border-2 border-amber-600 rounded-md bg-amber-50 text-amber-700">
              AWS
            </li>
            <li className="p-2 px-4 border-2 border-gray-600 rounded-md bg-gray-50 text-gray-700">
              Git
            </li>
            <li className="p-2 px-4 border-2 border-red-600 rounded-md bg-red-50 text-red-700">
              HTML
            </li>
            <li className="p-2 px-4 border-2 border-blue-600 rounded-md bg-blue-50 text-blue-700">
              CSS
            </li>
            <li className="p-2 px-4 border-2 border-yellow-600 rounded-md bg-yellow-50 text-yellow-700">
              JavaScript
            </li>
            <li className="p-2 px-4 border-2 border-cyan-600 rounded-md bg-cyan-50 text-cyan-700">
              Material UI
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold">Projetos</h4>
          <ul className="py-8 flex flex-col gap-16">
            <li>
              <h5 className="text-lg font-semibold">Otimizador de Rota</h5>
              <p className="p-6 py-2">
                Aplicação web completa que permite aos usuários selecionar um
                ponto de partida e, em seguida, visualizar os 10 próximos pontos
                ou qualquer outro conjunto de 10 pontos. A aplicação utiliza o
                Google Maps para otimizar a rota entre os pontos selecionados
              </p>
              <div className="mx-auto w-fit text-center">
                <div className="flex gap-4 overflow-auto md:overflow-hidden py-8">
                  <Image
                    onClick={() => setSelectedId(7)}
                    className="w-auto object-contain h-60 cursor-pointer"
                    src={plus_rota}
                    width={300}
                    height={300}
                    alt="Site MadeiraMadeira para cliente na página inicial com dois produtos para ser agendado a data de montagem"
                  />
                  <Image
                    onClick={() => setSelectedId(8)}
                    className="w-auto object-contain h-60 cursor-pointer"
                    src={plus_optimizer}
                    width={1200}
                    height={900}
                    alt="Site MadeiraMadeira para cliente com 3 produtos para ser agendado"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <motion.a
        href="/resume"
        className="relative mt-8 w-full max-w-xs flex justify-between items-center px-8 py-4 rounded-md border-2 ml-auto"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <span>Currículo completo</span>
        <motion.span
          className="absolute right-8"
          variants={slashMotion as Variants}
        >
          <AiOutlineRight />
        </motion.span>
      </motion.a>
      <Modal isOpen={selectedId !== null} onClose={() => setSelectedId(null)}>
        <div className="flex gap-2 items-center h-full">
          {selectedId !== 1 && selectedId !== 4 && selectedId !== 7 && (
            <motion.div
              className="cursor-pointer absolute left-5 w-16"
              onClick={() => {
                const number = Number(selectedId) - 1;
                setSelectedId(number as keys);
              }}
            >
              <AiOutlineDoubleLeft className="mx-auto" />
            </motion.div>
          )}

          {selectedId !== null && (
            <Image
              className="object-contain md:h-full mx-auto w-10/12 select-none"
              src={img[selectedId]}
              width={900}
              height={900}
              alt="Site MadeiraMadeira para cliente na página inicial com dois produtos para ser agendado a data de montagem"
            />
          )}
          {selectedId !== 3 && selectedId !== 6 && selectedId !== 8 && (
            <motion.div
              className="cursor-pointer absolute right-5 w-16"
              onClick={() => {
                const number = Number(selectedId) + 1;
                setSelectedId(number as keys);
              }}
            >
              <AiOutlineDoubleRight className="mx-auto" />
            </motion.div>
          )}
        </div>
      </Modal>
    </section>
  );
}
