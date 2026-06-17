import PageContainer from "@/components/PageContainer";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import ContactBlock from "@/components/ContactBlock";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "צרו קשר — מקום לשינוי",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <PageContainer>
        <FadeIn>
          <SectionTitle as="h1">צרו קשר</SectionTitle>
        </FadeIn>

        <div className="space-y-14">
          <FadeIn delay={80}>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={160}>
            <div className="pt-2 border-t border-border">
              <p className="text-sm font-medium text-fg mb-4 mt-6">פרטי התקשרות</p>
              <ContactBlock />
            </div>
          </FadeIn>
        </div>
      </PageContainer>
    </div>
  );
}
