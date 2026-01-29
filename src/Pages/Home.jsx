import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faCircleCheck,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export function Home() {
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
      title: "Klimatizacija",
      desc: "Montaža i servis klima uređaja.",
      icon: "❄️",
    },
    {
      title: "Bijela tehnika",
      desc: "Popravak perilica, sušilica i hladnjaka.",
      icon: "🧺",
    },
    {
      title: "Grijanje",
      desc: "Servis plinskih i električnih bojlera te peći.",
      icon: "🔥",
    },
  ];

  return (
    <div>
      {/* NAV */}
      <div className="flex bg-black text-white px-6 py-8 justify-between border-b border-gray-950">
        <div className="text-2xl font-bold tracking-tight">BOŽANOVIĆ</div>
        <div className="text-xl text-yellow-500">
          <a href="tel:0995172098">
            <FontAwesomeIcon icon={faPhone} /> 099 517 2098
          </a>
        </div>
      </div>

      <div className="bg-black text-white h-[calc(100vh-97px)] justify-center text-center items-center flex flex-col">
        <span className="border border-yellow-500 px-4 rounded-full text-md uppercase mb-4">
          Vinkovci i okolica
        </span>
        <h1 className="text-6xl font-bold tracking-tight mb-6 mx-1">
          Vaši aparati u <br />
          <span className="bg-linear-to-r from-white to-yellow-300 text-transparent bg-clip-text">
            najboljim rukama.
          </span>
        </h1>
        <a
          href="tel:0995172098"
          className=" rounded-xl px-16 py-4 font-bold bg-amber-300 text-black shadow-lg shadow-amber-300/30 uppercase tracking-widest"
        >
          Nazovi
        </a>
      </div>

      <div className="bg-[#030303] justify-center py-10">
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
              className="text-white border border-white/10 bg-[#080808] rounded-xl py-6 px-8 "
              key={item}
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
      <div className="bg-black py-12">
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
              key={item}
            >
              {item.name}
            </button>
          ))}
        </div>
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
              key={`dup-${item.id}`}
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

      <div className="bg-[#030303] py-10">
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
          <div className="text-white border border-white/10 bg-[#080808] rounded-xl py-6 px-8 text-center relative m-6">
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
    </div>
  );
}
