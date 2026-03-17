export type JournalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] };

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string;
  readTime: string;
  imageSrc: string;
  imageAlt: string;
  cardImageSrc: string;
  seoTitle: string;
  seoDescription: string;
  content: JournalBlock[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: 'five-benefits-regular-yoga-practice',
    title: 'Five Benefits of a Regular Yoga Practice',
    excerpt:
      'Yoga offers far more than improved flexibility. Discover five meaningful ways that regular practice can support your physical wellbeing, mental clarity and overall quality of life.',
    category: 'Yoga Practice',
    date: '15 January 2025',
    dateISO: '2025-01-15',
    readTime: '5 min read',
    imageSrc: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&h=900&fit=crop',
    imageAlt: 'Woman practising yoga in natural light',
    cardImageSrc: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop',
    seoTitle: 'Five Benefits of a Regular Yoga Practice | Present Heart Living',
    seoDescription:
      'Discover five meaningful benefits of a regular yoga practice — from improved sleep and nervous system regulation to strength and body awareness. Written by Audrey Buchanan, yoga teacher in the Scottish Highlands.',
    content: [
      {
        type: 'paragraph',
        text: 'Most people come to yoga expecting to become more flexible. A few sessions in, they notice something else happening — the shoulders drop a little more easily during the working day, the mind slows before bed, and what once felt like an uncomfortable stretch begins to feel almost natural. The flexibility follows, eventually. But it is rarely the most significant change.',
      },
      {
        type: 'paragraph',
        text: 'After more than thirty years of practising and teaching yoga, I have seen this pattern repeat itself again and again. People arrive with one expectation and discover something quieter and more sustaining. Here are five of the most meaningful benefits I have witnessed — and experienced myself — through regular practice.',
      },
      {
        type: 'heading',
        text: '1. A different relationship with tension',
      },
      {
        type: 'paragraph',
        text: 'Most of us carry physical tension we are not even aware of. It settles into the jaw, the shoulders, the hips — places where stress accumulates over time and gradually becomes our new normal.',
      },
      {
        type: 'paragraph',
        text: 'Yoga develops what teachers call proprioception: a finer awareness of where the body is in space and how it actually feels from moment to moment. As this awareness grows, you begin to notice tension earlier and have more choice about whether to hold onto it. This is not about fixing yourself. It is simply about beginning to listen.',
      },
      {
        type: 'heading',
        text: '2. Sleep improves, often quite quickly',
      },
      {
        type: 'paragraph',
        text: 'This one surprises many students. Within the first few weeks of a regular practice, people frequently report sleeping more deeply — waking less, dropping off more easily, feeling more rested in the morning.',
      },
      {
        type: 'paragraph',
        text: 'There is good reason for this. Yoga activates the parasympathetic nervous system — the part responsible for rest and recovery. When we practise in a way that emphasises breath and deliberate movement, we are essentially training the body to shift out of stress mode. That shift becomes easier to access off the mat as well.',
      },
      {
        type: 'heading',
        text: '3. Strength builds quietly',
      },
      {
        type: 'paragraph',
        text: 'Yoga is not often associated with strength, but a regular practice builds it steadily. Not isolated, bulky strength, but functional, distributed strength — through the core, along the spine, across the shoulder girdle.',
      },
      {
        type: 'paragraph',
        text: 'Many students find that these gains support other areas of their lives: better posture at a desk, more ease in daily movement, less discomfort in the lower back. It accumulates without you quite noticing, and then one day you realise you are moving differently.',
      },
      {
        type: 'heading',
        text: '4. The nervous system settles',
      },
      {
        type: 'paragraph',
        text: 'Perhaps the most profound shift from regular practice is what happens to stress reactivity over time. The breath is the only part of the autonomic nervous system we can consciously control. By working with breath deliberately — lengthening it, slowing it, becoming curious about it — we develop a real tool for self-regulation.',
      },
      {
        type: 'quote',
        text: 'Students who practise regularly often describe feeling more able to pause before reacting, more capable of finding steadiness in difficult moments. This is not magic. It is simply practice.',
      },
      {
        type: 'heading',
        text: '5. Clarity that extends beyond the mat',
      },
      {
        type: 'paragraph',
        text: 'There is a quality of attention that yoga cultivates — a willingness to stay present with what is actually happening, rather than rushing toward what comes next. Over time, this tends to soften the edges of daily life in small but meaningful ways.',
      },
      {
        type: 'paragraph',
        text: 'Students describe noticing beauty they had been walking past for years. Others find themselves listening more carefully in conversations, or responding to difficult situations with more patience than they expected. Yoga does not promise to change your life. But if practised with genuine attention, it may quietly change the way you move through it.',
      },
      {
        type: 'paragraph',
        text: 'If you would like to experience this for yourself, you are warmly welcome to join us. All classes at Present Heart Living are designed for mixed levels, and no previous experience is required.',
      },
    ],
  },
  {
    slug: 'beginners-guide-to-breathwork',
    title: "A Beginner's Guide to Breathwork",
    excerpt:
      'Breathwork can seem mysterious, but at its core it is simply about developing a conscious relationship with your breathing. Learn how to get started with practical techniques you can try today.',
    category: 'Breathwork',
    date: '28 February 2025',
    dateISO: '2025-02-28',
    readTime: '6 min read',
    imageSrc: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=1600&h=900&fit=crop',
    imageAlt: 'Person in peaceful meditation in natural surroundings',
    cardImageSrc: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=800&h=500&fit=crop',
    seoTitle: "A Beginner's Guide to Breathwork | Present Heart Living",
    seoDescription:
      'New to breathwork? Learn what it is, why it matters, and three simple techniques you can try today. From Audrey Buchanan at Present Heart Living in the Scottish Highlands.',
    content: [
      {
        type: 'paragraph',
        text: 'Breathwork is one of those terms that can feel slightly impenetrable from the outside. It sounds either intensely spiritual or vaguely scientific, and it can be hard to know what it actually means in practice.',
      },
      {
        type: 'paragraph',
        text: 'Simply put, breathwork is the practice of bringing conscious attention to the breath — and then, in various ways, working with it deliberately. We breathe approximately 20,000 times each day without thinking about it. Breathwork begins with the premise that those breaths are not neutral. How we breathe affects how we feel, how we think, and how we respond to what life brings.',
      },
      {
        type: 'heading',
        text: 'Why does it matter?',
      },
      {
        type: 'paragraph',
        text: 'The breath is unique among bodily functions in that it operates automatically — keeping you alive while you sleep — but can also be brought under conscious control. This makes it a remarkable bridge between the involuntary and voluntary nervous systems.',
      },
      {
        type: 'paragraph',
        text: 'When we breathe in a shallow, rapid way — as many of us do when stressed, anxious, or simply absorbed in work — we send a signal to the nervous system that reinforces that stress. When we slow the breath deliberately, particularly lengthening the exhale, we activate the parasympathetic nervous system and begin to move the body toward calm. This is not about suppressing how we feel. It is about developing more choice in how we respond.',
      },
      {
        type: 'heading',
        text: 'Three practices worth knowing',
      },
      {
        type: 'subheading',
        text: 'Natural breath awareness',
      },
      {
        type: 'paragraph',
        text: 'The simplest starting point. Sit or lie comfortably, close your eyes, and simply observe your breath without trying to change anything. Notice where it moves in the body — the chest, the belly, the sides of the ribcage. Notice whether it is shallow or deep, smooth or slightly uneven.',
      },
      {
        type: 'paragraph',
        text: 'This practice alone, done for five to ten minutes, can bring a noticeable shift in how you feel. It is not dramatic. But it is genuinely useful, and it costs nothing.',
      },
      {
        type: 'subheading',
        text: 'Extended exhale breathing',
      },
      {
        type: 'paragraph',
        text: 'Breathe in for a count of four. Breathe out for a count of six or eight. The longer exhale activates the vagus nerve and signals to the body that it is safe to relax. This technique is particularly useful before sleep, in the middle of a stressful day, or before any situation that tends to provoke anxiety.',
      },
      {
        type: 'subheading',
        text: 'Box breathing',
      },
      {
        type: 'paragraph',
        text: 'Breathe in for four counts. Hold for four. Breathe out for four. Hold for four. The symmetry creates a quiet, steady rhythm that many people find grounding. This technique is used by everyone from meditators to surgeons — a reminder that the tools available to us are already present.',
      },
      {
        type: 'heading',
        text: 'What to expect in a breathwork session',
      },
      {
        type: 'paragraph',
        text: 'At Present Heart Living, breathwork sessions are unhurried. There is no pressure to perform or to achieve a particular state. Students are guided gently through different techniques, usually beginning with simple awareness and gradually introducing more structured practices.',
      },
      {
        type: 'quote',
        text: 'Some people experience a noticeable release — a feeling of lightness, warmth, or emotional ease. Others simply feel quieter and more settled. Both responses are equally valid.',
      },
      {
        type: 'paragraph',
        text: 'Sessions typically end with a period of stillness, allowing whatever has shifted to integrate naturally. There is no right way to feel afterwards.',
      },
      {
        type: 'heading',
        text: 'Starting at home',
      },
      {
        type: 'paragraph',
        text: 'Five minutes of conscious breathing each day will do more than an hour once a month. Consistency matters more than duration.',
      },
      {
        type: 'paragraph',
        text: 'The simplest approach: before you get out of bed in the morning, take ten deliberate breaths. Lengthen each exhale slightly. Notice how you feel before and after. That is enough to begin.',
      },
    ],
  },
  {
    slug: 'preparing-first-yoga-retreat-scotland',
    title: 'Preparing for Your First Yoga Retreat in Scotland',
    excerpt:
      "Thinking about attending a yoga retreat in Scotland? Here's everything you need to know — from what to pack to how to prepare mentally for an experience that could be truly transformative.",
    category: 'Retreats',
    date: '12 March 2025',
    dateISO: '2025-03-12',
    readTime: '7 min read',
    imageSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
    imageAlt: 'Scottish Highlands mountain landscape at dawn',
    cardImageSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    seoTitle: 'Preparing for Your First Yoga Retreat in Scotland | Present Heart Living',
    seoDescription:
      'Everything you need to know before your first yoga retreat in Scotland — what to expect, what to bring, and how to prepare mentally. From Present Heart Living in the Scottish Highlands.',
    content: [
      {
        type: 'paragraph',
        text: 'The question I hear most often from people considering their first retreat is some version of this: Am I ready?',
      },
      {
        type: 'paragraph',
        text: 'They wonder whether their yoga is good enough, whether they will be the least experienced person in the room, whether they will feel out of place. These concerns are entirely understandable — and they are almost universally unfounded.',
      },
      {
        type: 'paragraph',
        text: 'A retreat is not a test. It is an opportunity to step outside the rhythms of ordinary life and discover what becomes possible when you give yourself genuine time and space. Experience level is not a barrier to any of that.',
      },
      {
        type: 'heading',
        text: 'You do not need to be a practitioner first',
      },
      {
        type: 'paragraph',
        text: 'Every retreat at Present Heart Living is designed to welcome participants at all levels. Practices are offered with modifications so that complete beginners can engage fully, while those with more experience can deepen their practice in their own way.',
      },
      {
        type: 'paragraph',
        text: 'The only quality that makes a retreat worthwhile is a genuine willingness to show up with curiosity. Everything else can be taught, adapted, or simply set aside.',
      },
      {
        type: 'heading',
        text: 'What a retreat day looks like',
      },
      {
        type: 'paragraph',
        text: 'Days are structured gently. A morning practice — usually yoga or breathwork — sets the tone for the day ahead. This is followed by time for meals, for walking, for sitting quietly, or for writing in a journal if that appeals to you.',
      },
      {
        type: 'paragraph',
        text: 'Afternoons may include a second practice, a workshop, or simply free time in nature. Evenings tend toward the restorative — sound baths, gentle yoga nidra, or quiet conversation. There is space built into every retreat to do absolutely nothing. This often turns out to be the most valuable time of all.',
      },
      {
        type: 'heading',
        text: 'What to bring',
      },
      {
        type: 'list',
        items: [
          'Comfortable layers — the Highland weather can shift quickly, even in summer',
          'Waterproof footwear for walking on uneven ground',
          'Loose, stretchy clothing for practice sessions',
          'A yoga mat, if you have one (mats are available to borrow)',
          'A warm jumper or fleece for cooler evenings',
          'A small notebook and pen',
          'Minimal technology — many participants choose to limit phone use, and find it quietly liberating',
        ],
      },
      {
        type: 'heading',
        text: 'On the Highland setting specifically',
      },
      {
        type: 'paragraph',
        text: 'The landscape matters more than many people anticipate. There is something about the Scottish Highlands — the scale of the hills, the quality of the light, the particular silence of open land — that creates conditions for genuine rest in a way that urban environments rarely manage.',
      },
      {
        type: 'quote',
        text: 'Students frequently comment on how quickly they settle. The absence of noise and the presence of natural beauty seem to work directly on the nervous system, supporting the inner work that a retreat makes possible.',
      },
      {
        type: 'paragraph',
        text: 'If you can arrive a little early to adjust to the pace and the light, it is worth doing.',
      },
      {
        type: 'heading',
        text: 'What people discover',
      },
      {
        type: 'paragraph',
        text: 'In my experience, people arrive expecting a pleasant break and leave with something they had not anticipated: a clearer sense of what they actually need, a renewed capacity for stillness, and often a surprisingly deep connection with people they had only just met.',
      },
      {
        type: 'paragraph',
        text: 'A retreat does not resolve everything. But it offers something genuinely rare — time that belongs entirely to you, held in a landscape of uncommon beauty, supported by practices designed to nourish your wellbeing in the most honest way possible.',
      },
      {
        type: 'paragraph',
        text: 'We would love to welcome you.',
      },
    ],
  },
  {
    slug: 'what-mindfulness-actually-means',
    title: "What Mindfulness Actually Means — And Why It's Simpler Than You Think",
    excerpt:
      'Mindfulness has become one of the most used — and most misunderstood — words in modern wellbeing. Here is what it actually is, and why it might already be closer to your experience than you realise.',
    category: 'Mindfulness',
    date: '3 April 2025',
    dateISO: '2025-04-03',
    readTime: '6 min read',
    imageSrc: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&h=900&fit=crop',
    imageAlt: 'Still water reflecting morning light',
    cardImageSrc: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop',
    seoTitle: "What Mindfulness Actually Means | Present Heart Living",
    seoDescription:
      'Mindfulness is simpler than the wellness industry suggests. Audrey Buchanan of Present Heart Living explains what it really means and how to bring it into everyday life in the Scottish Highlands.',
    content: [
      {
        type: 'paragraph',
        text: 'The word mindfulness appears everywhere now. On apps, in corporate training programmes, on the labels of tea. It has become so broadly applied that it can be genuinely difficult to know what it refers to — and whether it has anything useful to offer.',
      },
      {
        type: 'paragraph',
        text: 'I want to offer a simpler version of it. Not one that requires a particular app, or a meditation cushion, or a significant rearrangement of your daily life. Just a description of what it actually is, and why it might already be closer to your experience than you realise.',
      },
      {
        type: 'heading',
        text: 'What mindfulness actually is',
      },
      {
        type: 'paragraph',
        text: 'At its simplest, mindfulness is paying attention to what is happening right now — in the body, in the mind, and in the world around you — without immediately trying to change it or judge it.',
      },
      {
        type: 'paragraph',
        text: 'That is all. No special equipment required. No particular posture. No requirement to empty the mind, which is both impossible and not the point. The mind will wander — that is what minds do. Mindfulness is simply the practice of noticing when it has wandered and returning, gently and without drama, to the present moment.',
      },
      {
        type: 'quote',
        text: 'The returning is the practice. Not the staying. Each time you notice your mind has gone elsewhere and bring it back, you have done the thing.',
      },
      {
        type: 'heading',
        text: 'Where it actually lives',
      },
      {
        type: 'paragraph',
        text: 'Mindfulness does not only happen on a meditation cushion. It can be present in any moment you choose to give your full attention to.',
      },
      {
        type: 'paragraph',
        text: 'Washing up slowly and feeling the warmth of the water. Walking and actually noticing the ground beneath your feet rather than replaying a conversation from three days ago. Eating a meal without a screen nearby and tasting what you are eating.',
      },
      {
        type: 'paragraph',
        text: 'These are not inferior versions of mindfulness. They are exactly what it is. The formal practice of sitting and meditating develops the skill in a concentrated way — but the point of developing it is always to bring it into ordinary life.',
      },
      {
        type: 'heading',
        text: 'Why it helps',
      },
      {
        type: 'paragraph',
        text: 'Most of our suffering — the word is strong, but I mean the ordinary friction of daily life — arises not from what is actually happening right now, but from our thoughts about it. The anticipation of difficulty, the rehearsal of arguments, the rumination on what was said or not said.',
      },
      {
        type: 'paragraph',
        text: 'Mindfulness does not make these thoughts disappear. But it creates a small but significant gap between the thought and the reaction. That gap is where choice lives. With practice, that gap widens slightly, and the quality of how we move through our days tends to shift.',
      },
      {
        type: 'heading',
        text: 'A simple place to start',
      },
      {
        type: 'paragraph',
        text: 'Choose one thing you do every day — making tea, showering, walking from the car to your front door — and give it your complete attention. Not for an hour. Just for that moment.',
      },
      {
        type: 'paragraph',
        text: 'Notice the sensations. Notice when your mind wanders off to something else. Notice the return. That is a mindfulness practice. And it is enough.',
      },
    ],
  },
  {
    slug: 'your-first-yoga-class-what-to-expect',
    title: 'Your First Yoga Class: What to Expect',
    excerpt:
      'Feeling nervous about your first yoga class? That is completely normal. Here is an honest guide to what actually happens — so you can arrive with less anxiety and more curiosity.',
    category: 'Beginner Guides',
    date: '22 April 2025',
    dateISO: '2025-04-22',
    readTime: '5 min read',
    imageSrc: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&h=900&fit=crop',
    imageAlt: 'Yoga class in a light studio setting',
    cardImageSrc: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop',
    seoTitle: 'Your First Yoga Class: What to Expect | Present Heart Living',
    seoDescription:
      'Nervous about your first yoga class? Audrey Buchanan walks you through exactly what to expect — from arriving at the studio to the final relaxation. No experience needed.',
    content: [
      {
        type: 'paragraph',
        text: 'Nearly everyone I have ever taught arrived to their first class carrying some version of the same worry: I am not flexible enough. I will not know what to do. Everyone else will be better than me.',
      },
      {
        type: 'paragraph',
        text: 'I understand why those thoughts arise. Yoga is often portrayed in ways that make it look like an advanced performance rather than an accessible practice. The reality of a class is quite different — and knowing what to expect can make that first step much easier.',
      },
      {
        type: 'heading',
        text: 'Before you arrive',
      },
      {
        type: 'paragraph',
        text: 'Arrive five or ten minutes early if you can. This gives you time to settle, to let the teacher know it is your first class, and to ask any questions. Teachers genuinely want to know if you are new — it helps us tailor what we offer and make sure you feel supported throughout.',
      },
      {
        type: 'paragraph',
        text: 'Wear comfortable clothing that allows you to move freely. You do not need specialist yoga wear. Anything stretchy will do. Leave your shoes and socks at the door — yoga is practised barefoot.',
      },
      {
        type: 'heading',
        text: 'What happens in the room',
      },
      {
        type: 'paragraph',
        text: 'Classes at Present Heart Living begin with a short settling period — usually a few minutes of stillness or gentle breathing to help everyone arrive properly. This is not a test of your ability to meditate. It is simply a transition from the pace of the day into something slower.',
      },
      {
        type: 'paragraph',
        text: 'From there, we move through a sequence of postures — sometimes standing, sometimes seated or lying down, always with options for different bodies and different days. Yoga is not one-size-fits-all. A good teacher will offer variations throughout, and you are always free to take the gentler option or to rest in child\'s pose whenever you need to.',
      },
      {
        type: 'heading',
        text: 'On not being flexible',
      },
      {
        type: 'paragraph',
        text: 'This is the most common concern, and worth addressing directly. Flexibility is not a prerequisite for yoga — it is one of several things that may develop over time as a result of practice. Turning up with tight hips and stiff shoulders is not a problem. It is actually the most common starting point.',
      },
      {
        type: 'quote',
        text: 'You do not need to be flexible to do yoga, any more than you need to be fit to start exercising. You come as you are, and the practice meets you there.',
      },
      {
        type: 'heading',
        text: 'The end of class',
      },
      {
        type: 'paragraph',
        text: 'Almost every yoga class ends with savasana — a period of lying flat on your back in complete stillness, usually five to ten minutes. This is not a rest between activities. It is considered one of the most important parts of the practice, allowing the body and nervous system to integrate everything that has come before.',
      },
      {
        type: 'paragraph',
        text: 'It can feel strange at first — particularly if you are someone who finds stillness difficult. That is fine. Over time, it tends to become the part of class that students most look forward to.',
      },
      {
        type: 'heading',
        text: 'After your first class',
      },
      {
        type: 'paragraph',
        text: 'You may feel a little muscle soreness in the following day or two — particularly in areas you are not used to working. This is normal and passes quickly. You may also feel noticeably calmer, clearer, or more rested than usual. Both are entirely typical responses.',
      },
      {
        type: 'paragraph',
        text: 'If you have any questions before your first class, please do not hesitate to get in touch. You are very welcome here, exactly as you are.',
      },
    ],
  },
  {
    slug: 'moving-with-the-seasons',
    title: 'Moving with the Seasons: Adapting Your Yoga Practice Through the Year',
    excerpt:
      'Our bodies are not the same in January as they are in July. Here is how to let the turning year guide your practice — and why moving with the seasons rather than against them can be profoundly restorative.',
    category: 'Seasonal Living',
    date: '15 May 2025',
    dateISO: '2025-05-15',
    readTime: '7 min read',
    imageSrc: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=1600&h=900&fit=crop',
    imageAlt: 'Highland landscape shifting from autumn into winter light',
    cardImageSrc: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&h=500&fit=crop',
    seoTitle: 'Moving with the Seasons: Adapting Your Yoga Practice | Present Heart Living',
    seoDescription:
      'Learn how to adapt your yoga practice through the seasons — from energising spring flows to restorative winter yin. Audrey Buchanan of Present Heart Living shares a seasonal approach to movement.',
    content: [
      {
        type: 'paragraph',
        text: 'Living in the Highlands makes the seasons impossible to ignore. The light changes dramatically between winter and summer — from the almost twenty hours of daylight in June to the deep, early dark of December. The weather shifts, the land shifts, and I have noticed over the years that my body shifts too.',
      },
      {
        type: 'paragraph',
        text: 'A yoga practice that felt alive in August can feel oddly effortful in November. This is not a sign that something is wrong. It is the body doing exactly what it is designed to do — responding intelligently to its environment. The question is whether we meet that intelligence with curiosity or override it with obligation.',
      },
      {
        type: 'heading',
        text: 'Spring: building energy gently',
      },
      {
        type: 'paragraph',
        text: 'After the long contraction of winter, spring carries a genuine energy of expansion. This is a good time to gradually introduce more dynamic practice — sun salutations, standing sequences, backbends that open the chest and lift the gaze.',
      },
      {
        type: 'paragraph',
        text: 'That said, early spring still has a rawness to it, particularly in the north. I tend to begin sessions with more warmth than I would in summer, allowing the body longer to open before asking anything demanding of it.',
      },
      {
        type: 'heading',
        text: 'Summer: moving fully and freely',
      },
      {
        type: 'paragraph',
        text: 'Summer is when the body tends to be most willing. Warmth makes the muscles more pliable, and the longer days create a natural generosity of energy. This is the season to explore — to linger in postures that previously felt out of reach, to try something unfamiliar, to enjoy the full range of what the body can do.',
      },
      {
        type: 'paragraph',
        text: 'Summer practice can afford to be more vigorous. But even in June and July, I hold to the principle that practice should leave you feeling better than when you began — not depleted.',
      },
      {
        type: 'heading',
        text: 'Autumn: turning inward',
      },
      {
        type: 'paragraph',
        text: 'Autumn is my favourite season for yoga. There is a particular quality of attention available in September and October — a willingness to go inward that does not come as easily in summer. The practice can shift toward longer holds, more floor-based sequences, and a greater emphasis on the breath.',
      },
      {
        type: 'quote',
        text: 'Just as the trees release what they no longer need, autumn practice can become a kind of letting go — of effort, of striving, of the accumulated tensions of a busy year.',
      },
      {
        type: 'heading',
        text: 'Winter: restoration and repair',
      },
      {
        type: 'paragraph',
        text: 'Winter is for yin yoga, yoga nidra, and restorative practice. Long holds in supported postures. Bolsters and blankets. Breath practices that warm and calm. The body is asking to consolidate and recover, and a wise practice honours that.',
      },
      {
        type: 'paragraph',
        text: 'This does not mean doing nothing. It means doing differently. A gentle morning practice in winter can be transformative — not despite its quietness, but because of it.',
      },
      {
        type: 'heading',
        text: 'Listening as a practice in itself',
      },
      {
        type: 'paragraph',
        text: 'The deeper principle here is not about following a rigid seasonal programme. It is about developing the habit of listening — to the body, to the season, to what is actually needed rather than what we think we should be doing.',
      },
      {
        type: 'paragraph',
        text: 'That quality of listening is, in its own way, the most valuable thing yoga has to offer. The seasonal context simply makes it more vivid.',
      },
    ],
  },
  {
    slug: 'quiet-case-for-rest',
    title: 'The Quiet Case for Rest: Why Slowing Down Is Not a Luxury',
    excerpt:
      'We have made productivity a virtue and rest a guilty pleasure. Here is why that is back to front — and what genuine rest actually looks like and does for the body and mind.',
    category: 'Wellbeing',
    date: '10 June 2025',
    dateISO: '2025-06-10',
    readTime: '6 min read',
    imageSrc: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?w=1600&h=900&fit=crop',
    imageAlt: 'Peaceful restorative yoga pose with gentle afternoon light',
    cardImageSrc: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?w=800&h=500&fit=crop',
    seoTitle: 'The Quiet Case for Rest: Why Slowing Down Matters | Present Heart Living',
    seoDescription:
      'Rest is not laziness. Audrey Buchanan of Present Heart Living explores why genuine rest matters for wellbeing — and what it actually looks like in practice.',
    content: [
      {
        type: 'paragraph',
        text: 'Something I hear often in conversations with students, particularly new ones: I feel guilty resting. I know I should slow down, but I find it almost impossible to stop.',
      },
      {
        type: 'paragraph',
        text: 'This is not a personal failing. It is the result of a cultural attitude toward productivity that has become so embedded most of us barely notice it. Busyness is a status symbol. Rest is something we permit ourselves only when we have earned it — and by that measure, the earning never quite seems to be complete.',
      },
      {
        type: 'heading',
        text: 'What rest actually does',
      },
      {
        type: 'paragraph',
        text: 'From a physiological perspective, rest is not the absence of activity — it is active recovery. During genuine rest, the body repairs tissue, consolidates memory, regulates hormones, and processes emotional experience. These are not minor background tasks. They are fundamental to functioning well.',
      },
      {
        type: 'paragraph',
        text: 'Sleep is the most obvious example, but it extends beyond sleep. Time spent in quiet — walking without headphones, sitting without a screen, lying in savasana at the end of a yoga class — allows the nervous system to do the work it cannot do when it is constantly stimulated.',
      },
      {
        type: 'heading',
        text: 'The difference between rest and collapse',
      },
      {
        type: 'paragraph',
        text: 'There is a distinction worth making between true rest and the kind of exhausted collapse that happens when we have run ourselves down completely. Scrolling through a phone for an hour is not rest, even though it feels passive. Watching television in a state of numbed depletion is not rest either.',
      },
      {
        type: 'paragraph',
        text: 'True rest involves a degree of receptivity — a willingness to simply be, without agenda or stimulation. It is harder than it sounds if you are not used to it. The mind resists, offers things to worry about, generates to-do lists. This is normal. It is also, with practice, something that becomes easier.',
      },
      {
        type: 'quote',
        text: 'The body knows how to rest. What we often need to learn is how to let it.',
      },
      {
        type: 'heading',
        text: 'What restorative yoga offers',
      },
      {
        type: 'paragraph',
        text: 'Restorative yoga is built around this principle. Postures are held for long periods — five to fifteen minutes — with full support from props so that the body can release entirely without effort. There is nothing to achieve. The practice is simply the practice of being still and letting the body do what it already knows how to do.',
      },
      {
        type: 'paragraph',
        text: 'Many students find the first few minutes uncomfortable. The mind is restless and the body is not used to being asked to do nothing. By the midpoint of a session, something tends to shift. A heaviness settles. The breath slows. What felt like a waste of time begins to feel like exactly what was needed.',
      },
      {
        type: 'heading',
        text: 'Small acts of deliberate rest',
      },
      {
        type: 'list',
        items: [
          'Ten minutes of lying flat on the floor in the middle of the day, eyes closed, no phone nearby',
          'A walk without headphones — just the sound of wherever you are',
          'Sitting with a cup of tea and giving it your complete attention for five minutes',
          'Savasana at the end of your yoga practice, taken seriously rather than skipped',
          'An evening without screens for the final hour before bed',
        ],
      },
      {
        type: 'paragraph',
        text: 'None of these require a special retreat or significant time. They require only the intention to make space — and the willingness to discover that slowing down is not a loss but a recovery of something that was always there.',
      },
    ],
  },
  {
    slug: 'what-pilates-can-do-for-your-body',
    title: 'What Pilates Can Do for Your Body',
    excerpt:
      'Pilates has a reputation for being gentle. It is — but it is also genuinely demanding in the most useful way. Here is an honest look at what a regular Pilates practice actually delivers.',
    category: 'Pilates',
    date: '24 June 2025',
    dateISO: '2025-06-24',
    readTime: '6 min read',
    imageSrc: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&h=900&fit=crop',
    imageAlt: 'Pilates movement practice in a bright studio',
    cardImageSrc: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop',
    seoTitle: 'What Pilates Can Do for Your Body | Present Heart Living',
    seoDescription:
      'What does a regular Pilates practice actually deliver? Audrey Buchanan of Present Heart Living explains the real physical benefits — core strength, posture, joint health and more.',
    content: [
      {
        type: 'paragraph',
        text: 'Pilates has something of a perception problem. People assume it is either very easy — suitable only for older adults in rehabilitation — or very hard and inaccessible, reserved for dancers and athletes. Neither is accurate.',
      },
      {
        type: 'paragraph',
        text: 'A well-taught Pilates class is specific, precise, and deeply effective — but always accessible. The movements are designed to develop the body intelligently, and when they are taught well, they can genuinely transform how you feel in your body over time.',
      },
      {
        type: 'heading',
        text: 'Core strength that actually functions',
      },
      {
        type: 'paragraph',
        text: 'Pilates is most famous for building core strength, and this reputation is deserved. But it is worth being precise about what that means. The core in Pilates is not just the visible abdominal muscles — it includes the deep spinal muscles, the pelvic floor, the diaphragm, and the muscles around the hips and lower back.',
      },
      {
        type: 'paragraph',
        text: 'This deeper engagement is what makes Pilates so effective for back pain and postural issues. Many people carry significant tension and weakness through these deep layers without knowing it. Pilates works there directly — and the results tend to be felt first in ordinary movement: getting up from a chair more easily, carrying shopping without back discomfort, sitting at a desk without the familiar afternoon ache.',
      },
      {
        type: 'heading',
        text: 'Posture and alignment',
      },
      {
        type: 'paragraph',
        text: 'Posture is not really about standing up straight. It is about how the body habitually organises itself — the balance of tension and release across different muscle groups, the relationships between the head, neck, shoulders, spine and pelvis.',
      },
      {
        type: 'paragraph',
        text: 'Pilates develops an awareness of these relationships and gently corrects imbalances that have accumulated over years of sitting, desk work, or habitual movement patterns. Students often notice the change in their reflection before they consciously feel it — something has shifted in how they carry themselves.',
      },
      {
        type: 'heading',
        text: 'Flexibility and joint health',
      },
      {
        type: 'paragraph',
        text: 'Alongside strength, Pilates develops active flexibility — the ability to move through a full range with control, rather than simply being able to achieve a position passively. This distinction matters for joint health, particularly as we age.',
      },
      {
        type: 'quote',
        text: 'Joints that are both strong and mobile are resilient joints. Pilates works the two together, which is part of why it tends to be so kind to the body even when practised regularly and consistently.',
      },
      {
        type: 'heading',
        text: 'What to expect in a session',
      },
      {
        type: 'paragraph',
        text: 'Classes at Present Heart Living are taught in small groups, which allows for detailed attention and appropriate modifications. Sessions typically move from breath awareness and gentle activation through to more demanding sequences, with a strong emphasis throughout on precision and quality of movement over quantity.',
      },
      {
        type: 'paragraph',
        text: 'You will not finish a session feeling exhausted — but you will likely feel the work the following day, particularly in areas you had not realised were underused.',
      },
      {
        type: 'heading',
        text: 'Who it is for',
      },
      {
        type: 'list',
        items: [
          'Those managing or recovering from back pain or postural issues',
          'People returning to exercise after a long break, or after illness or injury',
          'Anyone who spends significant time sitting — at a desk, driving, or otherwise',
          'Those wanting to complement another form of exercise with intelligent, precise movement',
          'Complete beginners who want a movement practice that is both accessible and genuinely effective',
        ],
      },
      {
        type: 'paragraph',
        text: 'If you have been thinking about trying Pilates, I would encourage you to come along. There is no particular fitness level required — only a willingness to pay attention and move with care. That, in my experience, is more than enough to begin.',
      },
    ],
  },
];

export function getPostBySlug(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export const topicLinks: Record<string, string> = {
  'Yoga Practice': '/journal/five-benefits-regular-yoga-practice',
  'Breathwork': '/journal/beginners-guide-to-breathwork',
  'Mindfulness': '/journal/what-mindfulness-actually-means',
  'Retreats': '/journal/preparing-first-yoga-retreat-scotland',
  'Beginner Guides': '/journal/your-first-yoga-class-what-to-expect',
  'Seasonal Living': '/journal/moving-with-the-seasons',
  'Wellbeing': '/journal/quiet-case-for-rest',
  'Pilates': '/journal/what-pilates-can-do-for-your-body',
};
