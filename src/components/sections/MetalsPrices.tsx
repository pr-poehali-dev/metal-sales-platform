import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MetalsPrices = () => {
  const metals = [
    {
      name: 'Золото',
      symbol: 'Au',
      purity: '999.9',
      price: 3729501,
      change: '+2.3%',
      icon: 'Sparkles',
      gradient: 'gold-gradient'
    },
    {
      name: 'Медь',
      symbol: 'Cu',
      purity: '99.99',
      price: 4935,
      change: '-0.8%',
      icon: 'Zap',
      gradient: 'bg-gradient-to-br from-orange-600 to-orange-400'
    },
    {
      name: 'Алюминий',
      symbol: 'Al',
      purity: '99.7',
      price: 9907,
      change: '+1.2%',
      icon: 'Box',
      gradient: 'silver-gradient'
    }
  ];

  return (
    <section>
      <h3 className="text-3xl font-bold mb-8 text-center">Актуальные цены LME</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
        {metals.map((metal) => (
          <Card key={metal.symbol} className="border-border/50 bg-card/50 backdrop-blur hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-xl ${metal.gradient} flex items-center justify-center`}>
                  <Icon name={metal.icon} size={32} className="text-background" />
                </div>
                <span className={`text-sm font-semibold ${metal.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {metal.change}
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-1">{metal.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">Чистота: {metal.purity}%</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">
                  {metal.price.toLocaleString('ru-RU')}
                </span>
                <span className="text-muted-foreground">₽/кг</span>
              </div>
              <Button className="w-full mt-6 gold-gradient text-background font-semibold hover:opacity-90">
                Купить
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MetalsPrices;
