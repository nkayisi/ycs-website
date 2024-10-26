'use client'

import Section from "@/components/section";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useWindowScroll } from 'react-use';
import { useEffect, useState } from "react";

export default function Home() {
  const [navBgClass, setNavBgClass] = useState('bg-[#141F39]');
  const { x, y } = useWindowScroll();

  useEffect(() => {
    if (typeof window !== 'undefined' && y >= 40){
      setNavBgClass('bg-transparent');
    }else {
      setNavBgClass('bg-[#141F39]');
    }
  }, [y]);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col items-center">

        <nav className={`${navBgClass} duration-500 w-full px-4 sm:px-12 md:px-24 lg:px-32 xl:px-40 flex justify-between sticky top-0 right-0 backdrop-blur-md py-2 text-white z-50`}>

          <div className="border rounded-full">
            <Image src='/vercel.svg' width={100} height={100} className="w-12 h-12" alt="Logo YCS" />
          </div>

          <ul className="md:flex gap-12 items-center text-lg hidden">
            <li>
              <a className="" href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">A propos</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Nous Contacter</a>
            </li>
          </ul>
        </nav>

        <Section classNames="bg-[#141F39] flex flex-col w-full min-h-screen">

          <div className="py-14 sm:py-10">
            <div className="flex flex-col flex-1 items-center justify-center gap-7 sm:text-center text-white max-w-xl mx-auto">

              {/* Main title and description */}
              <div className="flex flex-col gap-8 sm:gap-4">
                <div className="relative w-full sm:w-max md:w-full flex justify-start">
                  <h1 className="text-[60px] sm:text-[50px] md:text-[70px] leading-none z-10">
                    Yolo Consultancy Services.
                  </h1>
                  <Image src='/Ellipse.svg' width={100} height={100}
                    className="w-[130px] sm:w-[186px] h-auto absolute inset-0 top-0 sm:-left-5 left-0 z-0" alt="Logo YCS"
                  />
                </div>
                <p className="text-[18px] font-thin">
                  Nous adaptons notre conception de la recherche aux besoins spécifiques de votre projet, afin d'en garantir la pertinence et l'impact.
                </p>
              </div>

              {/* Buttons */}
              <div className="w-full flex flex-col sm:flex-row gap-7 justify-center">
                <a href="" className="flex items-center justify-center px-5 py-2 rounded text-white  bg-green-600">
                  Découvrez plus
                </a>
                <a href="" className="flex gap-2 items-center justify-center px-5 py-2 rounded text-white  border border-white">
                  <span>Explorer les services</span>
                  <ArrowRight size={23} />
                </a>
              </div>

              {/* Checks */}
              <div className="w-full flex flex-col sm:flex-row gap-5 sm:justify-center">
                <div className="flex gap-2 items-center">
                  <Check size={18} className="text-green-600" />
                  <span>Conseils</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Check size={18} className="text-green-600" />
                  <span>Solutions commerciales</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Check size={18} className="text-green-600" />
                  <span>Recherche</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center py-10">
              <div className="w-full sm:w-[270px]">
                <Image src='/Rectangle-1.png' width={100} height={100} className="w-full h-auto" alt="Evennement 1" />
                <p className="py-1 text-white">La plus grande conférence numérique - 2023</p>
              </div>
              <div className="w-full sm:w-[270px]">
                <Image src='/Rectangle-2.png' width={100} height={100} className="w-full h-auto" alt="Evennement 2" />
                <p className="py-1 text-white">15-30 juin, New York-USA</p>
              </div>
              <div className="w-full sm:w-[270px]">
                <Image src='/Rectangle-3.png' width={100} height={100} className="w-full h-auto" alt="Evennement 3" />

                <p className="py-1 text-white">Conférencière principale Amenia Fwalt</p>
              </div>
            </div>
          </div>

        </Section>

        <Section classNames="flex gap-10 bg-[#15BEE3] py-6">
          <Image src='/image-logo.png' width={100} height={100} className="w-[200px]" alt="Logo YCS" />
          <Image src='/image-logo.png' width={100} height={100} className="w-[200px]" alt="Logo YCS" />
          <Image src='/image-logo.png' width={100} height={100} className="w-[200px]" alt="Logo YCS" />
          <Image src='/image-logo.png' width={100} height={100} className="w-[200px]" alt="Logo YCS" />
          <Image src='/image-logo.png' width={100} height={100} className="w-[200px]" alt="Logo YCS" />
        </Section>

        <Section classNames="bg-[#FAFAFA]">
          <div className="flex flex-col gap-10 py-20">
            <div className="max-w-xl mx-auto flex flex-col gap-4 text-center">
              <h1 className="text-4xl font-semibold">How To Grow Your Business</h1>
              <p className="font-thin">
                Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap gap-4 sm:gap-6 lg:gap-12 sm:justify-start justify-center">
              <div className="w-full flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-8 md:gap-4 items-center justify-center md:w-1/3 h-[270px] p-8 rounded bg-white">
                <div className="relative w-full sm:w-max md:w-full flex justify-start">
                  <Image src='/services/service-1.svg' width={100} height={100} className="w-12 h-12 z-10" alt="Logo YCS" />
                  <Image src='/services/vector-service-1.svg' width={100} height={100}
                    className="absolute -left-4 -bottom-2 w-10 h-10 z-0" alt="Logo YCS"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg font-semibold leading-10">Active User Analytics</h1>
                  <p className="font-thin">Class aptent taciti sociosqu litora torquen conubia nostram.</p>
                </div>
              </div>
              <div className="w-full flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-8 md:gap-4 items-center justify-center md:w-1/3 h-[270px] p-8 rounded shadow-md border-b-8 border-[#15BEE3] bg-white">
                <div className="relative w-full sm:w-max md:w-full flex justify-start">
                  <Image src='/services/service-2.svg' width={100} height={100} className="w-12 h-12 z-10" alt="Logo YCS" />
                  <Image src='/services/vector-service-2.svg' width={100} height={100}
                    className="absolute left-6 -bottom-2 w-10 h-10 text-blue-500 fill-orange-800 z-0" alt="Logo YCS"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg font-semibold leading-10">Smart Coding Development</h1>
                  <p className="font-thin">Morbi eget aliquet finibus, best condimentum aliquet quam.</p>
                </div>
              </div>
              <div className="w-full flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-8 md:gap-4 items-center justify-center md:w-1/3 h-[270px] p-8 rounded bg-white">
                <div className="relative w-full sm:w-max md:w-full flex justify-start mx-0">
                  <Image src='/services/service-2.svg' width={100} height={100} className="w-12 h-12 z-10" alt="Logo YCS" />
                  <Image src='/services/vector-service-2.svg' width={100} height={100}
                    className="absolute left-6 -bottom-2 w-10 h-10 text-blue-500 fill-orange-800 z-0" alt="Logo YCS"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-lg font-semibold leading-10">User Friendly Interface</h1>
                  <p className="font-thin">Quisque magna, sollicitudin vitae, lobortis feugiat arcu.</p>
                </div>
              </div>
            </div>

            <div className="py-4 text-gray-500">
              <p className="text-center">Environ <strong>875+</strong> membres de l'équipe prêts à vous soutenir en ligne</p>
            </div>
          </div>
        </Section>

        <Section classNames="flex flex-col gap-10 py-20">
          <div className="max-w-2xl flex flex-col gap-4 text-start">
            <h1 className="text-4xl font-semibold">
              Pourquoi choisir Yolo Consultancy Services ?
            </h1>
            <p className="font-thin pb-10 border-b">
              Chez Yolo Consultancy Services, nous offrons bien plus que des conseils. Grâce à notre expertise approfondie et notre approche personnalisée.            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-10">
              <div className="max-w-2xl flex flex-col gap-2 text-start">
                <div className="relative w-full sm:w-max md:w-full flex justify-start">
                  <h1 className="text-xl font-semibold z-10">
                    Approche sur mesure
                  </h1>
                  <Image src='/choices/choice-ellipse.svg' width={100} height={100}
                    className="absolute -left-4 -bottom-2 w-12 h-12 z-0" alt="Logo YCS"
                  />
                </div>
                <p className="font-thin">
                  Nous adaptons notre conception de la recherche aux besoins spécifiques de votre projet, afin d'en garantir la pertinence et l'impact.
                </p>
              </div>
              <div className="max-w-2xl flex flex-col gap-2 text-start">
                <div className="relative w-full sm:w-max md:w-full flex justify-start">
                  <h1 className="text-xl font-semibold z-10">
                    Expertise locale, normes mondiales
                  </h1>
                  <Image src='/choices/choice-ellipse-2.svg' width={100} height={100}
                    className="absolute -left-4 -bottom-2 w-12 h-12 z-0" alt="Logo YCS"
                  />
                </div>
                <p className="font-thin">
                  YCS associe des connaissances locales approfondies à des méthodologies de recherche internationales.              </p>
              </div>
              <div className="max-w-2xl flex flex-col gap-2 text-start">
                <div className="relative w-full sm:w-max md:w-full flex justify-start">
                  <h1 className="text-xl font-semibold z-10">
                    Engagement en faveur de la durabilité
                  </h1>
                  <Image src='/choices/choice-ellipse-3.svg' width={100} height={100}
                    className="absolute -left-4 -bottom-2 w-12 h-12 z-0" alt="Logo YCS"
                  />
                </div>
                <p className="font-thin">
                  Nous visons à fournir des résultats qui ne sont pas seulement pertinents, mais également exploitables et durables pour une réussite à long terme.
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <Image src='/choices/shape.svg' width={100} height={100}
                className="w-96 h-auto hidden sm:block" alt="Logo YCS"
              />
            </div>
          </div>

        </Section>

        <Section classNames="border bg-[#141F39] text-white flex flex-col gap-10 md:gap-14 mx-auto justify-center items-center py-20">
          <div className="max-w-3xl flex flex-col gap-8 sm:gap-4 sm:text-center">
            <div className="relative w-full sm:w-max md:w-full flex justify-start">
              <h1 className="text-[32px] md:text-[50px] lg:text-[60px] leading-none z-10">
                YCS vous offre differents proposition de valeur
              </h1>
              <Image src='/Ellipse copy.svg' width={100} height={100}
                className="w-[130px] sm:w-[166px] h-auto absolute inset-0 -top-7 sm:left-20 left-0 z-0" alt="Logo YCS"
              />
            </div>
            <p className="text-[18px] font-thin">
              Découvrez des propositions qui vont changées votre maniere de travailler.            </p>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between gap-24 sm:gap-5">
            <Accordion defaultExpandedKeys={["1", '2']}
              className="w-full md:max-w-[60%]"
              itemClasses={{
                base: "border-b border-slate-700"
              }}
            >
              <AccordionItem
                key="1"
                aria-label="Connaissance contextuelle approfondie"
                indicator={({ isOpen }) => (isOpen ? <Minus className="rotate-90" /> : <Plus />)}
                title="Connaissance contextuelle approfondie"
              >
                <div>
                  <p>
                    Comprehension de la dynamique, des comportements du marchélocal et des besoins des parties prenantes.
                  </p>
                  <p>
                    Vaste expérience des écosystèmes économiques, numériques et médiatiques de la RDC.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Excellence en matière de recherche"
                indicator={({ isOpen }) => (isOpen ? <Minus className="rotate-90" /> : <Plus />)}
                title="Excellence en matière de recherche"
              >
                <div>
                  <p>
                    Capacité avérée à concevoir et à mener des études de référence en utilisant des méthodes
                    robustes de collecte et d'analyse des données.
                  </p>
                  <p>
                    Expertise en matière d'études qualitatives et quantitatives, garantissant des informations
                    nuancées et exploitables.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Dessolutions baséessurla technologie"
                indicator={({ isOpen }) => (isOpen ? <Minus className="rotate-90" /> : <Plus />)}
                title="Dessolutions baséessurla technologie"
              >
                <div>
                  <p>
                    Compétences dans l'utilisation d'outils d'analyse de données pour générer des rapports, des
                    tableaux de bord et des prévisions.
                  </p>
                  <p>
                    Expérience de l'utilisation des plateformes USSD et de la technologie mobile pour la collecte
                    de données et l'engagement des parties prenantes dans les régions éloignées.
                  </p>
                </div>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Des réseaux locaux solides"
                indicator={({ isOpen }) => (isOpen ? <Minus className="rotate-90" /> : <Plus />)}
                title="Des réseaux locaux solides"
              >
                <div>
                  <p>
                    Un large réseau d'acteurs du secteur privé, d'autorités locales et de partenaires du développement en RDC.
                  </p>
                  <p>
                    Capacité à faciliter l'engagement des parties prenantes et à assurer une collaboration harmonieuse tout au long du processus de recherche.
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
            <div className="relative mx-auto">
              <Image src='/Rectangle-ac.png' width={100} height={100}
                className="w-80 h-auto z-0" alt="Logo YCS"
              />
              <div className="w-40 h-40 flex flex-col items-center justify-center p-3.5 rounded-md bg-slate-50 absolute -top-10 -left-6 sm:top-10 sm:-left-16">
                <h1 className="w-full text-start text-4xl font-bold text-[#141F39]">27%</h1>
                <p className="text-[#070417]">
                  Augmentation de la productivité en moyenne
                </p>
              </div>
            </div>
          </div>

        </Section>

      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div >
  );
}
