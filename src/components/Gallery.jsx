import img1 from "../assets/public/Galery_section/galery_img1.jpeg";
import img2 from "../assets/public/Galery_section/galery_img2.jpeg";
import img3 from "../assets/public/Galery_section/galery_img3.jpeg";
import img4 from "../assets/public/Galery_section/galery_img4.jpeg";
import img5 from "../assets/public/Galery_section/galery_img5.jpeg";
import img6 from "../assets/public/Galery_section/galery_img6.jpeg";
import img7 from "../assets/public/Galery_section/galery_img7.jpeg";
import img8 from "../assets/public/Galery_section/galery_img8.jpeg";
import img9 from "../assets/public/Galery_section/galery_img9.jpeg";
import img10 from "../assets/public/Galery_section/galery_img10.jpeg";
import img11 from "../assets/public/Galery_section/galery_img11.jpeg";
import img12 from "../assets/public/Galery_section/galery_img12.jpeg";

export default function Gallery() {
  const firstRow = [img1, img2, img3, img4, img5, img6];
  const secondRow = [img7, img8, img9, img10, img11, img12];

  return (
    <section className="bg-gray-100 py-20 overflow-hidden">
      <h2 className="text-5xl font-bold text-center mb-16">
        Gallery
      </h2>

      {/* ROW 1 → LEFT TO RIGHT */}
      <div className="overflow-hidden mb-10">
        <div className="flex gap-6 w-max animate-left pause-on-hover">
          {[...firstRow, ...firstRow].map((src, i) => (
            <ImageCard key={i} src={src} />
          ))}
        </div>
      </div>

      {/* ROW 2 → RIGHT TO LEFT */}
      <div className="overflow-hidden">
        <div className="flex gap-6 w-max animate-right pause-on-hover">
          {[...secondRow, ...secondRow].map((src, i) => (
            <ImageCard key={i} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Image Card
========================= */
function ImageCard({ src }) {
  return (
    <div className="w-72 h-48 overflow-hidden rounded-2xl shadow-xl">
      <img
        src={src}
        alt="Gallery"
        className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
      />
    </div>
  );
}
