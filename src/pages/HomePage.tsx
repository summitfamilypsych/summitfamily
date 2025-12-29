import Hero from '../components/Hero';
import AboutServices from '../components/AboutServices';
import ContactForm from '../components/ContactForm';

interface HomePageProps {
  onScheduleClick: () => void;
}

export default function HomePage({ onScheduleClick }: HomePageProps) {
  return (
    <>
      <Hero onScheduleClick={onScheduleClick} />
      <AboutServices />
      <ContactForm />
    </>
  );
}
