import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // FOR TESTING: 3 seconds from now
  const calculateTestEndTime = () => {
    const now = new Date();
    return new Date(now.getTime() + 3000); // 3 seconds
  };

  // FOR ACTUAL BIRTHDAY: Uncomment the line below and comment out the test line
  // const birthdayDate = new Date("2025-11-16T00:00:00");
  const birthdayDate = calculateTestEndTime(); // COMMENT THIS LINE FOR PRODUCTION

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +birthdayDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0 &&
        !isBirthday
      ) {
        setIsBirthday(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isBirthday]);

  if (isBirthday) {
    return (
      <div className="text-center py-16 animate-scale-in">
        <div className="mb-6">
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-4 animate-bounce">
            🎉 Happy 22nd Birthday! 🎉
          </h2>
          <p className="text-2xl md:text-3xl text-secondary animate-fade-in">
            Today is your special day! 🎂✨
          </p>
        </div>
        <div className="flex justify-center gap-4 text-4xl">
          <span className="floating">🎈</span>
          <span className="float-delayed">🎁</span>
          <span className="floating" style={{ animationDelay: "0.5s" }}>🎊</span>
          <span className="float-delayed" style={{ animationDelay: "0.7s" }}>🎉</span>
          <span className="floating" style={{ animationDelay: "0.9s" }}>✨</span>
        </div>
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Countdown to Your Special Day
        </h2>
        <p className="text-xl text-muted-foreground">
          November 16, 2025 • Turning 22 🎂
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {timeUnits.map((unit, index) => (
          <Card
            key={unit.label}
            className="p-6 backdrop-blur-sm bg-card/80 border-2 border-primary/20 hover:border-primary/40 transition-all floating hover:shadow-2xl"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-sm md:text-base text-muted-foreground font-medium">
              {unit.label}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
