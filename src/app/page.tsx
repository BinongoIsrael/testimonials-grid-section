import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-light-grayish-blue">
      <section className="mx-auto mt-[12.692rem] mb-[12.692rem] max-w-[77%] grid grid-cols-4 gap-[2.308rem] justify-center md:mt-20">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            className={`
              ${testimonial.gridSpan?.col === 2 ? "col-span-2" : "col-span-1"}
              ${testimonial.gridSpan?.row === 2 ? "row-span-2" : "row-span-1"}
            `}
          />
        ))}
      </section>
    </main>
  );
}
