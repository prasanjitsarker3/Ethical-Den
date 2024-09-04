import Application from "@/components/FrontPage/Home/Application";
import Banner from "@/components/FrontPage/Home/Banner";
import Blog from "@/components/FrontPage/Home/Blog";
import ClientSay from "@/components/FrontPage/Home/ClientSay";
import CostEducation from "@/components/FrontPage/Home/CostEducation";
import FAQSection from "@/components/FrontPage/Home/FAQ";

import PopularUniversity from "@/components/FrontPage/Home/PopularUniversity";
import StudentPpeak from "@/components/FrontPage/Home/StudentPpeak";
import USAGlance from "@/components/FrontPage/Home/USAGlance";
import WhyStudy from "@/components/FrontPage/Home/WhyStudy";

export default function Home() {
  return (
    <div>
      <Banner />
      <Application />
      <WhyStudy />
      <PopularUniversity />
      <CostEducation />
      <USAGlance />
      <ClientSay />
      <StudentPpeak />
      <FAQSection />
      <Blog />
    </div>
  );
}
