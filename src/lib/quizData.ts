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
    headline: "This is why you keep eating, and why your weight isn't dropping",
    subhead:
      "You're not addicted to food. Your hormones and emotions are running a loop you can't see. This free 2-minute quiz uncovers the emotional eating loop driving your cravings and shows you how to break it.",
    cta: 'Take the 2-minute quiz',
    belowCta: 'Backed by Science.',
    socialProof: '14,000+ people have taken this quiz',
  },
  {
    id: 'trigger',
    type: 'question',
    question: "When do you usually end up eating even though your body isn't hungry?",
    options: [
      { id: 'A', text: 'After a stressful day, when I need my brain to calm down', value: 'stress' },
      { id: 'B', text: "When I'm bored, restless, or just wandering the kitchen", value: 'boredom' },
      { id: 'C', text: 'When I feel lonely, low, or emotionally drained', value: 'emotional' },
      { id: 'D', text: 'At night, when the day is over and I finally stop holding it together', value: 'nighttime' },
    ],
  },
  {
    id: 'food',
    type: 'question',
    question: 'What do you usually reach for first?',
    options: [
      { id: 'A', text: 'Something salty or crunchy, like chips, crackers, or nuts', value: 'salty' },
      { id: 'B', text: 'Something sweet or comforting, like chocolate or ice cream', value: 'sweet' },
      { id: 'C', text: 'Bread, pasta, cereal, toast, or something else carb-heavy', value: 'carbs' },
      { id: 'D', text: "Whatever is fastest. I just want something now", value: 'impulsive' },
    ],
  },
  {
    id: 'aftermath',
    type: 'question',
    question: 'How do you usually feel right after?',
    options: [
      { id: 'A', text: 'Guilty or annoyed with myself', value: 'guilt' },
      { id: 'B', text: 'Still empty. The feeling I was trying to fix is still there', value: 'numb' },
      { id: 'C', text: 'Better for a minute, then right back in the same loop', value: 'cycle' },
      { id: 'D', text: 'I barely register it. It happens almost on autopilot', value: 'autopilot' },
    ],
  },
  {
    id: 'vd1',
    type: 'value-drop',
    icon: 'brain',
    text:
      "Fast science, normal English:\n\nWhen stress goes up, cortisol goes up with it. Cortisol makes quick-reward food feel louder and thoughtful decisions feel harder.\n\nSo if you eat after a hard day, that is not just bad discipline. It is often your nervous system looking for the fastest way to feel better.\n\nOnce you understand that, you can stop moralizing it and start working with it.",
    cta: 'Keep going',
  },
  {
    id: 'awareness',
    type: 'question',
    question: 'How aware are you before it happens?',
    options: [
      { id: 'A', text: "I can feel it coming. I just don't know how to stop it", value: 'high' },
      { id: 'B', text: 'Sometimes I catch it in the moment, sometimes only after', value: 'moderate' },
      { id: 'C', text: 'I usually realize what happened once it is already done', value: 'low' },
      { id: 'D', text: "Honestly, I've never really looked at it this way before", value: 'new' },
    ],
  },
  {
    id: 'duration',
    type: 'question',
    question: 'How long has this been a thing for you?',
    options: [
      { id: 'A', text: "Less than a year. It's pretty recent", value: 'recent' },
      { id: 'B', text: 'A few years. It comes and goes', value: 'recurring' },
      { id: 'C', text: 'As long as I can remember', value: 'lifelong' },
      { id: 'D', text: 'It got worse after something specific happened', value: 'event' },
    ],
  },
  {
    id: 'past',
    type: 'question',
    question: 'What have you already tried?',
    options: [
      { id: 'A', text: 'Diets or meal plans. They help for a bit, then I end up back here', value: 'diets' },
      { id: 'B', text: 'Willpower. I tell myself to stop and try to be stricter', value: 'willpower' },
      { id: 'C', text: "Therapy, journaling, or mindset work. I understand more, but I still do it", value: 'therapy' },
      { id: 'D', text: "Nothing specific. I've mostly just been dealing with it", value: 'nothing' },
    ],
  },
  {
    id: 'vd2',
    type: 'value-drop',
    icon: 'chart',
    text:
      "Here is what actually changes things:\n\nPeople who can name the feeling before they eat - stressed, lonely, bored, exhausted - are much more likely to interrupt the pattern.\n\nNot because they have more willpower. Because they catch the craving earlier.\n\nThat is what this quiz is mapping for you.",
    subtext: 'Built from published stress and behavior research',
    cta: 'Continue',
  },
  {
    id: 'desire',
    type: 'question',
    question: 'If this got easier, what would matter most to you?',
    options: [
      { id: 'A', text: 'Feeling more in control around food', value: 'control' },
      { id: 'B', text: 'Getting out of the guilt spiral afterward', value: 'peace' },
      { id: 'C', text: 'Finally understanding why this keeps happening', value: 'understanding' },
      { id: 'D', text: 'Losing weight without feeling punished by the process', value: 'weight' },
    ],
  },
  {
    id: 'readiness',
    type: 'question',
    question: 'Where are you with this right now?',
    options: [
      { id: 'A', text: 'Ready. I just need a better approach', value: 'ready' },
      { id: 'B', text: "Skeptical. I've tried enough things already", value: 'skeptical' },
      { id: 'C', text: "Overwhelmed. I don't know where to start", value: 'overwhelmed' },
      { id: 'D', text: 'Curious. I want to understand it better first', value: 'proxy' },
    ],
  },
  {
    id: 'vd3',
    type: 'value-drop',
    icon: 'spiral',
    text:
      "One last thing before your result:\n\nA craving is often your brain's shortcut, not your body asking for fuel.\n\nSometimes it is stress. Sometimes it is loneliness. Sometimes it is exhaustion. Sometimes it is the rebound from trying to be good all day.\n\nYour result shows which pattern is most likely running the show, and what to do next.",
    cta: 'See my result',
  },
  {
    id: 'email',
    type: 'email',
    headline: 'Your result is ready.',
    subhead:
      "Enter your email and I'll show you your emotional eating type, what is driving it, and the best first step to try this week.",
    cta: 'Show me my result',
    belowCta: "You'll also get your result by email, plus a few practical tips you can actually use. Unsubscribe anytime.",
    privacy: 'No spam. No food guilt. Just useful help.',
  },
];

export function calculateQuizResult(answers: Record<string, string>) {
  let scores = {
    'stress-soother': 0,
    'comfort-seeker': 0,
    'autopilot-eater': 0,
    'perfectionist-restrictor': 0,
  };

  if (answers.trigger === 'stress') scores['stress-soother'] += 2;
  if (answers.food === 'sweet' || answers.food === 'carbs') scores['stress-soother'] += 1;
  if (answers.aftermath === 'cycle') scores['stress-soother'] += 1;
  if (answers.past === 'diets') scores['stress-soother'] += 1;

  if (answers.trigger === 'emotional') scores['comfort-seeker'] += 2;
  if (answers.aftermath === 'numb' || answers.aftermath === 'guilt') scores['comfort-seeker'] += 1;
  if (answers.duration === 'lifelong' || answers.duration === 'event') scores['comfort-seeker'] += 1;
  if (answers.desire === 'understanding') scores['comfort-seeker'] += 1;

  if (answers.aftermath === 'autopilot' || answers.awareness === 'low') scores['autopilot-eater'] += 2;
  if (answers.trigger === 'nighttime' || answers.trigger === 'boredom') scores['autopilot-eater'] += 1;
  if (answers.past === 'nothing') scores['autopilot-eater'] += 1;
  if (answers.awareness === 'new') scores['autopilot-eater'] += 1;

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

  if (ties.length > 1) {
    if (answers.desire === 'control' && ties.includes('perfectionist-restrictor')) return 'perfectionist-restrictor';
    if (answers.desire === 'understanding' && ties.includes('comfort-seeker')) return 'comfort-seeker';
    if (answers.desire === 'peace' && ties.includes('stress-soother')) return 'stress-soother';
    if (answers.desire === 'weight' && ties.includes('autopilot-eater')) return 'autopilot-eater';
  }

  return resultType;
}
