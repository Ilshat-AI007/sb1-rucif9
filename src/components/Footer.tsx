import React from 'react';
import { Headphones } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Headphones className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold">Avatar Arena</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Avatar Arena. Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
}