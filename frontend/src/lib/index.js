import { Eye, CheckCircle, Send ,Leaf, Zap, ShieldCheck, Map, Cpu, TrendingUp, DollarSign, Users } from 'lucide-react';

// navBar links
export const navLinks = [
    { id: 'home' , title:'Home'},
    { id: 'howitworks' , title:'How it works'},
    { id: 'whyus' , title:'Why Us'},
    { id: 'riders' , title:'Riders'},
    { id: 'testimonials' , title:'Testimonials'},
    { id: 'about' , title:'About Us'},
    { id: 'contactus' , title:'Contact Us'}
]

// howItWorks steps
export const steps = [
    {
      icon: Eye,
      title: "View Riders Live ",
      description: "Open the map and see available electric delivery vehicles in real time.",
      color: "text-green-500",
      bgColor: "bg-green-100"
    },
    {
      icon: Send,
      title: "Book Instantly",
      description: "Choose the nearest electric rider and send your package.",
      color: "text-green-600",
      bgColor: "bg-green-200"
    },
    {
      icon: CheckCircle,
      title: "Track & Receive",
      description: "Follow your delivery in motion and receive it on time — clean and reliable.",
      color: "text-green-700",
      bgColor: "bg-green-300"
    }
  ];

  // Why us
export const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "100% electric fleet reducing carbon emissions and promoting a healthier Rwanda.",
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Smart logistics and real-time tracking ensure your deliveries are quick and on schedule.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Service",
      description: "Verified riders and secure package handling for peace of mind.",
    },
    {
      icon: Cpu,
      title: "Smart Technology",
      description: "Our advanced platform optimizes routes and rider matching for superior performance.",
    },
    {
      icon: Map,
      title: "Real-Time Tracking",
      description: "Monitor your delivery's progress live on the map from pickup to drop-off.",
    },
    {
      icon: TrendingUp,
      title: "Supporting Sustainability",
      description: "Join us in building a greener future for Rwandan logistics and communities.",
    }
  ];
//  riders section benefits
export const benefits = [
    { icon: DollarSign, text: "Competitive Earnings" },
    { icon: Leaf, text: "Eco-Friendly Impact" },
    { icon: TrendingUp, text: "Flexible Schedule" },
    { icon: Users, text: "Supportive Community" },
  ];

  // Testimonials
  export   const testimonials = [
    { name: "GreenMart Kigali", role: "Eco-Friendly Grocer", content: "TumaGreen is essential for our sustainable business. Our customers love the clean delivery!", rating: 5, avatarPlaceholder: "GM" },
    { name: "RwandaCrafts Online", role: "Artisan E-Shop", content: "Fast, reliable, and eco-conscious. TumaGreen aligns perfectly with our brand values.", rating: 5, avatarPlaceholder: "RC" },
    { name: "Mama Mwiza's Kitchen", role: "Healthy Food Delivery", content: "Our food arrives fresh and on time, all while supporting a greener Rwanda. Thank you TumaGreen!", rating: 5, avatarPlaceholder: "MK" },
  ];

// ContUs q&A
   export const faqs = [
    { q: "How do I book a TumaGreen rider?", a: "Simply open our app or website, view available riders on the live map, select the nearest one, and confirm your booking. It's that easy!" },
    { q: "What types of items can be delivered?", a: "TumaGreen can deliver a wide range of items, from documents and small parcels to food orders and online purchases. Prohibited items are not allowed." },
    { q: "Are the delivery fees fixed?", a: "Delivery fees are calculated based on distance and package size. You'll see the transparent pricing before confirming your booking." },
    { q: "How does TumaGreen contribute to sustainability?", a: "Our entire fleet consists of electric vehicles, significantly reducing carbon emissions. We also optimize routes for efficiency, further minimizing environmental impact." },
  ];
