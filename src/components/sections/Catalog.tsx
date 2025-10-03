import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  return (
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
  );
};

export default Catalog;
