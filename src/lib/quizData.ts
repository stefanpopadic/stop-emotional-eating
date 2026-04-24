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
    id: 'trigger',
    type: 'question',
    question: "When your last diet stopped working, what broke first?",
    options: [
      { id: 'A', text: 'Stress hit and I caved. The day was too much and food was the only relief', value: 'stress' },
      { id: 'B', text: 'Boredom became the entertainment. The diet felt impossible to stick with', value: 'boredom' },
      { id: 'C', text: 'An emotional crash. I felt low or lonely, and food was the only comfort', value: 'emotional' },
      { id: 'D', text: 'Nighttime. I held it together all day, then lost it after dinner', value: 'nighttime' },
    ],
  },
  {
    id: 'food',
    type: 'question',
    question: 'When the diet broke, what did you reach for?',
    options: [
      { id: 'A', text: 'Something salty or crunchy — chips, crackers, nuts', value: 'salty' },
      { id: 'B', text: 'Something sweet — chocolate, ice cream, cookies', value: 'sweet' },
      { id: 'C', text: 'Carbs — bread, pasta, cereal, toast', value: 'carbs' },
      { id: 'D', text: "Whatever was closest. I just needed something right now", value: 'impulsive' },
    ],
  },
  {
    id: 'aftermath',
    type: 'question',
    question: 'What happened after the binge — and the next morning on the scale?',
    options: [
      { id: 'A', text: 'Guilt. I told myself I ruined the week and had to start over Monday', value: 'guilt' },
      { id: 'B', text: "Empty. The food didn't fix anything and the weight came right back", value: 'numb' },
      { id: 'C', text: 'Better for a moment, then more cravings, more weight, more shame', value: 'cycle' },
      { id: 'D', text: "I barely noticed until I stepped on the scale and the number was up again", value: 'autopilot' },
    ],
  },
  {
    id: 'vd1',
    type: 'value-drop',
    icon: 'brain',
    text:
      "Here's why every diet you've tried failed:\n\nWhen you restrict food, your cortisol spikes and your leptin drops. Your brain reads this as starvation and demands sugar, salt and carbs to refuel. The harder you diet, the louder the cravings get — and the more weight you regain when you finally break.\n\nThis is not a willpower problem. Your hormones are literally working against the diet. That is why the weight always comes back.",
    cta: 'Keep going',
  },
  {
    id: 'awareness',
    type: 'question',
    question: 'When a craving hits, do you catch it before it costs you the week of progress?',
    options: [
      { id: 'A', text: "I feel it building. I know it's coming but I can't stop it", value: 'high' },
      { id: 'B', text: 'Sometimes I catch it, sometimes I only realize after I already ate', value: 'moderate' },
      { id: 'C', text: "I don't notice until it's over. The week is already blown", value: 'low' },
      { id: 'D', text: "I never thought about it this way. I just assumed I was weak", value: 'new' },
    ],
  },
  {
    id: 'duration',
    type: 'question',
    question: 'How long have you been losing and regaining the same weight?',
    options: [
      { id: 'A', text: "Less than a year. It's a recent frustration", value: 'recent' },
      { id: 'B', text: 'A few years. I lose 5-15 lbs, then gain it all back, repeat', value: 'recurring' },
      { id: 'C', text: "As long as I can remember. The weight always wins in the end", value: 'lifelong' },
      { id: 'D', text: 'It got much worse after a specific life event', value: 'event' },
    ],
  },
  {
    id: 'past',
    type: 'question',
    question: 'What weight-loss approaches have you already tried?',
    options: [
      { id: 'A', text: 'Multiple diets — keto, calorie counting, intermittent fasting. They all worked, then stopped', value: 'diets' },
      { id: 'B', text: 'Pure willpower. I just try harder each time', value: 'willpower' },
      { id: 'C', text: "Therapy or self-help. I understand the problem but the weight is still there", value: 'therapy' },
      { id: 'D', text: "Nothing structured. I keep starting over every Monday", value: 'nothing' },
    ],
  },
  {
    id: 'vd2',
    type: 'value-drop',
    icon: 'chart',
    text:
      "Here's what separates women who lose the weight from women who don't:\n\nIt's not willpower. It's not metabolism. It's not the diet plan.\n\nIt's the ability to identify the emotional trigger before the binge — stress, loneliness, boredom, exhaustion, restriction-rebound. Women who catch the trigger first are 3-4× more likely to keep the weight off long-term.\n\nThat is exactly what this quiz is mapping for you.",
    subtext: 'Based on peer-reviewed behavioral psychology research',
    cta: 'Continue',
  },
  {
    id: 'desire',
    type: 'question',
    question: 'If you could finally lose the weight and keep it off, what would matter most?',
    options: [
      { id: 'A', text: 'Feeling in control around food without constantly fighting myself', value: 'control' },
      { id: 'B', text: 'Ending the binge-guilt-restart cycle that ruins every diet', value: 'peace' },
      { id: 'C', text: 'Understanding why I keep sabotaging myself despite knowing better', value: 'understanding' },
      { id: 'D', text: 'Actually losing the weight and keeping it off this time', value: 'weight' },
    ],
  },
  {
    id: 'readiness',
    type: 'question',
    question: 'Where are you right now with all of this?',
    options: [
      { id: 'A', text: "Ready to try something different. Dieting alone clearly isn't enough", value: 'ready' },
      { id: 'B', text: "Skeptical. I've been let down by too many programs", value: 'skeptical' },
      { id: 'C', text: "Exhausted. I'm done with the cycle but don't know what else to do", value: 'overwhelmed' },
      { id: 'D', text: 'Curious. I want to understand what is actually going on first', value: 'proxy' },
    ],
  },
  {
    id: 'vd3',
    type: 'value-drop',
    icon: 'spiral',
    text:
      "One last thing before your result:\n\nEvery diet treats the food. None of them treat the cycle.\n\nThe binge that breaks your diet is not about hunger. It is your brain using food to solve a problem — stress, loneliness, exhaustion, or the rebound from restricting all day. Until that loop breaks, the weight will keep coming back no matter what you eat.\n\nYour result reveals which loop is keeping the weight on, and the first move to break it.",
    cta: 'See my result',
  },
  {
    id: 'email',
    type: 'email',
    headline: 'Your weight-loss blocker is identified.',
    subhead:
      "Enter your email and I'll show you which emotional eating loop is keeping the weight on, and the first step to break it this week.",
    cta: 'Show me my result',
    belowCta: "Your full 21-day cycle-breaker plan + result by email. No spam, unsubscribe anytime.",
    privacy: 'No spam. No food guilt. Just the plan that actually works.',
  },
];

export function calculateQuizResult(answers: Record<string, string>) {
  let scores = {
    'stress-regainer': 0,
    'emotional-refueler': 0,
    'unconscious-saboteur': 0,
    'diet-rebounder': 0,
  };

  if (answers.trigger === 'stress') scores['stress-regainer'] += 2;
  if (answers.food === 'sweet' || answers.food === 'carbs') scores['stress-regainer'] += 1;
  if (answers.aftermath === 'cycle') scores['stress-regainer'] += 1;
  if (answers.past === 'diets') scores['stress-regainer'] += 1;

  if (answers.trigger === 'emotional') scores['emotional-refueler'] += 2;
  if (answers.aftermath === 'numb' || answers.aftermath === 'guilt') scores['emotional-refueler'] += 1;
  if (answers.duration === 'lifelong' || answers.duration === 'event') scores['emotional-refueler'] += 1;
  if (answers.desire === 'understanding') scores['emotional-refueler'] += 1;

  if (answers.aftermath === 'autopilot' || answers.awareness === 'low') scores['unconscious-saboteur'] += 2;
  if (answers.trigger === 'nighttime' || answers.trigger === 'boredom') scores['unconscious-saboteur'] += 1;
  if (answers.past === 'nothing') scores['unconscious-saboteur'] += 1;
  if (answers.awareness === 'new') scores['unconscious-saboteur'] += 1;

  if (answers.past === 'diets' || answers.past === 'willpower') scores['diet-rebounder'] += 2;
  if (answers.aftermath === 'guilt') scores['diet-rebounder'] += 1;
  if (answers.desire === 'control') scores['diet-rebounder'] += 1;
  if (answers.trigger === 'stress') scores['diet-rebounder'] += 1;

  let maxScore = -1;
  let resultType = 'stress-regainer';
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

  if (ties.length > 1) {
    if (answers.desire === 'control' && ties.includes('diet-rebounder')) return 'diet-rebounder';
    if (answers.desire === 'understanding' && ties.includes('emotional-refueler')) return 'emotional-refueler';
    if (answers.desire === 'peace' && ties.includes('stress-regainer')) return 'stress-regainer';
    if (answers.desire === 'weight' && ties.includes('unconscious-saboteur')) return 'unconscious-saboteur';
  }

  return resultType;
}
