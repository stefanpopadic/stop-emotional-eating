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
    headline: "This is why you can't stop eating and why your weight won't go down.",
    subhead:
      "You are not addicted to eating. You have an invisible hormone and emotion cycle that needs to be addressed. Take this free 2-minute quiz that reveals the emotional eating cycle behind your cravings and how to get out of it.",
    cta: 'Take the 2-minute quiz',
    belowCta: '',
    socialProof: '',
  },
  {
    id: 'trigger',
    type: 'question',
    question: "When you're on a diet, when do the cravings usually hit?",
    options: [
      { id: 'A', text: 'After a stressful day. I was disciplined all day, then something breaks', value: 'stress' },
      { id: 'B', text: "When I'm bored or have nothing to do. The diet feels impossible to follow", value: 'boredom' },
      { id: 'C', text: 'When I feel low, lonely, or emotionally drained. Food is the only comfort', value: 'emotional' },
      { id: 'D', text: 'At night. I hold it together all day, then lose it when I finally sit down', value: 'nighttime' },
    ],
  },
  {
    id: 'food',
    type: 'question',
    question: 'When you break your diet, what do you usually reach for?',
    options: [
      { id: 'A', text: 'Something salty or crunchy — chips, crackers, nuts', value: 'salty' },
      { id: 'B', text: 'Something sweet — chocolate, ice cream, cookies', value: 'sweet' },
      { id: 'C', text: 'Carbs — bread, pasta, cereal, toast', value: 'carbs' },
      { id: 'D', text: "Whatever is closest. I just need something right now", value: 'impulsive' },
    ],
  },
  {
    id: 'aftermath',
    type: 'question',
    question: 'After you break the diet, how do you usually feel?',
    options: [
      { id: 'A', text: 'Guilty. I tell myself I ruined everything and need to start over', value: 'guilt' },
      { id: 'B', text: "Empty. The food didn't actually fix what I was feeling", value: 'numb' },
      { id: 'C', text: 'Better for a moment, then right back to wanting more', value: 'cycle' },
      { id: 'D', text: "I barely notice. It happens so automatically I don't even think about it", value: 'autopilot' },
    ],
  },
  {
    id: 'vd1',
    type: 'value-drop',
    icon: 'brain',
    text:
      "Here's what your diet plan never told you:\n\nWhen you restrict food, your cortisol rises. When cortisol rises, your brain demands quick-reward food — sugar, salt, carbs. The harder you diet, the louder the cravings get.\n\nThis is not a willpower problem. Your hormones are literally working against your diet. That's why discipline alone never sticks.",
    cta: 'Keep going',
  },
  {
    id: 'awareness',
    type: 'question',
    question: 'When a craving hits during your diet, how much warning do you get?',
    options: [
      { id: 'A', text: "I feel it building. I know it's coming but I can't stop it", value: 'high' },
      { id: 'B', text: 'Sometimes I catch it, sometimes I only realize after I already ate', value: 'moderate' },
      { id: 'C', text: "I don't notice until it's over. It just happens", value: 'low' },
      { id: 'D', text: "I never thought about it this way. I just assumed I was weak", value: 'new' },
    ],
  },
  {
    id: 'duration',
    type: 'question',
    question: 'How long have you been struggling to stick with diets?',
    options: [
      { id: 'A', text: "Less than a year. It's a recent frustration", value: 'recent' },
      { id: 'B', text: 'A few years. I lose weight, gain it back, repeat', value: 'recurring' },
      { id: 'C', text: "As long as I can remember. I've never been able to stay consistent", value: 'lifelong' },
      { id: 'D', text: 'It got much worse after a specific life event', value: 'event' },
    ],
  },
  {
    id: 'past',
    type: 'question',
    question: 'What have you already tried to make your diet work?',
    options: [
      { id: 'A', text: 'Multiple diets — keto, calorie counting, intermittent fasting. They all work, then stop', value: 'diets' },
      { id: 'B', text: 'Pure willpower. I just try harder each time', value: 'willpower' },
      { id: 'C', text: "Therapy or self-help. I understand the problem but I still can't stop", value: 'therapy' },
      { id: 'D', text: "Nothing structured. I just keep starting over every Monday", value: 'nothing' },
    ],
  },
  {
    id: 'vd2',
    type: 'value-drop',
    icon: 'chart',
    text:
      "Here's why every diet eventually fails:\n\nPeople who can identify what they're actually feeling before the craving — stressed, lonely, bored, exhausted — are far more likely to stay on track.\n\nNot because they have more discipline. Because they catch the emotional trigger before it hijacks the diet.\n\nThat's exactly what this quiz is mapping for you.",
    subtext: 'Based on peer-reviewed behavioral psychology research',
    cta: 'Continue',
  },
  {
    id: 'desire',
    type: 'question',
    question: 'If you could finally stick with your diet, what would matter most?',
    options: [
      { id: 'A', text: 'Feeling in control around food without constantly fighting myself', value: 'control' },
      { id: 'B', text: 'Ending the guilt cycle of breaking the diet and starting over', value: 'peace' },
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
      { id: 'B', text: "Skeptical. I've been let down by too many approaches", value: 'skeptical' },
      { id: 'C', text: "Exhausted. I'm tired of the cycle but don't know what else to do", value: 'overwhelmed' },
      { id: 'D', text: 'Curious. I want to understand what is actually going on first', value: 'proxy' },
    ],
  },
  {
    id: 'vd3',
    type: 'value-drop',
    icon: 'spiral',
    text:
      "One last thing before your result:\n\nEvery diet you've tried addressed the food. None of them addressed why you eat.\n\nThe craving that breaks your diet is not about hunger. It's your brain using food to solve a problem — stress, loneliness, exhaustion, or the rebound from restricting all day.\n\nYour result reveals which emotional pattern is sabotaging your diet and what to do about it.",
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
