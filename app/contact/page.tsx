import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import CTA from '@/components/CTA';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactForm />
      <ContactInfo />
      <CTA />
    </div>
  );
}
