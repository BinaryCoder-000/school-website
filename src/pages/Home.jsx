import Seo from "../components/ui/Seo";
import Hero from "../components/home/Hero";
import NoticeMarquee from "../components/home/NoticeMarquee";
import Highlights from "../components/home/Highlights";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AcademicPrograms from "../components/home/AcademicPrograms";
import Infrastructure from "../components/home/Infrastructure";
import LatestNotices from "../components/home/LatestNotices";
import UpcomingEvents from "../components/home/UpcomingEvents";
import Testimonials from "../components/home/Testimonials";
import GalleryPreview from "../components/home/GalleryPreview";
import CallToAction from "../components/home/CallToAction";
import ContactInfo from "../components/home/ContactInfo";
import { school } from "../data/school";

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description={`${school.fullName} — official school website for academics, admissions, notices, gallery, and contact information.`}
      />
      <Hero />
      <NoticeMarquee />
      <Highlights />
      <WhyChooseUs />
      <AcademicPrograms />
      <Infrastructure />
      <LatestNotices />
      <UpcomingEvents />
      <Testimonials />
      <GalleryPreview />
      <CallToAction />
      <ContactInfo />
    </>
  );
}
