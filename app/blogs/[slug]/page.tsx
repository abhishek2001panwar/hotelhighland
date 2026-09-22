"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

interface ArticleData {
  slug: string;
  day: string;
  month: string;
  year: string;
  category: string;
  readTime: string;
  author: string;
  title: string;
  image: string;
  content: {
    type: "paragraph" | "heading" | "list" | "card";
    text?: string;
    items?: string[];
  }[];
}

const articlesDatabase: Record<string, ArticleData> = {
  panchatantra: {
    slug: "panchatantra",
    day: "16",
    month: "Aug",
    year: "2024",
    category: "Ayurveda",
    readTime: "4 min read",
    author: "Highland Wellness Team",
    title: "Panchatantra",
    image: "https://highlandhotel.in/wp-content/uploads/2024/08/2-1-890x480.png",
    content: [
      {
        type: "paragraph",
        text: "These are the 5 basic rules and regulations that one should follow in order to lead a healthy life. These are the pillars of a healthy lifestyle. These principles are scientifically addressed and proven to be effective in modifying the lifestyle thereby preventing lifestyle-related disorders.",
      },
      {
        type: "card",
        text: "These are as follows:\n• Take two meals a day\n• Drink 2 seers of water per day\n• Exercise 1 hour per day\n• Fast once in a week\n• Adequate Sleep",
      },
      {
        type: "heading",
        text: "Take two meals a day",
      },
      {
        type: "paragraph",
        text: "It is observed that giving a sufficient gap between each meal helps in better digestion of the food that we eat. Taking 2 balanced meals nourishes the body by improving the absorption rate and increasing the metabolism. Studies describe about the potential benefits of consuming 2 meals per day. It naturally helps in fat loss by giving the body a chance to burn the accumulated fat reserves. Apart from the weight loss 2 meals per day also has following benefits:",
      },
      {
        type: "list",
        items: [
          "Increased insulin sensitivity – it is observed that the more frequent meals, the more is insulin secreted which may result in insulin resistance. Thus 2 meals improve the insulin sensitivity thereby regulating the blood sugar levels.",
          "MMC activation – The increased gap between each meal helps in stimulating Migrating Motor complex which aids in removing the metabolic end products thus keeping the Gastrointestinal Tract active.",
          "Improved digestion – By giving a proper gap between each meal, we provide rest to the GIT, which reduces the gastrointestinal discomfort.",
        ],
      },
      {
        type: "paragraph",
        text: "However, it may not be suitable to everyone hence, must be practiced with physician advice.",
      },
      {
        type: "heading",
        text: "Drink 2 seers of water",
      },
      {
        type: "paragraph",
        text: "Up to 60% of human body is composed of fluid, it is essential to maintain the hydrated status of the body for the ideal functioning of the internal organs. The major intra and extra cellular fluids is composed of water. Each organ and its metabolic reactions along with formation of various components of the body require water for its action. Therefore, it is essential to drink a minimum of 2 liters of water per day. Recent research show, a minimum of 3 liters of water is ideal for body metabolism.",
      },
      {
        type: "paragraph",
        text: "Can we consume water during the meals? No, it is not recommended to drink water in between or immediately after the meal as it neutralizes the digestive juices and enzymes required for the digestion and absorption.",
      },
      {
        type: "paragraph",
        text: "What Is the ideal temperature of water drinking? It is ideal to consume normal room temperature water/ Luke warm water.",
      },
      {
        type: "heading",
        text: "Exercise 1 Hour per day",
      },
      {
        type: "paragraph",
        text: "Exercise/ physical activity acts as a bridge between nutrition and drainage. It is essential to utilize the nutrition from the food we eat. The food that we eat is utilized mainly for the energy production. Exercise or physical activity act as a medium to utilize the energy and also aids in removal of the metabolic end products formed during the metabolic reactions.",
      },
      {
        type: "paragraph",
        text: "What form of exercise? Nature of physical activity depends on each individual considering the age and health condition. For old age adults normal pace walking for 20 minutes and Mild Yoga for 30-40 minutes is suitable. Middle aged adults can go for Moderate form of Yoga and walking. Young adults can practice dynamic form of Exercise which may include Gym, Dynamic Yoga, Running/ jogging etc.",
      },
      {
        type: "paragraph",
        text: "When to Do? It is always advisable to practice any form of physical activity in an empty stomach, preferably early in the morning as it helps in burning the excess fat and other end products, however a minimum gap of 3 hours is advised for any exercise. According to the studies it is observed that walking for a minimum of 1000 steps after every meal helps in proper digestion and absorption of food.",
      },
      {
        type: "paragraph",
        text: "Where to practice? A well ventilated area with sufficient air and light is an ideal place for practice of any physical activity. Yoga pranayama always has to be practiced in an open atmosphere where there is sufficient air and light.",
      },
      {
        type: "heading",
        text: "Fast once a week",
      },
      {
        type: "paragraph",
        text: "Fasting is considered as one of the most important and authentic treatment in the system of Naturopathy and Yoga. Fasting is voluntary abstinence from food to provide an opportunity to the body to heal itself. Everyday millions of cells die; a varied amount of metabolic end products are formed as a natural process in the body. These products and dead cells have to be eliminated properly, if accumulate in the body may cause disease. Fasting works on the principle of Autophagy, which means the body has the capacity to heal itself by eliminating the toxins.",
      },
      {
        type: "paragraph",
        text: "How to fast? Fasting is not just a form of Calorie restriction, it is much more than that. There are different forms of fasting mainly Fruit fasting, Liquid fasting, Dry Fasting, Intermittent Fasting. However, it is always advisable to take the Physician help to undergo a therapeutical Fasting.",
      },
      {
        type: "heading",
        text: "Adequate Sleep",
      },
      {
        type: "paragraph",
        text: "The human body has its own internal 24-hour clock called the circadian rhythm. This is controlled by a hormone called melatonin, released from the pineal gland. Having a regular sleep-wake cycle is necessary for adequate synthesis and functioning of melatonin. The physiological effects of melatonin are various and include detoxification of free radicals and antioxidant actions, bone formation and protection, reproduction, and cardiovascular, immune or body mass regulation.",
      },
    ],
  },

  "taste-the-world": {
    slug: "taste-the-world",
    day: "17",
    month: "Aug",
    year: "2024",
    category: "Dining",
    readTime: "5 min read",
    author: "Cinnamon Team",
    title: "Taste the World: A Multi-Cuisine Adventure at Cinnamon Restaurant",
    image: "https://highlandhotel.in/wp-content/uploads/2023/08/Untitled-design-95-890x480.png",
    content: [
      {
        type: "paragraph",
        text: "Hotel Highland is the location where Cinnamon Restaurant is found, hence its elegance and sophistication. It’s a culinary treasure situated within the confines of Hotel Highland, which allows guests to try out a mix of cuisines like no other place. It is more than just a restaurant that is in the middle of a busy city; it is a melting pot for international tastes. The incredibly diverse menu includes Indian cuisine, as well as Thai and Sri Lankan specialties. The uniqueness of Cinnamon comes from the diversity of food items on offer, with different types of Indian foods and specialized dishes from Thailand and Sri Lanka providing every customer with something to eat.",
      },
      {
        type: "heading",
        text: "An Adventure in Fine Dining",
      },
      {
        type: "paragraph",
        text: "Every meal at Cinnamon Restaurant is a journey across the continents. The menu is extensive and presents various global flavors that show how the world has become interconnected through food. From India’s aromatic spices to the vibrant tastes of Thailand and Sri Lanka, there’s so much to choose from. Whether it’s an Indian curry or a Thai soup or a spicy dish from Sri Lanka, Cinnamon offers authentic and innovative tastes. They are highly skilled chefs who are dedicated to excellence by applying their many years of culinary expertise and creativity to each plate they prepare. Each dish is carefully prepared to ensure that its unique taste remains intact while providing that special touch that makes every bite unforgettable.",
      },
      {
        type: "heading",
        text: "Service Excellence",
      },
      {
        type: "paragraph",
        text: "Cinnamon blends with this passion for service excellence to make sure that everything goes smoothly right from when one enters the restaurant till he /she leaves back home satisfied. The team working at Cinnamon comprises well-trained staff who strive for nothing less than an extraordinary dining experience for customers visiting them. As soon as you enter, you will be met with friendly greetings and prompt service all through your visit. If you need suggestions on what to eat or have any dietary requirements, do not hesitate to speak with any member of staff because they are always ready to help you get what you like most in your dining experience.",
      },
      {
        type: "heading",
        text: "A Poem in a Restaurant",
      },
      {
        type: "paragraph",
        text: "The most unique but at the same time friendly atmosphere of Cinnamon Restaurant is cool for any occasion. Even if you came here for a relaxed lunch, or planning to have a romantic dinner, or just want to celebrate something with your friends and family, this elegant décor together with a calm environment will make you feel special. Here, traditional elements are combined with modern elements that help create an unusual space which though has stylishness and comfort.",
      },
      {
        type: "heading",
        text: "More from Hotel Highland",
      },
      {
        type: "paragraph",
        text: "Besides Cinnamon Restaurant, there are more spaces in Hotel Highland which can be used for dining as well as events. The Utsava banquet hall, which is adaptable and sophisticated, is good for grand parties and corporate functions. Santripti offers guests a peaceful setting in which they can enjoy tasty food.",
      },
      {
        type: "paragraph",
        text: "Beyond just being an eatery, Cinnamon Restaurant situated in Hotel Highland is a culinary destination that promises customers unending exploration of the global finest cuisines. When you visit Bengaluru city whether you are on holiday or not; once you enter this building called Cinnamon Hotel it will be difficult to leave again without thinking of what the city has done to you either positively or negatively. Visit us today at our restaurant – we invite everyone to taste the world since all our meals are occasions worthy of celebrating!",
      },
    ],
  },

  "hair-fall": {
    slug: "hair-fall",
    day: "17",
    month: "Aug",
    year: "2024",
    category: "Ayurveda",
    readTime: "6 min read",
    author: "Highland Wellness Team",
    title: "Hair fall",
    image: "https://highlandhotel.in/wp-content/uploads/2024/08/3-890x480.png",
    content: [
      {
        type: "paragraph",
        text: "Hair fall is also called as alopecia or baldness. In which loss of hair will be there either from head or the body. It is normal for a person to lose 50-100 hairs per day. For most of the people, lost hair will grow back, but in some diseases, aging, stress, or hereditary conditions can affect your hair growth.",
      },
      {
        type: "heading",
        text: "Causes of Hair fall",
      },
      {
        type: "list",
        items: [
          "Stress and anxiety: Stress and anxiety are one of the most common causes of your hair fall. Due to stress the hairs got pushed in to the resting face from the growth face, which eventually falls later.",
          "Genetics: Most common reason for hair fall is androgenetic alopecia, it happens due to the presence of genes, you got from your parents.",
          "Malnutrition: Nutritional deficiencies like low iron, vitamin D, zinc etc results in hair loss.",
          "Ageing: Ageing is another reason for the hair loss. As age progresses your hair growth slows and sometimes the hair follicle stops growing hair.",
          "Hormonal imbalances: Hormonal imbalances like excess male hormone androgen will results in hair fall, and the levels of oestrogen and progesterone reduces, which also results in hair thinning and slow hair growth.",
          "Thyroid diseases: Both Hyperthyroidism and Hypothyroidism will result in hair fall. When T3 and T4 hormone production is disrupted then it will affect the development of hair at the root.",
        ],
      },
      {
        type: "heading",
        text: "Food which promotes hair growth",
      },
      {
        type: "list",
        items: [
          "Spinach: The Vitamin A, Iron, Folate, Vit C, Beta carotene in spinach will help for growth of your hair. Also eating spinach will help to moisturize your hair.",
          "Eggs: Protein and biotin in the eggs promotes hair growth, reduces hair fall.",
          "Berries: Vitamins in the berry supports hair growth. Antioxidants helps to reduces the damage of the hair.",
          "Sweet potatoes: The Beta-Carotene in sweet potatoes helps to promote the hair growth.",
          "Nuts and Seeds: The pumpkin seeds, walnuts, Almonds, chia seeds, sunflower seeds, fenugreek seeds etc are good for your hair growth and it prevents hair fall.",
          "Avocados: Vitamin E in avocado supports hair growth, also reduces the skin damages in the scalp.",
          "Beans: The protein and Zinc present in the beans helps for the hair growth and reduces hair fall.",
        ],
      },
      {
        type: "heading",
        text: "5 Ayurvedic herbs for hair growth",
      },
      {
        type: "list",
        items: [
          "Hibiscus: Amino acids, vitamins and minerals, antioxidants in the hibiscus will help for the hair growth.",
          "Bringaraj: This herb will help to prevent the hair thinning, grey hair, dandruff, dryness of scalp etc.",
          "Aloe vera: Aloe vera helps to maintain natural PH balance of the hair. It also moisturizes the hair, Promotes overall scalp health.",
          "Amla: Stimulates hair growth, it strengthens the hair follicles and reduces hair thinning. Vitamin C in gooseberry increases the antioxidants in your body.",
          "Brahmi: This herb having rejuvenating, calming properties. It reduces hair fall, also which nourishes the hair follicles.",
        ],
      },
      {
        type: "heading",
        text: "Ayurvedic Hair pack for damaged hair",
      },
      {
        type: "card",
        text: "Ingredients:\n• Bringaraj powder – 3 tbsp\n• Amla powder – 3 tbsp\n• Methi powder – 1 tbsp\n• Henna powder – 2 tbsp\n• Egg white – 1 egg\n\nMethod:\nOne by one mix all the above-mentioned powders together and add one egg white, mix it well, add bit of water to make it a thick paste. Apply it on the scalp and hair, leave it for 60 minutes, wash it after an hour.",
      },
    ],
  },
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  // Normalize slug matching
  const post =
    articlesDatabase[slug] ||
    articlesDatabase[slug.replace(/-ayurvedic-principles|-cinnamon-restaurant/, "")] ||
    (slug.includes("panchatantra") ? articlesDatabase["panchatantra"] : null) ||
    (slug.includes("taste") ? articlesDatabase["taste-the-world"] : null) ||
    (slug.includes("hair") ? articlesDatabase["hair-fall"] : null);

  if (!post) {
    notFound();
  }

  const otherStories = Object.values(articlesDatabase).filter(
    (item) => item.slug !== post.slug
  );

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#FDFBF7] overflow-x-hidden pt-28 sm:pt-36">
      <Navbar />
      <article className="max-w-4xl mx-auto px-6 sm:px-10 pb-20">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#7A6E58] mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 hover:text-[#1B1917] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
          <span>/</span>
          <span className="text-[#1B1917]/50 truncate">{post.category}</span>
        </div>

        {/* Category & Title */}
        <div className="space-y-4 border-b border-[#E5E0D5] pb-8">
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#7A6E58] font-semibold">
            {post.category}
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1B1917] font-normal leading-[1.1] tracking-[-0.03em]">
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs font-sans text-[#1B1917]/65">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#7A6E58]" />
                <span>
                  {post.day} {post.month} {post.year}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#7A6E58]" />
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#7A6E58]" />
                <span>{post.author}</span>
              </div>
            </div>

            <button
              onClick={() => {
                if (typeof window !== "undefined" && navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href });
                } else if (typeof window !== "undefined") {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard");
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs text-[#7A6E58] hover:text-[#1B1917] transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* =========================================================
            TOP FEATURED IMAGE (UNFAILING HTML5 RESPONSIVE IMG)
        ========================================================== */}
        <div className="w-full my-10 rounded-2xl overflow-hidden border border-[#E5E0D5] bg-[#F2EDE4] shadow-xs">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto max-h-[500px] object-cover object-center block"
            loading="eager"
          />
        </div>

        {/* =========================================================
            ARTICLE EDITORIAL CONTENT
        ========================================================== */}
        <div className="space-y-7">
          {post.content.map((block, idx) => {
            if (block.type === "paragraph") {
              return (
                <p
                  key={idx}
                  className="font-sans text-base sm:text-[17px] text-[#1B1917]/85 font-light leading-[1.8]"
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === "heading") {
              return (
                <h2
                  key={idx}
                  className="font-serif text-2xl sm:text-3xl text-[#1B1917] font-normal pt-6 pb-1 border-b border-[#EAE4D7]"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list" && block.items) {
              return (
                <ul key={idx} className="space-y-3 pl-2 sm:pl-4 my-4">
                  {block.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-3 font-sans text-sm sm:text-base text-[#1B1917]/80 font-light leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7A6E58] mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "card" && block.text) {
              return (
                <div
                  key={idx}
                  className="my-8 p-6 sm:p-8 rounded-xl bg-[#FAF7F0] border border-[#E5E0D5] shadow-2xs whitespace-pre-line font-sans text-sm sm:text-[15px] text-[#1B1917]/85 font-light leading-relaxed"
                >
                  {block.text}
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Back Link CTA */}
        <div className="mt-14 pt-8 border-t border-[#E5E0D5] flex items-center justify-between">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#1B1917] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Stories</span>
          </Link>
        </div>
      </article>

      {/* =========================================================
          RECOMMENDED STORIES
      ========================================================== */}
      {otherStories.length > 0 && (
        <section className="bg-[#F7F4EE] py-16 sm:py-20 px-6 sm:px-12 lg:px-20 border-y border-[#E8E2D6]">
          <div className="max-w-7xl mx-auto">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] block mb-2 font-medium">
              Read Further
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#1B1917] font-normal mb-10">
              More from the Highland Journal
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherStories.slice(0, 2).map((other) => (
                <Link
                  key={other.slug}
                  href={`/blogs/${other.slug}`}
                  className="group bg-[#FDFBF7] p-7 rounded-xl border border-[#E5E0D5] hover:border-[#1B1917]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#7A6E58] font-mono mb-3">
                      <span>{other.category}</span>
                      <span>{other.readTime}</span>
                    </div>
                    <h4 className="font-serif text-xl text-[#1B1917] font-normal group-hover:underline">
                      {other.title}
                    </h4>
                    <p className="font-sans text-xs text-[#1B1917]/70 font-light mt-2 line-clamp-2">
                      {other.content[0]?.text || ""}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest font-medium text-[#1B1917]">
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          LIGHT PARCHMENT CONTACT & FOOTER STRIP
      ========================================================== */}
      <section className="bg-[#F2ECE1] text-[#1B1917] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#DFD8CA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-12 border-b border-[#D8D0C0]">
            <div className="lg:col-span-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#7A6E58] block mb-2 font-medium">
                Highland Hotel &bull; Bengaluru
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1B1917] font-normal mb-3">
                Consult With Our Specialists
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#1B1917]/75 font-light leading-relaxed">
                Connect directly with our resident Ayurvedic doctors for personalized dosha consultations, or make dining reservations at Cinnamon Multicuisine Restaurant.
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-4 text-xs font-sans">
              <a
                href="tel:+919035034425"
                className="bg-[#1B1917] text-[#FDFBF7] hover:bg-stone-800 px-6 py-3 rounded-xs uppercase tracking-[0.2em] font-medium transition-all shadow-xs"
              >
                Ayurveda Consultation
              </a>
              <Link
                href="/cinnamon"
                className="border border-[#1B1917]/30 hover:border-[#1B1917] text-[#1B1917] px-6 py-3 rounded-xs uppercase tracking-[0.2em] font-medium transition-all"
              >
                Cinnamon Dining
              </Link>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#1B1917]/60">
            <p>Highland Hotel &bull; All Rights Reserved &copy; {new Date().getFullYear()}</p>
            <p>#4 &amp; 5, MM Heights, Chikkasandra, Hesaraghatta Main Rd, Bengaluru</p>
          </div>
        </div>
      </section>

    </main>
  );
}