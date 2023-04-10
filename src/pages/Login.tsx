import { motion } from "framer-motion";
import { Backdrop } from "../components/backdrop";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    },
};
const Login = () => {
    return (
        <Backdrop onClick={() => { }}>
            <motion.div
                onClick={(e) => { e.stopPropagation() }}
                className="model"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>HI</p>
            </motion.div>
        </Backdrop>
    );
}

export default Login;