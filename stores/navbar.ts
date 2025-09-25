import { defineStore } from "pinia";

export const useMiddleNavbarItems = defineStore("middleNavbarItems", {
  state: () => {
    return ({
      items: [
        [
          {
            label: 'About Me',
            icon: 'i-lucide-user',
            to: '/about',
            active: false,
            defaultOpen: true,
            children: [
              {
                label: 'Introduction',
                icon: 'i-lucide-house',
                description: 'A little on me',
                to: '/about',
                active: false
              },
              {
                label: '2010',
                icon: 'i-lucide-wrench',
                description: '6 years old | Modding',
                to: '/about',
                active: false
              },
              {
                label: '2016',
                icon: 'i-lucide-square-function',
                description: '12 years old | Programming',
                to: '/about',
                active: false
              },
              {
                label: '2018',
                icon: 'i-lucide-link',
                description: '14 years old | The Web',
                to: '/about',
                active: false
              },
              {
                label: '2020',
                icon: 'i-lucide-school',
                description: '16 years old | GCSEs',
                to: '/about',
                active: false
              },
              {
                label: '2022',
                icon: 'i-lucide-book-text',
                description: '18 years old | A-levels',
                to: '/about',
                active: false
              },
              {
                label: '2025',
                icon: 'i-lucide-graduation-cap',
                description: '21 years old | My Degree',
                to: '/about',
                active: false,
                class: '-mt-0.5'
              },
              {
                label: 'Next Steps',
                icon: 'i-lucide-sparkles',
                description: 'What does my future hold?',
                active: false,
                disabled: true,
                class: '!cursor-not-allowed opacity-50 -mt-0.5'
              },
            ]
          },
          {
            label: 'Experience',
            icon: 'i-lucide-briefcase-business',
            to: '/experience',
            active: false,
            defaultOpen: true,
            children: [
              {
                label: 'All Roles',
                icon: 'i-lucide-briefcase',
                description: 'A summary of all my roles',
                to: '/about',
                active: false
              },
              {
                label: 'Jobs',
                icon: 'i-lucide-briefcase-business',
                description: 'A paid position of regular employment',
                to: '/about',
                active: false
              },
              {
                label: 'Education',
                icon: 'i-lucide-backpack',
                description: 'Formal learning experiences, degrees, and certifications',
                to: '/about',
                active: false
              },
              {
                label: 'Volunteering',
                icon: 'i-lucide-handbag',
                description: 'Unpaid work for the community or charitable organizations',
                to: '/about',
                active: false
              },
              {
                label: 'Long-term projects',
                icon: 'i-lucide-chart-gantt',
                description: 'Significant undertakings with defined goals and timelines',
                to: '/about',
                active: false
              },
              {
                label: 'Events',
                icon: 'i-lucide-ticket-check',
                description: 'Various affairs taken part in',
                to: '/about',
                active: false
              },
            ]
          },
          {
            label: 'Portfolio',
            icon: 'i-lucide-presentation',
            to: '/portfolio',
            active: false,
            children: [
              {
                label: 'Quokka',
                description: 'An extremely customizable keystroke launcher with plugins',
                icon: 'i-lucide-paw-print',
                to: '/about',
              },
              {
                label: 'Zarlasht',
                icon: 'i-lucide-bow-arrow',
                description: 'My dissertation; a concurrency-based game environment',
                to: '/about',
              },
              {
                label: 'Muslim Guide',
                description: 'Duas and Umrah, Hajj & Madinah Guides',
                icon: 'i-lucide-moon-star',
                to: '/about',
              },
              {
                label: 'WhatsApp Portable',
                icon: 'i-lucide-messages-square',
                description: 'A portable application to use WhatsApp',
                to: '/about',
              },
              {
                label: 'IT Assets Metadata Repository',
                icon: 'i-lucide-boxes',
                description:
                  'A system for metadata-based organization of different assets',
                to: '/about',
              },
              {
                label: 'ALSET',
                icon: 'i-lucide-car-taxi-front',
                description:
                  'Track following robot using the EV3 kit, LeJOS and an Android phone',
                to: '/about',
              },
            ]
          },
          {
            label: 'CV',
            icon: 'i-lucide-file-text',
            to: '/cv',
            active: false
          }
        ],
      ]
    })
  },
  actions: {
  },
});
