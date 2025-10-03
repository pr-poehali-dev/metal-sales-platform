import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  return (
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
  );
};

export default Delivery;
