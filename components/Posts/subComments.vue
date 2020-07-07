<template>
  <div>
    <div
      v-for="(reply, i) in newReplies"
      :key="i"
      class="d-flex flex-column bd-highlight mb-3"
    >
      <div v-for="(views, b) in reply" :key="b" class="p-2 bd-highlight">
        <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <img
              :src="`/img/${views.newImage}`"
              class="rounded-circle __profile"
              alt=""
            />
          </div>
          <div class="p-2 bd-highlight __view mt-4 mr-3">
            <div class="d-flex flex-column bd-highlight ">
              <div class="p-2 bd-highlight">
                <div
                  class="d-flex flex-row bd-highlight justify-content-between"
                >
                  <div class="bd-highlight">
                    <div class="d-flex flex-row bd-highlight ">
                      <div class=" bd-highlight">
                        <h6 class="mb-0 __commenter">
                          {{ views.newName }}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class=" bd-highlight">
                    <p class="mb-0 __timer">{{ views.newTime }}</p>
                  </div>
                </div>
              </div>
              <div class="p-2 bd-highlight">
                <p class="mb-0 __comment">
                  {{ views.newReply }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newReplies: {
        newComments: [
          {
            newImage: 'profile-small-9.jpg',
            newName: 'Alexandra Dandrio',
            newTime: 1 + ' month ago',
            newReply:
              'Yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)'
          },
          {
            newImage: 'profile-small-15.jpg',
            newName: 'Olivia',
            newTime: 16 + ' days ago',
            newReply:
              'I like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus'
          }
        ]
      }
    }
  }
}
</script>
<style></style>
