import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Hero from '@/components/sections/Hero';
import MetalsPrices from '@/components/sections/MetalsPrices';
import Catalog from '@/components/sections/Catalog';
import Prices from '@/components/sections/Prices';
import Delivery from '@/components/sections/Delivery';
import About from '@/components/sections/About';
import Contacts from '@/components/sections/Contacts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог металлов', icon: 'Package' },
    { id: 'prices', label: 'Цены LME', icon: 'TrendingUp' },
    { id: 'delivery', label: 'Доставка', icon: 'Truck' },
    { id: 'about', label: 'О компании', icon: 'Info' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed right-8 top-8 z-50">
        <h1 className="text-6xl font-bold tracking-wider animate-fade-in">
          <span className="text-gold">МЕТАЛЛЫ</span>
          <span className="text-silver">.РУ</span>
        </h1>
      </div>

      <nav className="fixed top-0 right-0 left-0 bg-card/80 backdrop-blur-md border-b border-border z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 p-8">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <Hero />
            <MetalsPrices />
          </div>
        )}

        {activeSection === 'catalog' && <Catalog />}

        {activeSection === 'prices' && <Prices />}

        {activeSection === 'delivery' && <Delivery />}

        {activeSection === 'about' && <About />}

        {activeSection === 'contacts' && <Contacts />}
      </main>
    </div>
  );
};

export default Index;