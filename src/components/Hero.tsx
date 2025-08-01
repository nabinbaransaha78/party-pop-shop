
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-soft"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&h=1080&fit=crop')"
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/34c11f5d-7c74-4a25-b9ad-718f3279b247.png" 
              alt="MY Balloons MY Prop's" 
              className="h-16 sm:h-20 lg:h-24 mx-auto mb-4 lg:mb-6"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight" itemProp="name">
            <span className="text-gradient">Celebrations</span>
            <br />
            <span className="text-gray-800">Made Magical</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed font-medium px-4" itemProp="description">
            From intimate birthday parties to grand weddings, we bring your celebrations to life with 
            <span className="text-brand-red font-semibold"> expert event management</span> and 
            <span className="text-brand-blue font-semibold"> premium party props</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-brand-red hover:bg-red-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Plan Your Event</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <Button 
              onClick={() => navigate('/props-store')}
              variant="outline"
              className="w-full sm:w-auto border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Shop Props</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 lg:mt-12 flex flex-wrap justify-center items-center gap-4 lg:gap-8 text-gray-600 px-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl lg:text-3xl">🎈</span>
              <span className="font-medium text-sm lg:text-base">500+ Happy Events</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl lg:text-3xl">⭐</span>
              <span className="font-medium text-sm lg:text-base">5-Star Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl lg:text-3xl">🚚</span>
              <span className="font-medium text-sm lg:text-base">Bangalore Delivery</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="hidden lg:block absolute top-20 left-10 text-4xl xl:text-6xl animate-bounce text-brand-yellow opacity-60">🎈</div>
      <div className="hidden lg:block absolute top-32 right-16 text-3xl xl:text-4xl animate-bounce text-brand-red opacity-60" style={{animationDelay: '1s'}}>🎉</div>
      <div className="hidden lg:block absolute bottom-20 left-20 text-4xl xl:text-5xl animate-bounce text-brand-blue opacity-60" style={{animationDelay: '2s'}}>🎊</div>
      <div className="hidden lg:block absolute bottom-32 right-10 text-4xl xl:text-6xl animate-bounce text-brand-yellow opacity-60" style={{animationDelay: '0.5s'}}>🎁</div>
    </section>
  );
};

export default Hero;
