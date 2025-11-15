import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StoryDetailDialog from "./StoryDetailDialog";
import story11 from "@/assets/19.jpg";
import story12 from "@/assets/21.jpg";
import story13 from "@/assets/20.jpeg";
import story14 from "@/assets/22.jpg";
import story15 from "@/assets/28.jpeg"
import story16 from "@/assets/27.jpeg"
import story21 from "@/assets/5.jpeg";
import story22 from "@/assets/2.jpeg";
import story23 from "@/assets/17.jpeg";
import story24 from "@/assets/15.jpeg";
import story25 from "@/assets/9.jpeg";
import story26 from "@/assets/16.jpeg";
import story31 from "@/assets/12.jpeg";
import story32 from "@/assets/13.jpeg";
import story33 from "@/assets/23.jpeg";
import story34 from "@/assets/3.jpeg";
import story35 from "@/assets/4.jpeg";
import story36 from "@/assets/25.jpeg";
import story41 from "@/assets/1.jpeg";
import story42 from "@/assets/11.jpeg";
import story43 from "@/assets/31.jpeg";
import story44 from "@/assets/32.jpeg";
import story45 from "@/assets/33.jpeg";
import story46 from "@/assets/34.jpeg";

const StorySection = () => {
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const stories = [
    {
      title: "How We Met 💫",
      preview:
        "Every great story has a beginning, and ours started with a simple hello that turned into countless conversations, laughter, and unforgettable memories.",
      icon: "✨",
      fullStory:
        "Hellooo Vinci ji, ik u remember our first meet — woh Bumble par scroll karte-karte ek match, jiske baad everything got changed. Idk why but God gifted me with someone like you… yrr phir wahi dikkat, I am unable to express it in words, shayad shabd hi kam pad jaate hain har baar explain karne ko. Aree, the one thing jo hamesha pehle dimaag mai aati hai when I think about our first meet is “LinkedIn chalati ho,”",
      images: [story11, story12, story13, story14, story15, story16],
      moments: [
      ],
    },
    {
      title: "Our Adventures 🌟",
      preview:
        "From spontaneous trips to quiet moments together, each adventure has been a chapter in our beautiful story. Every place we've been, every experience we've shared.",
      icon: "🗺️",
      fullStory:
        "Hnn, if we talk about our adventures, toh majorly 2 hi hain — one jisme mai Indore aaya tha and our first in-person meet… wowwwwww bhai that day is the day; and the one jisme tum Prayagraj aaye the and we went to Banaras. Yrrrrr missing you while writing this, but if it is… nahi, it is the best moment of my life till nowww. Please say tathastu for more such tripssss pls pls pls.",
      images: [story21, story22, story23, story24, story25, story26],
      moments: [
        
      ],
    },
    {
      title: "Special Moments 💝",
      preview:
        "The little things matter most - inside jokes, late-night talks, shared dreams, and the comfort of knowing someone truly understands you.",
      icon: "💖",
      fullStory:
        "If we talk about special moments, they cannot be counted yrrr, but majorly jab tumhara gussa hona and mai card banata hu, ya Meet par gussa hokar manana, ya saath mai study, ya saath mai trips, saath mai duniyaaaa bhar ki cheeje — basically pen ki nip se leke pant ki zip tak, every moment with you is special for me.",
      images: [story31, story32, story33, story34, story35, story36],
      moments: [
      ],
    },
    {
      title: "Looking Forward 🌈",
      preview:
        "Looking forward to everything that life has planned for us. Because with you, every chapter becomes my favourite one.",
      icon: "🎯",
      fullStory:
        "Bhaiii looking forward mai mujhe nahi pata I want to go on more trips with you mehnat kar placed ho or aaja same city phir tohhh maje hi maje yrrr pls jis din tu yeh hoga us din mujhse khush insaan poori duniya mai koi nahi hoga toh plssss karenge hum hainaaaa....",
      images: [story41, story42, story43, story44, story45, story46],
      moments: [
      ],
    },
  ];

  const handleStoryClick = (story: any) => {
    setSelectedStory(story);
    setDialogOpen(true);
  };

  return (
    <>
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Our Story 📖
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of beautiful moments, laughter, and love
          </p>
          <p className="text-sm text-primary/60 mt-2 italic">
            Click on any story to explore more ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <Card
              key={story.title}
              className="p-6 backdrop-blur-sm bg-card/80 border-2 border-primary/20 hover:border-secondary/60 transition-all hover:shadow-2xl cursor-pointer group float-delayed transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleStoryClick(story)}
            >
              <div className="text-5xl mb-4 floating group-hover:scale-110 transition-transform">
                {story.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all">
                {story.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {story.preview}
              </p>
              <Button
                variant="ghost"
                className="w-full text-primary hover:text-primary-foreground hover:bg-primary/90 transition-all group-hover:bg-primary/20"
              >
                Read More & View Photos →
              </Button>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto p-8 backdrop-blur-sm bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-accent/30 shadow-xl">
          <div className="text-center space-y-4">
            <div className="floating text-6xl mb-4">💌</div>
            <h3 className="text-3xl md:text-4xl font-bold gradient-text">
              A Special Message
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Hi Vincii yrr I wish this 22nd birthday will be the turning point in your life because agli baar jab tu apni birthday celebrate karegi toh it will be ⭐⭐ and always remember mai hu na toh chinta mat kar kisi cheej ki okuu and please never doubt your self you are very special and always be or agar koi kuch bole toh *** uski and mast enjoyyy kar yeh lifeee agli birthday par u should be totally different promise me and youself too... soooo Happy Birthday to uuuu vinciii/ vincsss/ doremi ! 🎂✨
            </p>
            <div className="pt-4 text-3xl space-x-2">
              <span className="inline-block floating">🎉</span>
              <span className="inline-block float-delayed">💝</span>
              <span className="inline-block floating" style={{ animationDelay: "0.5s" }}>🌟</span>
              <span className="inline-block float-delayed" style={{ animationDelay: "0.7s" }}>🎈</span>
              <span className="inline-block floating" style={{ animationDelay: "0.9s" }}>✨</span>
            </div>
          </div>
        </Card>
      </div>

      <StoryDetailDialog
        story={selectedStory}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
};

export default StorySection;
