import { ClassType, SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'

const ourClasses: Array<ClassType> = [
  {
    name: 'Weight Training Classes',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum adipisci pariatur itaque delectus assumenda.',
    image: image1,
  },
  {
    name: 'Yoga Classes',
    image: image2,
  },
  {
    name: 'Ab Core Classes',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum adipisci pariatur itaque delectus assumenda.',
    image: image3,
  },
  {
    name: 'Adventure Classes',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum adipisci pariatur itaque delectus assumenda.',
    image: image4,
  },
  {
    name: 'Fitness Classes',
    image: image5,
  },
  {
    name: 'Training Classes',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum adipisci pariatur itaque delectus assumenda.',
    image: image6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => (
  <div
    className='w-full bg-primary-100 py-40'
    id='ourclasses'
  >
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
      <motion.div
        className='mx-auto w-5/6'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className='md:w-3/5'>
          <HText>OUR CLASSES</HText>

          <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et cumque ea dolore ut repellat!</p>
        </div>
      </motion.div>

      <div className='mt-10 h-[353px] w-full overflow-x-auto overvlow-y-hidden'>
        <ul className='w-[2800px] whitespace-nowrap'>
          {ourClasses.map((item: ClassType, idx) => (
            <Class
              key={idx}
              name={item.name}
              desc={item.desc}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  </div>
)

export default OurClasses
