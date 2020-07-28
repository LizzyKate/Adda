export const state = () => ({
  People: [
    {
      image: 'profile-small-1.jpg',
      name: 'Jon Wilem',
      bio: 'Many Desktop Publishing',
      friend: true
    },
    {
      image: 'profile-small-5.jpg',
      name: 'Jon Wilem',
      bio: 'Many Desktop Publishing',
      friend: false
    },
    {
      image: 'profile-small-6.jpg',
      name: 'Jon Wilem',
      bio: 'Many Desktop Publishing',
      friend: true
    },
    {
      image: 'profile-small-9.jpg',
      name: 'Jon Wilem',
      bio: 'Many Desktop Publishing',
      friend: false
    }
  ]
})

export const mutations = {
  show(state, payload) {
    if (state.People[payload].friend === false) {
      state.People[payload].friend = true
    } else {
      state.People[payload].friend = true
    }
  }
}
