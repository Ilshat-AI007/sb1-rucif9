import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export function InfoSection() {
  return (
    <section className="py-20 bg-[#1A123D]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-[#FF5C00]" />
              <span>ТРК "Иремель", ул. Менделеева 137, 3 этаж</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 text-[#FF5C00]" />
              <span>10:00 - 22:00 без выходных</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-[#FF5C00]" />
              <a href="tel:+73472008581" className="hover:text-[#FF5C00] transition">+7 (347) 200-85-81</a>
            </div>
          </div>
          <div className="glass-panel p-8 w-full lg:w-auto">
            <h3 className="text-2xl font-bold mb-4">Цены</h3>
            <div className="space-y-4">
              <div className="flex justify-between gap-8">
                <span>30 минут</span>
                <span className="font-bold">500 ₽</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>60 минут</span>
                <span className="font-bold">800 ₽</span>
              </div>
              <div className="flex justify-between gap-8">
                <span>2 часа</span>
                <span className="font-bold">1400 ₽</span>
              </div>
              <div className="mt-4 pt-4 border-t border-[#FF5C00]/20">
                <h4 className="font-bold mb-2">Акции</h4>
                <p className="text-sm text-gray-400">
                  Будни до 18:00: скидка 20%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}