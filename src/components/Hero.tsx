import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Клуб виртуальной реальности в Уфе
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Погрузись в мир виртуальной реальности на самом современном оборудовании. Более 100 игр для любого возраста!
        </p>
        <div className="flex gap-4">
          <a href="#prices" className="btn-primary flex items-center gap-2">
            Забронировать <ChevronRight className="w-5 h-5" />
          </a>
          <a href="#about" className="btn-secondary">
            О клубе
          </a>
        </div>
      </div>
    </div>
  );
}