type TriggerKey = 'stress' | 'boredom' | 'emotional' | 'nighttime';
type AftermathKey = 'guilt' | 'numb' | 'cycle' | 'autopilot';
type FoodKey = 'salty' | 'sweet' | 'carbs' | 'impulsive';

type ResultData = {
  headline: string;
  subhead: string;
  patternIntro: string;
  pattern: Record<TriggerKey, Record<AftermathKey, string>>;
  cravings: Record<
    FoodKey,
    {
      title: string;
      meaning: string;
      alternative: string;
    }
  >;
  primaryStrategy: {
    title: string;
    body: string;
    howTo: string[];
  };
  bonusStrategies: {
    title: string;
    body: string;
  }[];
  commonMistake: {
    title: string;
    body: string;
  };
};

export const resultsData: Record<
  'stress-soother' | 'comfort-seeker' | 'autopilot-eater' | 'perfectionist-restrictor',
  ResultData
> = {
  'stress-soother': {
    headline: "You're a Stress Soother",
    subhead:
      'When pressure builds, food becomes the fastest way to come down. That is not random. It is a stress pattern.',
    patternIntro:
      'Your brain learned that food can change your state quickly. When stress is high, cortisol goes up. That makes quick reward feel more tempting and thoughtful decisions feel harder. So by the end of the day, eating can feel less like a choice and more like a relief button.',
    pattern: {
      stress: {
        guilt:
          'You are using food to calm your system, then blaming yourself for needing relief. The guilt creates more stress, which makes the next round more likely.',
        numb:
          'You are so overloaded that food becomes a quick shutdown tool. It gives you a pause, but the stress underneath is still there.',
        cycle:
          'This is the classic stress loop: pressure builds, food brings short relief, then the tension comes back.',
        autopilot:
          'You may not feel dramatic emotion here. You are just running the same stress-to-food route so often that it now happens fast.',
      },
      boredom: {
        guilt:
          'What looks like boredom is often low-grade stress with no distraction. Once your brain has empty space, it goes looking for relief.',
        numb:
          'You are not necessarily hungry or emotional. Your system just wants a state change, and food is the easiest one it knows.',
        cycle:
          'Restless moments create the opening, but stress is usually the fuel underneath. Food gives stimulation and relief at the same time.',
        autopilot:
          'Boredom plus stress habits is a strong mix. The moment your brain has nothing to do, it runs the same script.',
      },
      emotional: {
        guilt:
          'Even when the trigger looks emotional, your body may be processing that feeling as stress. Food becomes the fastest way to settle down, then guilt hits right after.',
        numb:
          'Big feelings are tiring. Food gives you a brief emotional mute button, but it does not solve what is underneath.',
        cycle:
          'You feel something hard, food takes the edge off, then the feeling or stress returns. That is why it keeps repeating.',
        autopilot:
          'Once this pattern is well-practiced, your body moves from feeling to eating very quickly, sometimes before your mind catches up.',
      },
      nighttime: {
        guilt:
          'Night is often when held-in stress catches up. Once the day slows down, food starts to feel like the off switch.',
        numb:
          'By evening, you are drained. Food becomes an easy way to land, zone out, and stop holding everything up.',
        cycle:
          'You push through the day, then look for relief at night. Food works fast, but only briefly.',
        autopilot:
          'Your brain may now associate evening with eating so strongly that the urge shows up before you even think about it.',
      },
    },
    cravings: {
      sweet: {
        title: 'Your brain wants fast relief',
        meaning:
          'Sweet food is quick reward. When stress is high, your brain naturally looks for the fastest hit of comfort it can get. Sugar answers that quickly, which is why it gets loud after hard days.',
        alternative:
          'Try a fast nervous-system reset first: cold water on your face, a short walk, or three slow exhales longer than your inhales. You are not trying to be perfect. You are trying to lower the intensity before you decide.',
      },
      carbs: {
        title: 'Your body wants calm',
        meaning:
          'Carb cravings often show up when your system is tired and overstimulated. Carbs can feel grounding and calming, which is why they are so appealing when you are running on stress.',
        alternative:
          'Give yourself 5 minutes of downshift before you eat. Sit down, breathe, step outside, or stretch. Then ask: am I still stressed, or am I actually hungry too?',
      },
      salty: {
        title: 'You want tension release',
        meaning:
          'Crunchy, salty foods do more than taste good. They give your body sensation, jaw release, and a break from mental overload. That is why they feel so satisfying when you are wound up.',
        alternative:
          'If the urge is crunchy and urgent, try something physical first: chew gum, drink sparkling water, walk for 3 minutes, or unclench your jaw and shoulders on purpose.',
      },
      impulsive: {
        title: 'Your system is overloaded',
        meaning:
          'When you grab whatever is closest, the issue is usually intensity. Your brain is not shopping for the perfect food. It is looking for the fastest possible state change.',
        alternative:
          'Use a simple interrupt: stop, put both feet on the floor, and take three slow breaths. That tiny pause can bring enough awareness back to make the next choice feel more like a choice.',
      },
    },
    primaryStrategy: {
      title: 'Use a 5-minute downshift before you eat',
      body:
        'When stress is driving the craving, the first goal is not to be stronger. It is to get your nervous system down a notch. Even a short pause can make the urge easier to work with.',
      howTo: [
        "When the urge hits, say what is true: 'I'm stressed, and food sounds like relief right now.'",
        'Set a 5-minute timer. Keep it short so your brain does not resist it.',
        'Do one calming action: breathe, walk, stretch, splash water on your face, or sit in silence.',
        'When the timer ends, decide again. You may still eat, but you will be choosing from a calmer place.',
      ],
    },
    bonusStrategies: [
      {
        title: 'Rate your stress before you snack',
        body:
          'This week, give your stress a number from 1 to 10 before unplanned eating. It helps you see whether the real driver is hunger, stress, or both.',
      },
      {
        title: 'Create an end-of-day reset',
        body:
          'If evenings are your danger zone, build a small ritual between work and home mode. Change clothes, wash your face, step outside, or put your phone away for 5 minutes. Food should not have to do all the transition work.',
      },
    ],
    commonMistake: {
      title: 'Trying to fix stress eating with willpower',
      body:
        'Willpower is weakest when stress is highest, which is exactly why this approach keeps failing. What helps more is lowering the pressure in the moment and giving your brain another path to relief.',
    },
  },

  'comfort-seeker': {
    headline: "You're a Comfort Seeker",
    subhead:
      'For you, food is often filling an emotional gap. It is less about hunger and more about wanting softness, relief, and comfort.',
    patternIntro:
      'Food is doing emotional work here. Sweet, warm, filling foods can create a brief sense of safety and relief because they activate reward and soothing pathways in the brain. That comfort is real. It is just short-lived, which is why the urge comes back.',
    pattern: {
      stress: {
        guilt:
          'Stress does not just tire you out. It can leave you emotionally empty. Food becomes comfort, then guilt piles onto the same hard day.',
        numb:
          'When stress has been constant, food can feel like the only soft landing you get. The problem is that the relief ends fast.',
        cycle:
          'You are not just trying to calm down. You are trying to feel held for a minute. Food does that briefly, then the need returns.',
        autopilot:
          'Comfort eating can become so familiar that your body reaches for it before you even label the feeling.',
      },
      boredom: {
        guilt:
          'What looks like boredom may actually be emptiness, disconnection, or emotional flatness. Food adds feeling to a moment that feels dead.',
        numb:
          'When nothing feels good, food becomes the easiest way to feel something pleasant for a minute.',
        cycle:
          'The moment feels empty, food fills it, then the emptiness comes back. That is why it keeps repeating.',
        autopilot:
          'If you often soothe boredom with food, your brain starts treating those moments as automatic snack cues.',
      },
      emotional: {
        guilt:
          'This is the most direct version of your pattern: a hard feeling shows up, food softens it, and guilt joins the pile right after.',
        numb:
          'You are using food to create comfort when you do not know what else would help quickly enough.',
        cycle:
          'The feeling rises, food quiets it for a moment, then the feeling or loneliness returns once the moment passes.',
        autopilot:
          'When this pattern has been around a while, the jump from feeling bad to eating can become almost instant.',
      },
      nighttime: {
        guilt:
          'Night often magnifies loneliness, emptiness, and emotional fatigue. Food becomes company, comfort, and reward all at once.',
        numb:
          'By the end of the day, you may not need excitement. You may just need something that feels warm, safe, and easy.',
        cycle:
          'Night gives you fewer distractions, so emotional needs get louder. Food steps in as a fast comfort tool.',
        autopilot:
          'If night is your comfort window, your body may start expecting food as part of winding down.',
      },
    },
    cravings: {
      sweet: {
        title: 'You want comfort fast',
        meaning:
          'Sweet foods often feel soft, warm, nostalgic, or soothing. They can give a fast emotional lift, which is why they get loud when you feel low, alone, or emotionally worn out.',
        alternative:
          'Before you eat, ask one honest question: what would feel comforting if food was not available for 10 minutes? A hot drink, a blanket, a shower, music, or hearing another human voice all count.',
      },
      carbs: {
        title: 'You want grounding',
        meaning:
          'Carb-heavy foods can feel heavy, warm, and settling. When your emotions feel messy, your brain often looks for something that feels solid and calming.',
        alternative:
          'Try grounding your body first: sit down, put both feet on the floor, hold something warm, and slow your breathing. You are giving yourself the feeling your brain was hoping food would create.',
      },
      salty: {
        title: 'You want sensation and relief',
        meaning:
          'Sometimes the comfort is not sweetness. It is the sensory shift: crunch, salt, and a break from your current emotional state. Food gives your body something immediate to focus on.',
        alternative:
          'Use sensory comfort on purpose. Try crunchy vegetables, gum, sparkling water, or a short walk with music. If the feeling is still there after, then decide what you want next.',
      },
      impulsive: {
        title: 'You want the feeling to stop now',
        meaning:
          'When you grab anything, the goal is not taste. It is quick relief. Your brain is trying to shut off discomfort as fast as possible.',
        alternative:
          'Name the feeling out loud in one word: lonely, hurt, overwhelmed, tired. That one label often creates enough distance to choose a better comfort move first.',
      },
    },
    primaryStrategy: {
      title: 'Name the feeling before you feed it',
      body:
        "A simple label can reduce the intensity of an emotion. That matters because once the feeling is clearer, the craving usually feels less confusing and less in charge.",
      howTo: [
        "When the urge hits, pause and ask: 'What am I feeling right now?'",
        "Use one plain word. Sad. Lonely. Flat. Hurt. Tired. 'I don't know' also counts.",
        'Ask whether food sounds like fuel, comfort, or escape.',
        'If it is comfort, try one non-food comfort action for 10 minutes first. Then decide what you want.',
      ],
    },
    bonusStrategies: [
      {
        title: 'Build a comfort menu',
        body:
          'Make a short list of things that genuinely soothe you besides food: hot tea, a walk, texting someone, stretching, a shower, music, sunlight, a blanket. When the craving hits, choose from the list instead of trying to invent help in the moment.',
      },
      {
        title: 'Reach out earlier',
        body:
          'If loneliness or emotional heaviness is part of the pattern, do not wait until the urge is huge. Send the text, voice note, or check-in message earlier in the day.',
      },
    ],
    commonMistake: {
      title: 'Treating an emotional need like a discipline problem',
      body:
        'You do not fix loneliness, sadness, or emotional fatigue by getting stricter with food. The real shift happens when you get better at recognizing what kind of comfort you actually need.',
    },
  },

  'autopilot-eater': {
    headline: "You're an Autopilot Eater",
    subhead:
      'For you, eating often happens before your brain fully checks in. This pattern is driven more by habit, timing, and environment than by one big emotion.',
    patternIntro:
      'Your brain loves efficiency. If the same cue keeps leading to the same snack, it eventually stops asking permission. That is why this can feel automatic, especially at night, during screens, or in familiar routines. The good news is that habit loops respond really well to small environmental changes.',
    pattern: {
      stress: {
        guilt:
          'Stress makes you more likely to run default habits. If food is the well-worn path, your brain takes it before you fully notice.',
        numb:
          'Under stress, autopilot gets stronger. You are not necessarily choosing food for comfort. You are sliding into the usual script.',
        cycle:
          'Stress lowers your attention and raises routine behavior, which is why the same eating pattern keeps replaying.',
        autopilot:
          'This is the purest version of your type: you are eating before conscious choice fully arrives.',
      },
      boredom: {
        guilt:
          'Boredom gives your brain room to follow the nearest habit. If snacking is part of that loop, it fires quickly.',
        numb:
          'You are not deeply hungry or deeply emotional. You are just under-stimulated, and food is an easy activity.',
        cycle:
          'Nothing is happening, so you eat. The moment passes, then the same setup returns later and the loop repeats.',
        autopilot:
          'This is classic cue-driven eating. You end up in the kitchen or in the bag almost before you remember choosing it.',
      },
      emotional: {
        guilt:
          'Emotions can still be part of the picture, but the bigger issue is speed. The feeling triggers the routine before awareness fully arrives.',
        numb:
          'The emotion may be brief. The habit is what sticks. Your brain is using a learned shortcut.',
        cycle:
          'A feeling opens the door, autopilot takes over, and afterward it is hard to understand why it happened so fast.',
        autopilot:
          'You do not need a huge feeling for this pattern. Once the cue is there, the behavior often runs by itself.',
      },
      nighttime: {
        guilt:
          'Night is a high-risk habit zone because your brain is tired and routines are strong. That combination makes automatic eating much more likely.',
        numb:
          'Evening eating often feels invisible because it is bundled with TV, scrolling, cleanup, or winding down.',
        cycle:
          'Same time, same place, same food. Your brain loves predictable loops, and nighttime gives it the same setup again and again.',
        autopilot:
          'If your hand knows where the snack is before your mind speaks up, that is exactly the pattern we are looking at.',
      },
    },
    cravings: {
      sweet: {
        title: 'You want easy stimulation',
        meaning:
          'Sweet foods are fast, rewarding, and require no thought. They fit habit eating really well, especially when you are tired or distracted.',
        alternative:
          'Make the first step less automatic. Do not eat from the package. Put it in a bowl, sit down, and ask one question before the first bite: did I choose this or drift into it?',
      },
      carbs: {
        title: 'You want easy comfort',
        meaning:
          'Carbs are familiar, easy, and low-friction. That makes them perfect habit food when your brain is running on low attention.',
        alternative:
          'Add one speed bump. Move the food, portion it first, or make yourself plate it. Small friction works better than making big promises to yourself.',
      },
      salty: {
        title: 'You want hand-to-mouth relief',
        meaning:
          'Crunchy snacks pair really well with screens, boredom, and routine. They keep your hands busy and your brain lightly entertained.',
        alternative:
          'If screens are involved, separate the two. Decide first: snack time or screen time? That tiny decision breaks the blend that keeps autopilot going.',
      },
      impulsive: {
        title: 'You are following the nearest path',
        meaning:
          'When you grab whatever is there, habit is usually stronger than preference. Your brain is choosing easy, not special.',
        alternative:
          'Change the path. Move the common snack, leave a glass of water out, or put a sticky note where the habit starts. Environment changes beat motivation here.',
      },
    },
    primaryStrategy: {
      title: 'Create one obvious pause',
      body:
        'Autopilot changes fastest when you add friction and visibility, not when you try to feel more motivated. The goal is a small pause that gives choice enough time to show up.',
      howTo: [
        'Pick one food or one moment where this happens most often.',
        'Change the setup: move the food, portion it first, or remove it from your usual line of sight.',
        "Before the first bite, ask one question: 'Did I choose this, or did I drift into it?'",
        'Keep the change small and repeat it daily until the old loop feels less automatic.',
      ],
    },
    bonusStrategies: [
      {
        title: 'Make evening eating visible',
        body:
          'If night is the main pattern, stop eating straight from bags or boxes. Visibility matters. Plate it, sit down, and let your brain see what is actually happening.',
      },
      {
        title: 'Change one cue at a time',
        body:
          'Do not rebuild your whole life. Change one trigger: where the snack lives, when you eat on the couch, or what you do during the first 10 minutes after dinner.',
      },
    ],
    commonMistake: {
      title: 'Trying to fix habits with motivation alone',
      body:
        'Motivation comes and goes. Environment is always there. If you want the pattern to change, make the setup harder to run automatically and easier to notice.',
    },
  },

  'perfectionist-restrictor': {
    headline: "You're a Perfectionist Restrictor",
    subhead:
      'You try to be good with food, then the pressure snaps and you eat more than you wanted. The problem is not weak control. It is the restrict-then-rebound cycle.',
    patternIntro:
      'When you skip, limit, label foods as bad, or try to hold yourself very tightly, your brain reads scarcity. Scarcity makes cravings louder. Later, the rebound hits. That is why the same person who feels disciplined all day can feel out of control later. The rebound is built into the restriction.',
    pattern: {
      stress: {
        guilt:
          'Stress makes rigid food rules even harder to hold. Once you break them, guilt floods in and the next round of restriction often starts immediately.',
        numb:
          'By the time you finally eat, you may be too tired to even feel much. That flatness is often the result of too much pressure, not too little discipline.',
        cycle:
          'Stress plus restriction is a rough combination. You hold on tighter, then the rebound feels bigger when it comes.',
        autopilot:
          'After enough restriction, eating can swing from controlled to automatic very quickly because your brain is trying to catch up.',
      },
      boredom: {
        guilt:
          'When you are busy, you can outrun hunger and cravings. Boredom removes the distraction, so the restriction becomes harder to ignore.',
        numb:
          'You may think boredom caused the eating, but often it just exposed how hungry, deprived, or mentally tired you already were.',
        cycle:
          'A quiet moment opens the door and the rebound rushes in. Then guilt tells you to tighten the rules again.',
        autopilot:
          'If the restriction pressure is high enough, the moment your guard drops your brain may go straight into automatic eating.',
      },
      emotional: {
        guilt:
          'Hard feelings make strict food rules harder to maintain. When you eat, it can feel like you failed twice: emotionally and with food.',
        numb:
          'Sometimes the eating is less about pleasure and more about finally shutting off the constant effort of holding yourself in line.',
        cycle:
          'Emotion breaks the rule, guilt follows, then more control feels like the answer. That is what keeps the loop alive.',
        autopilot:
          'If you have been restricting hard, emotional moments can flip straight into rebound eating before you fully think it through.',
      },
      nighttime: {
        guilt:
          'Night is where this pattern usually shows its hand. You spend the day trying to be good, then the body pushes back when your energy is lowest.',
        numb:
          'By evening, your brain may want relief from both hunger and constant food policing. Eating becomes the release valve.',
        cycle:
          'This is the classic restrict-rebound setup: less food and more rules by day, stronger cravings and less control by night.',
        autopilot:
          'Once the rebound starts, it can feel mechanical because your body is trying to close the gap restriction created.',
      },
    },
    cravings: {
      sweet: {
        title: 'Your brain wants what feels off-limits',
        meaning:
          'The more forbidden a food feels, the louder it often gets. Restriction tends to increase obsession, not reduce it.',
        alternative:
          'Instead of promising to cut it out again tomorrow, bring one sweet food back into normal rotation this week. Permission lowers intensity better than punishment.',
      },
      carbs: {
        title: 'Your body wants fuel',
        meaning:
          'Carb cravings are often a straightforward sign that your body wants more energy than it has been getting. This is especially true if you have been skipping meals or trying to stay very controlled.',
        alternative:
          'Eat a real meal with carbs, protein, and fat. Not a tiny fix. When the body gets enough, the panic around food usually drops.',
      },
      salty: {
        title: 'You want volume and relief',
        meaning:
          'Crunchy, salty foods can show up hard when you have been mentally or physically restricting. They feel satisfying because your body is trying to close a gap.',
        alternative:
          'Look earlier in the day. Did you eat enough? Did you leave meals hungry? Often the best fix is not another trick. It is better fueling sooner.',
      },
      impulsive: {
        title: 'This is rebound, not randomness',
        meaning:
          'When you grab anything and everything, your brain is not being dramatic. It is reacting to too much scarcity, too many rules, or too much time spent holding back.',
        alternative:
          'Drop the compensation plan and eat a steady meal. The fastest way out of rebound is proving to your body that food is available again.',
      },
    },
    primaryStrategy: {
      title: 'Eat regularly for 7 days',
      body:
        'If your body thinks food is scarce, it will keep pushing hard. One of the fastest ways to calm the rebound is regular meals, enough food, and fewer all-or-nothing rules.',
      howTo: [
        'Eat three real meals a day for the next week. Do not skip to make up for anything.',
        'Make sure meals are actually satisfying, not tiny and overly controlled.',
        'Pick one food you usually label bad and let it be part of a normal meal this week.',
        'If you overeat, do not compensate the next day. Restart with your next normal meal.',
      ],
    },
    bonusStrategies: [
      {
        title: 'Drop good-food and bad-food language',
        body:
          'The more moral weight you put on food, the more intensity food tends to carry. Neutral language helps lower the pressure.',
      },
      {
        title: 'Watch your rebound window',
        body:
          'Notice when the strongest urges show up. For many people it is late afternoon, night, or after a very controlled day. That window tells you where the restriction is catching up.',
      },
    ],
    commonMistake: {
      title: 'Trying to solve rebound eating with more rules',
      body:
        'More control sounds smart, but it usually keeps the cycle going. What helps is steadier fuel, less food drama, and a system your body does not have to fight.',
    },
  },
};
