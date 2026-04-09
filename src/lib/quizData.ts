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
    headline: "Why do you eat when you're not hungry?",
    subhead: "8 questions. Two minutes. You'll get your emotional eating type, the science behind it, and one thing you can try this week.",
    cta: "Start the Quiz",
    belowCta: "Grounded in peer-reviewed research. Zero diet advice.",
    socialProof: "14,000+ people have taken this quiz"
  },
  {
    id: 'trigger',
    type: 'question',
    question: "When do you usually eat when you're not physically hungry?",
    options: [
      { id: 'A', text: "After a hard day — I'm wound up and need to come down", value: "stress" },
      { id: 'B', text: "When I'm bored or my brain needs input", value: "boredom" },
      { id: 'C', text: "When I feel lonely, sad, or disconnected", value: "emotional" },
      { id: 'D', text: "Late at night — once dinner's over, something flips", value: "nighttime" }
    ]
  },
  {
    id: 'food',
    type: 'question',
    question: "What do you usually reach for first?",
    options: [
      { id: 'A', text: "Salty and crunchy — chips, crackers, pretzels, nuts", value: "salty" },
      { id: 'B', text: "Sweet — chocolate, ice cream, baked goods", value: "sweet" },
      { id: 'C', text: "Carby and starchy — bread, pasta, cereal, toast", value: "carbs" },
      { id: 'D', text: "Whatever's closest — I'm not picky, I just need it now", value: "impulsive" }
    ]
  },
  {
    id: 'aftermath',
    type: 'question',
    question: "How do you feel right after you eat?",
    options: [
      { id: 'A', text: "Guilty — I immediately regret it", value: "guilt" },
      { id: 'B', text: "Numb — whatever I was avoiding is still there", value: "numb" },
      { id: 'C', text: "Briefly better, then frustrated it happened again", value: "cycle" },
      { id: 'D', text: "I barely notice — it's automatic", value: "autopilot" }
    ]
  },
  {
    id: 'vd1',
    type: 'value-drop',
    icon: 'brain',
    text: "Quick science check:\n\nStress spikes cortisol. Cortisol does two things at the same time — it dials down your prefrontal cortex (your decision-making brain) and turns up your appetite for high-calorie food.\n\nSo when you eat after a hard day, that's not weakness. That's biology making the choice harder than it should be.\n\nYou're not broken. Your brain is doing exactly what it was built to do.",
    cta: "Continue"
  },
  {
    id: 'awareness',
    type: 'question',
    question: "Do you see the craving coming, or does it just show up?",
    options: [
      { id: 'A', text: "I see it coming — I just can't stop it", value: "high" },
      { id: 'B', text: "Sometimes — I connect the dots mid-bite or after", value: "moderate" },
      { id: 'C', text: "Rarely — I usually figure it out hours later", value: "low" },
      { id: 'D', text: "Honestly, I've never really thought about it", value: "new" }
    ]
  },
  {
    id: 'duration',
    type: 'question',
    question: "How long has this been going on?",
    options: [
      { id: 'A', text: "Less than a year — it's pretty recent", value: "recent" },
      { id: 'B', text: "A few years — it comes and goes", value: "recurring" },
      { id: 'C', text: "For as long as I can remember — since childhood", value: "lifelong" },
      { id: 'D', text: "It got worse after something specific happened", value: "event" }
    ]
  },
  {
    id: 'past',
    type: 'question',
    question: "What have you already tried?",
    options: [
      { id: 'A', text: "Diets and meal plans — they work until they don't", value: "diets" },
      { id: 'B', text: "Willpower — white-knuckling it and telling myself to stop", value: "willpower" },
      { id: 'C', text: "Therapy or journaling — helped me understand, didn't change the eating", value: "therapy" },
      { id: 'D', text: "Nothing specific — I've mostly just lived with it", value: "nothing" }
    ]
  },
  {
    id: 'vd2',
    type: 'value-drop',
    icon: 'chart',
    text: "Here's why these questions matter:\n\nThe strongest predictor of emotional eating isn't stress itself. It's whether you can name what you're feeling before the craving arrives.\n\nPeople who can say \"I'm stressed,\" \"I'm lonely,\" \"I'm exhausted\" before they open the fridge are significantly less likely to eat on autopilot.\n\nYour answers are mapping exactly where your awareness gaps live — and where the biggest leverage is for you.",
    subtext: "Source: American Psychological Association",
    cta: "Continue"
  },
  {
    id: 'desire',
    type: 'question',
    question: "If one thing about your eating changed, what would you want it to be?",
    options: [
      { id: 'A', text: "To feel in control — eat by choice, not by compulsion", value: "control" },
      { id: 'B', text: "To eat without the guilt spiral after", value: "peace" },
      { id: 'C', text: "To actually understand why I do this", value: "understanding" },
      { id: 'D', text: "To lose weight without it feeling like punishment", value: "weight" }
    ]
  },
  {
    id: 'readiness',
    type: 'question',
    question: "Where are you with this right now?",
    options: [
      { id: 'A', text: "Ready — I just need the right framework", value: "ready" },
      { id: 'B', text: "Skeptical — I've tried things that didn't stick", value: "skeptical" },
      { id: 'C', text: "Overwhelmed — I don't know where to start", value: "overwhelmed" },
      { id: 'D', text: "Curious — I'm here for someone I care about", value: "proxy" }
    ]
  },
  {
    id: 'vd3',
    type: 'value-drop',
    icon: 'spiral',
    text: "One more thing before your results:\n\nThe craving you feel at 9 PM is a message. Not from your stomach — from your nervous system. It's telling you something went unmet today. Rest. Connection. A break. Permission to stop.\n\nYour cravings aren't the problem. They're the clue. Your results will show you exactly what they've been trying to say.",
    cta: "See My Results"
  },
  {
    id: 'email',
    type: 'email',
    headline: "Your results are ready.",
    subhead: "Enter your email to see your Emotional Eating Profile — your pattern type, what's driving it, and the #1 move you can make this week.",
    cta: "Show My Results",
    belowCta: "You'll also get 3 science-backed strategies matched to your specific pattern. Unsubscribe anytime.",
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
