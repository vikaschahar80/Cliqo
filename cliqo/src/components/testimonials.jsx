import { Star, MessageSquareQuote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Testimonials() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 mx-auto mb-6 shadow-sm">
          <MessageSquareQuote className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Be the First to Review!
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Viber is currently in early private beta! Be part of our growing community, connect with students and professionals from campuses across India, and help us write the very first reviews.
        </p>

        <div className="flex items-center justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <button 
          onClick={() => navigate('/login')}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all text-lg font-semibold shadow-md"
        >
          Join Viber & Share Your Review
        </button>
      </div>
    </section>
  );
}