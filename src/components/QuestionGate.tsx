import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface QuestionGateProps {
  onCorrectAnswer: () => void;
}

const QuestionGate = ({ onCorrectAnswer }: QuestionGateProps) => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase().trim() === "ambivert") {
      onCorrectAnswer();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-birthday-light to-secondary/20 p-4">
      <Card className="w-full max-w-md p-8 backdrop-blur-sm bg-card/95 shadow-2xl border-2 border-primary/20">
        <div className="text-center space-y-6">
          <div className="floating">
            <h1 className="text-4xl font-bold gradient-text mb-2">
              Welcome! 🎉
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground">
            Before we begin, answer this question:
          </p>

          <div className="py-4">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Are you more introvert or extrovert?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer..."
                className={`text-center text-lg py-6 transition-all ${
                  error ? "border-destructive animate-shake" : "border-input"
                }`}
              />
              
              {error && (
                <p className="text-destructive text-sm animate-fade-in">
                  Hmm, not quite right. Think about it... 🤔
                </p>
              )}

              <Button
                type="submit"
                className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
              >
                Submit
              </Button>
            </form>
          </div>

          <p className="text-sm text-muted-foreground italic">
            Hint: The answer is somewhere in between... 💭
          </p>
        </div>
      </Card>
    </div>
  );
};

export default QuestionGate;
