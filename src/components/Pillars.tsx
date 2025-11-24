import Ecosystem from "./ui/Ecosystem";

export default function Pillars({
  forwardRef,
}: {
  forwardRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section>
      <Ecosystem ref={forwardRef} />
    </section>
  );
}
