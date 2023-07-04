import HText from '@/shared/HText'
import { BenefitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'State of the Art Facilities',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eveniet?',
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eveniet?',
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Expert and Pro Trainer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eveniet?',
  },
]

const variant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => (
  <div
    id='benefits'
    className='mx-auto min-h-full w-5/6 py-20'
  >
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='md:my-5 md:w-3/5'
      >
        <HText>MORE THAN JUST A GYM</HText>

        <p className='my-5 text-sm'>We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={variant}
        className='md:flex items-center justify-between gap-8 mt-5'
      >
        {benefits.map((benefit: BenefitType) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            desc={benefit.desc}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>

      <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
        <img
          src={BenefitsPageGraphic}
          alt='benefits-page-graphic'
          className='mx-auto'
        />

        <div className=''>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
              <HText>
                MILLIONS OF HAPPY MEMBERS GETTING HAPPY <span className='text-primary-500'>FIT</span>
              </HText>
            </div>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className='my-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum impedit repudiandae vitae consequuntur omnis, culpa eum repellat odit dignissimos minus cum laboriosam mollitia quasi ea quibusdam distinctio nemo! Adipisci
              dolorem commodi enim consequuntur ea amet corporis.
            </p>

            <p className='mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aliquid non voluptatibus reprehenderit ab repellendus dolor eos ipsa, corporis, vitae, natus qui. .</p>
          </motion.div>

          <div className='relative mt-16'>
            <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
              <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
)

export default Benefits
