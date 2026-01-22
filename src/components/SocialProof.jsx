import { motion } from "framer-motion";
import "./SocialProof.css";

const publications = [
    "The Washington Post",
    "MSNBC",
    "Slate",
    "The St. Louis Post-Dispatch",
    "Kveller",
    "Georgetown Law Journal",
    "Boston University Law Review"
];

const SocialProof = () => {
    return (
        <section className="social-proof-section">
            <div className="container">
                <p className="social-proof-label">As Seen In</p>
                <div className="social-proof-grid">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.6 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="social-proof-item"
                        >
                            <div className="social-proof-text-logo">{pub}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
