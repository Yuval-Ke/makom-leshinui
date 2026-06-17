import { Phone, Mail, MessageCircle } from "lucide-react";

const PHONE = "052-6903605";
const EMAIL = "dr.yuval.kesary@gmail.com";
const WHATSAPP_NUM = "972526903605";

export default function ContactBlock() {
  return (
    <div className="space-y-5">
      <a
        href={`tel:${PHONE.replace(/-/g, "")}`}
        className="flex items-center gap-3 text-forest hover:text-mint transition-colors group"
      >
        <span className="flex-shrink-0 w-9 h-9 rounded-full bg-sage/30 flex items-center justify-center group-hover:bg-mint/20 transition-colors">
          <Phone size={17} />
        </span>
        <span className="text-lg font-medium" dir="ltr">
          {PHONE}
        </span>
      </a>

      <a
        href={`mailto:${EMAIL}`}
        className="flex items-center gap-3 text-forest hover:text-mint transition-colors group"
      >
        <span className="flex-shrink-0 w-9 h-9 rounded-full bg-sage/30 flex items-center justify-center group-hover:bg-mint/20 transition-colors">
          <Mail size={17} />
        </span>
        <span className="text-base font-medium" dir="ltr">
          {EMAIL}
        </span>
      </a>

      <a
        href={`https://wa.me/${WHATSAPP_NUM}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-forest hover:text-mint transition-colors group"
      >
        <span className="flex-shrink-0 w-9 h-9 rounded-full bg-sage/30 flex items-center justify-center group-hover:bg-mint/20 transition-colors">
          <MessageCircle size={17} />
        </span>
        <span className="text-base font-medium">שליחת הודעה בוואטסאפ</span>
      </a>
    </div>
  );
}
