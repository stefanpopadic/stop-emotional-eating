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
    id: 'gender',
    type: 'intro',
    headline: 'Find out why your diet keeps breaking.',
    subhead:
      "A 2-minute quiz to spot the loop you're stuck in — and the first step to break it this week.",
    prompt: 'To start, choose what fits you:',
    options: [
      { id: 'A', text: 'Female', value: 'female' },
      { id: 'B', text: 'Male', value: 'male' },
    ],
  },
  {
    id: 'timing',
    type: 'question',
    question: 'When do you usually break the diet?',
    options: [
      { id: 'A', text: 'At night', value: 'night' },
      { id: 'B', text: 'After a stressful day', value: 'stress' },
      { id: 'C', text: "When I'm bored", value: 'bored' },
      { id: 'D', text: 'After being too strict', value: 'strict' },
    ],
  },
  {
    id: 'before',
    type: 'question',
    question: 'What usually happens right before you break it?',
    options: [
      { id: 'A', text: 'I get really hungry', value: 'hungry' },
      { id: 'B', text: 'I get stressed', value: 'stressed' },
      { id: 'C', text: 'I get bored', value: 'bored' },
      { id: 'D', text: 'I eat one "bad" thing, then keep going', value: 'slip' },
    ],
  },
  {
    id: 'food',
    type: 'question',
    question: 'What do you usually reach for first?',
    options: [
      { id: 'A', text: 'Sweet food', value: 'sweet' },
      { id: 'B', text: 'Salty or crunchy food', value: 'salty' },
      { id: 'C', text: 'Bread, pasta, rice, or cereal', value: 'carbs' },
      { id: 'D', text: 'Whatever is fast and easy', value: 'impulsive' },
    ],
  },
  {
    id: 'moment',
    type: 'question',
    question: 'Once you start eating, what usually happens?',
    options: [
      { id: 'A', text: 'I know I should stop, but I keep going', value: 'cant-stop' },
      { id: 'B', text: 'I eat fast without thinking', value: 'fast' },
      { id: 'C', text: "I tell myself I'll restart tomorrow", value: 'restart' },
      { id: 'D', text: 'I keep eating because I already messed up', value: 'messed-up' },
    ],
  },
  {
    id: 'vd1',
    type: 'value-drop',
    icon: 'brain',
    text:
      'Most people think they "just lost control."\n\nBut usually, the diet breaks in the same place every time.\n\nMaybe it breaks at night. Maybe it breaks after stress. Maybe it breaks when you get too hungry. Maybe it breaks after one small mistake.\n\nThat pattern matters.\n\nBecause once you know where the diet breaks, you can stop blaming yourself and start fixing the real problem.',
    cta: 'Continue',
  },
  {
    id: 'hunger',
    type: 'question',
    question: 'Before you overeat, did you eat enough that day?',
    options: [
      { id: 'A', text: 'No, I usually eat too little', value: 'under' },
      { id: 'B', text: 'I skip meals', value: 'skip' },
      { id: 'C', text: "I try to be 'good' all day", value: 'good' },
      { id: 'D', text: 'Yes, hunger is not the main issue', value: 'not-hunger' },
    ],
  },
  {
    id: 'night',
    type: 'question',
    question: 'What usually happens at night?',
    options: [
      { id: 'A', text: 'I get strong cravings', value: 'cravings' },
      { id: 'B', text: 'I snack even when I planned not to', value: 'snack' },
      { id: 'C', text: 'I eat because I was too strict all day', value: 'strict-day' },
      { id: 'D', text: 'Night is when I lose control most', value: 'lose-control' },
    ],
  },
  {
    id: 'vd2',
    type: 'value-drop',
    icon: 'brain',
    text:
      'Sometimes you are emotionally craving food.\n\nBut sometimes you are just underfed.\n\nIf you skip meals, eat too little, or try to be perfect all day, your body pushes back later.\n\nThat is why night eating is so common.\n\nYou think the problem is "no discipline." But the real problem may be that your plan was too strict to survive a normal day.\n\nA diet that leaves you starving will always fight back.',
    cta: 'Keep going',
  },
  {
    id: 'awareness',
    type: 'question',
    question: 'Do you notice the craving before you eat?',
    options: [
      { id: 'A', text: 'Yes, but I still eat', value: 'aware-eat' },
      { id: 'B', text: 'Sometimes', value: 'sometimes' },
      { id: 'C', text: 'Usually only after I already ate', value: 'after' },
      { id: 'D', text: 'No, it feels automatic', value: 'automatic' },
    ],
  },
  {
    id: 'autopilot',
    type: 'question',
    question: 'Where does overeating usually happen?',
    options: [
      { id: 'A', text: 'On the couch', value: 'couch' },
      { id: 'B', text: 'In the kitchen', value: 'kitchen' },
      { id: 'C', text: 'In bed or late at night', value: 'bed' },
      { id: 'D', text: 'Anywhere food is easy to grab', value: 'anywhere' },
    ],
  },
  {
    id: 'vd3',
    type: 'value-drop',
    icon: 'chart',
    text:
      'The first bite is not where the problem starts.\n\nSomething happens before that.\n\nYou feel stressed. You get too hungry. You feel bored. You see food. You sit in the same place. You start the same routine.\n\nThen the eating starts.\n\nMost people only notice the problem after they already ate.\n\nThis quiz is finding what happens before that moment.',
    cta: 'Continue',
  },
  {
    id: 'after',
    type: 'question',
    question: 'What usually happens after you overeat?',
    options: [
      { id: 'A', text: 'I feel guilty', value: 'guilt' },
      { id: 'B', text: 'I feel heavy and tired', value: 'heavy' },
      { id: 'C', text: 'I avoid thinking about it', value: 'avoid' },
      { id: 'D', text: 'I promise to restart', value: 'promise' },
    ],
  },
  {
    id: 'restart',
    type: 'question',
    question: 'When do you usually restart the diet?',
    options: [
      { id: 'A', text: 'The next morning', value: 'morning' },
      { id: 'B', text: 'Every Monday', value: 'monday' },
      { id: 'C', text: 'After the scale goes up', value: 'scale' },
      { id: 'D', text: 'After I feel bad enough', value: 'bad-enough' },
    ],
  },
  {
    id: 'vd4',
    type: 'value-drop',
    icon: 'spiral',
    text:
      'The guilt after eating feels like punishment.\n\nBut it usually creates the next overeating moment.\n\nYou overeat. You feel bad. You promise to be stricter tomorrow. You eat less. You get hungry or stressed again. Then the cycle repeats.\n\nThat is why "I\'ll restart tomorrow" rarely works.\n\nRestarting the same strict plan keeps creating the same result.\n\nThe goal is not another restart. The goal is to break the loop.',
    cta: 'One more step',
  },
  {
    id: 'tried',
    type: 'question',
    question: 'What have you already tried?',
    options: [
      { id: 'A', text: 'Eating less', value: 'less' },
      { id: 'B', text: 'Cutting sugar or carbs', value: 'cut' },
      { id: 'C', text: 'Fasting', value: 'fasting' },
      { id: 'D', text: 'Trying harder', value: 'harder' },
    ],
  },
  {
    id: 'pain',
    type: 'question',
    question: 'What bothers you most about this?',
    options: [
      { id: 'A', text: 'I keep losing and gaining the same weight', value: 'regain' },
      { id: 'B', text: 'I feel out of control around food', value: 'control' },
      { id: 'C', text: 'I keep starting over', value: 'restart' },
      { id: 'D', text: "I know what to do, but I don't do it", value: 'know-dont' },
    ],
  },
  {
    id: 'goal',
    type: 'question',
    question: 'What do you want most right now?',
    options: [
      { id: 'A', text: 'To stop breaking the diet', value: 'stop-breaking' },
      { id: 'B', text: 'To stop overeating at night', value: 'stop-night' },
      { id: 'C', text: 'To stop feeling guilty after food', value: 'stop-guilt' },
      { id: 'D', text: 'To lose weight and keep it off', value: 'lose-weight' },
    ],
  },
  {
    id: 'readiness',
    type: 'question',
    question: 'Where are you right now?',
    options: [
      { id: 'A', text: "I'm ready to try something different", value: 'ready' },
      { id: 'B', text: "I'm tired of starting over", value: 'tired' },
      { id: 'C', text: "I'm skeptical because I've tried a lot", value: 'skeptical' },
      { id: 'D', text: 'I want to understand why this keeps happening', value: 'curious' },
    ],
  },
  {
    id: 'vd5',
    type: 'value-drop',
    icon: 'spiral',
    text:
      'Your result is not about judging what you eat.\n\nIt shows why and how your diet breaks.\n\nFor some women, the diet breaks because stress takes over. For some, food becomes comfort. For some, eating happens on autopilot. For some, the diet is too strict and hunger wins.\n\nOnce you know your pattern, you know what to interrupt first.\n\nThat is how the cycle starts changing.',
    cta: 'See my result',
  },
  {
    id: 'email',
    type: 'email',
    headline: 'Your diet-breaking pattern is ready.',
    subhead:
      'Enter your email to see why your diet keeps breaking, how your pattern works, and the first step to start changing it this week.',
    cta: 'Show me my result',
    belowCta: "You'll also get the 21-day cycle-breaker plan by email. No spam. No guilt. Just clear steps.",
    privacy: 'No spam. No food guilt. Just the plan that actually works.',
  },
];

export function calculateQuizResult(answers: Record<string, string>) {
  const scores = {
    'stress-regainer': 0,
    'emotional-refueler': 0,
    'unconscious-saboteur': 0,
    'diet-rebounder': 0,
  };

  // stress-regainer: stress is the main driver
  if (answers.timing === 'stress') scores['stress-regainer'] += 2;
  if (answers.before === 'stressed') scores['stress-regainer'] += 2;
  if (answers.food === 'sweet' || answers.food === 'carbs') scores['stress-regainer'] += 1;
  if (answers.after === 'guilt') scores['stress-regainer'] += 1;
  if (answers.pain === 'control') scores['stress-regainer'] += 1;
  if (answers.goal === 'stop-breaking') scores['stress-regainer'] += 1;

  // emotional-refueler: food = comfort
  if (answers.timing === 'night') scores['emotional-refueler'] += 1;
  if (answers.before === 'stressed') scores['emotional-refueler'] += 1;
  if (answers.food === 'sweet') scores['emotional-refueler'] += 1;
  if (answers.moment === 'cant-stop') scores['emotional-refueler'] += 2;
  if (answers.pain === 'know-dont') scores['emotional-refueler'] += 2;
  if (answers.goal === 'stop-guilt') scores['emotional-refueler'] += 2;

  // unconscious-saboteur: autopilot habit
  if (answers.awareness === 'after' || answers.awareness === 'automatic') scores['unconscious-saboteur'] += 2;
  if (answers.autopilot === 'couch' || answers.autopilot === 'bed') scores['unconscious-saboteur'] += 2;
  if (answers.moment === 'fast') scores['unconscious-saboteur'] += 2;
  if (answers.timing === 'night') scores['unconscious-saboteur'] += 1;
  if (answers.pain === 'know-dont') scores['unconscious-saboteur'] += 1;

  // diet-rebounder: too strict, hunger wins
  if (answers.timing === 'strict') scores['diet-rebounder'] += 2;
  if (answers.before === 'hungry') scores['diet-rebounder'] += 2;
  if (answers.hunger === 'under' || answers.hunger === 'skip' || answers.hunger === 'good') scores['diet-rebounder'] += 2;
  if (answers.night === 'strict-day') scores['diet-rebounder'] += 2;
  if (answers.tried === 'less' || answers.tried === 'fasting') scores['diet-rebounder'] += 1;
  if (answers.pain === 'regain') scores['diet-rebounder'] += 1;
  if (answers.goal === 'lose-weight') scores['diet-rebounder'] += 1;

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
    // tie-breaker 1: goal
    if (answers.goal === 'stop-breaking' && ties.includes('stress-regainer')) return 'stress-regainer';
    if (answers.goal === 'stop-guilt' && ties.includes('emotional-refueler')) return 'emotional-refueler';
    if (answers.goal === 'lose-weight' && ties.includes('diet-rebounder')) return 'diet-rebounder';
    if (answers.goal === 'stop-night' && ties.includes('unconscious-saboteur')) return 'unconscious-saboteur';

    // tie-breaker 2: pain
    if (answers.pain === 'control' && ties.includes('stress-regainer')) return 'stress-regainer';
    if (answers.pain === 'know-dont' && ties.includes('emotional-refueler')) return 'emotional-refueler';
    if (answers.pain === 'regain' && ties.includes('diet-rebounder')) return 'diet-rebounder';
    if (answers.pain === 'restart' && ties.includes('unconscious-saboteur')) return 'unconscious-saboteur';
  }

  return resultType;
}
