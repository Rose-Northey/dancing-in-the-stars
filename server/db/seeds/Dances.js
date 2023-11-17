/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Dances').del()
  await knex('Dances').insert([
    {
      id: 1,
      name: 'Dancing Robot',
      description:
        'Sync your circuits and oil those joints! The Dancin Robot dance is perfect for when you want to impress humans with your funky algorithms and electric slide moves. Warning: May cause sparks of joy!',
      link: 'https://www.youtube.com/shorts/BT2zG-GauFs',
      is_complete: false,
    },
    {
      id: 2,
      name: 'The Boogie',
      description:
        'Get ready to boogie down with the dance thats been grooving through generations! Its like your feet have a mind of their own, and that mind wants to party. Warning: May induce spontaneous disco fever.',
      link: 'https://www.youtube.com/shorts/DH1iCtu3kcw',
      is_complete: false,
    },
    {
      id: 3,
      name: 'The L Dance',
      description:
        'A dance used all around the world by sweaty gamers when they absolutely pwn some little kid in Fortnite. Its a physical way of saying "GG KID", get good. For those few moments after getting that kill your brain is full of dopamine, before you quickly come back to earth and realise you live in your mums basement and play video games all day... go touch some grass.',
      link: 'https://www.youtube.com/shorts/LqPd0tbOx10',
      is_complete: false,
    },
    {
      id: 4,
      name: 'Orange Juice',
      description:
        'Squeeze the day with the Orange Juice dance! Its a refreshing blend of citrusy steps and zestful twirls. Just be careful not to slip on any imaginary peels. Warning: May lead to an increase in Vitamin C levels and dance floor happiness.',
      link: 'https://www.youtube.com/shorts/OzAbCuXKBQ0',
      is_complete: false,
    },
  ])
}
