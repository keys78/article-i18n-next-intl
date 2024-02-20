/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import heroImage from "../../assets/img/intl_icon.png";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <Header />
      <main className="lg:px-[160px] sm:px-[40px] px-[16px] bg-gray-50 h-[100vh]">
        <div className="flex md:flex-row flex-col items-start justify-between md:pt-32 pt-12 md:text-left text-center">
          <aside className="max-w-[550px] md:mr-20">
            <h2 className="md:text-5xl text-3xl">{t("title")}</h2>
            <p
              className="pt-5"
              dangerouslySetInnerHTML={{ __html: t("description") }}
            ></p>
          </aside>
          <aside className="md:w-auto w-full md:block flex items-center justify-center md:pt-0 pt-10">
            <Image src={heroImage} width={"600"} height={"600"} alt="" />
          </aside>
        </div>
      </main>
    </>
  );
}
