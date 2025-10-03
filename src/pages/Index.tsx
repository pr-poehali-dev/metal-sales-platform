import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

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
            <section className="container mx-auto">
              <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
                <img 
                  src="/img/9733d3ba-2cca-4580-9c1d-5bca93ab12d4.jpg" 
                  alt="Литье металла"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end justify-center pb-12">
                  <div className="text-center">
                    <h2 className="text-6xl font-bold mb-4 text-white drop-shadow-2xl">Торговля драгоценными и цветными металлами</h2>
                    <p className="text-2xl text-white/90 drop-shadow-lg">Премиальное качество. Актуальные котировки LME.</p>
                  </div>
                </div>
              </div>
            </section>

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
          </div>
        )}

        {activeSection === 'catalog' && (
          <div className="container mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Каталог металлов</h2>
            <Tabs defaultValue="gold" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="gold">Золото</TabsTrigger>
                <TabsTrigger value="copper">Медь</TabsTrigger>
                <TabsTrigger value="aluminum">Алюминий</TabsTrigger>
              </TabsList>
              <TabsContent value="gold" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Золото 999.9</h3>
                    <p className="text-muted-foreground mb-4">
                      Инвестиционное золото высшей пробы. Идеально подходит для долгосрочных вложений и защиты капитала.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Сертификат соответствия</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Доставка по всей России</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Гарантия подлинности</span>
                      </li>
                    </ul>
                    <Button className="gold-gradient text-background">Оформить заказ</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="copper" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Медь 99.99%</h3>
                    <p className="text-muted-foreground mb-4">
                      Электротехническая медь высокой чистоты. Применяется в электротехнике, строительстве и промышленности.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>ГОСТ соответствие</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Оптовые цены</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Быстрая отгрузка</span>
                      </li>
                    </ul>
                    <Button className="gold-gradient text-background">Оформить заказ</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="aluminum" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Алюминий 99.7%</h3>
                    <p className="text-muted-foreground mb-4">
                      Первичный алюминий для промышленности. Легкий, прочный, коррозионностойкий материал.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Международные стандарты</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Различные формы поставки</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Конкурентные цены</span>
                      </li>
                    </ul>
                    <Button className="gold-gradient text-background">Оформить заказ</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'prices' && (
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
        )}

        {activeSection === 'delivery' && (
          <div className="container mx-auto max-w-4xl animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Условия доставки</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                      <Icon name="Truck" size={24} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Доставка по России</h3>
                      <p className="text-muted-foreground">
                        Осуществляем доставку во все регионы России. Работаем с ведущими транспортными компаниями.
                        Сроки доставки от 1 до 7 дней в зависимости от региона.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg silver-gradient flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" size={24} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Безопасность</h3>
                      <p className="text-muted-foreground">
                        Груз застрахован и сопровождается службой безопасности. Упаковка соответствует всем
                        международным стандартам перевозки драгоценных металлов.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                      <Icon name="Package" size={24} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Самовывоз</h3>
                      <p className="text-muted-foreground">
                        Возможен самовывоз со склада в Москве. Работаем ежедневно с 9:00 до 18:00.
                        Предварительная заявка обязательна.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="container mx-auto max-w-4xl animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">О компании</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Металлы.ру — ведущий поставщик драгоценных и цветных металлов на российском рынке.
                  Мы работаем с 2010 года и за это время заслужили доверие тысяч клиентов.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">14+</div>
                    <p className="text-muted-foreground">лет на рынке</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <p className="text-muted-foreground">довольных клиентов</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <p className="text-muted-foreground">гарантия качества</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Наша миссия — предоставлять клиентам металлы высочайшего качества по честным ценам.
                  Мы следуем всем международным стандартам и имеем все необходимые лицензии и сертификаты.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="container mx-auto max-w-4xl animate-fade-in">
            <h2 className="text-4xl font-bold mb-8">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Свяжитесь с нами</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <span>info@metally.ru</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <span>Москва, ул. Примерная, д. 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span>Пн-Пт: 9:00 - 18:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Напишите нам</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                      placeholder="Ваше сообщение"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="w-full gold-gradient text-background font-semibold">
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;