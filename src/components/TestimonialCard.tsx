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
      className={`flex flex-col gap-[14px] rounded-lg px-[2.7rem] py-[3rem] shadow-[0_10px_20px_5px_rgba(0,0,0,0.15)] ${
        variantStyles[variant]
      } ${
        hasQuoteBg
          ? "md:bg-quotation-pattern md:bg-no-repeat md:bg-[top_right_14%] md:bg-[length:100px_auto]"
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
      <p
        className={`text-sm leading-relaxed ${
          variant === "white" || variant === "light-gray"
            ? "opacity-50"
            : "opacity-80"
        }`}
      >
        &quot;{content}&quot;
      </p>
    </div>
  );
};

export default TestimonialCard;
