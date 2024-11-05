import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  container?: string;
  gradient?: string;
};

const GlassCard = ({ children, className, container, gradient }: Props) => {
  const cardContent = (
    <Card
      className={cn(
        className,
        "rounded-2xl bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-4xl bg-opacity-40",
      )}
    >
      {children}
    </Card>
  );

  if (gradient) {
    return (
      <div className={cn("relative w-full flex flex-col", container)}>
        <div
          className={cn("absolute rounded-[50%] radial--blur mx-10", gradient)}
        />
        {cardContent}
      </div>
    );
  }

  return cardContent;
};

export default GlassCard;
