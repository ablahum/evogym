import logo from '@/assets/Logo.png'

const Footer = () => (
  <div className='bg-primary-100 py-16'>
    <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
      <div className='mt-16 basis-1/2 md:mt-0'>
        <img
          src={logo}
          alt='logo'
        />

        <p className='my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates itaque iure neque molestiae dolore accusamus rem dolor eveniet quaerat magni!</p>

        <p>© Evogym - All Rights Reserved.</p>
      </div>

      <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Links</h4>

        <p className='mt-5'>Lorem ipsum dolor sit amet.</p>

        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

        <p>Ullaamcorper vivamus</p>
      </div>

      <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Contact Us</h4>

        <p className='mt-5'>Tempus metus mattis risus volutpat egestas.</p>

        <p>(333)425-6825</p>
      </div>
    </div>
  </div>
)

export default Footer
