import React from "react";
import BannerSearch from "./_components/ui/BannerSearch";
import BannerCard from "./_components/ui/BannerCard";
import IconCard from "./_components/ui/IconCard";
import Accordion from "./_components/ui/Accordion";
import TextBanner from "./_components/ui/TextBanner";
import Slider from "./_features/slider/Slider";
const Home: React.FC = () => {
  const accordionSections = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
    { title: "Section 4", content: "Content for section 4" },
  ];

  const SliderCardData = [
    {
      id: 1,
      icon: "images/profile1.jpg",
      title: "Phone Verification",
      description: "Ensure genuine connections with verified phone numbers.",
    },
    {
      id: 2,
      icon: "images/profile1.jpg",
      title: "Phone Verification",
      description: "Ensure genuine connections with verified phone numbers.",
    },
    {
      id: 3,
      icon: "images/profile1.jpg",
      title: "Phone Verification",
      description: "Ensure genuine connections with verified phone numbers.",
    },
    {
      id: 4,
      icon: "images/profile1.jpg",
      title: "Phone Verification4",
      description: "Ensure genuine connections with verified phone numbers.",
    },
    {
      id: 5,
      icon: "images/profile1.jpg",
      title: "Phone Verification6",
      description: "Ensure genuine connections with verified phone numbers.",
    },
    {
      id: 6,
      icon: "images/profile1.jpg",
      title: "Phone Verification7",
      description: "Ensure genuine connections with verified phone numbers.",
    },
  ];

  return (
    <>
      <div>
        {" "}
        <BannerSearch />
      </div>
      <div className="mt-6"></div>
      <div>
        <BannerCard />
      </div>
      <div className="mt-6"></div>
      <div className="container mx-auto px-4 py-1 grid grid-cols-1 md:grid-cols-3 gap-8">
        <IconCard
          icon="images/sign-up.png"
          title="Phone Verification"
          description="Ensure genuine connections with verified phone numbers."
        />
        <IconCard
          icon="images/cloud-fail-connect.png"
          title="Phone Verification"
          description="Ensure genuine connections with verified phone numbers."
        />
        <IconCard
          icon="images/framer.png"
          title="Phone Verification"
          description="Ensure genuine connections with verified phone numbers."
        />
      </div>
      <div className="container mx-auto px-1 py-1 ">
        <Slider cards={SliderCardData} />
      </div>
      <div className="container mx-auto px-4 py-1">
        <h1 className="font-bold text-[#51505d] m-[30px_24px_20px_28px] text-[28px]">
          Explore Matrimonial Profiles By
        </h1>
        <Accordion sections={accordionSections} />
      </div>
      <div className="container mx-auto px-4 py-1">
        <h1 className="font-bold text-[#51505d] m-[30px_24px_20px_28px] text-[28px]">
          Dating
        </h1>
        <Accordion sections={accordionSections} />
      </div>
      <div>
        <TextBanner />
      </div>
      <div>
        <TextBanner />
      </div>
     
    </>
  );
};

export default Home;
