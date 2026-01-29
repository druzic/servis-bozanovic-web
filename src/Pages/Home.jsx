import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export function Home() {
  const images = [
    { id: 1, img: "marke/blitz.png", name: "Blitz" },
    { id: 2, img: "marke/fram.png", name: "Fram" },
    { id: 3, img: "marke/franke.png", name: "Franke" },
    { id: 4, img: "marke/heinner.png", name: "Heinner" },
    { id: 5, img: "marke/lg.png", name: "LG" },
    { id: 6, img: "marke/liebherr.png", name: "Liebherr" },
    { id: 7, img: "marke/midea.png", name: "Midea" },
    { id: 8, img: "marke/plamen.png", name: "Plamen" },
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
        <span className="border border-yellow-500 px-4 rounded-full text-md uppercase">
          Vinkovci i okolica
        </span>
        <h1 className="text-6xl font-bold tracking-tight mb-6">
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
          <h3 className="text-white font-bold text-3xl">
            Profesionalne usluge
          </h3>
        </div>
        <div className="md:flex grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6 mx-10 ">
          {servisi.map((item, i) => (
            <div
              className="text-white border border-zinc-900 bg-[#080808] rounded-xl py-6 px-8 "
              key={i}
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

      <div className="bg-blue-300">
        tu idu inf o obrtu
        <div>
          obrt za popravak kućanskih aparata +385 99 517 2098
          bozanovic.ivan00@gmail.com Alojzija Stepinca 99, 32100 Vinkovci vl.
          Ivan Božanović, univ.mag.ing.el.
        </div>
      </div>
    </div>
  );
}
