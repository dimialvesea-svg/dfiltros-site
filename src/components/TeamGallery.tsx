/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface TeamImage {
  url: string;
  name?: string;
}

interface TeamGalleryProps {
  images: TeamImage[];
}

export default function TeamGallery({ images }: TeamGalleryProps) {
  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-12 text-center">
          Equipe Dfiltros
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {images.map((image, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-md w-full sm:w-72">
              <img
                src={image.url}
                alt={image.name || `Membro da equipe ${index + 1}`}
                className="w-full h-64 object-contain"
              />
              {image.name && (
                <div className="p-4 bg-slate-50 text-center font-semibold text-slate-800">
                  {image.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
