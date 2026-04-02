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
    headline: "What's Really Driving Your Eating?",
    subhead: "Take this 2-minute quiz to discover your emotional eating pattern — and what to do about it.",
    cta: "Start the Quiz",
    belowCta: "Based on behavioral psychology and neuroscience. No judgment, no diet talk.",
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
    text: "Here's something most people don't know:\n\nEmotional eating isn't a willpower problem. When you're stressed, your body releases cortisol — which literally increases your appetite for high-calorie foods. Your brain is trying to calm your nervous system down.\n\nYou're not broken. Your biology is doing exactly what it's designed to do.",
    cta: "Continue"
  },
  {
    id: 'awareness',
    type: 'question',
    question: "When a craving hits, how aware are you of what triggered it?",
    options: [
      { id: 'A', text: "Very aware — I know exactly why, I just can't stop", value: "high" },
      { id: 'B', text: "Sometimes — I can connect the dots after the fact", value: "moderate" },
      { id: 'C', text: "Rarely — I usually realize hours later, if at all", value: "low" },
      { id: 'D', text: "Never thought about it until this quiz", value: "new" }
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
    text: "You're not alone in this:\n\nResearch shows that 75% of overeating is emotionally driven — not hunger-driven. And the #1 predictor of emotional eating isn't stress itself. It's low awareness of the emotion BEFORE the craving hits.\n\nThat's actually great news. Because awareness is a skill — and skills can be learned.",
    subtext: "Source: American Psychological Association",
    cta: "Continue"
  },
  {
    id: 'desire',
    type: 'question',
    question: "What would change in your life if emotional eating wasn't running the show?",
    options: [
      { id: 'A', text: "I'd finally feel in control around food", value: "control" },
      { id: 'B', text: "I'd stop the guilt cycle and actually enjoy eating", value: "peace" },
      { id: 'C', text: "I'd lose weight without it feeling like punishment", value: "weight" },
      { id: 'D', text: "I'd understand myself better — why I do what I do", value: "understanding" }
    ]
  },
  {
    id: 'readiness',
    type: 'question',
    question: "What feels most true right now?",
    options: [
      { id: 'A', text: "I'm ready to change — I just need the right approach", value: "ready" },
      { id: 'B', text: "I'm curious but skeptical — I've been burned before", value: "skeptical" },
      { id: 'C', text: "I'm overwhelmed — I don't know where to start", value: "overwhelmed" },
      { id: 'D', text: "I'm here for someone I care about", value: "proxy" }
    ]
  },
  {
    id: 'vd3',
    type: 'value-drop',
    icon: 'spiral',
    text: "One more thing before your results:\n\nThe craving you feel at 9 PM isn't about food. It's a signal — your body asking for something it didn't get during the day. Maybe it's rest. Maybe it's connection. Maybe it's just permission to stop being productive.\n\nYour cravings are data, not character flaws. The guide we built teaches you how to read that data.",
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
