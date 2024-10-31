import React from 'react';
import { Gamepad2 } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Gamepad2 className="w-8 h-8 text-[#FF5C00]" />
        <span className="text-2xl font-bold gradient-text">
          Avatar Arena
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#games" className="hover:text-[#FF5C00] transition">Игры</a>
        <a href="#prices" className="hover:text-[#FF5C00] transition">Цены</a>
        <a href="#about" className="hover:text-[#FF5C00] transition">О нас</a>
        <a href="#contact" className="hover:text-[#FF5C00] transition">Контакты</a>
        <a href="tel:+73472008581" className="btn-primary">
          +7 (347) 200-85-81
        </a>
      </div>
    </nav>
  );
}