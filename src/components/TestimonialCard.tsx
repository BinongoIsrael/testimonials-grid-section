import Image from "next/image";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

type Variant = Testimonial["variant"];

const variantStyles: Record<Variant, string> = {
  violet: "bg-moderate-violet text-white",
  gray: "bg-dark-grayish-blue text-white",
  white: "bg-white text-black",
  black: "bg-dark-blackish-blue text-white",
  "light-gray": "bg-light-gray text-black",
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className = "",
}) => {
  const {
    name,
    title,
    highlight,
    content,
    image,
    variant,
    hasQuoteBg,
    borderColor,
  } = testimonial;

  return (
    <div
      className={`flex flex-col gap-3.5 rounded-lg p-6 md:p-8 shadow-md ${
        variantStyles[variant]
      } ${
        hasQuoteBg
          ? "bg-quotation-pattern bg-no-repeat bg-[top_right_18%] bg-[length:100px_auto]"
          : ""
      } ${className}`}
    >
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className={`rounded-full border-2 ${
            borderColor ? `border-${borderColor}` : "border-none"
          }`}
        />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs opacity-50">{title}</p>
        </div>
      </div>
      <h2 className="text-xl font-semibold leading-tight">{highlight}</h2>
      <p className="text-sm opacity-50 leading-relaxed">{content}</p>
    </div>
  );
};

export default TestimonialCard;
