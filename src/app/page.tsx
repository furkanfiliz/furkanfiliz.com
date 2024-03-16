import Image from "next/image";
import "./page.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <div className="information">
        <div className="image">
          <Image
            src="/furkanfiliz.jpg"
            alt="Furkan Filiz"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="title">
          <span>Merhaba Ben Furkan Filiz</span>
          <span>Frontend Developer </span>
        </div>
        <div className="desciprition">
          <p>8 yıldır frontend developer olarak çalışıyorum. Html, Css, Javascript ve React ile çalışıyorum.  </p>
          <p>2010 yılında lisede başladığım yazılım serüvenine yeni heyacanlar katarak devam ediyorum. </p>
        </div>
        <div className="social">
          <span>
            <Link href="    https://github.com/furkanfiliz" target="_blank">

              <Image
                src="/social/github.png"
                alt="Furkan Filiz || codepen"
                width={100}
                height={100}
                priority
              />
            </Link>
            <Link href="https://codepen.io/furkanfiliz" target="_blank">
              <Image
                src="/social/codepen.svg"
                alt="Furkan Filiz || codepen"
                width={100}
                height={100}
                priority
              />
            </Link>

            <Link href="https://tr.linkedin.com/in/furkan-filiz-181b12125" target="_blank">
              <Image
                src="/social/linkedin.png"
                alt="Furkan Filiz || codepen"
                width={100}
                height={100}
                priority
              />
            </Link>
          </span>
        </div>
      </div>

    </main>
  );
}
