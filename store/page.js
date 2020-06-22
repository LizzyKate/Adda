export const state = () => ({
  like: [
    {
      image: 'profile-small-33.jpg',
      task: 'Adventure',
      event: 'Travel The World',
      liked: false
    },
    {
      image: 'profile-small-30.jpg',
      task: 'Food',
      event: 'Foodcort Nirala',
      liked: false
    },
    {
      image: 'profile-small-5.jpg',
      task: 'Drama',
      event: 'Rolin Theitar',
      liked: false
    },
    {
      image: 'profile-small-29.jpg',
      task: 'Fitness',
      event: 'Active Mind',
      liked: false
    }
  ],
  friends: [
    {
      image: 'profile-small-33.jpg',
      task: 10 + ' Mutual',
      event: 'Ammeya Jakson',
      liked: false
    },
    {
      image: 'profile-small-30.jpg',
      task: 2 + ' Mutual',
      event: 'Jashon Muri',
      liked: false
    },
    {
      image: 'profile-small-5.jpg',
      task: 'Drama',
      event: 'Rolin Theitar',
      liked: false
    },
    {
      image: 'profile-small-29.jpg',
      task: 'Fitness',
      event: 'Active Mind',
      liked: false
    }
  ]
})

export const mutations = {
  pick(state, payload) {
    if (payload.type === 'Friends Zone') {
      state.friends[payload.index].liked = !state.friends[payload.index].liked
    } else {
      state.like[payload.index].liked = !state.like[payload.index].liked
    }
  }
}
