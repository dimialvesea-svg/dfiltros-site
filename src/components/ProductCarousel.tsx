/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  url: string;
}

interface ProductCarouselProps {
  images: CarouselImage[];
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-48 h-32 rounded-xl overflow-hidden shadow-md bg-slate-800">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
          alt={`Produto ${currentIndex + 1}`}
        />
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
