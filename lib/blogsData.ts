export interface BlogContentBlock {
  type: "paragraph" | "heading" | "list" | "card";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  day: string;
  month: string;
  year: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  image: string;
  content: BlogContentBlock[];
}

export const blogsData: Record<string, BlogPost> = {
  panchatantra: {
    slug: "panchatantra",
    day: "16",
    month: "Aug",
    year: "2024",
    category: "Ayurveda",
    readTime: "4 min read",
    title: "Panchatantra",
    image: "/blog1.webp",
    excerpt:
      "These are the 5 basic rules and regulations that one should follow in order to lead a healthy life. These are the pillars of a healthy lifestyle.",
    author: "Highland Wellness Team",
    content: [
      {
        type: "paragraph",
        text: "These are the 5 basic rules and regulations that one should follow in order to lead a healthy life. These are the pillars of a healthy lifestyle. These principles are scientifically addressed and proven to be effective in modifying the lifestyle thereby preventing lifestyle-related disorders.",
      },
      {
        type: "card",
        text: "The Five Pillars:\n• Take two meals a day\n• Drink 2 seers of water per day\n• Exercise 1 hour per day\n• Fast once in a week\n• Adequate Sleep",
      },
      {
        type: "heading",
        text: "Take two meals a day",
      },
      {
        type: "paragraph",
        text: "It is observed that giving a sufficient gap between each meal helps in better digestion of the food that we eat. Taking 2 balanced meals nourishes the body by improving the absorption rate and increasing the metabolism. Studies describe about the potential benefits of consuming 2 meals per day. It naturally helps in fat loss by giving the body a chance to burn the accumulated fat reserves.",
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
        type: "heading",
        text: "Drink 2 seers of water",
      },
      {
        type: "paragraph",
        text: "Up to 60% of human body is composed of fluid, it is essential to maintain the hydrated status of the body for the ideal functioning of the internal organs. The major intra and extra cellular fluids is composed of water. Each organ and its metabolic reactions along with formation of various components of the body require water for its action. Therefore, it is essential to drink a minimum of 2 liters of water per day. Recent research show, a minimum of 3 liters of water is ideal for body metabolism.",
      },
      {
        type: "paragraph",
        text: "Can we consume water during the meals? No, it is not recommended to drink water in between or immediately after the meal as it neutralizes the digestive juices and enzymes required for the digestion and absorption. It is ideal to consume normal room temperature water or lukewarm water.",
      },
      {
        type: "heading",
        text: "Exercise 1 Hour per day",
      },
      {
        type: "paragraph",
        text: "Exercise and physical activity act as a bridge between nutrition and drainage. It is essential to utilize the nutrition from the food we eat. The food that we eat is utilized mainly for the energy production. Exercise or physical activity acts as a medium to utilize the energy and also aids in removal of the metabolic end products formed during the metabolic reactions.",
      },
      {
        type: "heading",
        text: "Fast once a week",
      },
      {
        type: "paragraph",
        text: "Fasting is considered as one of the most important and authentic treatments in the system of Naturopathy and Yoga. Fasting is voluntary abstinence from food to provide an opportunity to the body to heal itself. Fasting works on the principle of Autophagy, which means the body has the capacity to heal itself by eliminating toxins.",
      },
      {
        type: "heading",
        text: "Adequate Sleep",
      },
      {
        type: "paragraph",
        text: "The human body has its own internal 24-hour clock called the circadian rhythm. This is controlled by a hormone called melatonin, released from the pineal gland. Having a regular sleep-wake cycle is necessary for adequate synthesis and functioning of melatonin.",
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
    title: "Taste the World: A Multi-Cuisine Adventure at Cinnamon Restaurant",
    image: "/blog2.webp",
    excerpt:
      "Hotel Highland is the location where Cinnamon Restaurant is found, hence its elegance and sophistication. A culinary treasure that allows guests to try out a mix of global cuisines like no other place.",
    author: "Cinnamon Culinary Team",
    content: [
      {
        type: "paragraph",
        text: "Hotel Highland is the location where Cinnamon Restaurant is found, hence its elegance and sophistication. It’s a culinary treasure situated within the confines of Hotel Highland, which allows guests to try out a mix of cuisines like no other place. It is more than just a restaurant that is in the middle of a busy city; it is a melting pot for international tastes. The incredibly diverse menu includes Indian cuisine, as well as Thai and Sri Lankan specialties.",
      },
      {
        type: "heading",
        text: "An Adventure in Fine Dining",
      },
      {
        type: "paragraph",
        text: "Every meal at Cinnamon Restaurant is a journey across the continents. The menu is extensive and presents various global flavors that show how the world has become interconnected through food. From India’s aromatic spices to the vibrant tastes of Thailand and Sri Lanka, there’s so much to choose from. Whether it’s an Indian curry, a Thai soup, or a spicy dish from Sri Lanka, Cinnamon offers authentic and innovative tastes.",
      },
      {
        type: "heading",
        text: "Service Excellence & Ambiance",
      },
      {
        type: "paragraph",
        text: "Cinnamon blends with this passion for service excellence to make sure that everything goes smoothly right from when one enters the restaurant till leaving satisfied. The most unique and welcoming atmosphere of Cinnamon Restaurant is suited for any occasion-whether a relaxed lunch, a romantic dinner, or a family celebration.",
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
    title: "Hair fall",
    image: "/blog3.webp",
    excerpt:
      "Hair fall is also called as alopecia or baldness. It is normal to lose 50-100 hairs per day, but stress, nutrition, and hormonal imbalances can affect growth. Discover holistic Ayurvedic remedies.",
    author: "KEVA Ayurveda Clinic",
    content: [
      {
        type: "paragraph",
        text: "Hair fall is also called as alopecia or baldness. In which loss of hair will be there either from head or the body. It is normal for a person to lose 50-100 hairs per day. For most of the people, lost hair will grow back, but in some diseases, aging, stress, or hereditary conditions can affect your hair growth.",
      },
      {
        type: "heading",
        text: "Causes of Hair Fall",
      },
      {
        type: "list",
        items: [
          "Stress and anxiety – Pushes hair from the growth phase into the resting phase.",
          "Genetics – Androgenetic alopecia inherited from parents.",
          "Malnutrition – Deficiencies in iron, vitamin D, and zinc.",
          "Ageing – Hair growth slows as follicular regeneration diminishes.",
          "Hormonal imbalances – Excess androgens and reduced estrogen/progesterone.",
          "Thyroid diseases – Both hyperthyroidism and hypothyroidism disrupt follicle roots.",
        ],
      },
      {
        type: "heading",
        text: "Foods That Promote Hair Growth",
      },
      {
        type: "list",
        items: [
          "Spinach – Rich in vitamin A, iron, folate, and vitamin C to keep the scalp conditioned.",
          "Eggs – High in protein and biotin to fortify hair shaft structure.",
          "Berries & Sweet Potatoes – Loaded with antioxidants and beta-carotene.",
          "Nuts & Seeds – Pumpkin seeds, walnuts, almonds, and chia for zinc and fatty acids.",
        ],
      },
      {
        type: "heading",
        text: "Ayurvedic Hair Pack for Damaged Hair",
      },
      {
        type: "card",
        text: "Formula:\n• Bhringraj powder – 3 tbsp\n• Amla powder – 3 tbsp\n• Methi powder – 1 tbsp\n• Henna powder – 2 tbsp\n• Egg white – 1 egg\n\nMethod:\nCombine all powders, add one egg white, mix thoroughly, and add a small amount of warm water to form a smooth paste. Apply over scalp and hair, leave for 60 minutes, then rinse with lukewarm water.",
      },
    ],
  },
};