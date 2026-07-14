export interface ArchetypeStats {
  strength: number;
  wisdom: number;
  charisma: number;
  cunning: number;
  resilience: number;
  magic: number;
}

export interface Archetype {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  backstory: string;
  abilities: string[];
  fatalFlaw: string;
  signatureItem: string;
  quest: string;
  allies: string[];
  enemies: string[];
  stats: ArchetypeStats;
  color: string;
}

export const archetypes: Archetype[] = [
  {
    slug: "the-chosen-one",
    name: "The Chosen One",
    emoji: "✦",
    tagline: "Born under a fallen star, marked for a burden you did not choose.",
    backstory: "The prophecy was carved into the temple wall a thousand years before your first breath — a child born under the shattered star of Veles, who would either save the realm or burn it down trying. You were raised in a quiet village by a mother who never told you why strangers bowed when they saw your birthmark. You learned the truth the day the riders in black armor burned your home to find you. There was no destiny in the moment you escaped the flames — only smoke, loss, and the cold certainty that the prophecy was now your problem.\n\nYou did not ask for the power that woke in your blood. It does not feel like a gift. It feels like a debt the universe is calling in, and the interest is paid in the people you love. Every choice you make ripples further than it should, and the weight of those ripples is what makes you sleep with one eye open. You are not a hero because you are brave — you are a hero because there is no one else, and walking away is no longer an option the world will let you take.\n\nSomewhere in the burned-out temples of the old world, a final verse is waiting to be read. It is written about you. You hope it ends well.",
    abilities: [
      "Lightbringer — your touch can kindle flame from nothing and burn what should not be burned.",
      "Prophetic Echo — once per moon, you glimpse a fragment of what the fates have already decided.",
      "Unbreakable Vow — any promise you swear is binding on the world itself; oaths sworn to you cannot be broken without cost.",
      "Rally the Fallen — in your presence, broken things remember what they used to be.",
      "Star-Marked Resilience — wounds that would kill another close on you within the hour, but the scars never fade.",
    ],
    fatalFlaw: "You cannot tell the difference between what the prophecy wants and what you want. The longer you live with it, the harder it becomes to know whether your choices are still your own.",
    signatureItem: "A shard of the fallen star, carried in a leather pouch against your heart. It is cold to the touch, even in fire.",
    quest: "To reach the seventh temple before the eclipse, where the final verse of the prophecy can finally be read — and choose whether to fulfill it or unmake it.",
    allies: ["The Mentor", "The Wanderer", "The Oracle"],
    enemies: ["The Warlord", "The Sovereign"],
    stats: { strength: 78, wisdom: 64, charisma: 72, cunning: 55, resilience: 85, magic: 92 },
    color: "#E6C66E",
  },
  {
    slug: "the-trickster",
    name: "The Trickster",
    emoji: "♠",
    tagline: "The lie you tell best is the one about who you really are.",
    backstory: "You were not born to a throne. You were born to the gap between two floorboards, the crooked smile at the edge of the room, the half-truth told before the question was finished. The streets of Vael taught you that the only honest currency is leverage, and that everyone — priests, kings, and beggars alike — keeps a secret they would trade a kingdom to keep. You learned to read those secrets like other children learn to read books, and by the time you were fifteen, half the merchant houses of the lower city owed you a favor they could not name.\n\nYou do not lie for sport. You lie because the truth is a door that locks from the inside, and someone has to climb in through the window. The powerful call you thief, fraud, and worse. The powerless call you when no one else will listen. You have stolen a duke's seal, returned it the next morning with a polite note, and made a friend of him for life — because he understood, in that single uneasy night, that you could have ruined him and chose not to. That is the trick. The con is never the trick. The trick is making the mark believe you are doing them a favor.\n\nThere is a real face under the masks. You are not sure you remember it. You are not sure you want to.",
    abilities: [
      "Mirror Lie — you can take on the face, voice, and manner of anyone whose name you have spoken three times aloud.",
      "Pact of Favors — a debt sworn to you in earnest cannot be refused when you call it in; the universe collects on your behalf.",
      "Slip Through — locked doors, sealed vaults, and guarded gates open for you once, then remember you and never forget.",
      "Whisper Network — rats, beggars, and children bring you word of what passes in any city where you have spent a night.",
      "Loaded Die — once per day, you may name an outcome and roll the world toward it; the smaller the stake, the more reliable it is.",
    ],
    fatalFlaw: "You have spent so long as other people that you no longer know which mask is the real one — and the people who loved the real you have stopped waiting at the door.",
    signatureItem: "A weighted silver coin that always lands on the side you name. You have flipped it to decide the fate of cities.",
    quest: "To steal a single sealed letter from the Sovereign's personal vault — a letter that names the person who ordered your family killed.",
    allies: ["The Exile", "The Oracle", "The Wanderer"],
    enemies: ["The Sovereign", "The Warlord"],
    stats: { strength: 58, wisdom: 72, charisma: 88, cunning: 95, resilience: 64, magic: 70 },
    color: "#9A7BD0",
  },
  {
    slug: "the-mentor",
    name: "The Mentor",
    emoji: "❦",
    tagline: "You have already lived the story they are about to begin.",
    backstory: "There was a version of you that wanted to be the hero of this tale. That version is buried on a hillside in the northern provinces, with a wooden sword and the name of the friend you could not save. You were the one who survived the impossible quest, the one who held the line, the one who walked back out of the burning city carrying the secret that would have saved it — one hour too late. The bards sang your name for a season. You stopped listening. You went home, set down your sword, and began to teach.\n\nYou do not teach swordplay. You teach the small things — how to read a person who is about to lie, how to start a fire in a wet forest, how to know when a battle is already lost before the first blade is drawn. Your students think you are cautious to the point of cowardice. They are wrong. You are cautious because you have measured the cost of bravery in bodies, and you are trying to keep their names off that ledger. The ones who listen to you survive. The ones who do not get songs. You hate the songs.\n\nA new student has come to your door. They have your eyes. They carry the same blade you buried on that hillside. You understand, with the slow certainty of age, that you are going to have to walk back into the story you walked out of.",
    abilities: [
      "Hard-Won Lesson — you may grant a single piece of advice that the recipient cannot ignore or forget, even if they wish to.",
      "Old Wounds — your scars ache before danger arrives, giving you warning of betrayal and ambush hours in advance.",
      "Patient Flame — your presence steadies the fearful, clears the confused, and slows the panicked heart.",
      "Veteran's Eye — you can read a battlefield, a court, or a stranger in a single glance and name the one detail that will decide everything.",
      "The Last Lesson — once, and only once, you can take a wound meant for another and survive it. You have been saving this for thirty years.",
    ],
    fatalFlaw: "You cannot stop seeing your dead in the faces of the living, and you will sacrifice your own survival to keep from adding another name to the song.",
    signatureItem: "A worn leather journal, half-filled with the names of students — living and dead — and the lessons you learned from each of them.",
    quest: "To guide one last student through the same quest that killed you the first time, and this time, bring them home alive.",
    allies: ["The Chosen One", "The Exile", "The Sovereign"],
    enemies: ["The Warlord"],
    stats: { strength: 62, wisdom: 96, charisma: 78, cunning: 80, resilience: 88, magic: 72 },
    color: "#6FA873",
  },
  {
    slug: "the-exile",
    name: "The Exile",
    emoji: "✶",
    tagline: "You were the heir. Then you were the warning.",
    backstory: "You grew up in a house with seven windows that faced the sea, and on the morning of your seventeenth birthday, all seven were shuttered from the outside by your father's order. The crime was not yours. The crime was being in the room when the wrong person whispered the wrong name into the wrong ear. By noon, you were riding south with two guards who would not meet your eyes and a sealed letter that ordered you to never return. By nightfall, the guards had been paid to leave you in the border forest, and the letter was ashes in your hand. You were a prince in the morning. By night you were a story no one would tell.\n\nYou learned to live as the person no one wanted to be seen with. You ate what travelers left, slept where wolves would not, and made a quiet treaty with the cold. You discovered that the world is full of people who have been thrown out of houses — debtors, deserters, disgraced priests, dishonored soldiers — and that they recognize each other without speaking. You built, without meaning to, a small and dangerous nation of the discarded. They do not call you prince. They call you the one who came back from the forest, and they would die for you.\n\nYou are going home. The seven windows will be opened, or the house will burn. You have not decided which. You have time.",
    abilities: [
      "Outcast's Welcome — any village of the displaced, the outlawed, or the forgotten will shelter you and answer one honest question.",
      "Forest Tongue — birds, wolves, and wild dogs will not attack you, and will carry a single short message to a place you have named.",
      "Cold Sleep — you can rest in snow, rain, or open field without harm, and wake fully recovered in four hours.",
      "Borrowed Face — among the exiled, you may take any name and any past, and it will be confirmed by those who ought to know.",
      "King in Rags — three times, you may summon a band of the discarded to your side; they will fight for one night and ask nothing after.",
    ],
    fatalFlaw: "You cannot trust comfort. You will burn down a safe house to sleep in the cold, because the cold has never betrayed you.",
    signatureItem: "The signet ring of your old house, melted down and reforged into a single crude blade. You have not yet decided whose heart it is meant for.",
    quest: "To return to the shuttered house on the coast, open the seven windows, and learn whether your father was the villain or the victim of the whisper.",
    allies: ["The Trickster", "The Wanderer", "The Mentor"],
    enemies: ["The Sovereign", "The Warlord"],
    stats: { strength: 75, wisdom: 80, charisma: 70, cunning: 78, resilience: 94, magic: 60 },
    color: "#7A9BB8",
  },
  {
    slug: "the-warlord",
    name: "The Warlord",
    emoji: "⚔",
    tagline: "You did not conquer the world. You organized it.",
    backstory: "You were the third child of a house with no land, and so the only inheritance left to you was the army your elder brothers did not want. They laughed when you rode north with three hundred discharged soldiers and a captain's commission nobody had bothered to revoke. They stopped laughing when the northern provinces began sending tribute. They stopped laughing entirely when your banner appeared over the walls of their own keep. You did not burn it. You did not need to. You simply made it more useful for them to kneel than to stand, and they knelt.\n\nYou are not cruel. Cruelty is a tool for those who lack patience, and you have patience in quantities that frighten even your generals. You do not sack cities. You take their grain stores, their roads, and their tax rolls, and you leave them the rest. A city that cannot feed itself cannot fight you, and a city that cannot fight you does not need to be shown what fighting costs. The bards call you a tyrant. The bards have never had to feed a province through a winter. You have. The math is simpler than the songs.\n\nThere is one province left that does not fly your banner. It is a small province. It is the one where you were born. You have a long plan for it.",
    abilities: [
      "Logistics of Empire — any army you lead moves twice as fast and eats half as much; it does not desert.",
      "Siege Eye — you can look at a wall and name the stone that, if removed, brings the whole thing down.",
      "Iron Discipline — soldiers under your direct command cannot be routed, bribed, or turned against you while you stand.",
      "The Long Ledger — once you have named a debt owed to you by a city, a lord, or a guild, it is collected within a year, in full or in blood.",
      "Tyrant's Awe — your presence in a room silences the clever and the loud alike; no one lies to your face, because the cost is well understood.",
    ],
    fatalFlaw: "You have made the world so dependent on your single will that no one in it can imagine what comes after you — and neither can you.",
    signatureItem: "An iron baton, worn smooth by a decade of campaigns. It has never struck a man. It does not need to.",
    quest: "To take the small province where you were born, not by force, but by making them invite you in.",
    allies: ["The Oracle", "The Sovereign"],
    enemies: ["The Chosen One", "The Trickster", "The Exile"],
    stats: { strength: 92, wisdom: 78, charisma: 80, cunning: 90, resilience: 95, magic: 45 },
    color: "#C44545",
  },
  {
    slug: "the-oracle",
    name: "The Oracle",
    emoji: "☉",
    tagline: "You have already seen the end of this conversation.",
    backstory: "They took you from your mother when you were six, because you told the river-keeper where to find a drowned man before anyone knew the man was missing. The temple raised you in white linen and silence. They taught you to read the smoke, the stars, the bones of small animals, the way a sick person breathes in the third hour of fever. They did not teach you to lie. They did not need to. They taught you the one thing every oracle must learn before the first true vision — that the future you speak will come to pass, and that speaking it is part of what makes it come to pass.\n\nYou do not see everything. You see the shape of the choice, and you see what each choice costs. Most days, you see only small things — who will arrive at the temple gate tomorrow, which crop will fail, which name will be called at the next reading. On the bad days, you see the large things, and the large things always have the same face: a city burning, a banner you do not recognize, and a figure walking out of the fire who is not the one the prophecy names. You have told the high priestess about the bad days. She has stopped writing them down. She does not want to believe you. You understand. You no longer want to believe you either.\n\nYou have begun to leave the temple at night. You have begun, in small ways, to choose against the visions. So far, the visions have not changed. So far, you have not been wrong.",
    abilities: [
      "Smoke Reading — once per day, you may ask the smoke a question; it answers in a single true image and one false one, and you must know which.",
      "Prophetic Memory — you remember, with perfect clarity, every vision you have ever had, and can compare them for patterns no one else could find.",
      "The Patient Question — anyone who asks you a question in earnest must hear your answer in full, even if they do not want to.",
      "Omen-Sight — you can read the small warnings in the world (a bird's flight, a dropped cup, the pattern of cracks in stone) and know what they portend.",
      "Forbidden Counter — once per moon, you may speak a future you have seen and deliberately invert it; the cost is paid in your own blood or memory.",
    ],
    fatalFlaw: "Every time you change a vision, the cost is taken from someone you love, and you do not get to choose who.",
    signatureItem: "A small bronze bowl, blackened by decades of temple smoke. You have never told the high priestess it is the source of the true visions, not the smoke.",
    quest: "To identify the figure walking out of the burning city in your worst vision, and decide whether they should be warned, killed, or spared.",
    allies: ["The Warlord", "The Mentor", "The Trickster"],
    enemies: ["The Chosen One"],
    stats: { strength: 38, wisdom: 99, charisma: 70, cunning: 82, resilience: 68, magic: 96 },
    color: "#C9A84C",
  },
  {
    slug: "the-wanderer",
    name: "The Wanderer",
    emoji: "✺",
    tagline: "Every road has led somewhere. None of them have led home.",
    backstory: "You left home on a Tuesday in early spring, twenty-three years ago, and you have not yet found a reason to go back. It was not a wound that drove you out. It was not a debt, a war, a love, or a prophecy. It was a smell — the smell of the sea coming through the kitchen window on a morning when your whole life was already arranged in front of you like a clean, well-set table — and a sudden, quiet understanding that if you sat down at that table you would never stand up again. You left a note. You did not say goodbye. You have not been sorry for a single day of the road since.\n\nYou have been a sailor, a shepherd, a translator for a merchant house, a grave-digger, a midwife's assistant, a courtier in a foreign palace, and for one memorable season, the official taster for a paranoid duke. You have learned nine languages and forgotten four. You carry no banner, swear no oaths, and answer to whatever name the road has given you this month. You are not running from anything. You are running toward the next bend, because the next bend is the only thing that has never disappointed you.\n\nYou have a map. The map has a single dot on it — the place you were born. The ink has faded. You sometimes wonder if you would still recognize the road home. You suspect you would. You suspect that is why you keep not taking it.",
    abilities: [
      "Road-Tongue — in any town or port, you can be mistaken for a local within an hour, including the accent.",
      "Long Memory — you remember every road you have walked, every face you have trusted, and every door that was opened to you; you can retrace any of them in the dark.",
      "Stranger's Bread — any household will feed and shelter you for one night without payment and without question, once.",
      "Unmarked — you cannot be found by those who are not already looking for you; prophecy, divination, and oath-spells slide off you like rain.",
      "The Next Bend — once per moon, you may walk away from a place, a fight, or a fate and the world will simply let you go.",
    ],
    fatalFlaw: "You cannot stay. Every good thing in your life ends the day you realize you could keep it, because that is the day the road begins to call again.",
    signatureItem: "A small wooden box containing a single dried flower from the kitchen window of the house you left. You have never opened it. You are not sure what you would do if you did.",
    quest: "To find the one place in the world that makes the road stop calling — or to accept, finally, that no such place exists.",
    allies: ["The Chosen One", "The Exile", "The Mentor"],
    enemies: ["The Warlord"],
    stats: { strength: 68, wisdom: 84, charisma: 82, cunning: 76, resilience: 90, magic: 58 },
    color: "#B8A98A",
  },
  {
    slug: "the-sovereign",
    name: "The Sovereign",
    emoji: "♛",
    tagline: "You did not take the throne. You were the only one left standing near it.",
    backstory: "Your father had four sons. By the end of the winter, three were dead and the fourth was you, and the council was suddenly very interested in your opinion on grain tariffs. You were not the heir. You were the spare, raised to be unobtrusive, raised to be the one who married abroad or took holy orders or quietly disappeared into a country estate. You were good at being unobtrusive. You were good at listening, at counting, at remembering which duke owed which other duke a debt older than the crown. You were not good at swordplay, horsemanship, or any of the arts your brothers were trained to die doing. You were good at the thing no one thought would matter — knowing where the money was.\n\nWhen the last of your brothers fell, and your father looked at you across the table with the tired expression of a man who has run out of better options, you did not weep. You opened the ledger. You have been opening ledgers ever since. The kingdom you inherited was three months from default. The kingdom you have built is solvent, feared in trade, and quietly respected in the courts of the powerful. The bards still sing of your brothers. You do not mind. You would rather be in the ledger than in the song.\n\nThere is a problem in the eastern provinces. There is always a problem in the eastern provinces. You have a plan. You always have a plan.",
    abilities: [
      "Ledger-Mind — you remember, in exact figures, every debt, treaty, and tax roll in the realm; you can quote them without checking.",
      "Court-Rope — you can name the one favor that will bind any lord, lady, or guildmaster to your will without their realizing it for a season.",
      "The Spare's Patience — you can wait, with perfect composure, longer than anyone who believes they are more powerful than you.",
      "Sovereign's Seal — any document bearing your seal is treated, by custom and by law, as if you had spoken the words aloud in person.",
      "Last Heir — if you die without an heir of your body, the realm tears itself apart; this is known to all who would harm you, and is your strongest defense.",
    ],
    fatalFlaw: "You have made yourself so indispensable that the realm cannot survive you — and you have never once asked whether that was the right thing to build.",
    signatureItem: "A small iron key, the only one of its kind, that opens the cabinet where the real ledger of the realm is kept — the one your father never showed your brothers.",
    quest: "To name an heir who is not of your blood, and convince the realm that this is not the end of it.",
    allies: ["The Mentor", "The Oracle", "The Warlord"],
    enemies: ["The Trickster", "The Exile"],
    stats: { strength: 55, wisdom: 92, charisma: 86, cunning: 95, resilience: 78, magic: 50 },
    color: "#D4A060",
  },
]
