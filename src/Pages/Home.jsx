import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
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
    { id: 1, img: "marke/plamen.png", name: "Plamen Požega" },
    { id: 2, img: "marke/lg.png", name: "LG" },
    { id: 3, img: "marke/smeg.png", name: "Smeg" },
    { id: 4, img: "marke/faber.png", name: "Faber" },
    { id: 5, img: "marke/midea.png", name: "Midea" },
    { id: 6, img: "marke/fram.png", name: "Fram" },
    { id: 7, img: "marke/franke.png", name: "Franke" },
    { id: 8, img: "marke/heinner.png", name: "Heinner" },
    { id: 9, img: "marke/liebherr.png", name: "Liebherr" },
    { id: 10, img: "marke/sharp.png", name: "Sharp" },
    { id: 11, img: "marke/simfer.png", name: "Simfer" },
    { id: 12, img: "marke/tcl.png", name: "TCL" },
    { id: 13, img: "marke/tesla.png", name: "Tesla" },
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

  const reference = [
    {
      id: 1,
      ime: "Marko Horvat",
      tekst:
        "Odličan servis! Ivan je bio profesionalan, ozbiljan i pouzdana osoba. Jako brzo je riješio problem sa mojim hladnjakom.",
    },
    {
      id: 2,
      ime: "Ana Vuković",
      tekst:
        "Preporučujem! Montaža klima uređaja je bila obavljena brzo i stručno. Ivan zna što radi.",
    },
    {
      id: 3,
      ime: "Petar Novak",
      tekst:
        "Zadovoljan sam kvalitetom rada. Cijene su fer i korektne. Sigurno ću koristiti opet.",
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
      {/* NAVIGACIJA */}
      <nav className="fixed top-0 left-0 w-full z-100 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-6 md:py-8 flex justify-between items-center transition-all duration-300">
        <div className="text-xl  tracking-tighter text-white">
          <span className="font-black">BOŽANOVIĆ,</span>{" "}
          <span className="text-base md:text-2xl">
            obrt za popravak kućanskih aparata, vl. Ivan Božanović
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 uppercase font-bold text-xl tracking-widest text-white">
          <ScrollLink
            to="usluge"
            className="cursor-pointer hover:text-yellow-500 transition-colors duration-300"
          >
            Usluge
          </ScrollLink>
          <ScrollLink
            to="partneri"
            className="cursor-pointer hover:text-yellow-500 transition-colors duration-300"
          >
            Partneri
          </ScrollLink>
          <ScrollLink
            to="onama"
            className="cursor-pointer hover:text-yellow-500 transition-colors duration-300"
          >
            O nama
          </ScrollLink>
          <ScrollLink
            to="kontakt"
            className="text-yellow-500 underline underline-offset-8 cursor-pointer hover:text-yellow-400 transition-all duration-300"
          >
            Kontakt
          </ScrollLink>
        </div>

        {/* HAMBURGER MENU */}
        <button
          className="text-2xl text-white md:hidden active:scale-90 transition-transform"
          onClick={() => setIsMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <section>
        <div
          className={`fixed inset-0 z-110 bg-black flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-full opacity-0 invisible"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-10 right-10 text-white text-4xl hover:rotate-90 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <div className="flex flex-col text-center gap-12 text-white uppercase font-black text-4xl tracking-tighter px-10">
            <ScrollLink
              to="usluge"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-500 transition-colors"
            >
              Usluge
            </ScrollLink>
            <ScrollLink
              to="partneri"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-500 transition-colors"
            >
              Partneri
            </ScrollLink>
            <ScrollLink
              to="onama"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-yellow-500 transition-colors"
            >
              O nama
            </ScrollLink>
            <ScrollLink
              to="kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="text-yellow-500 underline underline-offset-8"
            >
              Kontakt
            </ScrollLink>
          </div>

          <div className="absolute bottom-10 text-white/20 text-xs tracking-[10px] uppercase font-bold">
            Established 1993
          </div>
        </div>
      </section>

      <div className="h-26 md:h-24 bg-black"></div>

      {/* HERO */}
      <div className="relative bg-black pt-1.5 text-white h-[calc(100vh-112px-144px)] md:h-[calc(100vh-96px-144px)] justify-center text-center items-center flex flex-col overflow-hidden">
        {/* GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-yellow-500/10 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>

        <img
          src="logo.png"
          alt="Logo"
          className="max-w-1/3 md:max-w-1/5 lg:max-w-1/8 relative z-10 mb-2 transition-transform duration-1000 animate-in fade-in slide-in-from-top-4"
        />

        <div className="uppercase text-4xl md:text-5xl tracking-tighter font-black relative z-10 animate-in fade-in duration-700 delay-200">
          Božanović
        </div>

        <div className="flex gap-4 items-center pb-8 relative z-10 animate-in fade-in duration-700 delay-400">
          <div className="h-px w-10 bg-yellow-500/40"></div>
          <span className="text-[13px] uppercase tracking-[5px] text-yellow-500 font-medium">
            Est. 1993
          </span>
          <div className="h-px w-10 bg-yellow-500/40"></div>
        </div>

        <h1 className="text-4xl md:text-7xl tracking-tight mb-10 mx-1 relative z-10 leading-[0.9] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-600 elegant-serif">
          Obiteljska tradicija <br />
          <span className="bg-linear-to-r from-white via-white to-yellow-500 text-transparent bg-clip-text">
            servisiranja.
          </span>
        </h1>

        <a
          href="tel:0995172098"
          className="group relative z-10 flex items-center overflow-hidden rounded-full px-20 py-5 font-black bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] active:scale-95 uppercase tracking-[2px] mb-30 animate-in fade-in zoom-in-95 duration-700 delay-800"
        >
          <span className="relative z-10 flex items-center">Nazovi odmah</span>

          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
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

      <div className="bg-[#030303] py-24 px-6" id="usluge">
        <div className="text-center items-center mb-16">
          <h2 className="text-yellow-500 uppercase tracking-[6px] font-bold text-xs mb-2">
            Što radimo
          </h2>
          <h3 className="text-white font-black text-4xl md:text-5xl mx-1">
            Profesionalne usluge
          </h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {servisi.map((item) => (
            <div
              className="group text-white border border-white/5 bg-[#080808] rounded-2xl p-10 hover:border-yellow-500/30 transition-all hover:-translate-y-2 "
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

      {/* MREŽA PARTNERA */}
      <div className="bg-black py-24" id="partneri">
        <div className="text-center items-center mb-10 ">
          <h2 className="text-yellow-500 uppercase tracking-[6px] font-bold text-sm mb-2">
            Mreža partnera
          </h2>
          <h3 className="text-white font-black text-3xl mx-1">
            Ovlašteni servis i montaža
          </h3>
        </div>
        <div className="flex flex-wrap text-center justify-center gap-4 max-w-5xl mx-auto px-6">
          {images.map((item) => (
            <button
              className=" border rounded-full px-7 py-3 border-white/10 bg-white/5 uppercase text-sm tracking-wider text-gray-300 hover:bg-yellow-500 hover:text-black transition-colors cursor-default"
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* REFERENCE */}
      <div className="bg-[#030303] py-24" id="reference">
        <div className="text-center items-center mb-16">
          <h2 className="text-yellow-500 uppercase tracking-[6px] font-bold text-xs mb-2">
            Što govore o nama
          </h2>
          <h3 className="text-white font-black text-4xl md:text-5xl mx-1">
            Reference i preporuke
          </h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {reference.map((item) => (
            <div
              key={item.id}
              className="text-white border border-white/5 bg-[#080808] rounded-2xl p-8 hover:border-yellow-500/30 transition-all hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-md mb-6 leading-relaxed italic">
                "{item.tekst}"
              </p>
              <p className="text-white font-bold">{item.ime}</p>
            </div>
          ))}
        </div>
      </div>

      {/* O NAMA */}
      <section className="bg-[#030303] py-24" id="onama">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-yellow-500 uppercase tracking-[6px] font-bold text-xs mb-2">
              Tradicija i kvaliteta
            </h2>
            <h3 className="text-white font-black text-4xl mb-6">
              Obrt Božanović
            </h3>
            <div className="text-gray-400 text-lg leading-relaxed mb-8 space-y-4">
              <p>
                Sve je započelo 1993. godine kada je Mirko Božanović osnovao
                obrt s jednostavnom idejom – pružiti kvalitetnu, poštenu i
                pouzdanu uslugu svakom korisniku. Kroz godine predanog rada
                stečeno je povjerenje brojnih zadovoljnih klijenata.
              </p>
              <p>
                Godine 2024. obrt preuzima Ivan Božanović, nastavljajući
                obiteljsku tradiciju uz moderan pristup radu i stalno praćenje
                novih tehnologija. Iako se mnogo toga promijenilo od samih
                početaka, vrijednosti na kojima je obrt izgrađen ostale su iste
                – stručnost, pouzdanost i zadovoljstvo korisnika.
              </p>
              <p>
                Danas pružamo usluge servisiranja, održavanja i popravka
                kućanskih aparata, uključujući hladnjake, zamrzivače, perilice i
                sušilice rublja, električne i plinske bojlere, štednjake, peći
                te ostale kućanske uređaje. Ponosni smo i ovlašteni servis za
                peći na kruta goriva proizvođača Plamen Požega, što dodatno
                potvrđuje našu stručnost i pouzdanost u području grijanja.
              </p>
              <p>
                Uz servis kućanskih aparata bavimo se i montažom, servisiranjem
                te redovitim održavanjem klima uređaja, uz poseban naglasak na
                ispravan rad, energetsku učinkovitost i dugotrajnost sustava.
              </p>
              <p>
                Naš cilj ostaje isti – pružiti brzu, kvalitetnu i pouzdanu
                uslugu na koju se korisnici mogu osloniti iz godine u godinu.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-500 rounded-2xl rotate-3 group-hover:rotate-1 transition-transform"></div>
            <div className="relative text-white border border-white/10 bg-[#0a0a0a] rounded-2xl p-12 text-center overflow-hidden">
              <FontAwesomeIcon
                icon={faUserTie}
                className="absolute -right-4 -bottom-4 opacity-5 text-9xl"
              />
              <h2 className="text-yellow-500 uppercase font-bold text-xs tracking-widest mb-2">
                Vlasnik
              </h2>
              <p className="text-4xl font-black mb-1">Ivan Božanović</p>
              <p className="text-gray-400 font-mono tracking-tighter">
                univ.mag.ing.el.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <div className="bg-[#070707] py-24" id="kontakt">
        <div className="text-center items-center mb-16 ">
          <h2 className="text-yellow-500 uppercase tracking-[6px] font-bold text-sm">
            Imate upit?
          </h2>
          <h3 className="text-white font-black text-4xl mx-1">Kontakt</h3>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: faEnvelope,
              title: "Email",
              info: "bozanovic.ivan00@gmail.com",
              link: "mailto:bozanovic.ivan00@gmail.com",
            },
            {
              icon: faPhone,
              title: "Telefon",
              info: "099 517 2098",
              link: "tel:0995172098",
            },
            {
              icon: faLocationDot,
              title: "Adresa",
              info: "Vinkovci, A. Stepinca 99",
              link: "https://www.google.com/maps?hl=hr&gl=hr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x475cf56dc14841d3:0x7e7051ef85ae98d4",
            },
          ].map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="bg-black border border-white/15 p-8 rounded-2xl text-center hover:border-yellow-500/50 transition-all"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-yellow-500 text-3xl mb-4"
              />
              <h4 className="text-white font-bold text-xl mb-1">
                {item.title}
              </h4>
              <p className="text-gray-400 text-base md:text-lg">{item.info}</p>
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-8 mb-20">
          {[
            {
              icon: faWhatsapp,
              color: "hover:text-green-500",
              url: "https://wa.me/385995172098",
            },
            {
              icon: faViber,
              color: "hover:text-purple-500",
              url: "viber://chat?number=%2B385995172098",
            },
            { icon: faFacebook, color: "hover:text-blue-600", url: "#" },
          ].map((soc, i) => (
            <a
              key={i}
              href={soc.url}
              className={`text-gray-600 text-4xl transition-all hover:scale-110 ${soc.color}`}
            >
              <FontAwesomeIcon icon={soc.icon} />
            </a>
          ))}
        </div>

        {/* Okvir mape */}
        <div className="relative w-full h-[350px] md:h-[450px] my-20 md:w-3/4 lg:w-2/3 md:mx-auto group transition-all duration-500">
          <div className="w-full h-full overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-yellow-500/5 transition-all duration-500 group-hover:border-yellow-500/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4847.527318291219!2d18.768980212587486!3d45.289408418095476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cf56dc14841d3%3A0x7e7051ef85ae98d4!2sBO%C5%BDANOVI%C4%86%2C%20obrt%20za%20popravak%20ku%C4%87anskih%20aparata%2C%20vl.%20Ivan%20Bo%C5%BEanovi%C4%87!5e0!3m2!1shr!2shr!4v1769708498255!5m2!1shr!2shr" // Ovdje ide tvoj stvarni Google Maps Embed URL
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=" opacity-100  transition-all duration-700 ease-in-out"
            ></iframe>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white/30 text-center py-10 text-xs tracking-[5px] uppercase border-t border-white/10">
        Copyright © {new Date().getFullYear()} - <span>Božanović</span>
      </footer>
    </div>
  );
}
