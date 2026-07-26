import sharp from "sharp";
import fs from "fs";
import path from "path";

const root = process.cwd();
const galDir = path.join(root, "src/assets/public/Galery_section");
const outDir = path.join(root, "src/assets/gallery");
const previewDir = path.join(outDir, "preview");
const fullDir = path.join(outDir, "full");
const imagesDir = path.join(root, "src/assets/images");
const publicDir = path.join(root, "public");

fs.mkdirSync(previewDir, { recursive: true });
fs.mkdirSync(fullDir, { recursive: true });
fs.mkdirSync(imagesDir, { recursive: true });

const files = fs
  .readdirSync(galDir)
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort((a, b) => {
    const na = parseInt(a.match(/(\d+)/)?.[1] || "0", 10);
    const nb = parseInt(b.match(/(\d+)/)?.[1] || "0", 10);
    return na - nb;
  });

console.log("Found", files.length, "gallery images");

for (const file of files) {
  const n = file.match(/(\d+)/)?.[1];
  const input = path.join(galDir, file);
  const base = `img${n}`;

  await sharp(input)
    .rotate()
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(path.join(previewDir, `${base}-640.webp`));
  await sharp(input)
    .rotate()
    .resize({ width: 640, withoutEnlargement: true })
    .jpeg({ quality: 72, mozjpeg: true })
    .toFile(path.join(previewDir, `${base}-640.jpg`));

  await sharp(input)
    .rotate()
    .resize({ width: 480, withoutEnlargement: true })
    .webp({ quality: 70 })
    .toFile(path.join(fullDir, `${base}-480.webp`));
  await sharp(input)
    .rotate()
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(path.join(fullDir, `${base}-960.webp`));
  await sharp(input)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(path.join(fullDir, `${base}-1400.webp`));
  await sharp(input)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(path.join(fullDir, `${base}-1400.jpg`));

  console.log("ok", base);
}

const banner = path.join(root, "src/assets/public/images/banner.jpg");
await sharp(banner)
  .rotate()
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 78 })
  .toFile(path.join(imagesDir, "banner-1600.webp"));
await sharp(banner)
  .rotate()
  .resize({ width: 960, withoutEnlargement: true })
  .webp({ quality: 76 })
  .toFile(path.join(imagesDir, "banner-960.webp"));
await sharp(banner)
  .rotate()
  .resize({ width: 1600, withoutEnlargement: true })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(imagesDir, "banner-1600.jpg"));

await sharp(banner)
  .rotate()
  .resize({ width: 1200, height: 630, fit: "cover" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(publicDir, "og-image.jpg"));
await sharp(banner)
  .rotate()
  .resize({ width: 1200, height: 630, fit: "cover" })
  .webp({ quality: 80 })
  .toFile(path.join(publicDir, "og-image.webp"));

console.log("banner + og done");
