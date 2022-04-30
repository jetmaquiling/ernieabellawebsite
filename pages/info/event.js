import * as React from "react";
import * as style from "@/styles/caveat/countdown.module.css";
import FooterV1 from "@/components/footer/footerv1";
import FooterV2 from "@/components/footer/footerv2";
import { useCountdown } from "@/components/useCountdown";
import Link from "next/link";
import moment from "moment";
import Head from "next/head";

const Countdown = () => {
  const [days, hours, minutes, seconds] = useCountdown(
    moment("05 03 2022, 17:30", "MM DD YYYY, hh:mm")
  );

  const share = async () => {
    try {
      await navigator.share({
        title: "Pagtitipon Para Sa Pambansang Pagbabago",
        url: window.location.href,
      });
      console.log("Data was shared successfully");
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  };

  const [time, setTime] = React.useState({
    days: 1,
    hours: 7,
    minutes: 0,
    seconds: 0,
  });
  const [radius, setRadius] = React.useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  });

  React.useEffect(() => {
    setRadius({
      days: mapNumber(days, 30, 0, 0, 360),
      hours: mapNumber(hours, 24, 0, 0, 360),
      minutes: mapNumber(minutes, 60, 0, 0, 360),
      seconds: mapNumber(seconds, 60, 0, 0, 360),
    });
    setTime({
      days: mapNumber(days, 30, 0, 0, 360),
      hours: mapNumber(hours, 24, 0, 0, 360),
      minutes: mapNumber(minutes, 60, 0, 0, 360),
      seconds: mapNumber(seconds, 60, 0, 0, 360),
    });
  }, [days, hours, minutes, seconds]);

  return (
    <div className={style.main}>
      <Head>
        <title>Pagtitipon Para Sa Pambansang Pagbabago</title>
        <meta
          name="description"
          content="There’s still time! On May 3, I encourage you to attend his rally.
            Let’s give him a chance to be heard by more Filipinos. Then we will
            be enlightened and we will understand why he is running for
            president, we will be excited with his vision, we will feel
            genuinely involved with his plans."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pagtitipon Para Sa Pambansang Pagbabago"
        />
        <meta property="og:image" content="./Thumbnail/event.jpg" />
      </Head>

      <div className={style.logoBox}>
        <img src="/Logo/LogoWhite.png" className={style.logo} />
      </div>

      <div className={style.logoBox}>
        <img src="/Images/event.jpg" className={style.logo} />
      </div>
      <p className={style.subtitle}>
        Pagtitipon Para Sa <b>Pambansang Pagbabago</b>
      </p>
      <p className={style.subtitle}>
        Papuri, Pagsamba, Pag-Dulog Para Sa Pilipino
      </p>

      <div className={style.backdrop}>
        <div className={style.countdownwrapper}>
          <div className={style.countdownitem}>
            <SVGCircle
              radius={radius.days}
              time={time.days}
              color={"#0000FF"}
            />
            {days}
            <span>days</span>
          </div>

          <div className={style.countdownitem}>
            <SVGCircle
              radius={radius.hours}
              time={time.hours}
              color={"#FFFF00"}
            />
            {hours}
            <span>hours</span>
          </div>

          <div className={style.countdownitem}>
            <SVGCircle
              radius={radius.minutes}
              time={time.minutes}
              color={"#fff"}
            />
            {minutes}
            <span>minutes</span>
          </div>

          <div className={style.countdownitem}>
            <SVGCircle
              radius={radius.seconds}
              time={time.seconds}
              color={"#FF0000"}
            />
            {seconds}
            <span>seconds</span>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <Link
            href="https://www.google.com/maps/place/Abenida+Maria+Orosa,+Ermita,+Maynila,+1000+Kalakhang+Maynila/@14.5843949,120.9793563,19z/data=!3m1!4b1!4m5!3m4!1s0x3397ca247033c5ad:0x57ef04d73a118ff2!8m2!3d14.5843936!4d120.9799034"
            target="_blank"
          >
            <div className={`${style.buttonBox} `}>
              <h4 className={style.h4animate}>{"View Location >"}</h4>
            </div>
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
          >
            <div onClick={share} className={`${style.buttonBox} `}>
              <h4 className={style.h4animate}>{"Share >"}</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className={style.infoContainer}>
        <div className={style.infoRow}>
          <div className={style.info}>
            <h4 className={style.label}>Assembly Time:</h4>
            <h4 className={style.infoData}>May 3, 2022 (TUE 5:30 PM)</h4>
          </div>
        </div>

        <div className={style.infoRow}>
          <div className={style.info}>
            <h4 className={style.label}>Start of Program:</h4>
            <h4 className={style.infoData}>May 3, 2022 (TUE 6:30 PM)</h4>
          </div>
        </div>

        <div className={style.infoRow}>
          <div className={style.info}>
            <h4 className={style.label}>Location:</h4>
            <h4 className={style.infoData}>
              Maria Orosa Avenue Rizal Park - North
            </h4>
          </div>
        </div>
      </div>

      <div className={style.infoContainer}>
        <div className={style.info}>
          <div className={style.logoBox}>
            <img src="/Logo/LogoBPBP.png" className={style.logo} />
          </div>
          <h4 className={style.messageData}>
            Hello, Pilipinas! I’m sincerely inviting you to get to know the
            presidential candidate who has the capability, the vision, and the
            heart to be the FATHER OF OUR NATION.
          </h4>

          <h4 className={style.messageData}>
            There’s still time! On May 3, I encourage you to attend his rally.
            Let’s give him a chance to be heard by more Filipinos. Then we will
            be enlightened and we will understand why he is running for
            president, we will be excited with his vision, we will feel
            genuinely involved with his plans.
          </h4>

          <h4 className={style.messageData}>
            We will feel a different kind of hope for the Philippines
          </h4>

          <h4 className={style.messageData}>
            Let’s not limit our choices to those who rank higher in surveys and
            polls; or go with the flow with those that are trending, more
            popular and more visible, but vote with conviction!
          </h4>
          <h4 className={style.messageData}>
            There are other candidates that are willing, able, and have the
            heart, #1 sa Balota Ernie Abella is one!
          </h4>

          <h4 className={style.messageData}>
            Our one vote is really powerful and let’s not waste it! See you on
            May 3! May God continue to bless the Philippines and lead us to the
            nation that every Filipino desires and deserves.
            #Abellamypresident2022 #SigloPilipino
          </h4>
          <Link href="/info/about">
            <div className={`${style.buttonBox} `}>
              <h4 className={style.h4animate}>{"Learn More"}</h4>
            </div>
          </Link>
          <div className={style.videoContainer}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dx4VM1ZsQec"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <FooterV1 />
    </div>
  );
};

const SVGCircle = ({ radius, time, color }) => (
  <svg className={style.countdownsvg}>
    <path
      className={style.smooth}
      fill="none"
      stroke={color}
      strokeWidth={time <= 1 || time == 59 ? "0" : "5"}
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}
export default Countdown;
