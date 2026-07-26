import { useEffect, useId, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const FOCUSABLE =
  'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
  returnFocusRef,
}) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const titleId = useId();
  const image = images[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const focusReturnNode = returnFocusRef?.current;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      focusReturnNode?.focus?.();
    };
  }, [returnFocusRef]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrev();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = [
        ...dialogRef.current.querySelectorAll(FOCUSABLE),
      ].filter((el) => !el.hasAttribute("disabled"));

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  const webpSrcSet = image.sources
    .map((item) => `${item.src} ${item.width}w`)
    .join(", ");

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col outline-none"
        onClick={(event) => event.stopPropagation()}
      >
        <p id={titleId} className="sr-only">
          {image.alt}. Image {index + 1} of {images.length}.
        </p>

        <div className="mb-3 flex items-center justify-between gap-3 text-white">
          <p className="text-sm font-medium" aria-live="polite">
            {index + 1} / {images.length}
          </p>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Close
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center">
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-0 z-10 rounded-full bg-white/90 p-2 text-slate-800 shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:-left-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <picture className="max-h-[75vh] max-w-full">
            <source
              type="image/webp"
              srcSet={webpSrcSet}
              sizes="(max-width: 1024px) 92vw, 960px"
            />
            <img
              src={image.fallback}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
            />
          </picture>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-0 z-10 rounded-full bg-white/90 p-2 text-slate-800 shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:-right-2"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
