export const siteData = {
  name: "The Mist",
  tagline: "a tradition of fine dining.",
  japaneseAccent: "寿司と刺身",
  heroTags: ["配達", "刺身"],
  contact: {
    address: "2-5-9 Shingashi, Itabashi, Tokyo",
    phone: "(555) 555-5555",
    email: "hello@themist.com",
  },
  hours: {
    closed: "Monday: CLOSED",
    weekday: "Tuesday - Friday: 11 AM – 10 PM",
    weekend: "Saturday - Sunday: 12 PM – 7 PM",
  },
  social: {
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Blogs", href: "/blogs" },
  ],
  excellence: [
    {
      name: "Seasonal Flavors",
      number: "80+",
      image: "/images/excellence_1.png",
      icon: "🍣",
    },
    {
      name: "Healthy Options",
      number: "120+",
      image: "/images/excellence_2.png",
      icon: "🥗",
    },
    {
      name: "Positive Reviews",
      number: "96%",
      image: "/images/excellence_3.png",
      icon: "⭐",
    },
    {
      name: "Years of Experience",
      number: "12+",
      image: "/images/excellence_4.png",
      icon: "👨‍🍳",
    },
  ],
  delights: [
    { name: "1. Sashimi", image: "/images/delight_sashimi.png" },
    { name: "2. Sushi", image: "/images/delight_sushi.png" },
    { name: "3. Hosomaki", image: "/images/delight_hosomaki.png" },
    { name: "4. Udon", image: "/images/delight_udon.png" },
  ],
  featuredItems: [
    {
      name: "Tekka Maki",
      price: "$120.00",
      description: "Delicate tuna slices draped over seasoned rice.",
      image: "/images/featured_1.png",
      photo: "/images/featured_photo_1.png",
    },
    {
      name: "Maguro Nigiri",
      price: "$30.00",
      description: "Lightly grilled eel glazed with a sweet soy reduction.",
      image: "/images/featured_2.png",
      photo: "/images/featured_photo_2.png",
    },
    {
      name: "Tsunami Roll",
      price: "$50.00",
      description: "Crisp seaweed wraps encasing fresh cucumber and avocado.",
      image: "/images/featured_3.png",
      photo: "/images/featured_photo_3.png",
    },
  ],
  whyChooseUs: [
    {
      icon: "🐟",
      title: "Fresh Ingredients",
      description:
        "Sourced daily, our seafood and produce ensure unmatched quality and taste.",
    },
    {
      icon: "🎌",
      title: "Authentic Flavors",
      description:
        "Experience traditional Japanese sushi crafted with precision and passion.",
    },
    {
      icon: "📜",
      title: "Signature Recipes",
      description:
        "Our chefs blend classic techniques with modern creativity for unforgettable dishes.",
    },
    {
      icon: "👨‍🍳",
      title: "Master Sushi Chefs",
      description:
        "With years of expertise, our chefs turn simple ingredients into culinary masterpieces.",
    },
  ],
  menuCategories: [
    {
      name: "Sushi",
      icon: "🍣",
      items: [
        {
          name: "Tekka Maki",
          description: "Fresh tuna wrapped in seasoned rice and nori.",
          price: "$14.00",
          image: "/images/featured_1.png",
        },
        {
          name: "Salmon Nigiri",
          description: "Premium salmon over hand-pressed sushi rice.",
          price: "$12.00",
          image: "/images/featured_2.png",
        },
        {
          name: "Dragon Roll",
          description: "Eel and avocado topped with tobiko.",
          price: "$18.00",
          image: "/images/featured_3.png",
        },
      ],
    },
    {
      name: "Noodles & Rice",
      icon: "🍜",
      items: [
        {
          name: "Tonkotsu Ramen",
          description: "Rich pork bone broth with chashu and soft egg.",
          price: "$16.00",
          image: "/images/excellence_3.png",
        },
        {
          name: "Tempura Udon",
          description: "Thick wheat noodles with crispy tempura shrimp.",
          price: "$15.00",
          image: "/images/delight_udon.png",
        },
      ],
    },
    {
      name: "Sashimi",
      icon: "🐟",
      items: [
        {
          name: "Salmon Sashimi",
          description: "Six pieces of fresh Atlantic salmon.",
          price: "$16.00",
          image: "/images/delight_sashimi.png",
        },
        {
          name: "Tuna Sashimi",
          description: "Premium bluefin tuna, thinly sliced.",
          price: "$20.00",
          image: "/images/excellence_2.png",
        },
      ],
    },
    {
      name: "Drinks",
      icon: "🍶",
      items: [
        {
          name: "Matcha Latte",
          description: "Ceremonial grade matcha with steamed milk.",
          price: "$6.00",
          image: "/images/blog_2.png",
        },
        {
          name: "Sake Selection",
          description: "Premium junmai daiginjo, served chilled.",
          price: "$12.00",
          image: "/images/blog_1.png",
        },
      ],
    },
  ],
  testimonials: [
    {
      name: "Sarah Mitchell",
      role: "Food Critic",
      quote:
        "Absolutely delightful! The sushi here is always fresh and beautifully presented, with a fantastic variety of rolls and sashimi to choose from.",
      rating: 5,
    },
    {
      name: "James Tanaka",
      role: "Regular Customer",
      quote:
        "The Mist has become my go-to spot for Japanese cuisine. The attention to detail in every dish is remarkable, and the atmosphere is pure elegance.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Food Blogger",
      quote:
        "From the moment you walk in, you know you're in for something special. The omakase experience here rivals anything I've had in Tokyo.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Customer",
      quote:
        "An unforgettable dining experience. The wagyu beef and premium sashimi selection are world-class. The staff's hospitality is second to none.",
      rating: 5,
    },
  ],
  blogs: [
    {
      title: "The Art of Flavor: How We Craft Each Plate with Care",
      category: "Culinary Arts",
      excerpt:
        "Discover the meticulous process behind every dish at The Mist, from ingredient selection to final presentation.",
      image: "/images/blog_1.png",
      date: "Mar 15, 2025",
    },
    {
      title: "Zen and the Art of Tea: A Journey Through Japanese Tea Culture",
      category: "Culture",
      excerpt:
        "Explore the rich tradition of Japanese tea ceremonies and how they influence our dining philosophy.",
      image: "/images/blog_2.png",
      date: "Mar 08, 2025",
    },
    {
      title: "From Ocean to Plate: Sourcing the Freshest Seafood",
      category: "Ingredients",
      excerpt:
        "Learn about our commitment to sustainability and how we source the finest seafood for our dishes.",
      image: "/images/excellence_2.png",
      date: "Feb 28, 2025",
    },
  ],
  tickerTexts: [
    "choose favorite flavors",
    "discover all menu",
    "order your favorites",
    "experience fine dining",
  ],
};
