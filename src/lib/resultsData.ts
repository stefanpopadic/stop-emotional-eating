type TriggerKey = 'stress' | 'boredom' | 'emotional' | 'nighttime';
type AftermathKey = 'guilt' | 'numb' | 'cycle' | 'autopilot';
type FoodKey = 'salty' | 'sweet' | 'carbs' | 'impulsive';

type ResultData = {
  /** Personalized headline --uses {name} placeholder */
  headline: string;
  subhead: string;
  /** What's happening in your brain --neuroscience section */
  science: {
    title: string;
    body: string;
    chemicals: { name: string; role: string }[];
  };
  /** Personalized trigger x aftermath insight */
  pattern: Record<TriggerKey, Record<AftermathKey, string>>;
  /** Food-specific neuroscience */
  cravings: Record<
    FoodKey,
    {
      title: string;
      neuroscience: string;
      signal: string;
    }
  >;
  /** One thing to try */
  tryThis: {
    title: string;
    body: string;
  };
};

export const resultsData: Record<
  'stress-soother' | 'comfort-seeker' | 'autopilot-eater' | 'perfectionist-restrictor',
  ResultData
> = {
  'stress-soother': {
    headline: "{name}, you're running on stress.",
    subhead:
      "Your nervous system is stuck in overdrive. When cortisol stays elevated, your brain stops making thoughtful decisions and starts grabbing the fastest relief it can find. That's not a character flaw. That's biochemistry.",
    science: {
      title: "What's happening in your brain",
      body: "When stress is chronic, your hypothalamic-pituitary-adrenal (HPA) axis stays activated. Cortisol floods your system. This does two things at once: it dials down your prefrontal cortex (the part that plans and decides) and dials up your limbic system (the part that wants reward now). Your brain literally becomes worse at saying no and better at finding fast comfort. Food is the most accessible reward most people have.",
      chemicals: [
        { name: 'Cortisol', role: 'Elevated. Keeps your body in fight-or-flight. Increases appetite for calorie-dense food and drives fat storage around the midsection.' },
        { name: 'Serotonin', role: 'Depleted by chronic stress. Your brain craves carbs and sugar because they temporarily boost serotonin through the insulin-tryptophan pathway.' },
        { name: 'Dopamine', role: 'Your reward system is hijacked. Stress makes dopamine spikes from food feel more intense, reinforcing the eat-when-stressed loop.' },
        { name: 'GABA', role: 'Low. This is your calming neurotransmitter. When it drops, your brain feels wired and restless --food becomes a way to force a shutdown.' },
      ],
    },
    pattern: {
      stress: {
        guilt: "Your cortisol drives you to eat, then your prefrontal cortex comes back online and judges you for it. The guilt itself spikes cortisol again. You're stuck in a stress-guilt-stress loop that's neurochemically self-reinforcing.",
        numb: "You're so overloaded that food becomes a circuit breaker. Your brain is using the dopamine hit to temporarily suppress the stress signal. The numbness afterward is your nervous system finally getting a brief pause.",
        cycle: "Classic HPA axis loop: cortisol rises, you eat for relief, dopamine spikes briefly, cortisol returns. Each cycle trains your brain to reach for food faster next time.",
        autopilot: "Your basal ganglia has automated this. The stress-to-food pathway has been repeated so many times that it now fires before your conscious brain even registers what's happening.",
      },
      boredom: {
        guilt: "What feels like boredom is often low-grade cortisol with no outlet. Your brain has idle processing power and defaults to the easiest dopamine source it knows.",
        numb: "Your brain is understimulated but your stress hormones are still quietly elevated. Food gives a brief state change --not pleasure, just different.",
        cycle: "Restlessness is often masked stress. Your brain seeks stimulation, food provides it momentarily, then the emptiness returns because the underlying cortisol never dropped.",
        autopilot: "Boredom + stress history = automatic eating. Your brain has learned: nothing to do → eat. The pathway is so well-worn it doesn't need a conscious trigger anymore.",
      },
      emotional: {
        guilt: "Your body processes emotional pain through the same neural pathways as physical pain. Food activates the opioid system --it's literally a painkiller. Then guilt hits, which is just more pain, and the cycle restarts.",
        numb: "Big emotions exhaust your nervous system. Food's dopamine hit creates a brief emotional mute button. The numbness isn't the food working --it's your brain finally running out of capacity to feel.",
        cycle: "Emotional distress → food → brief relief → distress returns. Your brain is trying to self-medicate with the fastest tool available. The problem isn't the tool. The problem is that the relief only lasts minutes.",
        autopilot: "When this pattern is well-practiced, your amygdala (emotional brain) sends the signal to eat before your prefrontal cortex (thinking brain) can even label the feeling.",
      },
      nighttime: {
        guilt: "Cortisol naturally drops in the evening, but if you've been stressed all day, it crashes hard. Your depleted brain has zero executive function left. Food becomes the easiest way to feel something before bed.",
        numb: "By evening, your serotonin is at its daily low and your willpower is spent. Food is the fastest serotonin and dopamine boost available. The numbness is your overtaxed nervous system finally giving up.",
        cycle: "You hold it together all day, burning through cortisol and willpower. By night, both are gone. Your brain has been waiting all day for this --the moment you finally let it have what it wants.",
        autopilot: "Your circadian rhythm now includes eating. Your brain has associated evening + couch + screen with food so strongly that the craving arrives on schedule, like an alarm.",
      },
    },
    cravings: {
      sweet: {
        title: 'Your brain is hunting for serotonin.',
        neuroscience: "Sugar triggers a rapid insulin spike. Insulin clears competing amino acids from your bloodstream, allowing more tryptophan to cross the blood-brain barrier. Tryptophan converts to serotonin. Your brain has learned: sugar = fast mood lift. That's why sweet cravings scream loudest after hard days --your serotonin is depleted and your brain knows the fastest fix.",
        signal: "Low serotonin + high cortisol. Your brain is chemically asking for calm.",
      },
      carbs: {
        title: "Your body is trying to calm your nervous system.",
        neuroscience: "Carbohydrates trigger the same insulin-tryptophan-serotonin pathway as sugar, but slower and with more volume. Pasta, bread, rice --these feel 'grounding' because they genuinely increase serotonin production. Your brain isn't being lazy. It's using food as a pharmaceutical.",
        signal: "Depleted serotonin + exhausted GABA system. Your body wants to downregulate, and carbs are the fastest way it knows how.",
      },
      salty: {
        title: "Your adrenals are asking for help.",
        neuroscience: "Chronic stress taxes your adrenal glands. When cortisol stays high for too long, your body starts losing sodium faster than normal. Salt cravings can be a direct signal that your stress response has been running too hot for too long. The crunch also matters --jaw tension from stress gets a physical release through hard, crunchy food.",
        signal: "Adrenal fatigue signal + physical tension release. Your body is asking you to slow down.",
      },
      impulsive: {
        title: "Your prefrontal cortex went offline.",
        neuroscience: "When you grab whatever is closest without thinking, that's your executive function shutting down. High cortisol literally reduces blood flow to the prefrontal cortex. You're not choosing badly --your choosing-brain is temporarily disabled. The speed of the grab reflects how overwhelmed your system is.",
        signal: "Severe prefrontal cortex suppression. Your brain is in pure survival mode --it wants calories, not taste.",
      },
    },
    tryThis: {
      title: "Drop your cortisol before you eat.",
      body: "Your craving is running on cortisol. If you can lower cortisol even slightly, the craving will lose most of its power. Try this: splash cold water on your face (triggers the dive reflex, instantly lowers heart rate and cortisol), or do 3 exhales that are twice as long as your inhales (activates the vagus nerve, which directly opposes the stress response). Do either for 90 seconds. That's how long it takes for cortisol to start dropping. Then see if you still want the food. You usually won't --at least not as desperately.",
    },
  },

  'comfort-seeker': {
    headline: "{name}, you're emotionally running on empty.",
    subhead:
      "Your brain isn't looking for food. It's looking for connection, warmth, and safety. When those aren't available, food activates the same opioid pathways that human touch does. You're not weak. Your brain is improvising.",
    science: {
      title: "What's happening in your brain",
      body: "Loneliness, sadness, and emotional depletion reduce activity in your brain's social bonding circuits --the same pathways that use oxytocin and endogenous opioids. When these drop, your brain goes looking for the next best source of warmth and reward. Food --especially sweet, warm, and rich food --activates the mu-opioid receptors in your brain. These are literally the same receptors activated by physical comfort and human connection.",
      chemicals: [
        { name: 'Endorphins', role: 'Low. These natural painkillers drop when you feel isolated or emotionally hurt. Comfort food triggers a small endorphin release --your brain is self-medicating.' },
        { name: 'Oxytocin', role: 'Depleted. This is your bonding and safety hormone. It drops when you feel disconnected. Warm, sweet food partially mimics the oxytocin response.' },
        { name: 'Serotonin', role: 'Below baseline. Emotional depletion and loneliness both reduce serotonin. Your brain craves carbs and sweets because they boost serotonin through the tryptophan pathway.' },
        { name: 'Dopamine', role: "Seeking mode. Your reward system is scanning for anything that will make you feel less empty. Food is available 24/7 -- that's why it wins." },
      ],
    },
    pattern: {
      stress: {
        guilt: "Stress drains you emotionally, leaving you hollow. Food fills the gap briefly --then guilt takes what little emotional energy you had left. You end up more depleted than before.",
        numb: "When stress and emotional emptiness combine, food becomes the only soft landing. The numbness isn't apathy --it's your opioid system giving you a brief break from feeling everything.",
        cycle: "You eat because something hurts. It helps for 5 minutes. Then the hurt returns, plus shame. Your brain learns: next time, eat more. The cycle reinforces itself neurochemically.",
        autopilot: "Your amygdala has linked 'feeling bad' directly to 'eat.' The connection is so practiced that food appears in your hand before your conscious mind even names the emotion.",
      },
      boredom: {
        guilt: "What you call boredom is often emotional flatness --low serotonin, low dopamine, low oxytocin. Your brain isn't understimulated. It's under-nourished emotionally. Food fills the void temporarily.",
        numb: "When nothing feels good and nothing feels bad, food creates a small spike --just enough to feel alive for a moment. That's not boredom eating. That's your brain fighting anhedonia.",
        cycle: "The emptiness comes, food fills it, the emptiness returns. This cycle will repeat until the underlying emotional need (connection, meaning, stimulation) gets addressed by something other than food.",
        autopilot: "Your brain now treats emotional flatness as a food cue. The pathway is automatic: feel empty → eat. You don't even notice the emotion anymore --just the craving.",
      },
      emotional: {
        guilt: "This is the core of your pattern. A hard feeling arrives, food softens it through the opioid system, then guilt adds another hard feeling on top. Your brain now has two emotional wounds to eat over instead of one.",
        numb: "You're using food to activate your endogenous opioid system --literally creating a small dose of numbness. It's not comfort eating. It's self-anesthesia. Your brain is trying to protect you.",
        cycle: "Emotional pain → food → brief opioid relief → pain returns. Your brain is trying to medicate a serotonin and oxytocin deficit with dopamine hits. It helps for minutes, not hours.",
        autopilot: "When emotional eating has been your primary coping mechanism for years, the neural pathway from 'feel bad' to 'eat' becomes myelinated --literally faster and stronger. It fires before thought.",
      },
      nighttime: {
        guilt: "Night amplifies loneliness. Your oxytocin drops, your home feels too quiet, and food becomes company, warmth, and reward all at once. Then guilt arrives and you feel even more alone.",
        numb: "By evening, you're emotionally spent. Your serotonin is at its daily low. Food becomes the gentlest thing left in your day --a small kindness your brain gives itself when nothing else is available.",
        cycle: "Evening strips away distractions, so emotional needs get louder. Food answers them briefly. The silence returns. Repeat until you fall asleep.",
        autopilot: "Your brain now expects food as part of the nighttime comfort ritual. The craving isn't about hunger --it's your brain's nightly prescription for loneliness.",
      },
    },
    cravings: {
      sweet: {
        title: "Your brain is trying to manufacture oxytocin.",
        neuroscience: "Sweet, rich food activates your mu-opioid receptors --the same system activated by a warm hug or being held. Chocolate specifically contains phenylethylamine and triggers endorphin release. Your brain isn't craving sugar. It's craving the neurochemical signature of being loved and safe.",
        signal: "Low oxytocin + low endorphins. Your brain is asking for warmth and safety, and sugar is the closest substitute it can find.",
      },
      carbs: {
        title: "Your body needs to rebuild serotonin.",
        neuroscience: "Emotional depletion burns through serotonin. Carbs are the fastest way to replenish it --they trigger insulin, which clears competing amino acids and lets tryptophan flood your brain. The 'heaviness' you feel after pasta or bread is your serotonin system finally getting fed. That's why carbs feel grounding when you're emotionally untethered.",
        signal: "Serotonin deficit from emotional exhaustion. Your brain is asking for stability.",
      },
      salty: {
        title: "Your nervous system wants sensory grounding.",
        neuroscience: "When you feel emotionally disconnected, crunchy and salty food gives your body something immediate and physical to focus on. The jaw engagement, the crunch, the salt --they activate your trigeminal nerve and create a brief sensory anchor. It's not about the chips. It's about feeling something concrete when everything else feels foggy.",
        signal: "Dissociation or emotional numbness. Your body is trying to feel present and real.",
      },
      impulsive: {
        title: "Your emotional pain just hit emergency level.",
        neuroscience: "When you grab anything without thinking, your amygdala has hijacked your behavior. The emotional pain or emptiness crossed a threshold where your brain stopped caring about what the food is --it just needs the opioid and dopamine hit right now. Speed of craving reflects intensity of distress.",
        signal: "Acute emotional overwhelm. Your brain's pain threshold was crossed and it went into emergency self-medication mode.",
      },
    },
    tryThis: {
      title: "Give your brain what it's actually asking for.",
      body: "Your brain wants opioids and oxytocin --the chemicals of warmth and connection. Food is a workaround, not the real thing. Before you eat, try one thing that directly targets the same system: put your hand on your chest and apply gentle pressure (activates vagal oxytocin release), hold something warm like a mug of tea (thermal comfort triggers the same opioid pathways as being held), or send one honest text to someone --'I'm having a rough night.' Human connection, even digital, raises oxytocin more than any food can. You don't have to do all three. Pick one. Give it 5 minutes. If you still want the food after that, eat it without guilt --but most of the time, the craving will soften because you gave your brain a hit of what it was actually looking for.",
    },
  },

  'autopilot-eater': {
    headline: "{name}, your brain automated this.",
    subhead:
      "You're not eating because you're emotional or stressed. You're eating because your basal ganglia turned this into a habit loop. The cue fires, the routine runs, and you're three bites in before your conscious brain even shows up. This isn't a willpower problem. It's a neuroscience problem.",
    science: {
      title: "What's happening in your brain",
      body: "Your basal ganglia --the brain region responsible for habit formation --has encoded eating as an automatic response to specific cues (time of day, location, activity, emotional state). Once a behavior becomes a habit, it moves from your prefrontal cortex (conscious decision-making) to your basal ganglia (automatic execution). This is the same mechanism that lets you drive home without thinking about the route. Efficient, but hard to override because the conscious brain isn't involved anymore.",
      chemicals: [
        { name: 'Dopamine', role: 'Not elevated --anticipated. Your dopamine system fires at the cue, not the food itself. The anticipation of eating releases dopamine, which drives the behavior before you taste anything.' },
        { name: 'Acetylcholine', role: "Low in the habit circuit. This neurotransmitter helps you pause and make conscious choices. In automated behaviors, it's bypassed entirely -- that's why you eat before you think." },
        { name: 'Endocannabinoids', role: "Your brain's internal cannabis system. It gets activated by habitual eating cues (screens, couch, nighttime) and increases appetite even when you're not hungry." },
        { name: 'Ghrelin', role: 'Can become conditioned to spike at habitual eating times, even without true hunger. Your body has literally trained itself to feel hungry at the wrong times.' },
      ],
    },
    pattern: {
      stress: {
        guilt: "Stress reduces the acetylcholine that helps you pause. Your habit loop gets a clearer runway --no interference from the thinking brain. You eat on autopilot, then guilt arrives too late to change anything.",
        numb: "You're not eating to feel better. You're eating because the cue-response chain fired and your brain didn't interrupt it. The numbness afterward is your conscious brain registering what happened after the fact.",
        cycle: "Stress weakens your prefrontal cortex, which is the only brake on habit loops. Less brake = more automatic eating. Each repetition strengthens the loop in your basal ganglia.",
        autopilot: "This is the purest form of your pattern. Stress removes your last conscious checkpoint, and the habit runs uninterrupted from cue to consumption.",
      },
      boredom: {
        guilt: "Boredom is a perfect habit trigger --your brain has idle processing power and defaults to the most practiced routine. You eat, realize you weren't hungry, and feel frustrated that it happened again.",
        numb: "Your brain is understimulated. It runs the eating habit because it's the most rehearsed source of minor stimulation available. You don't even enjoy the food --that's not the point. The point is giving your brain something to do.",
        cycle: "Nothing to do → eat → back to nothing. This loops because the underlying need (stimulation, engagement) was never met. Food just burned a few minutes.",
        autopilot: "Classic cue-routine-reward. Empty moment → hand reaches for food → brief sensory input → repeat. Your basal ganglia is running the show. Your prefrontal cortex is barely involved.",
      },
      emotional: {
        guilt: "Emotions can trigger the habit, but the bigger issue is speed. By the time you identify the feeling, the basal ganglia has already executed the eating routine. Guilt hits a step too late.",
        numb: "The emotion is just the cue. The eating is pure habit. You don't eat because you're sad --you eat because feeling-bad has become the trigger that starts the automated loop.",
        cycle: "Feeling → eat → feeling returns. But it's not comfort eating. It's habit eating with an emotional trigger. The food was never going to fix the feeling because the habit loop doesn't care about the feeling --it only needs the cue.",
        autopilot: "You don't need a big emotion for this. Even a slight mood shift can fire the cue. Your basal ganglia has a very low activation threshold because this loop has been reinforced hundreds of times.",
      },
      nighttime: {
        guilt: "Night is the strongest habit zone. Same time, same place, same context. Your basal ganglia recognizes the pattern and fires the eating routine before you even sit down. Guilt is always retrospective --the habit is always faster.",
        numb: "Evening eating feels invisible because it's bundled into other routines --TV, scrolling, unwinding. You don't notice the eating as a separate decision because it isn't one. It's part of the package your brain runs automatically.",
        cycle: "Same couch, same time, same food. Your dopamine system fires at the cue (turning on the TV, opening the cabinet) not at the food itself. That's why the craving feels strongest before you start eating.",
        autopilot: "Your hand knows where the food is before your mind speaks up. That's myelinated habit --the neural pathway has been reinforced so many times it runs at the speed of reflex.",
      },
    },
    cravings: {
      sweet: {
        title: "Your dopamine fires at the cue, not the taste.",
        neuroscience: "In habit eating, dopamine releases at the anticipation of food, not during consumption. That's why you can eat an entire bar of chocolate and barely taste the last half. Your brain already got its neurochemical payoff when you decided to eat --the actual eating is just the routine completing itself.",
        signal: "Conditioned dopamine response. Your brain is chasing the anticipation hit, not the food itself.",
      },
      carbs: {
        title: "You're running the path of least resistance.",
        neuroscience: "Carbs are the most frictionless food category --bread, crackers, cereal require zero preparation and minimal decision-making. For an automated habit loop, low friction is everything. Your basal ganglia optimizes for ease, not nutrition. That's why habit eating almost never involves cooking a meal from scratch.",
        signal: "Habit efficiency. Your brain is picking the food that requires the fewest decisions.",
      },
      salty: {
        title: "The crunch is the habit, not the salt.",
        neuroscience: "Repetitive hand-to-mouth motion with crunchy food creates a rhythmic sensory loop that your brain finds mildly rewarding and deeply familiar. This is why chips pair so well with screens --both provide low-grade, continuous stimulation. Your endocannabinoid system is activated by this specific combo of sensory input + passive activity.",
        signal: "Endocannabinoid activation from sensory-motor loop. Your brain is seeking rhythmic, low-effort stimulation.",
      },
      impulsive: {
        title: "Your habit loop skipped the choosing step entirely.",
        neuroscience: "When you grab whatever is closest, your basal ganglia has optimized the habit to its most efficient form --zero decision overhead. Proximity is the only variable. This is advanced habit automation: the loop is so practiced it doesn't even include a preference check anymore.",
        signal: "Maximum habit automation. Your conscious brain was never consulted.",
      },
    },
    tryThis: {
      title: "Break the cue, break the loop.",
      body: "Habits don't respond to motivation --they respond to environment. Your basal ganglia needs the cue to fire the routine. Remove the cue and the loop can't start. Tonight, change one thing in your environment: move the food you usually grab to a different location, sit in a different spot, or put a physical obstacle between you and the habit (a note on the cabinet, a glass of water where the food usually sits). You're not trying to resist the craving --you're trying to prevent the cue from firing. That's neurologically different and dramatically more effective. Willpower fights the habit after it starts. Environment design prevents it from starting.",
    },
  },

  'perfectionist-restrictor': {
    headline: "{name}, your body is fighting back.",
    subhead:
      "You've been restricting --calories, food groups, meals, or just white-knuckling your way through the day. Your brain interprets this as famine. It responded by cranking up every hunger and craving signal it has. The binge isn't a failure of discipline. It's your body's survival response to perceived starvation.",
    science: {
      title: "What's happening in your brain",
      body: "When you restrict food intake, your hypothalamus detects an energy deficit and activates a cascade of hormonal responses designed to make you eat. This is the same system that kept your ancestors alive during actual famines. It doesn't know you're dieting --it thinks you're starving. And it will override your conscious intentions every single time, because survival outranks willpower in every brain that has ever existed.",
      chemicals: [
        { name: 'Leptin', role: 'Drops fast during restriction. Leptin tells your brain you have enough energy stored. When it drops, your brain panics --it increases appetite, reduces metabolism, and makes food cues 3-4x more attention-grabbing.' },
        { name: 'Ghrelin', role: "Surges. This is your hunger hormone. Restriction causes it to spike dramatically, creating intense physical hunger signals even when you've eaten. Your body is screaming for fuel." },
        { name: 'Neuropeptide Y', role: 'Elevated. This neuropeptide is one of the most powerful appetite stimulants in your brain. It surges during restriction and specifically drives cravings for carbs and sugar. Willpower cannot override it.' },
        { name: 'Cortisol', role: 'Elevated by restriction itself. Dieting is a physical stressor. Your body releases cortisol in response to caloric deficit, which further increases appetite and drives fat storage --the opposite of what restricting was supposed to do.' },
      ],
    },
    pattern: {
      stress: {
        guilt: "Restriction + stress = impossible combination. Cortisol is already elevated from the diet, then external stress piles on. When you finally eat, guilt makes you restrict harder tomorrow --which makes the next rebound bigger. The guilt is literally making you gain weight.",
        numb: "By the time you break, you're so depleted --calorically and emotionally --that eating feels mechanical. The numbness isn't apathy. It's your body in pure refuel mode, bypassing pleasure entirely because survival takes priority.",
        cycle: "Restrict → cortisol rises → willpower depletes → rebound eating → guilt → restrict harder. Each cycle upregulates neuropeptide Y and downregulates leptin. The rebounds get bigger because your brain gets more desperate each round.",
        autopilot: "After enough restrict-rebound cycles, your brain stops waiting for conscious permission. The moment restriction breaks, your hypothalamus takes over and drives rapid eating before your thinking brain can intervene. It's protecting you from you.",
      },
      boredom: {
        guilt: "When you're busy, restriction feels manageable because distraction suppresses appetite cues. Boredom removes the distraction. Suddenly, the full force of your leptin deficit and ghrelin surge hits at once.",
        numb: "What looks like boredom eating is often your body finally getting a moment to signal how depleted it actually is. You weren't bored. You were starving.",
        cycle: "Quiet moments expose the real hunger that restriction created. You eat, feel guilty, restrict. But the quiet moments will keep coming, and your body will keep fighting.",
        autopilot: "If your restriction is severe enough, any break in activity gives your hypothalamus an opening. It's been waiting all day for your guard to drop.",
      },
      emotional: {
        guilt: "Emotions break the rigid control faster than anything because your prefrontal cortex can't maintain food rules and process feelings at the same time. When you eat, it feels like double failure --emotional and dietary. But it's just your brain prioritizing correctly: feelings first, food rules second.",
        numb: "Sometimes the rebound isn't about pleasure at all --it's your body finally getting permission to shut off the constant self-monitoring. The eating isn't comfort. It's your brain taking a vacation from its own food police.",
        cycle: "Emotional pain → restriction breaks → eating → guilt → tighter restriction → bigger emotional vulnerability. The restrict-rebound cycle makes you more emotionally fragile over time, not less.",
        autopilot: "If restriction has been intense, emotional triggers can flip your hypothalamus into full rebound mode instantly. The eating that follows isn't emotional eating --it's your body's survival response triggered by an emotional opening.",
      },
      nighttime: {
        guilt: "Classic pattern: restrict all day, rebound at night. Your leptin is at its daily low, ghrelin is peaking, neuropeptide Y has been building all day. By evening, the biological pressure is enormous. You're not failing at night. You're paying for the restriction you did all day.",
        numb: "By night, your body has been in energy deficit for 12+ hours. The eating that follows is your hypothalamus overriding your cortex. The flat feeling is your brain finally getting fuel after a day of deprivation.",
        cycle: "Restriction by day, rebound by night. Your body keeps perfect score. Every calorie you denied it, it will try to recover --with interest. That's neuropeptide Y doing exactly what it was designed to do.",
        autopilot: "Your circadian system has learned the pattern: restriction during light hours, eating during dark hours. Your ghrelin now surges on schedule, creating hunger that feels physical because it is physical.",
      },
    },
    cravings: {
      sweet: {
        title: "Neuropeptide Y is driving the sugar craving.",
        neuroscience: "Neuropeptide Y --which surges during caloric restriction --specifically amplifies cravings for sugar and simple carbs. This isn't a preference or a weakness. It's the most powerful appetite neuropeptide in your brain specifically requesting the fastest energy source available. Restriction doesn't reduce sugar cravings. It neurochemically amplifies them.",
        signal: "Neuropeptide Y surge from caloric deficit. Your brain is specifically requesting fast glucose to correct the energy emergency it's detecting.",
      },
      carbs: {
        title: "Your brain is in energy emergency mode.",
        neuroscience: "When leptin drops from restriction, your brain increases efficiency of calorie extraction and specifically drives cravings for the most energy-dense macronutrient available. Carbs convert to glucose faster than any other food --that's why your brain demands them. It's not a preference. It's triage.",
        signal: "Low leptin + high ghrelin. Your brain has declared an energy emergency and is requisitioning fuel.",
      },
      salty: {
        title: "Your body is trying to close a mineral deficit.",
        neuroscience: "Restriction often means reduced electrolyte intake. Your body needs sodium to maintain blood pressure, nerve function, and fluid balance. Salt cravings during restriction are often a direct physiological signal --your body needs minerals that your diet isn't providing. The craving for volume (chips, crackers, pretzels) is also your stretched stomach sending 'still empty' signals via the vagus nerve.",
        signal: "Electrolyte deficit + gastric emptiness signals. Your body is asking for both minerals and volume.",
      },
      impulsive: {
        title: "Your hypothalamus took control.",
        neuroscience: "When you grab anything and everything without thought, your hypothalamic hunger drive has overridden your prefrontal cortex completely. This is the neurological equivalent of your body pulling the emergency brake. Neuropeptide Y, low leptin, and surging ghrelin have combined to create a hunger signal so powerful that conscious food choice is no longer possible. This is not bingeing. This is your body preventing what it perceives as starvation.",
        signal: "Full hypothalamic override. Your survival brain has taken the wheel because restriction pushed past its tolerance threshold.",
      },
    },
    tryThis: {
      title: "Eat a real meal. Right now.",
      body: "Your craving isn't emotional --it's biological. Your body is in a caloric deficit and every hormone in your system is screaming for fuel. The single most effective thing you can do is eat a proper meal with protein, fat, and carbs. Not a snack. Not a 'healthy' substitute. A real, satisfying meal. When leptin, ghrelin, and neuropeptide Y normalize --which only happens when your body believes food is reliably available --the cravings will lose 80% of their intensity on their own. You can't think your way out of a hormonal hunger signal. You have to feed your way out. Tomorrow, eat breakfast. Eat lunch. Eat dinner. Make them big enough that you're actually satisfied. Do this for one week. Watch what happens to the cravings.",
    },
  },
};
