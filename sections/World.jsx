'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewort={{once:'false', amount:0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
    <TypingText title="| People on the World" textStyles="text-center"/>
    <TitleText
      title={(<>
        Track friends around you and invite them to play together in the same world
      </>)}
      textStyles="text-center"
    />
    <motion.div
      variant={fadeIn('up', 'tween', 0.3, 1 )}
      className='relative mt-[68px] flex w-full h-[550px]'
    >
      <img
        src="/map.png"
        alt='map'
        className='w-full h-full object-cover'
      />
      <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
      <img
        src="people-01.png"
        alt='people'
        class='w-full h-full'
      />

      </div>

      <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
      <img
        src="people-02.png"
        alt='people'
        class='w-full h-full'
      />

      </div>

      <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
      <img
        src="people-03.png"
        alt='people'
        class='w-full h-full'
      />

      </div>

      {/* <div className='absolute top-1/4 left-[15%] h-[150px] p-[6px] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] bg-[#5d6680]'>
        <img
          src='planet-02.png'
          alt='planet'
          className='w-[196px] h-[138px] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] object-cover relative'
        />

      </div> 

      <div className='absolute top-[42%] left-[17%] w-[34px] h-[34px] p-[6px] rounded-full'>
      <img
        src="people-04.png"
        alt='people'
        class='w-full h-full'
      />

      </div>

      <div className='absolute top-[42%] left-[18%] w-[34px] h-[34px] p-[6px] rounded-full'>
      <img
        src="people-05.png"
        alt='people'
        class='w-full h-full'
      />

      </div>

      <div className='absolute top-[42%] left-[19%] w-[34px] h-[34px] p-[6px] rounded-full'>
      <img
        src="people-06.png"
        alt='people'
        class='w-full h-full'
      />

      </div>

      <div className='absolute top-[42%] left-[22%] p-[6px] text-white'>
      <p> +264 has joined </p>

      </div>

      <div className='absolute top-[46%] left-[17%] p-[6px] text-white'>
      <p> The Upside Down </p>

      </div>


      <div className='absolute top-[10%] right-[15%] h-[150px] p-[6px] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] bg-[#5d6680]'>
        <img
          src='planet-03.png'
          alt='planet'
          className='w-[196px] h-[138px] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] object-cover relative'
        />

      </div> 

      <div className='absolute top-[25%] right-[34%] w-[34px] h-[34px] p-[6px] rounded-full'>
      <img
        src="people-04.png"
        alt='people'
        class='w-full h-full'
      />

      </div>

      <div className='absolute top-[25%] right-[33%] w-[34px] h-[34px] p-[6px] rounded-full'>
      <img
        src="people-05.png"
        alt='people'
        class='w-full h-full'
      />

      </div>

      <div className='absolute top-[25%] right-[32%] w-[34px] h-[34px] p-[6px] rounded-full'>
      <img
        src="people-06.png"
        alt='people'
        class='w-full h-full'
      />

      </div>

      <div className='absolute top-[25%] right-[17%] p-[6px] text-white'>
      <p> +250 has joined </p>

      </div>

      <div className='absolute top-[30%] right-[25%] p-[6px] text-white'>
      <p> Hawkins Labs </p>

      </div> */}
    </motion.div>

</motion.div>
  </section>
);

export default World;
