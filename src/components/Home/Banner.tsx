import BigTitle from "../common/BigTitle";
import Marquee from "../common/Marquee";

export default function Banner() {
  return (
    <section className="my-24 relative p-4">
      <div className="my-8 flex flex-col gap-16 max-w-7xl mx-auto relative">
        <BigTitle title="Front-end" className="ml-2 md:ml-8 lg:ml-16" />
        <Marquee>
          <BigTitle title="Desenvolvimento" />
        </Marquee>
        <BigTitle
          title="Design"
          className="ml-auto mr-6 md:mr-16 max-w-lg lg:mr-36"
        />
      </div>
    </section>
  );
}
