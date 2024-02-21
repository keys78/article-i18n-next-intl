import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroImage from "../../assets/img/intl_icon.png";

export default function Home() {
  const t = useTranslations("Home");

  // Extract the navigation object keys from the translations
  const navigationKeys = Object.keys(t.raw("navigation"));

  return (
    <>
      <Header />
      <nav className="sm:flex hidden items-center justify-center ">
        <ul className="absolute top-8 flex items-center space-x-5">
          {navigationKeys.map((key) => (
            <li key={key} className="animate pop delay-1">
              <a href={`#/${key}`}>{t(`navigation.${key}`)}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="lg:px-[160px] sm:px-[40px] px-[16px] bg-gray-50 h-[100vh]">
        <div className="flex md:flex-row flex-col items-start justify-between md:pt-32 pt-12 md:text-left text-center">
          <aside className="max-w-[550px] md:mr-20">
            <h2 className="md:text-5xl text-3xl animate pop delay-1">{t("title")}</h2>
            <p
              className="pt-5 animate pop"
              dangerouslySetInnerHTML={{ __html: t("description") }}
            ></p>
          </aside>
          <aside className="md:w-auto w-full md:block flex items-center justify-center md:pt-0 pt-10">
            <Image src={heroImage} width={"600"} height={"600"} alt="" className="animate pop delay-2"/>
          </aside>
        </div>
      </main>
    </>
  );
}
