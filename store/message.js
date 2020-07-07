export const state = () => ({
  inbox: [
    {
      image: 'profile-small-1.jpg',
      name: 'Milli Raoulin',
      text:
        'Many desktop publishing packages and web page editors now use lorem ipsum as their default',
      date: 25 + ' Apr, 2019'
    },
    {
      image: 'profile-small-5.jpg',
      name: 'Jhon Doe',
      text:
        'Many desktop publishing packages and web page editors now use lorem ipsum as their default',
      date: 15 + ' Apr, 2019'
    },
    {
      image: 'profile-small-6.jpg',
      name: 'Jon Wileyam',
      text:
        'Many desktop publishing packages and web page editors now use lorem ipsum as their default',
      date: 20 + ' Apr, 2019'
    }
  ],
  tick: true
})
export const mutations = {
  mark(state, payload) {
    state.inbox = []
    state.tick = false
  }
}
