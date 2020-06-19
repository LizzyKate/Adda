export const state = () => ({
  post: [
    {
      body:
        'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
      profile: 'profile-small-1.jpg',
      time: 20 + ' min ago',
      images: [],
      videos: [],
      author: {
        name: 'Jon Wileyam',
        avatar: 'https://imageurl',
        userProfileUrl: 'https://user/jonwileyam'
      },
      likes: 64,
      shares: 60,
      comments: 41,
      created: '03-16-07-23',
      likedByCurrentUser: false
    },
    {
      body:
        'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
      profile: 'profile-small-1.jpg',
      time: 20 + ' min ago',
      images: [],
      videos: [],
      author: {
        name: 'Jon Wileyam',
        avatar: 'https://imageurl',
        userProfileUrl: 'https://user/jonwileyam'
      },
      likes: 64,
      shares: 60,
      comments: 41,
      created: '03-16-07-23',
      likedByCurrentUser: false
    },
    {
      body:
        'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
      profile: 'profile-small-1.jpg',
      time: 20 + ' min ago',
      images: [],
      videos: [],
      author: {
        name: 'Jon Wileyam',
        avatar: 'https://imageurl',
        userProfileUrl: 'https://user/jonwileyam'
      },
      likes: 64,
      shares: 60,
      comments: 41,
      created: '03-16-07-23',
      likedByCurrentUser: false
    },
    {
      body:
        'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
      profile: 'profile-small-1.jpg',
      time: 20 + ' min ago',
      images: [],
      videos: [],
      author: {
        name: 'Jon Wileyam',
        avatar: 'https://imageurl',
        userProfileUrl: 'https://user/jonwileyam'
      },
      likes: 64,
      shares: 60,
      comments: 41,
      created: '03-16-07-23',
      likedByCurrentUser: false
    },
    {
      body:
        'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
      profile: 'profile-small-1.jpg',
      time: 20 + ' min ago',
      images: [],
      videos: [],
      author: {
        name: 'Jon Wileyam',
        avatar: 'https://imageurl',
        userProfileUrl: 'https://user/jonwileyam'
      },
      likes: 64,
      shares: 60,
      comments: 41,
      created: '03-16-07-23',
      likedByCurrentUser: false
    },
    {
      body:
        'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
      profile: 'profile-small-1.jpg',
      time: 20 + ' min ago',
      images: [],
      videos: [],
      author: {
        name: 'Jon Wileyam',
        avatar: 'https://imageurl',
        userProfileUrl: 'https://user/jonwileyam'
      },
      likes: 64,
      shares: 60,
      comments: 41,
      created: '03-16-07-23',
      likedByCurrentUser: false
    },
    {
      body:
        'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
      profile: 'profile-small-1.jpg',
      time: 20 + ' min ago',
      images: [],
      videos: [],
      author: {
        name: 'Jon Wileyam',
        avatar: 'https://imageurl',
        userProfileUrl: 'https://user/jonwileyam'
      },
      likes: 64,
      shares: 60,
      comments: 41,
      created: '03-16-07-23',
      likedByCurrentUser: false
    },
    {
      body:
        'Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded. Moreover, there are several optional attributes which can be used to influence the way video content is loaded.',
      profile: 'profile-small-1.jpg',
      time: 20 + ' min ago',
      images: [],
      videos: [],
      author: {
        name: 'Jon Wileyam',
        avatar: 'https://imageurl',
        userProfileUrl: 'https://user/jonwileyam'
      },
      likes: 64,
      shares: 60,
      comments: 41,
      created: '03-16-07-23',
      likedByCurrentUser: false
    }
  ]
})

export const mutations = {
  reaction(state, payload) {
    state.post[payload].likedByCurrentUser = !state.post[payload]
      .likedByCurrentUser
  }
}
