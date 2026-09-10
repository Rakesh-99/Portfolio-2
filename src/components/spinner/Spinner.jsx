import { motion } from 'motion/react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        className="h-10 w-10 rounded-full border-2 border-accent/20 border-t-accent"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default Spinner;
