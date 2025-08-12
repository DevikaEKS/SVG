import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

function Services() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>

      <div className="row align-items-center px-5 textarea crds">
        {/* First row */}
        <motion.div
          className="col-sm-12 col-md-6 crds"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="m-5 bgpart">
            <div className="card">
              <img
                src="https://img.freepik.com/premium-photo/industrial-control-panels-manufacturing-facility-photo_1088041-46315.jpg"
                alt="electric"
                className="card-img-top imgsize"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-sm-12 col-md-6 my-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="subtext text-light">
            Providing top-quality electrical solutions with precision and
            reliability.
          </p>
        </motion.div>

        {/* Second row */}
        <motion.div
          className="col-sm-12 col-md-6 my-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="subtext">
            Providing top-quality electrical solutions with precision and
            reliability.
          </p>
        </motion.div>

        <motion.div
          className="col-sm-12 col-md-6 crds"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="m-5 bgpart">
            <div className="card">
              <img
                src="https://img.freepik.com/premium-photo/industrial-control-panels-manufacturing-facility-photo_1088041-46315.jpg"
                alt="electric"
                className="card-img-top imgsize"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
