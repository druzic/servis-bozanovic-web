import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export function Home() {
  const images = [
    { id: 1, img: "marke/blitz.png" },
    { id: 2, img: "marke/fram.png" },
    { id: 3, img: "marke/franke.png" },
    { id: 4, img: "marke/heinner.png" },
    { id: 5, img: "marke/lg.png" },
    { id: 6, img: "marke/liebherr.png" },
    { id: 7, img: "marke/midea.png" },
    { id: 8, img: "marke/plamen.png" },
    { id: 9, img: "marke/sharp.png" },
    { id: 10, img: "marke/simfer.png" },
    { id: 11, img: "marke/smeg.png" },
    { id: 12, img: "marke/tcl.png" },
    { id: 13, img: "marke/tecro.png" },
    { id: 14, img: "marke/tesla.png" },
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

      <div className="bg-black text-white h-[calc(100vh-242px)] justify-center text-center items-center flex flex-col">
        <span className="border border-yellow-500 px-4 rounded-full text-md uppercase">
          Ovlašteni servis
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

      <div className="bg-black py-10 overflow-hidden border-b border-white/5">
        <div className="flex animate-marquee">
          {/* PRVI SET SLIKA */}
          {images.map((item) => (
            <div
              key={item.id}
              className="inline-flex items-center justify-center w-32 md:w-52 h-16 mx-6 md:mx-10 flex-shrink-0"
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
              className="inline-flex items-center justify-center w-32 md:w-52 h-16 mx-6 md:mx-10 flex-shrink-0"
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

      <div className="bg-red-300">
        Tu idu informacije o svim aparatima sto se radi
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
