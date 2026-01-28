import { Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t('footer.by')}</span>
          </div>
          <p className="text-gray-400">
            © {currentYear} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
