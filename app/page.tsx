import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="/eu.jpeg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        José Maurício
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Profissional com 8 anos de carreira na área de tecnologia, atuando como Desenvolvedor de Software em diferentes frentes, incluindo as 
          funções de Desenvolvedor Back-end, Analista de Software e Analista de Qualidade. Possuo especialização no desenvolvimento de APIs robustas e confiáveis, 
          além de ampla experiência na criação e manutenção de testes automatizados, garantindo confiabilidade e qualidade das aplicações. Ao longo da minha trajetória, 
          contribui para projetos diversos, sempre com foco em qualidade, eficiência e inovação tecnológica.
        </p>
      </div>
    </section>
  );
}
