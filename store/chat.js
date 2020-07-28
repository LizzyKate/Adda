export const state = () => ({
  active: true,
  time: 3 + 'pm',
  date: 'Yesterday',
  conv: [
    {
      message: 'Many desktop publishing packages and web page editors',
      sender: true
    },
    {
      message: 'Many desktop publishing packages and web page editors',
      sender: false
    },
    {
      message: 'siodfhg dfsiugbsd gdfuisgbk sfdguisdbg dsgyidsf gdfuig fds ',
      sender: true
    },
    {
      message: 'Many desktop publishi',
      sender: false
    },
    {
      message: 'Many desktop publishing packages and w',
      sender: true
    },
    {
      message: 'and web page editors',
      sender: false
    },
    {
      message: 'Many desktop publishing packages and web p',
      sender: false
    }
  ],
  currentChatWith: 0,
  groups: ['joanthan', 'Elizabeth', 'Shola', 'caleb'],
  conversation: [
    {
      message: 'Hello',
      date: '23/07/20',
      sender: 'jonathan'
    },
    {
      message: 'hi every one',
      date: '23/45/56',
      sender: 'Shola'
    }
  ],
  remove: false
})

export const mutations = {
  setPersonIndex(state, payload) {
    state.currentChatWith = payload
    state.remove = true
  },
  hide(state, payload) {
    state.remove = false
  }
}
