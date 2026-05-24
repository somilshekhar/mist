import Navbar from "@/components/Navbar/Navbar";
import HeroBanner from "@/components/Hero/HeroBanner";
import Excellence from "@/components/Excellence/Excellence";
import SignatureDelights from "@/components/Delights/SignatureDelights";
import FeaturedItems from "@/components/Featured/FeaturedItems";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import VideoGallery from "@/components/Video/VideoGallery";
import OurMenu from "@/components/Menu/OurMenu";
import Testimonials from "@/components/Testimonials/Testimonials";
import BlogSection from "@/components/Blog/BlogSection";
import InstagramGallery from "@/components/Instagram/InstagramGallery";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <Excellence />
        <SignatureDelights />
        <FeaturedItems />
        <WhyChooseUs />
        <VideoGallery />
        <OurMenu />
        <Testimonials />
        <BlogSection />
        <InstagramGallery />
      </main>
      <Footer />
    </>
  );
}
