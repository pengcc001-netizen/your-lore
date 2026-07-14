export interface Ability {
  slug: string;
  name: string;
  description: string;
  archetypeSlug: string;
}

export const abilities: Ability[] = [
  // ── The Chosen One ────────────────────────────────────────────────
  {
    slug: "lightbringer",
    name: "Lightbringer",
    archetypeSlug: "the-chosen-one",
    description: "Lightbringer is the gift that marks the chosen from birth — the power to coax flame from cold air, candle from void, spark from stone that has never known heat. It answers to emotion as much as intent: fear kindles a flicker, anger a roaring sheet, grief a slow tear of fire that burns until it is spent. The flame is no ordinary fire. It will catch on wet wood, on green leaves, on things that should not burn — oaths, secrets, lies still warm in a traitor's throat. It is a mercy and a sentence both. What the chosen touches with love, it warms. What the chosen touches with wrath, it consumes to ash. There is no halfway with this gift.",
  },
  {
    slug: "prophetic-echo",
    name: "Prophetic Echo",
    archetypeSlug: "the-chosen-one",
    description: "Prophetic Echo comes unbidden, once each lunar cycle, in the hour before dawn. The chosen does not summon it; it summons them, drawing the mind up out of sleep and into a corridor of what has already been decided. The vision is never long — a single image, a name, a face, a fragment of conversation yet to be spoken. It arrives without context and leaves without explanation. The chosen has learned to write what they saw the instant they wake, before the details blur. Some echoes have proved true within the week. Some have taken years. One has not yet come to pass, and the chosen fears it more than any enemy they have met on the road.",
  },
  {
    slug: "unbreakable-vow",
    name: "Unbreakable Vow",
    archetypeSlug: "the-chosen-one",
    description: "Unbreakable Vow binds the world to words spoken in earnest. When the chosen swears an oath, the fabric of fate threads itself around the promise and refuses to unravel. A vow to protect is kept — by hand, by hazard, by the silent intervention of fortune. A vow sworn to the chosen by another carries the same weight: the breaker does not simply fail, they are unmade in small, precise ways, until the debt is paid or the breaker is gone. The chosen has seen a king lose his voice for a broken pledge, and a thief lose his shadow. The gift is not kind. It does not distinguish between vows sworn in love and vows sworn in fear. All are held.",
  },
  {
    slug: "rally-the-fallen",
    name: "Rally the Fallen",
    archetypeSlug: "the-chosen-one",
    description: "Rally the Fallen is the quietest of the chosen's gifts, and the one that frightens them most. In their presence, broken things remember what they used to be. A shattered blade will hold its edge for one more swing. A dying soldier will stand for one more charge. A friend who has given up will find, for a moment, the person they were before the world wore them down. The restoration is never permanent. The blade shatters after. The soldier falls for good. The friend remembers, with terrible clarity, what hope felt like — and then must learn to carry its absence again. The chosen uses this gift sparingly. They have learned that reminding people of their best selves is a cruel thing, when the world will not let them keep it.",
  },
  {
    slug: "star-marked-resilience",
    name: "Star-Marked Resilience",
    archetypeSlug: "the-chosen-one",
    description: "Star-Marked Resilience is written into the chosen's flesh. Wounds that would kill another close on them within the hour — steel through the lung, poison in the wine, the slow bleed of a winter spent on the run. The body knits itself back together with a speed that has no business belonging to a mortal frame. But the scars never fade. Every blade that has touched them, every burn, every arrow, every tooth, is recorded on their skin in pale silver lines that catch the light of certain moons. The chosen cannot hide what they are. Strangers read their history in their arms and neck and face. The scars are the prophecy made visible, and the chosen has stopped trying to explain them away.",
  },

  // ── The Trickster ─────────────────────────────────────────────────
  {
    slug: "mirror-lie",
    name: "Mirror Lie",
    archetypeSlug: "the-trickster",
    description: "Mirror Lie is the trickster's oldest and most dangerous garment. Speak a person's name three times aloud — not whispered, not thought, spoken — and the trickster can take their face, their voice, their manner, the small habits only a lover would notice. The mask holds for a single night, or until the trickster laughs, whichever comes first. The theft is not perfect. A close friend will sense something wrong at the edge of their vision, a feeling they cannot name. A mirror, caught at the wrong angle, will show the trickster's true eyes. The trickster has used this gift to walk out of prisons, into bedchambers, and once, briefly, onto a throne. They have also used it to say goodbye to people who would not let them go, in the voice of someone they were not.",
  },
  {
    slug: "pact-of-favors",
    name: "Pact of Favors",
    archetypeSlug: "the-trickster",
    description: "Pact of Favors is the currency of the trickster's kingdom. When a debt is sworn to them in earnest — not flattery, not polite promise, but the real weight of obligation — it is recorded somewhere the trickster cannot see, in a ledger older than any city. When the trickster calls the favor in, the debtor cannot refuse. The universe arranges the collection: a door left unlocked, a witness looking away, a horse found waiting at the right gate. The debtor does not always know they have paid. Sometimes they simply find themselves doing the trickster's will and call it coincidence. The trickster has learned to spend favors carefully. A large one called in cheaply is gone forever, and the ledger does not forgive waste.",
  },
  {
    slug: "slip-through",
    name: "Slip Through",
    archetypeSlug: "the-trickster",
    description: "Slip Through is the gift that has kept the trickster alive through every locked door, sealed vault, and guarded gate the powerful have ever built against them. Once — only once — the trickster may pass through any barrier as if it remembered them and wished them no hindrance. Iron locks turn under fingers that carry no pick. Warded gates swing wide at a touch. Stone walls breathe open for a heartbeat and close again behind. The barrier remembers the trickster afterward, and never opens for them a second time. The trickster keeps a mental map of every door they have spent and every door they have saved. They have walked out of the Sovereign's own treasury. They have one door left they are saving for the night everything else fails.",
  },
  {
    slug: "whisper-network",
    name: "Whisper Network",
    archetypeSlug: "the-trickster",
    description: "Whisper Network is the trickster's ears in every city where they have spent a single night. Rats in the granaries, beggars at the temple steps, children who sell matches in the market square — all of them carry word to the trickster of what passes in the alleys and the courts and the back rooms. The network does not know it is a network. Each messenger believes they are simply fond of the stranger who tipped them well, who listened to their story, who remembered their name. The trickster pieces the fragments together in their head, and the picture that emerges is sharper than any spy's report. Secrets travel along the whisper network at the speed of a child's run, and the trickster is always listening.",
  },
  {
    slug: "loaded-die",
    name: "Loaded Die",
    archetypeSlug: "the-trickster",
    description: "Loaded Die is the trickster's daily bargain with chance. Once each day, they may name an outcome and roll the world toward it. The smaller the stake, the more reliable the bend. A coin landing heads, a card drawn from the bottom of the deck, a guard looking the wrong way at the right moment — these the trickster can nearly guarantee. Larger stakes grow chancy. A duel's outcome, a judge's verdict, a king's decision: the die rolls, but the world pushes back, and the trickster has lost as many of these as they have won. The gift does not announce itself. The trickster simply knows, in the moment of naming, whether the world will agree. They have learned to listen for that knowing, and to walk away when it is silent.",
  },

  // ── The Mentor ────────────────────────────────────────────────────
  {
    slug: "hard-won-lesson",
    name: "Hard-Won Lesson",
    archetypeSlug: "the-mentor",
    description: "Hard-Won Lesson is the mentor's most precise instrument, and the one they use least. When they grant a single piece of advice in full earnest — not lecture, not scolding, but the distilled weight of a thing learned at cost — the recipient cannot ignore it, cannot forget it, cannot argue it away. The lesson sits behind the eyes like a splinter of light, surfacing at the exact moment it is needed, in the exact voice it was spoken. The mentor has given perhaps a dozen of these in thirty years. Each one cost them something to say, because each one was a piece of a wound they had hoped to keep. Students who received a hard-won lesson have gone on to survive things that should have killed them. The mentor is not proud of this. They are tired.",
  },
  {
    slug: "old-wounds",
    name: "Old Wounds",
    archetypeSlug: "the-mentor",
    description: "Old Wounds is the mentor's early warning system, written into every scar they carry. Hours before danger arrives — an ambush on the road, a knife in a friendly hand, a trap sprung in a council chamber — the old wounds begin to ache. The mentor has learned to read the pattern of the pain: a throb in the shoulder means steel from above, a pull in the ribs means betrayal from someone trusted, a cold tightness across the throat means the danger is already inside the room. The gift gives them time. Not much. Enough to put a hand on a weapon, to angle a shoulder toward the door, to say the one word that might still turn the moment. The mentor has stopped wondering why their scars know the future. They simply listen.",
  },
  {
    slug: "patient-flame",
    name: "Patient Flame",
    archetypeSlug: "the-mentor",
    description: "Patient Flame is the mentor's presence, and it is the reason their students survive. When the mentor is in the room, fear loosens its grip. Confused minds clear. Panicked hearts slow. A soldier who has broken does not break further; a young healer who has lost a patient finds their hands steady again. The effect is not dramatic. The mentor does not glow, does not speak magic, does not lay on hands. They simply stand there, and the room becomes a place where thought is possible again. The mentor has walked into burning cities and found, at their side, people who should have been screaming and were instead loading the wounded onto carts. The flame does not warm. It steadies. It is the difference between a routed army and one that holds the line.",
  },
  {
    slug: "veterans-eye",
    name: "Veteran's Eye",
    archetypeSlug: "the-mentor",
    description: "Veteran's Eye is the mentor's reading of the world, honed over decades of paying attention when paying attention was the only thing between them and the grave. In a single glance — across a battlefield, a banquet hall, a stranger's face — the mentor can name the one detail that will decide everything. The loose strap on the enemy's shield wall. The lord whose cup hand trembles. The traveler whose boots are wrong for the road they claim to have walked. The reading is not magic. It is the slow accumulation of every mistake the mentor has ever made and every friend they have buried because of one. The eye does not show them how to win. It shows them where the loss is hiding, so they can step around it, and bring their people with them.",
  },
  {
    slug: "the-last-lesson",
    name: "The Last Lesson",
    archetypeSlug: "the-mentor",
    description: "The Last Lesson is the mentor's final gift, and they have been carrying it unused for thirty years. Once, and only once, they may take a wound meant for another and survive it. Any wound. Any blade, any fall, any spell aimed at a heart other than their own. The mentor will absorb it, and they will live. They do not know how they know this. They have simply known, since the night they walked out of the burning city, that one such intervention was owed to them by the world. They have been saving it. For the right student. For the right moment. For the one death they cannot otherwise prevent. The mentor is not certain the moment will ever come. They are certain that if it does, they will not hesitate.",
  },

  // ── The Exile ─────────────────────────────────────────────────────
  {
    slug: "outcasts-welcome",
    name: "Outcast's Welcome",
    archetypeSlug: "the-exile",
    description: "Outcast's Welcome is the exile's passport among the discarded. In any village of the displaced — the outlawed, the debt-ridden, the disgraced, the thrown-out — the exile is taken in without question, fed what there is, given the warmest corner by the fire. And they may ask one honest question, which will be answered honestly in return. The exile has used this gift to find safe passage through lands where their face is on a bounty sheet, to learn the names of the men who burned their father's order, to discover which border captain can be bribed and which cannot. The welcome does not extend to cities of the powerful. It is a gift of the margins, and the exile has learned that the margins are where the truth is kept.",
  },
  {
    slug: "forest-tongue",
    name: "Forest Tongue",
    archetypeSlug: "the-exile",
    description: "Forest Tongue is the exile's treaty with the wild. Birds, wolves, and wild dogs will not attack them — not out of tameness, but out of an old recognition, as if the exile carries a scent that marks them as belonging to the green places. More usefully, the exile may give a single short message to any such creature, naming a place, and the creature will carry it. The message arrives as a feeling, an image, a pull in a certain direction — never as words. The exile has sent warnings to allies three days' ride away, summoned help to a pinned-down camp, and once called a wolf pack down onto the flank of a pursuing cavalry. The forest does not love the exile. It simply remembers them, and answers when they speak.",
  },
  {
    slug: "cold-sleep",
    name: "Cold Sleep",
    archetypeSlug: "the-exile",
    description: "Cold Sleep is the exile's gift from the winters they should not have survived. They may rest in snow, in freezing rain, in open field under a sky of iron, and take no harm from it. Four hours of such sleep restores them as fully as a night in a feather bed — wounds close a little, exhaustion lifts, the mind clears. The exile has slept in snowbanks that should have killed them, on bare stone in mountain passes, in the lee of walls with the wind cutting past. They wake warm, somehow, with the snow melted in a circle around them. The gift does not extend to others. The exile has slept beside companions who did not wake, and carries the weight of that asymmetry. They no longer sleep near people they care about, if they can help it.",
  },
  {
    slug: "borrowed-face",
    name: "Borrowed Face",
    archetypeSlug: "the-exile",
    description: "Borrowed Face is the exile's gift among their own kind. Among the exiled — the displaced, the renamed, the deliberately forgotten — the exile may take any name and any past, and it will be confirmed by those who ought to know. A deserter will swear the exile served in their old company. A smuggler will vouch for a shared run across the southern border. A disgraced priest will remember the exile as a fellow defrocked brother. The lie holds not because the witnesses are bribed, but because the community of the discarded has agreed, in some unspoken compact, to be each other's alibis. The exile has walked into garrisons, guildhalls, and temples under names that were not theirs, and walked out again unchallenged. The gift does not work among the respectable. It is a tool of the margins.",
  },
  {
    slug: "king-in-rags",
    name: "King in Rags",
    archetypeSlug: "the-exile",
    description: "King in Rags is the exile's last resort, and they have used it twice. Three times in their life — no more — they may summon a band of the discarded to their side. The summons travels through the margins of the world: through the beggar quarters, the camp follower lines, the debtors' cells, the hedge-priest circuits. Within a night, a band gathers. They are not soldiers. They are smiths, cooks, washerwomen, runaway apprentices, discharged spear-carriers — people who have nothing left to lose and a debt to the exile they cannot name. They will fight for one night. They will not be commanded after dawn. They will ask nothing in return, and they will not come again. The exile has one summons left. They are saving it for the night they go home.",
  },

  // ── The Warlord ───────────────────────────────────────────────────
  {
    slug: "logistics-of-empire",
    name: "Logistics of Empire",
    archetypeSlug: "the-warlord",
    description: "Logistics of Empire is the warlord's truest weapon, and the one the bards never sing of. Any army under the warlord's direct command moves twice as fast as it should, eats half as much as it ought, and does not desert. Supply lines that would strangle another general simply hold. Grain reaches the front. Boots reach the soldiers. The math of feeding a province through a winter, which has broken better men than the warlord, resolves itself in their presence as if the ledger had decided to cooperate. This is not mercy. It is efficiency, and the warlord wields it like a blade. An army that does not starve does not need to forage, and an army that does not forage does not burn the villages it passes through. The conquered remember this, even if the bards do not.",
  },
  {
    slug: "siege-eye",
    name: "Siege Eye",
    archetypeSlug: "the-warlord",
    description: "Siege Eye is the warlord's reading of walls, and it has ended more sieges than battering rams and starvation combined. The warlord looks at a fortification — stone, timber, earthwork, it does not matter — and sees the one stone, the one timber, the one section of packed earth that, if removed, brings the whole structure down. The weakness is not always where the engineers would expect. It might be a drainage culvert, a corner where two walls meet at the wrong angle, a single load-bearing arch the defenders have forgotten they are leaning on. The warlord has walked along siege lines, pointed, and said, there. Within a day, the wall has fallen. The gift is not infallible — some walls have no single weakness, only the slow attrition of time. But the warlord has yet to meet such a wall they could not outwait.",
  },
  {
    slug: "iron-discipline",
    name: "Iron Discipline",
    archetypeSlug: "the-warlord",
    description: "Iron Discipline is the warlord's grip on the men and women under their direct command. While the warlord stands — on the field, in the camp, at the head of the column — those soldiers cannot be routed, cannot be bribed, cannot be turned against the warlord by any enemy. Fear slides off them. Gold holds no temptation. The enemy's heralds may ride up and offer pardon and land, and the soldiers will not waver. The discipline is not cruelty. It is certainty, radiated outward from the warlord's spine into the ranks. The soldiers do not love the warlord for it. They simply cannot imagine, in the warlord's presence, doing anything other than holding the line. The gift fails the moment the warlord falls or leaves the field. The warlord knows this. They have never left a field they intended to keep.",
  },
  {
    slug: "the-long-ledger",
    name: "The Long Ledger",
    archetypeSlug: "the-warlord",
    description: "The Long Ledger is the warlord's memory for debts, and the universe's willingness to collect on their behalf. Once the warlord has named a debt owed to them — by a city that withheld tribute, by a lord who broke a treaty, by a guild that funneled gold to an enemy — that debt is collected within a year. The collection is not always direct. Sometimes it comes as a bad harvest, a failed harvest, a fever in the debtor's family. Sometimes it comes as a knife in the dark, wielded by someone the debtor wronged years ago and never paid. Sometimes it comes as the warlord's army at the gate. The ledger does not distinguish. The debt is paid, in full or in blood, and the warlord moves on to the next entry. They have never had to write the same name twice.",
  },
  {
    slug: "tyrants-awe",
    name: "Tyrant's Awe",
    archetypeSlug: "the-warlord",
    description: "Tyrant's Awe is the warlord's presence in a room, and it is the reason no one has ever successfully lied to their face. When the warlord enters, the clever go quiet. The loud lower their voices. Courtiers who would talk circles around a lesser ruler find their rehearsed phrases dying in their throats. The awe is not fear, exactly — though fear is part of it. It is the recognition, instinctive and unspoken, that this is a person who has measured the cost of disobedience in cities and in bodies, and has decided the math is acceptable. No one lies to the warlord's face, because the cost of being caught is well understood, and the awe makes the catching certain. The warlord does not need to raise their voice. The silence does the work for them.",
  },

  // ── The Oracle ────────────────────────────────────────────────────
  {
    slug: "smoke-reading",
    name: "Smoke Reading",
    archetypeSlug: "the-oracle",
    description: "Smoke Reading is the oracle's daily communion with the unknown. Once each day, they may bend over a small fire — cedar, sage, or the temple's black incense — and ask the smoke a single question. The smoke answers in two images. One is true. One is false. They arrive together, woven into the same curling thread, and the oracle must know which is which. There is no trick to the knowing. It is a muscle, built over years of practice and failure, a slow education of the inner eye. The oracle has been wrong. They have acted on the false image and lived to regret it. They have also dismissed the true image as the lie, and watched the consequence arrive on schedule. The gift is not kindness. It is a test, administered daily, and the oracle has not yet passed it perfectly.",
  },
  {
    slug: "prophetic-memory",
    name: "Prophetic Memory",
    archetypeSlug: "the-oracle",
    description: "Prophetic Memory is the oracle's archive, and it is the heaviest thing they carry. Every vision they have ever had — every smoke reading, every dream, every omen read in bird-flight and broken stone — is preserved in their mind with the clarity of the moment it arrived. They cannot forget. They cannot blur the edges. They can lay a vision from ten years ago beside one from last week and compare them, finding patterns no other living person could see. This is the gift's blessing. Its curse is that the bad visions are preserved as perfectly as the good ones. The oracle can close their eyes and see, in unflinching detail, the city burning, the figure walking out of the fire, the face they have not yet been able to name. The memory does not fade. The oracle has stopped hoping it will.",
  },
  {
    slug: "the-patient-question",
    name: "The Patient Question",
    archetypeSlug: "the-oracle",
    description: "The Patient Question is the oracle's only gift that works on other people directly, and they use it rarely. Anyone who asks the oracle a question in earnest — truly wanting to know, not testing, not mocking, not fishing — must hear the oracle's answer in full. They cannot interrupt. They cannot walk away. They cannot dismiss the answer as riddle or nonsense, even if they wish to. The answer holds them, gently but firmly, until the last word is spoken. The oracle has watched hardened generals stand in a temple courtyard and listen to a fifteen-year-old priestess tell them, in a quiet voice, exactly what their campaign will cost. The generals did not always heed the answer. But they always heard it. The oracle has learned to speak the truth plainly when the question comes, because they will not get a second chance.",
  },
  {
    slug: "omen-sight",
    name: "Omen-Sight",
    archetypeSlug: "the-oracle",
    description: "Omen-Sight is the oracle's reading of the world's small warnings. A bird crossing the path from left to right. A cup dropped and shattered in a particular pattern. The cracks that appear in a heated stone. The way a sick person breathes in the third hour of fever. To the oracle, these are not accidents. They are sentences in a language the world is always speaking, and the oracle has spent their life learning to read it. The omens do not predict the future in detail. They indicate its weather — approaching trouble, receding danger, a change in the wind of fortune. The oracle has learned to act on the small signs and ignore the urge to dismiss them as coincidence. Coincidence, they have found, is usually just an omen the reader was too lazy to interpret.",
  },
  {
    slug: "forbidden-counter",
    name: "Forbidden Counter",
    archetypeSlug: "the-oracle",
    description: "Forbidden Counter is the oracle's most dangerous gift, and the one the temple taught them to fear. Once each lunar cycle, they may speak a future they have seen — aloud, deliberately, in full knowledge — and invert it. The predicted death does not occur. The burning city stands. The figure walking out of the fire turns and walks back in. The counter works. The oracle has verified this. But the cost is not paid by the future, which has no coin of its own. It is paid by the oracle, in blood or in memory. A year of recollection, gone. The face of a dead mother, forgotten. The taste of a first love's name, vanished from the tongue. The oracle has used the counter four times. They do not know how much memory they have left to spend, and they are afraid to find out.",
  },

  // ── The Wanderer ──────────────────────────────────────────────────
  {
    slug: "road-tongue",
    name: "Road-Tongue",
    archetypeSlug: "the-wanderer",
    description: "Road-Tongue is the wanderer's chameleon gift. In any town or port, within an hour of arriving, they can be mistaken for a local. The accent settles into the right shape. The clothes, somehow, look right. The wanderer knows which alley to walk down, which tavern to enter, which greeting to offer the fish-seller at the corner. Strangers ask them for directions in the local tongue, and the wanderer answers without thinking. The gift does not make them invisible. It makes them belong, briefly, in a place that is not theirs. The belonging fades the moment the wanderer leaves — the next morning, the fish-seller will not remember their face. But for that one night, the wanderer is not a stranger anywhere, and that is the only home the road has ever offered them.",
  },
  {
    slug: "long-memory",
    name: "Long Memory",
    archetypeSlug: "the-wanderer",
    description: "Long Memory is the wanderer's map of the world, drawn not on paper but in the bone. Every road they have walked is preserved in their mind — every turn, every ford, every shortcut through the pine forest that the locals have forgotten. Every face they have trusted is held with the same clarity: the innkeeper who fed them on credit, the farmer who pointed them to the dry cave, the captain who let them work passage for a week. And every door that was opened to them is remembered, with its hinge-squeak and its threshold and the smell of the room beyond. The wanderer can retrace any of these in the dark, in storm, in the confusion of a country at war. They have walked out of lost cities by following a road they walked once, twenty years before, and never forgot.",
  },
  {
    slug: "strangers-bread",
    name: "Stranger's Bread",
    archetypeSlug: "the-wanderer",
    description: "Stranger's Bread is the oldest law the wanderer knows, and the road has never broken it. Any household — any, regardless of wealth, suspicion, or history — will feed and shelter the wanderer for one night, without payment and without question. A bowl of whatever is on the fire. A place by the hearth, or in the barn if the house is full. The household does not know why they say yes. They simply do, as if the request arrives with a weight that overrides refusal. The gift works once per household. The wanderer keeps a mental list of every door they have spent, and does not return to spend it twice. They have eaten at the tables of dukes and of beggars, and the bread tasted the same in both places.",
  },
  {
    slug: "unmarked",
    name: "Unmarked",
    archetypeSlug: "the-wanderer",
    description: "Unmarked is the wanderer's invisibility to fate. Prophecy cannot find them. Divination slides off them like rain off oilcloth. An oath-spell sworn to track them by name finds no purchase. The wanderer has walked through the working of oracles who were trying to locate them, and felt nothing — not a tug, not a whisper, not the faintest pull of being seen. The gift has a price. It also hides them from the people who love them, if those people are not already looking. A friend searching the road for the wanderer will not find them unless they already know, somehow, where to look. The wanderer has learned to leave messages in agreed-upon places, because the alternative is to be unfindable by everyone, and that is a loneliness they have decided they cannot carry.",
  },
  {
    slug: "the-next-bend",
    name: "The Next Bend",
    archetypeSlug: "the-wanderer",
    description: "The Next Bend is the wanderer's escape clause, granted by the road itself. Once each lunar cycle, they may walk away — from a place, from a fight, from a fate that has been closing around them — and the world will let them go. Doors that were locked will be open. Roads that were blocked will be clear. Pursuers will find their quarry gone, as if the road had simply decided to take the wanderer elsewhere. The gift does not protect anyone the wanderer leaves behind. It only ensures the wanderer's own exit. They have used it to leave a city hours before it fell, a duel minutes before the blade was drawn, a love the morning after they realized they could stay. The wanderer is not proud of the last one. They are not sure they would change it.",
  },

  // ── The Sovereign ─────────────────────────────────────────────────
  {
    slug: "ledger-mind",
    name: "Ledger-Mind",
    archetypeSlug: "the-sovereign",
    description: "Ledger-Mind is the sovereign's first and most quiet gift, and the reason the realm did not default the winter they took the throne. Every debt, every treaty, every tax roll in the realm is preserved in the sovereign's memory with the precision of a freshly inked page. They can quote the figures without checking. They know, to the last coin, what the eastern provinces owe in arrears, what the western guilds are skimming, what the northern lords are quietly withholding against a future leverage. Councilors have learned not to bring fabricated numbers to the sovereign's table. The sovereign does not need to catch the lie — they simply state the correct figure, and the room goes quiet. The gift is not glamorous. It is the reason the realm is solvent, and the sovereign would trade it for none of the others.",
  },
  {
    slug: "court-rope",
    name: "Court-Rope",
    archetypeSlug: "the-sovereign",
    description: "Court-Rope is the sovereign's gift for the slow binding of the ambitious. Looking at a lord, a lady, a guildmaster — anyone with power and the will to use it — the sovereign can name the one favor that will tie them to the crown's interest without their realizing it for a full season. The favor is never large. A trade concession. A favorable marriage for a third cousin. A blind eye turned to a discreet debt. The target accepts, grateful and unsuspecting, and only later discovers that the favor has rearranged their incentives so thoroughly that opposing the sovereign now costs them more than supporting. The sovereign has bound half the council this way, one small favor at a time. None of them know the full picture. The sovereign does, and the rope is drawn a little tighter each season.",
  },
  {
    slug: "the-spares-patience",
    name: "The Spare's Patience",
    archetypeSlug: "the-sovereign",
    description: "The Spare's Patience is the sovereign's gift of waiting, and it was learned before it was given. Raised as the unobtrusive fourth child, the sovereign learned to outwait brothers who were faster, louder, and better loved. The gift formalized the lesson: the sovereign can wait, with perfect composure, longer than anyone who believes they are more powerful. A rival lord plotting a coup will find the sovereign does not rise to the provocation, does not act prematurely, does not flinch. The lord waits for the sovereign to break. The sovereign waits for the lord to overextend. The lord always overextends first. The patience is not passivity. It is the sovereign's surest weapon, and the one their enemies most consistently underestimate, because they cannot believe someone so quiet could be so certain of the outcome.",
  },
  {
    slug: "sovereigns-seal",
    name: "Sovereign's Seal",
    archetypeSlug: "the-sovereign",
    description: "Sovereign's Seal is the crown's guarantee, made flesh in wax and signet. Any document bearing the sovereign's seal — treaty, edict, warrant, pardon — is treated, by custom and by law, as if the sovereign had spoken the words aloud in person, in the full court, on a holy day. The seal carries the weight of the throne behind it. Recipients do not question. Governors do not delay. Captains do not hesitate. The sovereign has used the seal to end a border war with a single letter, to pardon a wrongly condemned scholar from three provinces away, to redirect a grain shipment that saved a city from famine. The seal cannot be forged — the wax knows its true master, and crumbles at any other hand. The sovereign keeps the signet ring on their finger, always, and sleeps with it still on.",
  },
  {
    slug: "last-heir",
    name: "Last Heir",
    archetypeSlug: "the-sovereign",
    description: "Last Heir is the sovereign's final defense, and the one they did not choose. If the sovereign dies without an heir of their body, the realm tears itself apart. This is not prophecy. It is political fact, known to every lord with a claim and every neighbor with an army. The realm's stability is so thoroughly threaded through the sovereign's bloodline that removing the thread collapses the whole tapestry. This is the sovereign's strongest shield. Anyone who would harm them must reckon with the chaos that follows, and the chaos is worse than any grievance they currently carry. The sovereign did not ask for this defense. They did not build it. They inherited it, along with the throne, and they have used it — quietly, deliberately — to walk into rooms that should have been dangerous, and walk out of them again whole.",
  },
];
