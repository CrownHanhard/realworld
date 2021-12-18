<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">自动化部署v1.0</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user" class="nav-item">
                <nuxt-link
                    :class="{
                    active: tab === 'your_feed'
                  }"
                    :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed'
                    }
                  }"
                    class="nav-link"
                    exact
                >Your Feed
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                    :class="{
                    active: tab === 'global_feed'
                  }"
                    :to="{
                    name: 'home'
                  }"
                    class="nav-link"
                    exact
                >Global Feed
                </nuxt-link>
              </li>
              <li v-if="tag" class="nav-item">
                <nuxt-link
                    :class="{
                    active: tab === 'tag'
                  }"
                    :to="{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      tag: tag
                    }
                  }"
                    class="nav-link"
                    exact
                ># {{ tag }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div
              v-for="article in articles"
              :key="article.slug"
              class="article-preview"
          >
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                <img :src="article.author.image"/>
              </nuxt-link>
              <div class="info">
                <nuxt-link :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }" class="author">
                  {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{ article.createdAt | date('MM DD, YYYY') }}</span>
              </div>
              <button
                  :class="{
                  active: article.favorited
                }"
                  :disabled="article.favoriteDisabled"
                  class="btn btn-outline-primary btn-sm pull-xs-right"
                  @click="onFavorite(article)"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
                :to="{
                name: 'article',
                params: {
                  slug: article.slug
                }
              }"
                class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- 分页列表 -->
          <nav>
            <ul class="pagination">
              <li
                  v-for="item in totalPage"
                  :key="item"
                  :class="{
                  active: item === page
                }"
                  class="page-item"
              >
                <nuxt-link
                    :to="{
                    name: 'home',
                    query: {
                      page: item,
                      tag: $route.query.tag,
                      tab: tab
                    }
                  }"
                    class="page-link"
                >{{ item }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <!-- /分页列表 -->

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                  v-for="item in tags"
                  :key="item"
                  :to="{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: item
                  }
                }"
                  class="tag-pill tag-default"
              >{{ item }}
              </nuxt-link>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {addFavorite, deleteFavorite, getArticles, getYourFeedArticles} from '@/api/article'
import {getTags} from '@/api/tag'
import {mapState} from 'vuex'

export default {
  name: 'HomeIndex',
  async asyncData({query}) {
    const page = Number.parseInt(query.page || 1)
    const limit = 3
    const tab = query.tab || 'global_feed'
    const tag = query.tag

    const loadArticles = tab === 'global_feed'
        ? getArticles
        : getYourFeedArticles
    const [articleRes, tagRes] = await Promise.all([
      loadArticles({
        limit,
        offset: (page - 1) * limit,
        tag
      }),
      getTags()
    ])

    const {articles, articlesCount} = articleRes.data ? articleRes.data : []
    const {tags} = tagRes.data

    articles.forEach(article => article.favoriteDisabled = false)

    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tab,
      tag
    }
  },
  watchQuery: ['page', 'tag', 'tab'],
  computed: {
    ...mapState(['user']),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },

  methods: {
    async onFavorite(article) {
      // 防止多次点击
      article.favoriteDisabled = true
      if (article.favorited) {
        // 取消
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount -= 1
      } else {
        // 添加点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style>

</style>
