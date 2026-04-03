export type QuizQuestion = {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    value: string;
  }[];
};

export type ValueDrop = {
  id: string;
  type: 'value-drop';
  icon: 'brain' | 'chart' | 'spiral';
  text: string;
  subtext?: string;
  cta: string;
};

export const quizFlow = [
  {
    id: 'intro',
    type: 'intro',
    headline: "Let's find out why you eat when you're not hungry.",
    subhead: "8 questions. No judgment. You'll get your specific pattern, what's driving it, and one thing you can do this week.",
    cta: "Start the Quiz",
    belowCta: "Based on behavioral psychology and neuroscience. No diet talk.",
    socialProof: "14,000+ people have taken this quiz"
  },
  {
    id: 'trigger',
    type: 'question',
    question: "When do you most often eat when you're not physically hungry?",
    options: [
      { id: 'A', text: "After a stressful day — I need to decompress", value: "stress" },
      { id: 'B', text: "When I'm bored or understimulated — I need something to do", value: "boredom" },
      { id: 'C', text: "When I feel lonely, sad, or disconnected", value: "emotional" },
      { id: 'D', text: "Late at night — it's like a switch flips after dinner", value: "nighttime" }
    ]
  },
  {
    id: 'food',
    type: 'question',
    question: "What do you typically reach for?",
    options: [
      { id: 'A', text: "Salty/crunchy — chips, crackers, pretzels", value: "salty" },
      { id: 'B', text: "Sweet — chocolate, ice cream, cookies", value: "sweet" },
      { id: 'C', text: "Carb-heavy — bread, pasta, cereal", value: "carbs" },
      { id: 'D', text: "Whatever's fastest — I just need something NOW", value: "impulsive" }
    ]
  },
  {
    id: 'aftermath',
    type: 'question',
    question: "How do you usually feel AFTER eating emotionally?",
    options: [
      { id: 'A', text: "Guilty — I immediately regret it", value: "guilt" },
      { id: 'B', text: "Numb — the feeling I was avoiding comes back", value: "numb" },
      { id: 'C', text: "Relieved briefly, then frustrated with myself", value: "cycle" },
      { id: 'D', text: "I barely notice — it's so automatic I don't think about it", value: "autopilot" }
    ]
  },
  {
    id: 'vd1',
    type: 'value-drop',
    icon: 'brain',
    text: "Quick science check:\n\nWhen you're stressed, cortisol (your stress hormone) spikes. Cortisol does two things: it suppresses your prefrontal cortex — your decision-making brain — and it increases your appetite for high-calorie food.\n\nSo when you eat after a hard day, that's not weakness. That's cortisol switching off your self-control and turning on your hunger. At the same time.\n\nYou're not broken. Your brain chemistry is doing its job.",
    cta: "Continue"
  },
  {
    id: 'awareness',
    type: 'question',
    question: "When a craving hits, do you know why?",
    options: [
      { id: 'A', text: "Yes — I see it happening but I can't stop it", value: "high" },
      { id: 'B', text: "Sometimes — I connect the dots after the fact", value: "moderate" },
      { id: 'C', text: "Rarely — I usually don't realize until much later", value: "low" },
      { id: 'D', text: "I never thought about it until right now", value: "new" }
    ]
  },
  {
    id: 'duration',
    type: 'question',
    question: "How long have you been dealing with emotional eating?",
    options: [
      { id: 'A', text: "Recently — it started in the last year or so", value: "recent" },
      { id: 'B', text: "A few years — it comes and goes", value: "recurring" },
      { id: 'C', text: "As long as I can remember — since childhood", value: "lifelong" },
      { id: 'D', text: "It got worse after a specific life event", value: "event" }
    ]
  },
  {
    id: 'past',
    type: 'question',
    question: "What have you tried before?",
    options: [
      { id: 'A', text: "Diets and meal plans — they work until they don't", value: "diets" },
      { id: 'B', text: "Willpower and 'just stopping' — white-knuckling it", value: "willpower" },
      { id: 'C', text: "Therapy or journaling — helpful but eating didn't change", value: "therapy" },
      { id: 'D', text: "Nothing specific — I've mostly just lived with it", value: "nothing" }
    ]
  },
  {
    id: 'vd2',
    type: 'value-drop',
    icon: 'chart',
    text: "Here's why this quiz matters:\n\nResearch shows the #1 predictor of emotional eating isn't stress itself. It's how aware you are of the emotion BEFORE the craving hits.\n\nPeople who can name what they're feeling — \"I'm stressed,\" \"I'm lonely,\" \"I'm exhausted\" — before they open the fridge are significantly less likely to eat emotionally.\n\nThat's what we're building right now. Your answers are mapping exactly where your awareness gaps are.",
    subtext: "Source: American Psychological Association",
    cta: "Continue"
  },
  {
    id: 'desire',
    type: 'question',
    question: "If you could change one thing about your relationship with food, what would it be?",
    options: [
      { id: 'A', text: "Feel in control — eat because I chose to, not because I had to", value: "control" },
      { id: 'B', text: "Lose the guilt — enjoy food without the shame spiral after", value: "peace" },
      { id: 'C', text: "Understand myself — know WHY I do this", value: "understanding" },
      { id: 'D', text: "Lose weight — without it feeling like punishment", value: "weight" }
    ]
  },
  {
    id: 'readiness',
    type: 'question',
    question: "Where are you right now?",
    options: [
      { id: 'A', text: "Ready — I just need the right approach", value: "ready" },
      { id: 'B', text: "Skeptical — I've tried things before and they didn't work", value: "skeptical" },
      { id: 'C', text: "Overwhelmed — I don't even know where to start", value: "overwhelmed" },
      { id: 'D', text: "Curious — I'm here for someone I care about", value: "proxy" }
    ]
  },
  {
    id: 'vd3',
    type: 'value-drop',
    icon: 'spiral',
    text: "Last thing before your results:\n\nThe craving you feel at 9 PM is a message. Not from your stomach — from your nervous system. It's telling you something went unmet today. Rest. Connection. A break. Permission to stop.\n\nYour cravings aren't the problem. They're the clue. The results you're about to see will show you exactly what your cravings have been trying to say.",
    cta: "See My Results"
  },
  {
    id: 'email',
    type: 'email',
    headline: "Your results are ready.",
    subhead: "Enter your email to see your personalized Emotional Eating Profile — including your pattern type, what's driving it, and the #1 thing you can do this week.",
    cta: "Show My Results",
    belowCta: "We'll also send you 3 free science-backed strategies for your specific pattern. Unsubscribe anytime.",
    privacy: "No spam. No diet tips. Just science."
  }
];

export function calculateQuizResult(answers: Record<string, string>) {
  let scores = {
    'stress-soother': 0,
    'comfort-seeker': 0,
    'autopilot-eater': 0,
    'perfectionist-restrictor': 0
  };

  // Stress Soother
  if (answers.trigger === 'stress') scores['stress-soother'] += 2;
  if (answers.food === 'sweet' || answers.food === 'carbs') scores['stress-soother'] += 1;
  if (answers.aftermath === 'cycle') scores['stress-soother'] += 1;
  if (answers.past === 'diets') scores['stress-soother'] += 1;

  // Comfort Seeker
  if (answers.trigger === 'emotional') scores['comfort-seeker'] += 2;
  if (answers.aftermath === 'numb' || answers.aftermath === 'guilt') scores['comfort-seeker'] += 1;
  if (answers.duration === 'lifelong' || answers.duration === 'event') scores['comfort-seeker'] += 1;
  if (answers.desire === 'understanding') scores['comfort-seeker'] += 1;

  // Autopilot Eater
  if (answers.aftermath === 'autopilot' || answers.awareness === 'low') scores['autopilot-eater'] += 2;
  if (answers.trigger === 'nighttime' || answers.trigger === 'boredom') scores['autopilot-eater'] += 1;
  if (answers.past === 'nothing') scores['autopilot-eater'] += 1;
  if (answers.awareness === 'new') scores['autopilot-eater'] += 1;

  // Perfectionist Restrictor
  if (answers.past === 'diets' || answers.past === 'willpower') scores['perfectionist-restrictor'] += 2;
  if (answers.aftermath === 'guilt') scores['perfectionist-restrictor'] += 1;
  if (answers.desire === 'control') scores['perfectionist-restrictor'] += 1;
  if (answers.trigger === 'stress') scores['perfectionist-restrictor'] += 1;

  let maxScore = -1;
  let resultType = 'stress-soother';
  let ties: string[] = [];

  for (const [type, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
      ties = [type];
    } else if (score === maxScore) {
      ties.push(type);
    }
  }

  // Tiebreaker based on desire
  if (ties.length > 1) {
    if (answers.desire === 'control' && ties.includes('perfectionist-restrictor')) return 'perfectionist-restrictor';
    if (answers.desire === 'understanding' && ties.includes('comfort-seeker')) return 'comfort-seeker';
    if (answers.desire === 'peace' && ties.includes('stress-soother')) return 'stress-soother';
    if (answers.desire === 'weight' && ties.includes('autopilot-eater')) return 'autopilot-eater';
  }

  return resultType;
}
