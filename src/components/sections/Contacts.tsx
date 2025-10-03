import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
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
  );
};

export default Contacts;
