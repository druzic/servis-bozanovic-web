import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faCircleCheck,
  faUserTie,
  faEnvelope,
  faLocationDot,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faViber,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const images = [
    { id: 1, img: "marke/blitz.png", name: "Blitz" },
    { id: 2, img: "marke/fram.png", name: "Fram" },
    { id: 3, img: "marke/franke.png", name: "Franke" },
    { id: 4, img: "marke/heinner.png", name: "Heinner" },
    { id: 5, img: "marke/lg.png", name: "LG" },
    { id: 6, img: "marke/liebherr.png", name: "Liebherr" },
    { id: 7, img: "marke/midea.png", name: "Midea" },
    { id: 8, img: "marke/plamen.png", name: "Plamen Požega" },
    { id: 9, img: "marke/sharp.png", name: "Sharp" },
    { id: 10, img: "marke/simfer.png", name: "Simfer" },
    { id: 11, img: "marke/smeg.png", name: "Smeg" },
    { id: 12, img: "marke/tcl.png", name: "TCL" },
    { id: 13, img: "marke/tecro.png", name: "Tecro" },
    { id: 14, img: "marke/tesla.png", name: "Tesla" },
  ];

  const servisi = [
    {
      id: 1,
      title: "Klimatizacija",
      desc: "Montaža i servis klima uređaja.",
      icon: "❄️",
    },
    {
      id: 2,
      title: "Bijela tehnika",
      desc: "Popravak perilica, sušilica i hladnjaka.",
      icon: "🧺",
    },
    {
      id: 3,
      title: "Grijanje",
      desc: "Servis plinskih i električnih bojlera te peći.",
      icon: "🔥",
    },
  ];
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="overflow-x-hidden">
      {/* NAV */}
      <div className="flex bg-black text-white px-6 py-8 justify-between border-b border-gray-950">
        <div className="text-2xl font-bold tracking-tight">BOŽANOVIĆ</div>
        {/* <div className="text-xl text-yellow-500">
          <a href="tel:0995172098">
            <FontAwesomeIcon icon={faPhone} /> 099 517 2098
          </a>
        </div>*/}

        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <section className="MOBILE-MENU  md:hidden">
        <div
          className={`bg-black fixed inset-0 z-100 top-0 left-0 w-full   ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 invisible"} `}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute flex right-0 text-white text-3xl mt-15 mx-10"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <div className="flex flex-col text-center justify-center h-full gap-10 text-white uppercase font-black text-4xl track-widest">
            <ScrollLink to="usluge" onClick={() => setIsMenuOpen(false)}>
              Usluge
            </ScrollLink>
            <ScrollLink to="partneri" onClick={() => setIsMenuOpen(false)}>
              Partneri
            </ScrollLink>
            <ScrollLink to="onama" onClick={() => setIsMenuOpen(false)}>
              O nama
            </ScrollLink>
            <ScrollLink
              to="kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="text-yellow-500 underline underline-offset-4"
            >
              Kontakt
            </ScrollLink>
          </div>
        </div>
      </section>

      <div className="relative bg-black text-white h-[calc(100vh-97px)] justify-center text-center items-center flex flex-col  ">
        <img
          src="logo.png"
          alt=""
          className="max-w-1/5 md:max-w-1/8 lg:max-w-1/16"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-yellow-500/11 blur-[120px] rounded-full"></div>
        <div className="uppercase text-4xl tracking-tighter font-black">
          Božanović
        </div>
        <div className="flex gap-3 items-center pb-6">
          <div className="h-px w-8 bg-yellow-500"></div>
          <span className="px-4 text-[12px] uppercase tracking-[4px] text-yellow-500">
            Established 1993.
          </span>
          <div className="h-px w-8 bg-yellow-500"></div>
        </div>

        <h1 className="text-6xl font-bold tracking-tight mb-6 mx-1">
          Vaši aparati u <br />
          <span className="bg-linear-to-r from-white to-yellow-300 text-transparent bg-clip-text">
            najboljim rukama.
          </span>
        </h1>
        <a
          href="tel:0995172098"
          className=" rounded-full px-16 py-4 font-bold bg-amber-300 text-black shadow-lg shadow-amber-300/30 uppercase tracking-[2px] mb-30 "
        >
          Nazovi
        </a>
      </div>

      <div className="bg-black py-10 overflow-hidden border-b border-white/5">
        <div className="flex animate-marquee">
          {/* PRVI SET SLIKA */}
          {images.map((item) => (
            <div
              key={item.id}
              className="inline-flex items-center justify-center w-32 md:w-52 h-16 mx-6 md:mx-10 shrink-0"
            >
              <img
                src={item.img}
                alt="brand"
                className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}

          {/* DRUGI SET SLIKA */}
          {images.map((item) => (
            <div
              key={item.id}
              className="inline-flex items-center justify-center w-32 md:w-52 h-16 mx-6 md:mx-10 shrink-0"
            >
              <img
                src={item.img}
                alt="brand"
                className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#030303] justify-center py-10" id="usluge">
        <div className="text-center items-center my-12">
          <h2 className="text-yellow-500 uppercase tracking-[5px] font-bold text-sm">
            Što radimo
          </h2>
          <h3 className="text-white font-bold text-3xl mx-1">
            Profesionalne usluge
          </h3>
        </div>
        <div className="md:flex grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6 mx-10 ">
          {servisi.map((item) => (
            <div
              className="text-white border border-white/10 bg-[#070707] rounded-xl py-6 px-8 "
              key={item.id}
            >
              <p className="text-3xl font-bold">
                {item.icon} <br />
                {item.title}
              </p>
              <p className="text-gray-400 text-md my-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mreža partnera */}
      <div className="bg-black py-12" id="partneri">
        <div className="text-center items-center ">
          <h2 className="text-yellow-500 uppercase tracking-[5px] font-bold text-sm">
            Mreža partnera
          </h2>
          <h3 className="text-white font-bold text-3xl mx-1">
            Ovlašteni servis i montaža
          </h3>
        </div>
        <div className="flex flex-wrap text-center justify-center gap-3 mt-6 mx-8">
          {images.map((item) => (
            <button
              className=" border rounded-full px-4 py-1 border-white/10 bg-[#080808] uppercase text-sm tracking-wide text-gray-400"
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-black py-10" id="onama">
        <div className="text-center items-center ">
          <h2 className="text-yellow-500 uppercase tracking-[5px] font-bold text-sm">
            O nama
          </h2>
          <h3 className="text-white font-bold text-3xl mx-1">Obrt Božanović</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-3/4 mx-auto">
          <div className="mx-6">
            <p className="text-gray-400 text-left py-4">
              Neki tekst AI nakenjo. Kvaliteta i povjerenje temelj su mog obrta.
              Kao inženjer elektrotehnike, svakom uređaju pristupam s najvišom
              razinom stručnosti.
            </p>
            <div className=" space-y-2">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-yellow-500"
                />{" "}
                <span className="text-white">Garancija na rad</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-yellow-500"
                />{" "}
                <span className="text-white">Garancija na rad</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-yellow-500"
                />{" "}
                <span className="text-white">Garancija na rad</span>
              </div>
            </div>
          </div>
          <div className="text-white border border-white/10 bg-[#070707] rounded-xl py-6 px-8 text-center relative m-6">
            <FontAwesomeIcon
              icon={faUserTie}
              className="absolute opacity-5 right-0 bottom-0 text-9xl"
            />
            <h2 className="text-yellow-500 uppercase  font-bold text-sm">
              Vlasnik
            </h2>
            <p className="text-3xl font-bold">Ivan Božanović</p>
            <p className="text-gray-400 text-md my-2">univ.mag.ing.el.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#070707] py-20" id="kontakt">
        <div className="text-center items-center ">
          <h2 className="text-yellow-500 uppercase tracking-[5px] font-bold text-sm">
            Imate upit?
          </h2>
          <h3 className="text-white font-bold text-3xl mx-1">Kontakt</h3>
        </div>
        <div className="text-center grid grid-cols-1 md:grid-cols-3 py-6 gap-6 md:gap-0 md:mx-32">
          <a href="mailto:bozanovic.ivan00@gmail.com">
            <div className="border  bg-black border-white/10 rounded-xl py-6 mx-6">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-yellow-500 text-2xl"
              />
              <h2 className="text-white font-bold text-2xl mx-1">Email</h2>
              <p className="text-gray-400 ">bozanovic.ivan00@gmail.com</p>
            </div>
          </a>
          <a href="tel:0995172098">
            <div className="border  bg-black border-white/10 rounded-xl py-6 mx-6">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-yellow-500 text-2xl"
              />
              <h2 className="text-white font-bold text-2xl mx-1">Telefon</h2>
              <p className="text-gray-400 ">099 517 2098</p>
            </div>
          </a>
          <div className="border  bg-black border-white/10 rounded-xl py-6 mx-6">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-yellow-500 text-2xl"
            />
            <h2 className="text-white font-bold text-2xl mx-1">Adresa</h2>
            <p className="text-gray-400 ">Vinkovci, Ul. Alojzija Stepinca 99</p>
          </div>
        </div>
        <div className="justify-center flex gap-5">
          <a
            href="https://wa.me/385995172098"
            target="_blank"
            className="text-gray-500 hover:text-green-500 text-4xl transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="viber://chat?number=%2B385995172098"
            className="text-gray-500 hover:text-purple-500 text-4xl transition-colors"
          >
            <FontAwesomeIcon icon={faViber} />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-600 text-4xl transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className="w-full h-[350px] md:h-[450px] border-t border-white/10 my-10 md:w-2/3 md:mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4847.527318291219!2d18.768980212587486!3d45.289408418095476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cf56dc14841d3%3A0x7e7051ef85ae98d4!2sBO%C5%BDANOVI%C4%86%2C%20obrt%20za%20popravak%20ku%C4%87anskih%20aparata%2C%20vl.%20Ivan%20Bo%C5%BEanovi%C4%87!5e0!3m2!1shr!2shr!4v1769708498255!5m2!1shr!2shr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale contrast-[1.0]"
          ></iframe>
        </div>
      </div>
      <footer className="bg-black text-white/30 text-center py-10 text-xs tracking-[5px] uppercase border-t border-white/10">
        Copyright © {new Date().getFullYear()} - <span>Božanović</span>
      </footer>
    </div>
  );
}
