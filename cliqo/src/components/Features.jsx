import { Users, Heart, GraduationCap, MapPin, Languages, SlidersHorizontal } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Campus Email Verification',
      description: 'Connect safely. We verify official college and university email domains to ensure you are connecting with real, verified students.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: MapPin,
      title: 'Indian Cities Discovery',
      description: 'Discover people in your current city (Delhi, Mumbai, Bengaluru, etc.) or connect with folks from your hometown who share your roots.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Heart,
      title: 'No Pay-to-Match',
      description: 'We believe in genuine connections. Enjoy honest matching with a healthy daily limit, completely free of paid boosts or swipe packages.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Languages,
      title: 'Multilingual Expression',
      description: 'Filter and express yourself in Hindi, English, and other regional languages to find people who speak your heart’s language.',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      icon: Users,
      title: 'Dating & Friendship Modes',
      description: 'Dual modes let you choose whether you are looking for romance (Dating) or peer study buddies, roommates, and network circles (Friendship).',
      color: 'from-[#5BA3D0] to-[#4A7C9D]',
    },
    {
      icon: SlidersHorizontal,
      title: 'Cultural & Lifestyle Filters',
      description: 'Filter profiles by hometown, lifestyle preferences, and unique ice-breaker prompts that actually reveal personality.',
      color: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Real Connections
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Viber is tailored to how Indian college students and young professionals actually connect, safely and honestly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}