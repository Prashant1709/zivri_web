import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { Link } from 'react-router-dom';



import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <Animate-Presence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                ZIVRI <br className="xl:block hidden" /> .me
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-4"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>

              <CustomButton
                type="filled"
                title="Customize plain"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-1.5 font-bold text-sm"
              />
             

              <CustomButton
                type="filled"
                title="Customize polo"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-1.5 font-bold text-sm"
              />
              <CustomButton
                type="filled"
                title="Customize full"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-5 py-1.5 font-bold text-sm"
              />          

              <CustomButton
                type="filled"
                title="Explore Zivri"
                handleClick={() => (window.location.href = "https://zivri.me")}
                customStyles="w-fit px-6 py-1.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </Animate-Presence>
  );
};

export default Home;
