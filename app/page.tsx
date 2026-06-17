import {
  Zap,
  Activity,
  Brain,
  Bone,
  Wind,
  Moon,
  Leaf,
  Heart,
  AlertCircle,
  Shield,
  Star,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PageContainer from "@/components/PageContainer";
import SectionTitle from "@/components/SectionTitle";
import AccordionGroup, { AccordionItem } from "@/components/AccordionGroup";
import ContactBlock from "@/components/ContactBlock";

const conditions: AccordionItem[] = [
  {
    title: "טיפול בכאב",
    icon: <Zap size={18} />,
    content: (
      <p>
        טיפול בכאב – כאב הוא תופעה פיזיולוגית שנועדה להתריע ולהזהיר את האדם כדי שישנה
        את התנהגותו בכדי שלא יחמיר את המצב. למשל – אדם ששבר את היד, ימנע מלהזיז אותה
        בשל הכאב ובכך ימנע נזק גדול יותר.
        <br />
        <br />
        נעשה שימוש בהיפנוזה לטיפול בכאב אקוטי וכרוני. דוגמאות לשימוש בהיפנוזה בטיפול
        בכאב:
      </p>
    ),
  },
  {
    title: "פיברומיאלגיה",
    icon: <Activity size={18} />,
    content: (
      <p>
        פיברומיאלגיה – פיברומיאלגיה היא מחלה כרונית המאופייינת בכאבים מוסקולוסקלטליים
        מפושטים, מלווים בעייפות, תלונות סומטיות מרובות, ומקושרת לדיכאון. הטיפול הוא
        מולטידיסיפלינרי וכולל טיפול תרופתי, פסיכולוגי, שיקומי ופיזיותרפיה. מחקרים מצאו
        שהיפנוזה שיפרה כאבי שרירים, תשישות, הפרעות שינה ותחושה כללית בחולי פיברומיאלגיה
        (Haanen et al., 1991)
      </p>
    ),
  },
  {
    title: "מיגרנות וכאבי ראש",
    icon: <Brain size={18} />,
    content: (
      <p>
        מיגרנות וכאבי ראש – כאבי ראש שכיחים מאוד באוכלוסיה. חלק מהגורמים המעוררים
        כאבי ראש הם לחץ, מחסור בשינה, שינוי בהרגלי אכילה, חרדה ועוד. מחקרים הראו שטיפול
        בהיפנוזה ובשיטות נוספות גרמו להפחתה בתדירות ההתקפים, בעצמתם ובשימוש בתרופות
        (Friedman and Taub 1984)
      </p>
    ),
  },
  {
    title: "כאבים אורתופדים",
    icon: <Bone size={18} />,
    content: (
      <p>
        כאבים אורתופדים – היפנוזה יעילה בטיפול כאבים ממקור שרירי וגרמי שיכולים לגרום
        סבל רב למטופלים. מחקרים מראים שהיפנוזה יעילה לכאבי גב תחתון (Crasilneck 2011).
        <br />
        <br />
        למעשה, היפנוזה יעילה לכמעט כל תסמונות הכאב (Patterson &amp; Jensen. 2003)
      </p>
    ),
  },
  {
    title: "הפסקת עישון",
    icon: <Wind size={18} />,
    content: (
      <p>
        הפסקת עישון – לעישון יש השלכות בריאותיות רבות וביניהן עליה לסיכון בסרטן ריאות,
        COPD ופגיעה באיכות החיים. לנסיון להפסיק לעשן ללא תמיכה ראויה סיכויי הצלחה
        מועטים. הטיפול בהיפנוזה, במקביל או ללא טיפול תרופתי, מעלה מוטיבציה, עוזר
        בטיפול בהתנגדויות ומעלה סיכויי הצלחה.
      </p>
    ),
  },
  {
    title: "הפרעות שינה",
    icon: <Moon size={18} />,
    content: (
      <p>
        הפרעות שינה – הפרעות שינה כוללות נדודי שינה (אינסומניה), ביעותי לילה,
        סונמבוליזם והרטבת לילה (בילדים לרוב) ועוד. הפרעות השינה פוגעות בתפקוד הנורמלי
        וגורמות סבל רב. להיפנוזה ולשיטות הרגעות יש תועלת רבה בטיפול בהפרעות שינה
        מסוגים שונים (Becker. 2015), והטיפול משלב לימוד היגיינת שינה והיפנוזה עצמית.
      </p>
    ),
  },
  {
    title: "הפרעות עיכול",
    icon: <Leaf size={18} />,
    content: (
      <p>
        הפרעות עיכול – היפנוזה מועילה למגוון הפרעות עיכול כגון IBS (תסמונת המעי
        הרגיז). התסמונת מתבטאת בתבנית אבנורמלית של שילשול, עצירות, או שילוב ביניהן.
        ההיפנוזה משפיעה על החלקים במוח שאחראים על תנועת המעי ועל תחושת הכאב. מחקרים
        הראו אפקטיביות רבה בטיפול בהיפנוזה בתסמונת המעי הרגיז (Whorwell 1987).
      </p>
    ),
  },
  {
    title: "הריון ולידה",
    icon: <Heart size={18} />,
    content: (
      <p>
        הריון ולידה הן אחת החוויות המרגשות והעוצמתיות ביותר, אך לעיתים נלוות גם חרדה
        ודאגה מפני הכאב הכרוך בלידה. כבר לפני מאה שנים השתמשו בהיפנוזה לשליטה בכאב
        בזמן לידה וגם כיום ניתן להפחית בעזרת היפנוזה את הצורך בתרופות לשיכוך כאב.
        <br />
        <br />
        מחקרים מראים כי שימוש בהיפנוזה גם מגביר את הביטחון העצמי והרוגע של היולדת,
        מעלה שיעור לידות ספונטניות ומצמצם שכיחות דיכאון לאחר לידה (Harmon, Hynan and
        Tyre, 1990)
      </p>
    ),
  },
  {
    title: "חרדה",
    icon: <AlertCircle size={18} />,
    content: (
      <p>
        חרדה – הפרעות חרדה הן מגוונות, שכיחות יחסית, ומפריעות לניהול חיים תקינים.
        דוגמאות להפרעות חרדה בהן ניתן לטפל בהיפנוזה הן פחדים ממחטים וזריקות, חרדת
        טיסות, חרדה דנטלית ועוד. במהלך טיפול היפנוטי המטופל יכול לדמיין את הדבר ממנו
        הוא נמנע תוך כדי רגיעה עמוקה ותחושת שליטה, לשנות את מסגרת ההתייחסות, ללמוד
        טכניקות לוויסות החרדה ועוד.
      </p>
    ),
  },
  {
    title: "סרטן",
    icon: <Shield size={18} />,
    content: (
      <p>
        סרטן – מחלת הסרטן והטיפול בה הופכים נפוצים יותר ויותר. בעוד שיעילות הטיפול
        בסרטן עולה עם הזמן, המטופלים עדיין מתמודדים עם תופעות הלוואי של הטיפולים.
        היפנוזה יעילה ביותר בהתמודדות עם תופעות לוואי של כימותרפיה כגון גלי חום אצל
        נשים שחלו בסרטן שד, בחילות והקאות בילדים ועוד. (Jacknow, Tschann&amp;Boyce,
        1994)
        <br />
        <br />
        בנוסף, הטיפול בהיפנוזה מועיל לטיפול בחרדה ובסטרס שמתלווים למחלה
        (Chen,Liu,Chen, 2017) ומחזק את יכולת ההתמודדות. קיימות אף תיאוריות הגורסות כי
        היפנוזה מחזקת את המערכת החיסונית אצל חולי סרטן.
      </p>
    ),
  },
  {
    title: "היפנוזה בילדים",
    icon: <Star size={18} />,
    content: (
      <p>
        היפנוזה בילדים – ילדים מגיבים לטיפול היפנוטי אפילו טוב יותר ממבוגרים ועל כן
        קיימים טיפולים היפנוטיים לבעיות נפוצות – הרטבת לילה ראשונית (Enuresis), העלמת
        נגעים בעור – ורוקה ואקזמות, חרדה מפני מחטים וזריקות, סיוטי לילה ועוד.
      </p>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* מהי היפנוזה */}
      <section className="py-12 md:py-16" aria-labelledby="what-is">
        <PageContainer>
          <SectionTitle id="what-is">מהי היפנוזה?</SectionTitle>
          <p className="text-charcoal leading-loose text-base md:text-lg">
            היפנוזה היא תהליך בו מהפנט מציע למטופל להכנס למצב טראנס: מצב תודעה שונה
            נעים ויצירתי. במצב זה ניתן למצוא פתרונות למגוון בעיות כמו- כאבים כרוניים,
            אלרגיות, הפרעות שינה, חרדות, מיגרנות, מעי רגיז, כאבי מחזור, מחלות עור,
            פיברומיאלגיה הפסקת עישון ועוד.
          </p>
        </PageContainer>
      </section>

      <div className="border-t border-subtle" />

      {/* על התהליך הטיפולי */}
      <section className="py-12 md:py-16" aria-labelledby="process">
        <PageContainer>
          <SectionTitle id="process">על התהליך הטיפולי</SectionTitle>

          <div className="space-y-8">
            <div className="border-r-4 border-mint pr-5">
              <h3 className="font-semibold text-forest text-lg mb-2">
                מפגש היכרות
              </h3>
              <p className="text-charcoal leading-relaxed">
                מפגש היכרות – בו מעמיקים בבעיה בשלה הגעתם לטיפול. מקבלים הסבר
                מעמיק ומתנסים התנסות קצרה.
              </p>
            </div>

            <div className="border-r-4 border-mint pr-5">
              <h3 className="font-semibold text-forest text-lg mb-2">
                פגישות טיפוליות – בהן קורה הקסם
              </h3>
              <p className="text-charcoal leading-relaxed">
                במהלך הפגישה שאורכת 45 דק&apos; תכנסו לטראנס היפנוטי ותתקיים
                העבודה הטיפולית. בסוף המפגש, נעבד את החוויה.
              </p>
            </div>

            <div className="border-r-4 border-mint pr-5">
              <h3 className="font-semibold text-forest text-lg mb-2">
                היפנוזה עצמית
              </h3>
              <p className="text-charcoal leading-relaxed">
                במהלך התהליך תלמדו לבצע היפנוזה עצמית שתשרת אתכם בעתיד
                ותתבקשו לתרגל זאת בבית.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <div className="border-t border-subtle" />

      {/* מצבים בהם ניתן לטפל */}
      <section className="py-12 md:py-16" aria-labelledby="conditions">
        <PageContainer>
          <SectionTitle id="conditions">מצבים בהם ניתן לטפל בהיפנוזה</SectionTitle>

          <p className="text-charcoal leading-relaxed mb-8 text-sm md:text-base">
            רשימת דוגמאות חלקית של מצבים רפואיים ונפשיים בהם ניתן לטפל בהצלחה
            באמצעות היפנוזה. בסוגריים – מצויינים מאמרים מדעיים עליהם הסתמכתי (ניתן
            לעיין בהם ברשת). למעמיקים מומלץ לקרוא את הספר &quot;היפנוזה- דרכה של
            הנפש ליצור את הגוף&quot;, מאת אודי בונשטיין, או לקרוא באתר האגודה
            הישראלית להיפנוזה.
          </p>

          <AccordionGroup items={conditions} />
        </PageContainer>
      </section>

      <div className="border-t border-subtle" />

      {/* צור קשר */}
      <section className="py-12 md:py-16" aria-labelledby="contact-home" id="contact">
        <PageContainer>
          <SectionTitle id="contact-home">צור קשר</SectionTitle>
          <ContactBlock />
        </PageContainer>
      </section>
    </>
  );
}
