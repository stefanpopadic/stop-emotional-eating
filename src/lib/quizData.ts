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
    id: 'cost',
    type: 'question',
    question: 'Before we go further — what has this cycle actually cost you?',
    options: [
      { id: 'A', text: "Years of my life. I've been fighting the same 15 lbs forever", value: 'years' },
      { id: 'B', text: 'Confidence. I avoid mirrors, photos, certain clothes', value: 'confidence' },
      { id: 'C', text: 'Energy. The food coma after a binge wrecks my whole week', value: 'energy' },
      { id: 'D', text: "All of the above — and I'm done", value: 'all' },
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
      "Here's why every diet you've tried failed:\n\nWhen you cut calories, two hormones move in opposite directions. Cortisol spikes — your body reads restriction as a threat. Leptin crashes — the hormone that tells your brain \"we have fuel\" goes silent. Within 72 hours, your brain is convinced you're starving and floods you with cravings for the fastest fuel it knows: sugar, salt, refined carbs.\n\nThis is not weakness. This is your hypothalamus doing exactly what it evolved to do.\n\nThe harder you restrict, the louder the signal gets. The binge isn't a failure of the diet. The binge IS the diet — built into the chemistry.",
    cta: 'Show me more',
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
    id: 'food-belief',
    type: 'question',
    question: 'Which of these have you secretly believed about yourself?',
    options: [
      { id: 'A', text: 'I have no willpower', value: 'willpower' },
      { id: 'B', text: "I'm addicted to sugar or carbs", value: 'addicted' },
      { id: 'C', text: 'My metabolism is broken', value: 'metabolism' },
      { id: 'D', text: "I'm just emotional or weak around food", value: 'weak' },
    ],
  },
  {
    id: 'vd2',
    type: 'value-drop',
    icon: 'brain',
    text:
      "You are not addicted. You are not weak. You are not broken.\n\nCravings are not a character flaw. They are a chemical signal — your nucleus accumbens (the brain's reward center) firing dopamine at 200% of baseline because it learned that food fixes the unpleasant feeling fast. Stress, loneliness, exhaustion, restriction-rebound — your brain logs all of them and food becomes the answer.\n\nEvery diet you tried treated the food. None of them treated the signal.\n\nThat's why the weight came back. You can't out-diet a brain pattern. You can only interrupt it.",
    cta: 'Continue',
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
    id: 'vd3',
    type: 'value-drop',
    icon: 'chart',
    text:
      "Here's what separates women who lose the weight from women who don't:\n\nIt's not willpower. It's not metabolism. It's not the diet plan they picked.\n\nIt's a 90-second window between the trigger and the first bite. Women who learn to catch that window — to name what they're actually feeling before reaching for food — are 3-4× more likely to keep the weight off long-term.\n\nThe trigger fires. The window opens. Most women never see it. The ones who do — lose the weight and keep it off.\n\nThis quiz is mapping which trigger fires for you.",
    subtext: 'Based on peer-reviewed behavioral psychology research (2019-2023)',
    cta: 'Continue',
  },
  {
    id: 'false-belief',
    type: 'question',
    question: 'What did every diet you tried promise you?',
    options: [
      { id: 'A', text: 'Eat less, move more, the weight comes off', value: 'eatless' },
      { id: 'B', text: 'Cut carbs, sugar or fat and the cravings stop', value: 'cutout' },
      { id: 'C', text: 'If I just stick to it longer, my body will adjust', value: 'stickwithit' },
      { id: 'D', text: 'Once I lose the weight, the cravings disappear', value: 'lateron' },
    ],
  },
  {
    id: 'vd4',
    type: 'value-drop',
    icon: 'spiral',
    text:
      "The one thing every failed diet has in common: restriction.\n\nKeto, calorie counting, intermittent fasting, \"just eat less\" — they all work on the same principle: eat less than your body wants. And every one of them triggers the same biological response. Leptin (the satiety hormone) crashes within 72 hours. Ghrelin (the hunger hormone) climbs. Your brain releases neuropeptide Y — a peptide that specifically drives carb and fat seeking.\n\nYour body doesn't know the difference between a diet and a famine. It runs the same emergency protocol either way.\n\nThat protocol is why the weight came back every single time — not because you failed the diet, but because the diet failed your biology.",
    cta: 'One more thing',
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
    id: 'vd5',
    type: 'value-drop',
    icon: 'spiral',
    text:
      "This is the one thing you need to fix to lose the weight and never break a diet again:\n\nStop treating the food. Start breaking the loop.\n\nEvery binge runs the same 4-step pattern — trigger → craving → eat → guilt → start again. The weight comes off, and stays off, only when you interrupt that loop at step one. Not at step three (you can't out-willpower a craving in flight). Not at step four (guilt makes the next loop fire faster).\n\nThe result on the next screen tells you which trigger fires for you, why your specific loop has been keeping the weight on, and the first move to break it this week.",
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
