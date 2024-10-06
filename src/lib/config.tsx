import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'

export const BLUR_FADE_DELAY = 0.15

export const siteConfig = {
   name: 'nexus.ai',
   description: 'nexus.ai is an advanced AI-powered penetration testing platform designed to automate and enhance cybersecurity assessments.',
   url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
   keywords: ['SaaS', 'Template', 'Next.js', 'React', 'Tailwind CSS'],
   links: {
      email: 'support@cybershield.ai',
      twitter: 'https://twitter.com/nyxb0',
      discord: 'https://nyxb.space',
      github: 'https://github.com/nyxb-ui',
      linkedin: 'https://linkedin.com/in/dennis-ollhoff/',
   },
   header: [
      // {
      //    trigger: 'Features',
      //    content: {
      //       main: {
      //          icon: <Icons.logo className="size-6" />,
      //          title: 'AI-Powered Automation',
      //          description: 'Streamline your workflow with intelligent automation.',
      //          href: '#',
      //       },
      //       items: [
      //          {
      //             href: '#',
      //             title: 'Task Automation',
      //             description: 'Automate repetitive tasks and save time.',
      //          },
      //          {
      //             href: '#',
      //             title: 'Workflow Optimization',
      //             description: 'Optimize your processes with AI-driven insights.',
      //          },
      //          {
      //             href: '#',
      //             title: 'Intelligent Scheduling',
      //             description: 'AI-powered scheduling for maximum efficiency.',
      //          },
      //       ],
      //    },
      // },
      // {
      //    trigger: 'Solutions',
      //    content: {
      //       items: [
      //          {
      //             title: 'For Small Businesses',
      //             href: '#',
      //             description: 'Tailored automation solutions for growing companies.',
      //          },
      //          {
      //             title: 'Enterprise',
      //             href: '#',
      //             description: 'Scalable AI automation for large organizations.',
      //          },
      //          {
      //             title: 'Developers',
      //             href: '#',
      //             description: 'API access and integration tools for developers.',
      //          },
      //          {
      //             title: 'Healthcare',
      //             href: '#',
      //             description: 'Specialized automation for healthcare workflows.',
      //          },
      //          {
      //             title: 'Finance',
      //             href: '#',
      //             description: 'AI-driven process automation for financial services.',
      //          },
      //          {
      //             title: 'Education',
      //             href: '#',
      //             description:
      //         'Streamline administrative tasks in educational institutions.',
      //          },
      //       ],
      //    },
      // },
      {
         href: '/',
         label: 'Home',
      },
      {
         href: '/graph/select-types',
         label: 'Graph Navigator',
      },
   ],
   pricing: [
      {
         name: 'BASIC',
         href: '#',
         price: '$19',
         period: 'month',
         yearlyPrice: '$16',
         features: [
            '1 User',
            '5GB Storage',
            'Basic Support',
            'Limited API Access',
            'Standard Analytics',
         ],
         description: 'Perfect for individuals and small projects',
         buttonText: 'Subscribe',
         isPopular: false,
      },
      {
         name: 'PRO',
         href: '#',
         price: '$49',
         period: 'month',
         yearlyPrice: '$40',
         features: [
            '5 Users',
            '50GB Storage',
            'Priority Support',
            'Full API Access',
            'Advanced Analytics',
         ],
         description: 'Ideal for growing businesses and teams',
         buttonText: 'Subscribe',
         isPopular: true,
      },
      {
         name: 'ENTERPRISE',
         href: '#',
         price: '$99',
         period: 'month',
         yearlyPrice: '$82',
         features: [
            'Unlimited Users',
            '500GB Storage',
            '24/7 Premium Support',
            'Custom Integrations',
            'AI-Powered Insights',
         ],
         description: 'For large-scale operations and high-volume users',
         buttonText: 'Subscribe',
         isPopular: false,
      },
   ],
   faqs: [
      {
         question: 'What is nexus.ai?',
         answer: (
            <span>
               nexus.ai is an advanced AI-powered penetration testing platform designed to automate and enhance cybersecurity assessments. It uses machine learning algorithms to identify vulnerabilities, simulate attacks, and provide actionable insights to improve your security posture.
            </span>
         ),
      },
      {
         question: 'How does nexus.ai differ from traditional penetration testing?',
         answer: (
            <span>
               nexus.ai leverages artificial intelligence to continuously adapt to new threats, automate complex testing processes, and provide more comprehensive coverage than traditional methods. It offers faster results, ongoing assessments, and intelligent insights that evolve with your infrastructure.
            </span>
         ),
      },
      {
         question: 'Is nexus.ai suitable for companies of all sizes?',
         answer: (
            <span>
               Yes, nexus.ai is designed to scale with your needs. We offer plans suitable for small businesses, growing enterprises, and large corporations. Our platform can be customized to fit various infrastructure sizes and security requirements.
            </span>
         ),
      },
      {
         question: 'How does nexus.ai ensure the security of my data during testing?',
         answer: (
            <span>
               nexus.ai adheres to strict security protocols. All tests are conducted in a controlled environment, and we never store or access your sensitive data. Our platform is designed to identify vulnerabilities without compromising your systems or data integrity.
            </span>
         ),
      },
      {
         question: 'Can nexus.ai integrate with my existing security tools?',
         answer: (
            <span>
               Absolutely. nexus.ai is built with integration in mind. We offer APIs and pre-built connectors to seamlessly integrate with popular SIEM systems, vulnerability management tools, and other security platforms, enhancing your overall security workflow.
            </span>
         ),
      },
   ],
   footer: [
      {
         title: 'Product',
         links: [
            { href: '#', text: 'Features', icon: null },
            { href: '#', text: 'Pricing', icon: null },
            { href: '#', text: 'Documentation', icon: null },
            { href: '#', text: 'API', icon: null },
         ],
      },
      {
         title: 'Company',
         links: [
            { href: '#', text: 'About Us', icon: null },
            { href: '#', text: 'Careers', icon: null },
            { href: '#', text: 'Blog', icon: null },
            { href: '#', text: 'Press', icon: null },
            { href: '#', text: 'Partners', icon: null },
         ],
      },
      {
         title: 'Resources',
         links: [
            { href: '#', text: 'Community', icon: null },
            { href: '#', text: 'Contact', icon: null },
            { href: '#', text: 'Support', icon: null },
            { href: '#', text: 'Status', icon: null },
         ],
      },
      {
         title: 'Social',
         links: [
            {
               href: '#',
               text: 'Twitter',
               icon: <FaTwitter />,
            },
            {
               href: '#',
               text: 'Instagram',
               icon: <RiInstagramFill />,
            },
            {
               href: '#',
               text: 'Youtube',
               icon: <FaYoutube />,
            },
         ],
      },
   ],
}

export type SiteConfig = typeof siteConfig
