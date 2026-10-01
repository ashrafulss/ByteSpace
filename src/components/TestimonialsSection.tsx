import React from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    avatar: "/images/testimonial/01.png",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    avatar: "/images/testimonial/02.png",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    avatar: "/images/testimonial/03.png",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFCFF] py-16 sm:py-20 lg:py-24">
      {/* --- 1. Top-Middle Yellow/Lime Glow Circle --- */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-100px] h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[130px] opacity-75"
        style={{
          background:
            "radial-gradient(circle, rgba(226,253,82,0.85) 0%, rgba(212,251,32,0.4) 50%, rgba(255,255,255,0) 80%)",
        }}
      />

      {/* --- 2. Right-Side Middle Yellow/Lime Glow Circle --- */}
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full blur-[140px] opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(226,253,82,0.85) 0%, rgba(212,251,32,0.4) 50%, rgba(255,255,255,0) 80%)",
        }}
      />

      <div
        className="w-full py-8"
        style={{ paddingLeft: "8.333%", paddingRight: "8.333%" }}
      >
        {/* Header Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-6">
            <h2 className="font-poppins text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <p className="font-satoshi text-[18px] leading-relaxed text-[#525866] ">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl bg-white/90 backdrop-blur-sm p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div>
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-gray-100"
                  />
                  <div>
                    <h3 className="font-poppins text-[20px] font-semibold text-gray-900 ">
                      {item.name}
                    </h3>
                    <p className="font-satoshi text-lg  text-[#0038FF] ">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="mt-6 font-satoshi text-lg leading-relaxed text-[#525866] ">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
