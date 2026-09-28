/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  url: string;
  caption?: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="galeria" className="py-16 bg-slate-950">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-12 text-center">
          Nossa Galeria
        </h2>
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl bg-slate-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col"
            >
              <img
                src={images[currentIndex].url}
                className="w-full h-full object-contain"
                alt={`Galeria imagem ${currentIndex + 1}`}
              />
              {images[currentIndex].caption && (
                <div className="bg-slate-900 py-3 px-4 text-center text-sm font-semibold text-slate-200">
                  {images[currentIndex].caption}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
