import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
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
  );
};

export default About;
