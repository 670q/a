import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      titleAr: 'كرفان سكني فاخر - الرياض',
      titleEn: 'Luxury Residential Caravan - Riyadh',
      descAr: 'كرفان سكني مجهز بالكامل مع غرفة نوم وحمام ومطبخ وصالة',
      descEn: 'Fully equipped residential caravan with bedroom, bathroom, kitchen and living room',
      image: 'https://images.unsplash.com/photo-1488805990569-3c9e1d76d1d6?q=80&w=2070',
    },
    {
      id: 2,
      titleAr: 'كرفان مكتبي لموقع بناء - جدة',
      titleEn: 'Office Caravan for Construction - Jeddah',
      descAr: 'كرفان مكتبي مجهز بالكامل لإدارة موقع البناء',
      descEn: 'Fully equipped office caravan for construction site management',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070',
    },
    {
      id: 3,
      titleAr: 'كرفان كافيه متنقل - دبي',
      titleEn: 'Mobile Cafe Caravan - Dubai',
      descAr: 'كرفان متحرك مجهز كمقهى متنقل بتجهيزات احترافية',
      descEn: 'Mobile caravan equipped as a mobile cafe with professional equipment',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070',
    },
    {
      id: 4,
      titleAr: 'كرفان إقامة عمال - الخبر',
      titleEn: 'Workers Accommodation - Khobar',
      descAr: 'كرفان لإقامة العمال مع مرافق كاملة ومكيفات',
      descEn: 'Workers accommodation caravan with complete facilities and air conditioning',
      image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070',
    },
    {
      id: 5,
      titleAr: 'كرفان مطعم فاخر - أبوظبي',
      titleEn: 'Luxury Restaurant Caravan - Abu Dhabi',
      descAr: 'كرفان مطعم متنقل بتجهيزات مطبخ احترافية كاملة',
      descEn: 'Mobile restaurant caravan with complete professional kitchen equipment',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070',
    },
    {
      id: 6,
      titleAr: 'كرفان حراسة مجهز - الدمام',
      titleEn: 'Equipped Security Caravan - Dammam',
      descAr: 'كرفان حراسة للمواقع مع أنظمة مراقبة',
      descEn: 'Security caravan for sites with surveillance systems',
      image: 'https://images.unsplash.com/photo-1504253163759-c23fccaebb55?q=80&w=2070',
    },
    {
      id: 7,
      titleAr: 'كرفان بوفيه - الشارقة',
      titleEn: 'Buffet Caravan - Sharjah',
      descAr: 'كرفان بوفيه متنقل مجهز لخدمة الطعام',
      descEn: 'Mobile buffet caravan equipped for food service',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070',
    },
    {
      id: 8,
      titleAr: 'كرفان طبي متنقل - المدينة',
      titleEn: 'Mobile Medical Caravan - Medina',
      descAr: 'كرفان مجهز لتقديم الخدمات الطبية',
      descEn: 'Caravan equipped for providing medical services',
      image: 'https://images.unsplash.com/photo-1519494140681-8b17d830a3ec?q=80&w=2070',
    },
    {
      id: 9,
      titleAr: 'كرفان مخيم فاخر - العين',
      titleEn: 'Luxury Camp Caravan - Al Ain',
      descAr: 'كرفان فاخر للتخييم مع تجهيزات راقية',
      descEn: 'Luxury camping caravan with upscale equipment',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {t('projectsTitle')}
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            {t('projectsDesc')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.titleAr}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {t('language') === 'ar' ? project.titleAr : project.titleEn}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('language') === 'ar' ? project.descAr : project.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('startYourProject')}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('startYourProjectDesc')}
          </p>
          <a href="/new-customer" className="inline-block">
            <button className="bg-gradient-gold text-background px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              {t('orderNew')}
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
