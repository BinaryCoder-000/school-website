import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import { homepageGalleryImages } from "../../data/galleryHome";

export default function GalleryPreview() {
  const firstRow = homepageGalleryImages.slice(0, 3);
  const secondRow = homepageGalleryImages.slice(3, 6);

  return (
    <section
      className="overflow-hidden bg-slate-100 py-16 sm:py-20"
      aria-labelledby="gallery-preview-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="gallery-preview-heading"
          eyebrow="Gallery"
          title="Life at SSM Alekhapada"
          description="A glimpse of campus moments, celebrations, and everyday learning."
        />
      </div>

      <div className="mb-8 overflow-hidden">
        <div className="flex w-max gap-5 animate-left pause-on-hover">
          {[...firstRow, ...firstRow].map((image, index) => (
            <PreviewImage key={`a-${index}`} image={image} />
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max gap-5 animate-right pause-on-hover">
          {[...secondRow, ...secondRow].map((image, index) => (
            <PreviewImage key={`b-${index}`} image={image} />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/gallery"
          className="inline-flex rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          Open Full Gallery
        </Link>
      </div>
    </section>
  );
}

function PreviewImage({ image }) {
  return (
    <div className="h-44 w-64 overflow-hidden rounded-2xl bg-slate-200 shadow-md sm:h-48 sm:w-72">
      <picture>
        <source type="image/webp" srcSet={image.previewWebp} />
        <img
          src={image.previewJpg}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </picture>
    </div>
  );
}
