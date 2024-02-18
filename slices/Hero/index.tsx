import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <span className="text-red-700">{slice.primary.first_name}</span>
      <span> {slice.primary.last_name}</span>
      <span>   {slice.primary.title}</span>
    </section>
  );
};

export default Hero;
