import review1 from '../../assets/review_1.png';
import review2 from '../../assets/review_2.png';
import review3 from '../../assets/review_3.png';

const SocialProofSection = () => {
    const reviews = [review1, review2, review3];

    return (
        <section className="social-proof">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="review-slider-section">
                    <p className="slider-hint">"공부하라고 잔소리할 일이 줄었어요..."</p>
                    <div className="review-slider">
                        <motion.div
                            className="review-track"
                            animate={{
                                x: [0, -100 + "%"],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {[...reviews, ...reviews].map((review, index) => (
                                <div key={index} className="review-card">
                                    <img src={review} alt={`Parent Review ${index + 1}`} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <div className="pricing">
                    <h3>하루 3,300원</h3>
                    <p>아이의 10년 뒤 성적을 바꾸는 가장 저렴한 보험</p>
                    <motion.button
                        className="final-cta highlight-pulse"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' })}
                    >
                        내 아이 전두엽 깨우기, 지금 시작하세요
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default SocialProofSection;
