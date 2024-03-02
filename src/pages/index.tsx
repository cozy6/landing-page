import Image from "next/image";
import Spline from "@splinetool/react-spline";
import styles from "../styles/home.module.css";

//COMPONENTS
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`flex min-h-screen flex-col items-center p-24`}>
        <div style={{ marginTop: "-18em" }}>
          <Spline scene="https://prod.spline.design/fldmuR3yXXsO5Lma/scene.splinecode" />
        </div>
        <div style={{ marginTop: "-3em" }}>
          <h1 style={{fontSize: "48pt", letterSpacing: "-2px", fontWeight: "700", textAlign: "center", width: "80%", margin: "auto", lineHeight: "1", }}>
            Discover personalized travel plans effortlessly with Orbit
          </h1>
        </div>
        <div style={{ marginTop: "10em", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",}}>
          <p style={{ marginBottom: "1em", fontSize: "20px", fontWeight: "200" }}>learn more</p>
          <div className={styles.mouse}></div>
        </div>
        <div style={{ position:"absolute", zIndex:-1, top:"80rem" }}>
          <Image
            src={"/gradient-blur.png"}
            alt={"gradient"}
            height={682}
            width={1200}          
          />
        </div>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.spline_container}>
              <Spline  style={{ display:"flex", justifyContent:"center" }} scene="https://prod.spline.design/i5Vfkhn697kqkXGO/scene.splinecode" />
            </div>
            <h1 className={styles.card_headings}>Itinerary Basic</h1>
            <ul className={styles.card_features}>
              <li>
                Personalized Itineraries: AI generates basic itineraries based on user preferences and inputs.
              </li>
              <li>
                Basic Customization: Ability to tweak generated itineraries with limited customization options.
              </li>
            </ul>
            <div className={styles.price_container}>
              <h2 className={styles.price}>
                $29 <p className={styles.month}>/mo</p>
              </h2>
            </div>
            <div className={styles.button_container}>
              <button className={styles.buy_button}>Buy Now</button>
              <button className={styles.learn_button}>learn more</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.spline_container}>
              <Spline  style={{ display:"flex", justifyContent:"center" }} scene="https://prod.spline.design/i5Vfkhn697kqkXGO/scene.splinecode" />
            </div>
            <h1 className={styles.card_headings}>Itinerary Plus</h1>
            <ul className={styles.card_features}>
              <li>
                Advanced Personalization: AI refines itineraries based on past travel history, preferences, and
                real-time data.
              </li>
              <li>
                Unlimited Customization: Full flexibility to customize itineraries with detailed preferences such as
                budget, time constraints, and accessibility needs.
              </li>
            </ul>
            <div className={styles.price_container}>
              <h2 className={styles.price}>
                $49 <p className={styles.month}>/mo</p>
              </h2>
            </div>
            <div className={styles.button_container}>
              <button className={styles.buy_button}>Buy Now</button>
              <button className={styles.learn_button}>learn more</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.spline_container}>
              <Spline  style={{ display:"flex", justifyContent:"center" }} scene="https://prod.spline.design/i5Vfkhn697kqkXGO/scene.splinecode" />
            </div>
            <h1 className={styles.card_headings}>Itinerary Pro</h1>
            <ul className={styles.card_features}>
              <li>
                Early Access to New Features: Be among the first to access and test new AI features and updates.
              </li>
              <li>
                Premium Offline Access: Download detailed offline maps, guides, and recommendations for enhanced offline
                use.
              </li>
            </ul>
            <div className={styles.price_container}>
              <h2 className={styles.price}>
                $69 <p className={styles.month}>/mo</p>
              </h2>
            </div>
            <div className={styles.button_container}>
              <button className={styles.buy_button}>Buy Now</button>
              <button className={styles.learn_button}>learn more</button>
            </div>
          </div>
        </div>

        <div className={styles.feature_wrapper}>
          <div className={styles.feature_offer}>
            <Image
            src={"/mockup.png"}
            alt={"mockup"}
            height={488}
            width={588}
            />
            <div>
              <h1 className={styles.feature_header}>Tailored For You</h1>
              <p className={styles.feature_desc}>Our Ai creates itineraries tailored to your interests and budget.</p>
              <button className={styles.subscribe_button}>subscribe to newsletter</button>
            </div>
          </div>
        </div>

        <footer style={{ width: "100%" }}>
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://orbit-2024.vercel.app/" className="hover:underline">
                Orbit™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
