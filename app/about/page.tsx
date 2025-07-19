import Image from "next/image";
import { socialLinks } from ".././config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
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
        Sobre Mim!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
       <p>
          Ao longo da minha carreira como Desenvolvedor, participei de projetos de diferentes portes e complexidades, desde a manutenção de sistemas 
          até o desenvolvimento de APIs REST e a construção de plataformas para gerenciamento e realização de promoções. Como Desenvolvedor Back-end, 
          atuei em campanhas promocionais para empresas como AMBEV e Friboi, entre outras.
        </p>
        <p>
          Posteriormente, fui responsável pela garantia da qualidade de aplicações mobile. Nessa função, gerenciei e 
          criei massas de teste, elaborei testes automatizados, defini cenários de teste e realizei testes manuais, de integração, 
          funcionais e de regressão. Meu objetivo como QA não foi apenas identificar e corrigir o maior número possível de erros e bugs, mas também garantir 
          entregas de alta qualidade, priorizando a segurança do sistema e dos dados envolvidos.
        </p>
        <p>
          Atuei em aplicações do setor financeiro, que incluíam desde plataformas para gerenciamento de 
          cartões corporativos até bancos digitais, abrangendo funcionalidades como transferências tradicionais e o sistema PIX. Tive, inclusive, o privilégio de 
          trabalhar como QA durante a implementação do PIX, contribuindo para a sua qualidade e segurança.
        </p>
        <p>
          Atuei na Sensedia como Analista de Qualidade na área de consultoria, tendo a oportunidade de participar de diversos projetos. 
          Atualmente, continuo na Sensedia como consultor no ecossistema do Open Finance Brasil, desempenhando a função de Analista de Qualidade.
        </p>
      </div>
    </section>
  );
}
