import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DoorOpen, Zap, Droplets, Wind, ShieldCheck } from 'lucide-react';

const SpareParts = () => {
  const { language } = useLanguage();

  const categories = language === 'ar' ? [
    { icon: DoorOpen, title: 'نوافذ وأبواب', description: 'نوافذ وأبواب عالية الجودة' },
    { icon: Zap, title: 'تجهيزات كهربائية', description: 'أنظمة كهربائية متكاملة' },
    { icon: Droplets, title: 'سباكة', description: 'أدوات ومعدات سباكة' },
    { icon: Wind, title: 'مكيفات', description: 'أنظمة تكييف عالية الكفاءة' },
    { icon: ShieldCheck, title: 'عزل', description: 'مواد عزل حراري وصوتي' },
  ] : [
    { icon: DoorOpen, title: 'Windows & Doors', description: 'High quality windows and doors' },
    { icon: Zap, title: 'Electrical Equipment', description: 'Complete electrical systems' },
    { icon: Droplets, title: 'Plumbing', description: 'Plumbing tools and equipment' },
    { icon: Wind, title: 'Air Conditioning', description: 'High efficiency AC systems' },
    { icon: ShieldCheck, title: 'Insulation', description: 'Thermal and sound insulation materials' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'ar' ? 'قطع الغيار' : 'Spare Parts'}
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'ar' 
                ? 'قطع غيار أصلية وعالية الجودة لكرفانك' 
                : 'Genuine and high-quality spare parts for your caravan'}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'ar' ? 'الفئات' : 'Categories'}
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parts */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'ar' ? 'قطع غيار مميزة' : 'Featured Parts'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Windows */}
            <Card className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1545259742-24f99d14561c?q=80&w=2070"
                  alt="Caravan Windows"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? 'نوافذ الكرفان' : 'Caravan Windows'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'نوافذ عالية الجودة مع عزل حراري ممتاز' 
                    : 'High quality windows with excellent thermal insulation'}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
              </CardContent>
            </Card>

            {/* Doors */}
            <Card className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=2070"
                  alt="Caravan Doors"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? 'أبواب الكرفان' : 'Caravan Doors'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'أبواب متينة مع قفل أمان محكم' 
                    : 'Durable doors with secure safety locks'}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
              </CardContent>
            </Card>

            {/* AC Units */}
            <Card className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?q=80&w=2070"
                  alt="Air Conditioners"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? 'مكيفات الكرفان' : 'Caravan AC Units'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'مكيفات موفرة للطاقة ومناسبة للكرفانات' 
                    : 'Energy-efficient air conditioners for caravans'}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
              </CardContent>
            </Card>

            {/* Electrical */}
            <Card className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070"
                  alt="Electrical Equipment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? 'تجهيزات كهربائية' : 'Electrical Equipment'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'لوحات كهربائية وأسلاك عالية الجودة' 
                    : 'Electrical panels and high-quality wiring'}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
              </CardContent>
            </Card>

            {/* Plumbing */}
            <Card className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2070"
                  alt="Plumbing Equipment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? 'تجهيزات سباكة' : 'Plumbing Equipment'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'خزانات مياه ومضخات وصنابير' 
                    : 'Water tanks, pumps and faucets'}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
              </CardContent>
            </Card>

            {/* Insulation */}
            <Card className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070"
                  alt="Thermal Insulation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? 'عازل حراري' : 'Thermal Insulation'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'مواد عزل حراري عالية الكفاءة' 
                    : 'High-efficiency thermal insulation materials'}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
              </CardContent>
            </Card>

            {/* Tires */}
            <Card className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070"
                  alt="Tires and Axles"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? 'إطارات ومحاور' : 'Tires and Axles'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'إطارات قوية ومحاور متينة للكرفانات' 
                    : 'Strong tires and durable axles for caravans'}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
              </CardContent>
            </Card>

            {/* Furniture */}
            <Card className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070"
                  alt="Interior Furniture"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? 'أثاث داخلي' : 'Interior Furniture'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'خزائن ورفوف ومقاعد مخصصة للكرفانات' 
                    : 'Custom cabinets, shelves and seats'}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
              </CardContent>
            </Card>

            {/* LED Lighting */}
            <Card className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070"
                  alt="LED Lighting"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {language === 'ar' ? 'إضاءة LED' : 'LED Lighting'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ar' 
                    ? 'أنظمة إضاءة LED موفرة للطاقة' 
                    : 'Energy-saving LED lighting systems'}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background">
                  {language === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'لم تجد ما تبحث عنه؟' : 'Didn\'t find what you\'re looking for?'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {language === 'ar' 
                ? 'تواصل معنا وسنساعدك في العثور على القطعة المناسبة' 
                : 'Contact us and we\'ll help you find the right part'}
            </p>
            <Button size="lg" className="bg-gradient-gold text-background hover:opacity-90">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpareParts;
