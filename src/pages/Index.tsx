import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Cross" className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                ЦЦМ
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#programs"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Программы
              </a>
              <a
                href="#enrollment"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Запись
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Центр Цифровой Медицины
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Инновационные программы обучения на стыке IT и медицины. Готовим
            специалистов будущего для цифровой трансформации здравоохранения.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Наши программы
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Program */}
            <Card className="border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Специалист по AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Изучение машинного обучения и искусственного интеллекта для
                  медицинской диагностики и анализа данных
                </CardDescription>
              </CardContent>
            </Card>

            {/* VR Program */}
            <Card className="border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Специалист по VR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Разработка виртуальной реальности для медицинского обучения,
                  реабилитации и хирургических симуляций
                </CardDescription>
              </CardContent>
            </Card>

            {/* Telemedicine Program */}
            <Card className="border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="Stethoscope"
                    className="w-8 h-8 text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Специалист по телемедицине
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  Цифровые платформы для дистанционного медицинского
                  консультирования и мониторинга здоровья
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enrollment" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Записаться на курс
          </h3>
          <p className="text-lg text-gray-600 mb-12">
            Выберите подходящий формат обучения
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              <Icon name="UserPlus" className="w-5 h-5 mr-2" />
              Внешний студент
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              <Icon name="Users" className="w-5 h-5 mr-2" />
              Внутренний студент
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Cross" className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-xl font-bold">ЦЦМ</h4>
          </div>
          <p className="text-gray-400">
            © 2025 Центр Цифровой Медицины. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
