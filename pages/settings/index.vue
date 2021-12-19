<template>

  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input v-model="user.image" class="form-control" placeholder="URL of profile picture" type="text">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.username" class="form-control form-control-lg" placeholder="Your Name" type="text">
              </fieldset>
              <fieldset class="form-group">
                            <textarea v-model="user.bio" class="form-control form-control-lg" placeholder="Short bio about you"
                                      rows="8"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.email" class="form-control form-control-lg" placeholder="Email" type="text">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.password" class="form-control form-control-lg" placeholder="Password"
                       type="password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {updateUser} from "@/api/user"

const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: "settingsIndex",
  middleware: 'authenticated',
  data() {
    return {
      user: {
        username: '',
        email: '',
        bio: '',
        image: '',
        password: ''
      }
    }
  },
  mounted() {
    this.user.username = this.$store.state.user.username
    this.user.email = this.$store.state.user.email
  },
  methods: {
    async onSubmit() {
      const _data = {
        user: this.user
      }
      const {data} = await updateUser(_data)
      this.$store.commit('setUser', data.user)
      Cookie.remove('user')
      Cookie.set('user', JSON.stringify(data.user))
      this.$router.push('/')
    },
  }

}
</script>

<style scoped>

</style>