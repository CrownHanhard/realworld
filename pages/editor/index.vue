<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input v-model="article.title" class="form-control form-control-lg" placeholder="Article Title"
                       type="text">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="article.description" class="form-control" placeholder="What's this article about?"
                       type="text">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="article.body" class="form-control" placeholder="Write your article (in markdown)"
                          rows="8"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="article.tagList" class="form-control" placeholder="Enter tags separated by ,"
                       type="text">
                <div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="onSubmit">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {createArticles, getArticle, UpdateArticle} from '@/api/article'

export default {
  middleware: 'authenticated',
  name: "editorIndex",
  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: ''
      }
    }
  },
  async asyncData({query}) {
    const slug = query.slug || ''
    if (slug) {
      const {data} = await getArticle(slug)
      const {article} = data
      article.tagList = article.tagList.join(",")
      return {
        article: {
          ...article
        },
        slug
      }
    } else {
      return {
        article: {
          title: '',
          description: '',
          body: '',
          tagList: ''
        },
        slug
      }
    }

  },
  methods: {
    async onSubmit() {
      const status = this.isEmpty(this.article)
      if (!status) {
        alert("请核实内容后再去提交")
        return false;
      }

      const _data = {
        article: {
          ...this.article,
          tagList: this.article.tagList.split(",")
        }
      }
      if (!this.slug) {
        await createArticles(_data).then(() => {
          this.$router.push('/')
        })
      } else {
        await UpdateArticle(this.slug, _data).then(() => {
          this.$router.push('/')
        })
      }

    },
    isEmpty(obj) {
      let res = 1
      Array.from(Object.entries(obj)).forEach((val) => {
        res &= !!val[1]
      })
      return !!res
    }
  }
}
</script>

<style scoped>

</style>