import { useCallback, useRef, useState } from "react";
import PageHero from "../components/ui/PageHero";
import Seo from "../components/ui/Seo";
import Lightbox from "../components/gallery/Lightbox";
import { galleryImages } from "../data/gallery";
import { school } from "../data/school";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const lastTriggerRef = useRef(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? current
        : (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);
  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % galleryImages.length
    );
  }, []);

  return (
    <>
      <Seo
        title="Gallery"
        description={`Photo gallery from campus life at ${school.fullName}.`}
      />
      <PageHero
        title="Gallery"
        subtitle="Moments from classrooms, celebrations, and school life"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <li key={image.id}>
              <button
                type="button"
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setActiveIndex(index);
                }}
                className="group block w-full overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                aria-label={`Open larger view: ${image.alt}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <picture>
                    <source type="image/webp" srcSet={image.previewWebp} />
                    <img
                      src={image.previewJpg}
                      alt={image.alt}
                      width={640}
                      height={480}
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </picture>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {activeIndex !== null ? (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onClose={close}
          onPrev={showPrev}
          onNext={showNext}
          returnFocusRef={lastTriggerRef}
        />
      ) : null}
    </>
  );
}
