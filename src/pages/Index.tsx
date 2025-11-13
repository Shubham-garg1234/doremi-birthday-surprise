import { useState } from "react";
import QuestionGate from "@/components/QuestionGate";
import CountdownTimer from "@/components/CountdownTimer";
import PhotoGallery from "@/components/PhotoGallery";
import StorySection from "@/components/StorySection";
import doremiImage from "@/assets/doremi.png";
import heroImage from "@/assets/birthday-hero.jpg";

const Index = () => {
  const [hasAccess, setHasAccess] = useState(false);

  if (!hasAccess) {
    return <QuestionGate onCorrectAnswer={() => setHasAccess(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-birthday-light to-secondary/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          {/* Doremi Character - More Prominent */}
          <div className="flex justify-center mb-8">
            <div className="floating inline-block">
              <img
                src={doremiImage}
                alt="Doremi from Doraemon"
                className="w-40 h-40 md:w-56 md:h-56 mx-auto drop-shadow-2xl hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-4 animate-scale-in drop-shadow-lg">
              Happy Birthday! 🎉
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-semibold drop-shadow-md">
              To someone truly special ✨
            </p>
          </div>

          {/* Countdown */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Floating Doremi on the side */}
      <div className="fixed bottom-8 right-8 z-10 hidden lg:block">
        <img
          src={doremiImage}
          alt="Doremi"
          className="w-24 h-24 drop-shadow-2xl floating opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Decorative Separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-primary/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-6 text-5xl floating shadow-lg">🎂</span>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <StorySection />
      </div>

      {/* Decorative Separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-primary/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-6 text-5xl float-delayed shadow-lg">📸</span>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="container mx-auto px-4 py-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <PhotoGallery />
      </div>

      {/* Footer with Doremi */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="floating inline-block mb-6">
          <img
            src={doremiImage}
            alt="Doremi from Doraemon"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-2xl opacity-90"
          />
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Made with 💝 for your special day
        </p>
        <div className="flex justify-center gap-4 text-5xl">
          <span className="floating">🎈</span>
          <span className="float-delayed">🎉</span>
          <span className="floating" style={{ animationDelay: "0.5s" }}>🎂</span>
          <span className="float-delayed" style={{ animationDelay: "0.7s" }}>✨</span>
          <span className="floating" style={{ animationDelay: "0.9s" }}>🎁</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
