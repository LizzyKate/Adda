export const state = () => ({
  notify: [
    {
      image: 'profile-small-9.jpg',
      names: ['Robert Faul,', ' William Jhon'],
      text: 'and ' + 35 + '  other people reacted to your photo',
      date: 25 + ' Apr, 2019'
    },
    {
      image: 'profile-small-15.jpg',
      names: ['Robert Mushkil,', ' Terry Jhon'],
      text: 'and ' + 20 + ' other people reacted to your photo',
      date: 20 + ' Apr, 2019'
    },
    {
      image: 'profile-small-27.jpg',
      names: ['Horijon Mbala,', ' Bashu Jhon'],
      text: 'and ' + 55 + ' other people reacted to your post',
      date: 15 + ' Apr, 2019'
    }
  ],
  tick: true
})
export const mutations = {
  mark(state, payload) {
    state.notify = []
    state.tick = false
  }
}
