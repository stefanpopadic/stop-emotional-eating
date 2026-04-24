type ResultData = {
  /** Headline — one sentence, plain language, weight-loss + diet-break framing */
  headline: string;
  /** 2-3 sentence subhead in plain language */
  subhead: string;
  /** "Your Pattern" — 6-step loop list + 1-2 sentence summary */
  pattern: {
    steps: string[];
    summary: string;
  };
  /** "Why This Keeps Happening" — short paragraphs separated by \n\n */
  why: string;
  /** "How You Break The Diet" — short paragraphs separated by \n\n */
  howYouBreak: string;
  /** "What To Watch For This Week" — intro + bullet items + optional close */
  watchFor: {
    intro: string;
    items: string[];
    close?: string;
  };
  /** "First Step" — short paragraphs separated by \n\n with one concrete action */
  firstStep: string;
};

export const resultsData: Record<
  'stress-regainer' | 'emotional-refueler' | 'unconscious-saboteur' | 'diet-rebounder',
  ResultData
> = {
  'stress-regainer': {
    headline: 'Your diet breaks when stress takes over.',
    subhead:
      'You can follow the plan when life is calm. But when the day gets stressful, food becomes relief. This is why the weight comes back after hard weeks. Not because you do not know what to eat. Because stress changes how you eat.',
    pattern: {
      steps: [
        'Stress hits.',
        'You feel pressure building.',
        'Food feels like the fastest way to calm down.',
        'You eat more than planned.',
        'Then guilt starts.',
        'Then you promise to get back on track.',
      ],
      summary:
        'The problem is not the food. The problem is that food has become your fastest stress relief.',
    },
    why:
      'When you are stressed, your brain wants something that works fast.\n\nFood is fast.\n\nSweet food, salty food, crunchy food, and takeout all give quick relief.\n\nSo your brain learns: "When I\'m stressed, food helps."\n\nThe next stressful day comes, and the craving returns. That is the loop.',
    howYouBreak:
      'You do not usually break the diet because you are hungry.\n\nYou break it because the day feels too heavy.\n\nYou need a break. You need comfort. You need something to take the pressure down.\n\nFood becomes the easiest button to press.',
    watchFor: {
      intro: 'Watch for the moment you think: "I just need something." That usually means stress is driving the craving.\n\nBefore eating, pause for 90 seconds. Do something that lowers the pressure first:',
      items: [
        'Step away from the kitchen',
        'Splash cold water on your face',
        'Take 5 slow breaths',
        'Walk for 2 minutes',
        'Write down what made the day feel heavy',
      ],
      close:
        'Then decide if you still want the food. The goal is not perfection. The goal is to stop stress from making the decision for you.',
    },
    firstStep:
      'Before your next stress craving, ask:\n\n"Am I hungry, or am I trying to calm down?"\n\nThat one question starts breaking the loop.',
  },

  'emotional-refueler': {
    headline: 'Your diet breaks when food becomes comfort.',
    subhead:
      'You are not just eating because food tastes good. You are eating because food gives you something for a few minutes — comfort, warmth, distraction, relief. That is why another diet does not fix it. A food rule cannot replace what your brain is asking for emotionally.',
    pattern: {
      steps: [
        'You feel emotionally drained.',
        'You want something that makes the feeling softer.',
        'Food is easy and available.',
        'You eat.',
        'You feel better for a short moment.',
        'Then the guilt comes back.',
      ],
      summary:
        'The food helped for a few minutes. But it did not fix what created the craving.',
    },
    why:
      'Your brain remembers what gives relief.\n\nIf food has helped you feel better before, your brain will ask for it again. Especially when you feel tired, hurt, lonely, overwhelmed, or emotionally empty.\n\nThat does not mean you are weak.\n\nIt means your brain found a quick way to feel better. Now you need a better way to respond before food becomes the answer.',
    howYouBreak:
      'You usually break the diet when the feeling gets too uncomfortable.\n\nIt may not feel dramatic. It may just feel like:\n\n"I need something." "I deserve this." "I don\'t care right now." "I just want to feel better."\n\nThat is the emotional refuel loop.',
    watchFor: {
      intro:
        'Watch for cravings that come when you are not physically hungry. Especially cravings that show up when you feel:',
      items: [
        'Tired',
        'Alone',
        'Frustrated',
        'Unseen',
        'Emotionally done',
      ],
      close:
        'Before eating, ask: "What am I actually needing right now?" Not as therapy. As data. Because the craving is pointing to something.',
    },
    firstStep:
      'Before your next comfort craving, do one thing that gives comfort without food:\n\nTake a hot shower. Hold a warm drink. Text someone honestly. Lie down for 5 minutes. Put your hand on your chest and breathe slowly.\n\nThen decide if you still want the food.\n\nThe goal is not to ban comfort food. The goal is to stop food from being your only comfort.',
  },

  'unconscious-saboteur': {
    headline: 'Your diet breaks on autopilot.',
    subhead:
      'You may not have one huge binge. Instead, the weight creeps back through small moments. A bite here. A snack there. A handful while standing in the kitchen. Something while scrolling. Something after dinner. It does not feel like a big deal in the moment. But it adds up.',
    pattern: {
      steps: [
        'You are in the same place.',
        'At the same time.',
        'Doing the same thing.',
        'Food is nearby.',
        'You eat without thinking much.',
        'Then later, you realize you went off-plan again.',
      ],
      summary:
        'This is not a discipline problem. It is a habit loop.',
    },
    why:
      'Your brain loves shortcuts.\n\nIf you always snack on the couch, the couch becomes a cue. If you always eat while scrolling, your phone becomes a cue. If you always check the kitchen at night, the kitchen becomes a cue.\n\nThe craving is not always emotional.\n\nSometimes the environment starts the eating before you even think.',
    howYouBreak:
      'You break the diet because the habit starts before your attention turns on.\n\nYou do not always decide to eat. You just find yourself eating.\n\nThat is why "try harder" does not work well here. You need to change the cue, not just fight the craving.',
    watchFor: {
      intro: 'Watch your repeat locations. Where does it happen most?',
      items: [
        'Couch',
        'Kitchen',
        'Bed',
        'Desk',
        'Car',
        'In front of the TV',
        'While scrolling',
      ],
      close: 'That place is part of the pattern. Change one thing there.',
    },
    firstStep:
      'Break the cue before you fight the craving.\n\nTonight: move the snack food. Sit somewhere else. Keep water where the snack usually is. Brush your teeth after dinner. Put a note on the cabinet: "Am I hungry or automatic?"\n\nDo not rely on willpower after the habit starts. Make the habit harder to start.',
  },

  'diet-rebounder': {
    headline: 'Your diet breaks because the plan is too strict.',
    subhead:
      'You can be disciplined for a while. Then hunger builds. Cravings get stronger. Night comes. And the diet collapses. This is not because you are lazy. It is because your plan pushes your body too hard, then your body pushes back.',
    pattern: {
      steps: [
        'You start strong, eat less, cut foods, try to be perfect.',
        'You feel proud for a few days.',
        'Then hunger gets louder.',
        'Cravings hit harder.',
        'You overeat.',
        'Then you restart the same strict plan again.',
      ],
      summary:
        'That is the rebound loop.',
    },
    why:
      'Your body does not care that you are "on a diet." It only knows you are not getting enough.\n\nSo it makes food harder to ignore. You think about food more. You crave faster energy. You feel less patient. You lose control at night.\n\nThe problem is not that you need a stricter plan.\n\nThe problem is that the strict plan is creating the rebound.',
    howYouBreak:
      'You usually break the diet after trying too hard to be good.\n\nSkipping meals. Eating tiny portions. Cutting too many foods. Waiting too long to eat. Saving calories for later.\n\nThen later, hunger wins. Not emotional hunger. Real hunger.',
    watchFor: {
      intro: 'Watch for these warning signs:',
      items: [
        'You skip breakfast or lunch',
        'You try to "save calories"',
        'You are hungry most of the day',
        'You avoid carbs all day, then crave them at night',
        'You feel proud of eating very little',
        'You overeat later and feel confused why it happened',
      ],
      close: 'That is not failure. That is rebound.',
    },
    firstStep:
      'Eat a real meal before the craving gets extreme.\n\nNot a tiny snack. A real meal with protein, carbs, fat, and enough food to feel satisfied.\n\nThis is not "giving up." This is how you stop your body from fighting you later.\n\nThe goal is not to eat as little as possible. The goal is to eat in a way you can actually repeat.',
  },
};
