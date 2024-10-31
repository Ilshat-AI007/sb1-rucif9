import React from 'react';
import { Gamepad2, Users2, Trophy, Headphones } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Gamepad2 className="w-12 h-12 text-[#FF5C00] mb-4" />,
      title: "Более 100 игр",
      description: "Огромная библиотека игр любых жанров для всех возрастов"
    },
    {
      icon: <Users2 className="w-12 h-12 text-[#FF5C00] mb-4" />,
      title: "До 4 игроков",
      description: "Командные игры и сражения в одном виртуальном пространстве"
    },
    {
      icon: <Headphones className="w-12 h-12 text-[#FF5C00] mb-4" />,
      title: "Профессиональное оборудование",
      description: "Шлемы Meta Quest 2 последнего поколения"
    },
    {
      icon: <Trophy className="w-12 h-12 text-[#FF5C00] mb-4" />,
      title: "Мероприятия",
      description: "Организация дней рождения и корпоративов"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0E0A1F] to-[#1A123D]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-8 hover:scale-105 transition-transform duration-300">
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}