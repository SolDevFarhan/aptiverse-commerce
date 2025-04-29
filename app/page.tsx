import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'Aptiverse is a premium learning platform offering online courses in Web Development, Design, and AI. Learn at your own pace with expert-led lessons, real-world projects, and a clean, user-friendly experience — all built to help you grow in the digital world.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
