export const state = () => ({
  action: [
    {
      name: 'profile-small-1.jpg',
      id: 1
    },
    {
      name: 'profile-small-5.jpg',
      id: 2
    },
    {
      name: 'profile-small-6.jpg',
      id: 3
    },
    {
      name: 'profile-small-9.jpg',
      id: 4
    },
    {
      name: 'profile-small-15.jpg',
      id: 5
    },
    {
      name: 'profile-small-27.jpg',
      id: 6
    },
    {
      name: 'profile-small-28.jpg',
      id: 7
    },
    {
      name: 'profile-small-29.jpg',
      id: 8
    },
    {
      name: 'profile-small-30.jpg',
      id: 9
    },
    {
      name: 'profile-small-31.jpg',
      id: 10
    },
    {
      name: 'profile-small-31.jpg',
      id: 11
    },
    {
      name: 'profile-small-32.jpg',
      id: 12
    },
    {
      name: 'profile-small-33.jpg',
      id: 13
    },
    {
      name: 'profile-small-34.jpg',
      id: 14
    },
    {
      name: 'profile-small-35.jpg',
      id: 15
    },
    {
      name: 'profile-small-37.jpg',
      id: 16
    },
    {
      name: 'profile-small-1.jpg',
      id: 17
    },
    {
      name: 'profile-small-5.jpg',
      id: 18
    },
    {
      name: 'profile-small-6.jpg',
      id: 19
    },
    {
      name: 'profile-small-9.jpg',
      id: 20
    }
  ],
  currentOffset: 0,
  windowSize: 3,
  paginationFactor: 220
})

// export const mutations = {
//   atEndOfList() {
//     return (
//       this.currentOffset <=
//       this.paginationFactor * -1 * (this.items.length - this.windowSize)
//     )
//   },
//   atHeadOfList() {
//     return this.currentOffset === 0
//   },
//   moveCarousel(direction) {
//     // Find a more elegant way to express the :style. consider using props to make it truly generic
//     if (direction === 1 && !this.atEndOfList) {
//       this.currentOffset -= this.paginationFactor
//     } else if (direction === -1 && !this.atHeadOfList) {
//       this.currentOffset += this.paginationFactor
//     }
//   }
// }
