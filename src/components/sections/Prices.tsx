import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Prices = () => {
  const metals = [
    {
      name: 'Золото',
      symbol: 'Au',
      price: 3729501,
      change: '+2.3%',
      icon: 'Sparkles',
      gradient: 'gold-gradient'
    },
    {
      name: 'Медь',
      symbol: 'Cu',
      price: 4935,
      change: '-0.8%',
      icon: 'Zap',
      gradient: 'bg-gradient-to-br from-orange-600 to-orange-400'
    },
    {
      name: 'Алюминий',
      symbol: 'Al',
      price: 9907,
      change: '+1.2%',
      icon: 'Box',
      gradient: 'silver-gradient'
    }
  ];

  return (
    <div className="container mx-auto animate-fade-in">
      <h2 className="text-4xl font-bold mb-8">Котировки LME</h2>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            {metals.map((metal) => (
              <div key={metal.symbol} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${metal.gradient} flex items-center justify-center`}>
                    <Icon name={metal.icon} size={24} className="text-background" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{metal.name}</h4>
                    <p className="text-sm text-muted-foreground">{metal.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">{metal.price.toLocaleString('ru-RU')} ₽</p>
                  <p className={`text-sm font-semibold ${metal.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {metal.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 text-center">
            Котировки обновляются в режиме реального времени. Последнее обновление: сегодня, 15:30 МСК
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Prices;
