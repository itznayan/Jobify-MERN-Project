import { AppleIcon, SchoolIcon, StarIcon, WorkflowIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../styles";
import { MdAccountCircle, MdReviews } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { timeline } from "@material-tailwind/react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <>
      <div className="main bg-[#1F2937]">
        <div className="container">
          <div className="head py-10">
            <h2 className={`${styles.sectionHeadText} text-center`}>
              <div>
                {"How We Work".split(" ").map((item, index) => (
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0, letterSpacing: 10 }}
                    transition={{
                      delay: 0.35 * index,
                      type: "spring",
                    }}
                    key={index}
                  >
                    {item}&nbsp;{" "}
                  </motion.span>
                ))}
              </div>
            </h2>
            <p className={`${styles.sectionSubText} text-center`}>
              Building Large and Effective Systems
            </p>
          </div>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ backgroundColor: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              iconStyle={{ background: "rgb(33, 80, 243)", color: "#fff" }}
              icon={<MdAccountCircle />}
            >
              <h3 className="text-white text-[24px] flex items-center gap-4">
                <MdAccountCircle />
                Create Account
              </h3>

              <p className="text-gray-200">
                Create your account today to unlock exclusive benefits and
                personalized experiences. Join our community and start exploring
                a world of possibilities with ease. It only takes a few moments
                to get started!
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ backgroundColor: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              iconStyle={{ background: "rgb(33, 150, 24)", color: "#fff" }}
              icon={<WorkflowIcon />}
            >
              <h3 className="text-white text-[24px] flex items-center gap-4">
                <WorkflowIcon /> Find Job/Post A Job{" "}
              </h3>

              <p className="text-gray-200">
                Discover exciting career opportunities or post a job to attract
                top talent. Streamline your hiring process and connect with
                qualified candidates effortlessly. Join our platform to find the
                perfect match for your next role!
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ backgroundColor: "#1d1836", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              iconStyle={{ background: "rgb(150, 15, 243)", color: "#fff" }}
              icon={<AppleIcon />}
            >
              <h3 className="text-white text-[24px] flex items-center gap-4">
                <MdReviews /> Apply For Job/ Review Application{" "}
              </h3>

              <p className="text-gray-200">
                Apply for your dream job in just a few clicks. Review and manage
                your applications easily with our intuitive platform. Take the
                next step towards your career goals today!
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
