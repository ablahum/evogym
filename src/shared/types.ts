export enum SelectedPage {
  Header = 'header',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface BenefitType {
  icon: JSX.Element
  title: string
  desc: string
}
