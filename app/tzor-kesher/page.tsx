import PageContainer from "@/components/PageContainer";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import ContactBlock from "@/components/ContactBlock";

export const metadata = {
  title: "צרו קשר — מקום לשינוי",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <PageContainer>
        <SectionTitle as="h1">צרו קשר</SectionTitle>

        <div className="space-y-14">
          <ContactForm />

          <div>
            <h2 className="text-lg font-semibold text-forest mb-5">
              פרטי התקשרות
            </h2>
            <ContactBlock />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
