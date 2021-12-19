<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea v-model="comment.body" class="form-control" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img :src="$store.state.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click="addNewComment">
        Post Comment
        </button>
      </div>
    </form>

    <div
      class="card"
      v-for="comment in comments"
      :key="comment.id"
    >
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link class="comment-author" :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link class="comment-author" :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments,addComments } from '@/api/article'

export default {
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      comments: [], // 文章列表
      comment:{
        body:''
      }
    }
  },
  async mounted () {
    const { data } = await getComments(this.article.slug)
    this.comments = data.comments
  },
  methods:{
  async addNewComment(){
    const _data={
      comment:this.comment
    }
    await addComments(this.article.slug,_data).then(()=>{
      this.$router.push({
        name: 'article',
        params: {
          slug: this.article.slug
        }
      })
    })
  }
  }
}
</script>

<style>

</style>
