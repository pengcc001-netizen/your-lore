export interface QuizQuestion {
  id: number;
  question: string;
  options: { text: string; stats: { strength?: number; wisdom?: number; charisma?: number; cunning?: number; resilience?: number; magic?: number } }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "You discover a prophecy about yourself. What do you do?",
    options: [
      { text: "Embrace it. If destiny chose me, I will not run.", stats: { strength: 10, resilience: 10, charisma: 5 } },
      { text: "Try to change it. Prophecies are just warnings.", stats: { cunning: 15, magic: 10 } },
      { text: "Seek someone who can interpret it better.", stats: { wisdom: 15, magic: 10 } },
      { text: "Ignore it. The future is none of my business.", stats: { resilience: 10, cunning: 5 } },
    ],
  },
  {
    id: 2,
    question: "A stranger offers you power at a terrible price. You...",
    options: [
      { text: "Refuse. Power earned through sacrifice means nothing.", stats: { strength: 10, wisdom: 10 } },
      { text: "Negotiate. Everything has a price, but mine is higher.", stats: { cunning: 15, charisma: 5 } },
      { text: "Accept. Power is power. The price can be dealt with later.", stats: { strength: 15, resilience: 5 } },
      { text: "Walk away without answering. Some doors should stay closed.", stats: { resilience: 15, wisdom: 5 } },
    ],
  },
  {
    id: 3,
    question: "Your kingdom is under attack. What is your first move?",
    options: [
      { text: "Lead the charge yourself. Inspiration wins wars.", stats: { strength: 15, charisma: 10 } },
      { text: "Rally the troops from the rear. Strategy over glory.", stats: { charisma: 15, cunning: 10 } },
      { text: "Seek a magical solution. Brute force is for the uncreative.", stats: { magic: 15, wisdom: 5 } },
      { text: "Negotiate. Every battle avoided is a battle won.", stats: { cunning: 15, charisma: 10 } },
    ],
  },
  {
    id: 4,
    question: "You are betrayed by someone you trusted. You...",
    options: [
      { text: "Forgive them. Holding grudges weakens you.", stats: { wisdom: 15, resilience: 10 } },
      { text: "Make sure they never betray anyone again.", stats: { strength: 15, cunning: 5 } },
      { text: "Use their betrayal as leverage later.", stats: { cunning: 15, wisdom: 5 } },
      { text: "Walk away. Trust is a luxury you can no longer afford.", stats: { resilience: 15, strength: 5 } },
    ],
  },
  {
    id: 5,
    question: "You encounter a magical artifact of unknown power. You...",
    options: [
      { text: "Study it carefully before touching anything.", stats: { wisdom: 15, magic: 5 } },
      { text: "Pick it up. Adventure favors the bold.", stats: { strength: 10, resilience: 10 } },
      { text: "See if you can trade it for something better.", stats: { cunning: 15, charisma: 5 } },
      { text: "Feel its energy. Some things cannot be studied, only felt.", stats: { magic: 15, wisdom: 10 } },
    ],
  },
  {
    id: 6,
    question: "A child asks you for advice about life. What do you say?",
    options: [
      { text: "\"Be brave. The world tests those who matter most.\"", stats: { strength: 10, charisma: 10 } },
      { text: "\"Be clever. The world rewards those who think differently.\"", stats: { cunning: 15, wisdom: 5 } },
      { text: "\"Be kind. The world breaks those who are not.\"", stats: { wisdom: 15, charisma: 5 } },
      { text: "\"Be free. The world traps those who stay too long.\"", stats: { resilience: 10, wisdom: 10 } },
    ],
  },
  {
    id: 7,
    question: "You are offered the throne of a fallen kingdom. You...",
    options: [
      { text: "Accept. Someone must restore order.", stats: { charisma: 15, wisdom: 10 } },
      { text: "Refuse. Power without earning it is a trap.", stats: { resilience: 15, strength: 5 } },
      { text: "Take it, but plan to reshape it entirely.", stats: { cunning: 15, charisma: 5 } },
      { text: "Leave the country. I did not come here for crowns.", stats: { resilience: 10, cunning: 10 } },
    ],
  },
  {
    id: 8,
    question: "You see a vision of your own death. It is...",
    options: [
      { text: "In battle, fighting for what is right.", stats: { strength: 15, resilience: 10 } },
      { text: "Alone, far from anyone who knew your name.", stats: { resilience: 15, wisdom: 5 } },
      { text: "Surrounded by enemies you outlived.", stats: { cunning: 15, strength: 5 } },
      { text: "In peace, having seen everything you needed to see.", stats: { wisdom: 15, magic: 10 } },
    ],
  },
  {
    id: 9,
    question: "An old enemy begs for your help. You...",
    options: [
      { text: "Help them. A true leader serves even their enemies.", stats: { charisma: 15, wisdom: 10 } },
      { text: "Help them, but remember this moment. Debts are currency.", stats: { cunning: 15, wisdom: 5 } },
      { text: "Walk past them. You owe them nothing.", stats: { resilience: 15, strength: 5 } },
      { text: "Heal them with magic. Then leave without a word.", stats: { magic: 15, wisdom: 10 } },
    ],
  },
  {
    id: 10,
    question: "What is your greatest weapon?",
    options: [
      { text: "My blade. It has never failed me.", stats: { strength: 15, resilience: 5 } },
      { text: "My mind. It sees what others miss.", stats: { cunning: 15, wisdom: 5 } },
      { text: "My words. They build and destroy kingdoms.", stats: { charisma: 15, cunning: 5 } },
      { text: "My magic. It connects me to forces beyond understanding.", stats: { magic: 15, wisdom: 10 } },
    ],
  },
  {
    id: 11,
    question: "You are alone in the wilderness. How do you feel?",
    options: [
      { text: "At peace. The wild is where I belong.", stats: { resilience: 15, strength: 5 } },
      { text: "Curious. What secrets does this place hold?", stats: { magic: 15, wisdom: 5 } },
      { text: "Strategic. I can use this terrain to my advantage.", stats: { cunning: 15, resilience: 5 } },
      { text: "Lonely. Even the strongest need a fire to share.", stats: { charisma: 10, wisdom: 10 } },
    ],
  },
  {
    id: 12,
    question: "The story of your life is being written. How does it end?",
    options: [
      { text: "With a sacrifice that saves the world.", stats: { strength: 10, resilience: 15 } },
      { text: "With a twist no one saw coming.", stats: { cunning: 15, magic: 5 } },
      { text: "With wisdom passed to the next generation.", stats: { wisdom: 15, charisma: 5 } },
      { text: "With me walking into the sunset, destination unknown.", stats: { resilience: 15, cunning: 5 } },
    ],
  },
]
