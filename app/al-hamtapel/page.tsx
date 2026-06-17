import { UserCircle2 } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "על המטפל — מקום לשינוי",
};

export default function TherapistPage() {
  return (
    <div className="py-12 md:py-20">
      <PageContainer>
        <SectionTitle as="h1">על המטפל</SectionTitle>

        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
          {/* Photo placeholder */}
          <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
            <div
              className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-sage/30 border-2 border-sage flex items-center justify-center"
              aria-label="תמונת המטפל — עתיד להיות ממולא"
            >
              <UserCircle2 size={72} className="text-sage" aria-hidden="true" />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-charcoal leading-loose text-base md:text-lg flex-1">
            <p>
              שמי יובל, אני רופא (MD) ועובד בבית חולים רמב&quot;ם. במקביל לעבודתי כרופא,
              בשנים האחרונות אני מטפל ומחלץ נפגעי נפש בסיטואציות משבריות בחו&quot;ל.
            </p>
            <p>
              אני בעל רשיון לטיפול בהיפנוזה מטעם משרד הבריאות (מספר 39927). מאז שפגשתי
              את הכלי המדהים הזה, אני מטפל, מעמיק ומתמקצע.
            </p>
            <p>
              אני מאמין שלהיפנוזה יש פוטנציאל אדיר בטיפול במחלות כרוניות, כאבים
              ותחומים נוספים.
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
