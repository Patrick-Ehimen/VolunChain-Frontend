"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  listItemReveal,
  scrollReveal,
} from "../../animations/variants";
import { useTranslation } from "react-i18next";

const OurMission = () => {
  const { t } = useTranslation();

  const missionPoints = [
    t("mission.points.bridge"),
    t("mission.points.motivate"),
    t("mission.points.impact"),
  ];

  return (
    <motion.section
      id="mission"
      className="mt-16 py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={scrollReveal}
    >
      <div className="container mx-auto text-center max-w-5xl">
        <motion.div className="mb-8" variants={fadeInUp}>
          <motion.h2
            className="text-2xl text-[#73B9EB] mb-2"
            variants={fadeInUp}
          >
            {t("mission.title")}
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-5xl font-bold dark:text-white"
            variants={fadeInUp}
          >
            {t("mission.subtitle")}
          </motion.h3>
        </motion.div>

        <motion.p
          className="text-lg dark:text-white text-gray-600 mb-12 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          {t("mission.description")}
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 bg-[#0F112B] rounded-[30px] p-8"
          variants={staggerContainer}
        >
          <motion.div
            className="relative overflow-hidden w-full md:w-1/2 max-w-md"
            variants={fadeInUp}
          >
            <Image
              src="/ourMission.png"
              alt="Illustration of volunteers"
              width={500}
              height={500}
              className="object-cover object-top w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.ul
            className="text-left dark:text-white text-gray-600 space-y-12 md:w-1/2"
            variants={staggerContainer}
          >
            {missionPoints.map((text, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={listItemReveal}
                className="flex items-start gap-4"
              >
                <motion.div
                  className="bg-[#73B9EB] p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#0F112B"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <p>{text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurMission;
