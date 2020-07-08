<template>
  <div>
    <br />
    <br />
    <div class="d-flex flex-row bd-highlight justify-content-center">
      <div class="fileUpload blue-btn btn width100 __imgUpload bd-highlight">
        <span class="__imgLink">Add Images</span>
        <input
          type="file"
          class="uploadlogo"
          accept="image/*"
          multiple
          @change="change"
        />
      </div>
      <div
        class="fileUpload blue-btn btn width100 __imgUpload bd-highlight ml-3"
      >
        <span class="__imgLink">Add Videos</span>
        <input
          type="file"
          class="uploadlogo"
          accept="video/*"
          multiple
          @change="changeVideo"
        />
      </div>
    </div>
    <div>
      <div class="postion-relative __widget">
        <div
          v-for="(vid, i) in namesOfVideos"
          :key="i"
          class="ml-3 __playBack"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <div>
            <img src="img/unnamed.png" class="w-100 p-3" />
            <p class="text-center">{{ vid }}</p>
          </div>
          <i
            class="fas fa-trash position-absolute __trashed pt-2"
            @click="removeImage(i)"
          ></i>
        </div>
      </div>
      <div class="postion-relative __widgets mt-5">
        <div
          v-for="(img, i) in imageLink"
          :key="i"
          class="ml-3 __shown"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <img :src="img" class="p-3 __loat" />
          <i
            class="fas fa-trash position-absolute __trash pt-2"
            @click="removeImage(i)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageLink: [],
      hover: false,
      namesOfVideos: []
    }
  },
  methods: {
    // bin() {
    //   this.trash = true
    // },
    removeImage(i) {
      // const index = this.imageLink.indexOf(i)
      // if (index > -1) {
      //   this.imageLink.splice(index, 1)
      // }
      this.imageLink.splice(i, 1)
      // console.log('I am clicked')
    },
    changeVideo(e) {
      // console.log(e)
      this.namesOfVideos = []
      if (e.target.files.length > 2) {
        alert('You can only upload a maximum of 2 videos')
      } else {
        const files = Object.values(e.target.files)
        files.forEach((element) => {
          this.namesOfVideos.push(element.name)
        })
      }
    },
    change(e) {
      this.imageLink = []
      // console.log(e)
      const files = Object.values(e.target.files)
      files.forEach((element) => {
        // console.log(element)
        const reader = new FileReader()

        reader.readAsDataURL(element)

        reader.onload = (event) => {
          // called once readAsDataURL is completed
          // console.log(event.target.result)
          this.imageLink.push(event.target.result)
          // console.log(this.imageLink)
        }
      })
    }
  }
}
</script>

<style scoped>
.head {
  font-size: 25px;
  font-weight: 200;
}

.blue-btn:hover,
.blue-btn:active,
.blue-btn:focus,
.blue-btn {
  background: transparent;
  font-size: 16px;
  margin-bottom: 20px;
  outline: none !important;
  padding: 10px 40px;
}

.fileUpload {
  position: relative;
  overflow: hidden;
  height: 43px;
  margin-top: 0;
}

.fileUpload input.uploadlogo {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  width: 100%;
  height: 42px;
}

/*Chrome fix*/
input::-webkit-file-upload-button {
  cursor: pointer !important;
  height: 42px;
  width: 100%;
}
.__widget {
  display: flex;
}
.__widgets {
  display: flex;
  flex-wrap: wrap;
}
.__loat {
  object-fit: cover;
  height: 194px;
}
.__shown {
  /* display: flex; */
  cursor: pointer;
  height: 194px;
}
.__trash {
  left: 40px;
  cursor: pointer;
  /* display: none; */
}
.__shown:hover .__trash {
  cursor: pointer;
}
.__playBack {
  cursor: pointer;
  width: 250px;
  box-shadow: 0px 3px 6px #00000029;
}
.__trashed {
  left: 40px;
  cursor: pointer;
  top: 335px;
}
.__playBack:hover .__trashed {
  cursor: pointer;
}
</style>
