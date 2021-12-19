<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img"/>
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }} </p>
            <button :class="{active:profile.following}" class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow Eric Simons
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link :class="{
                  active: tab==='my_articles'
                }" :to="{
                    name: 'profile',
                     query: {
                      page: 1,
                    },
                    params:{
                      username:user.username
                    }
                  }" class="nav-link" exact>My Articles
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :class="{active: tab==='favorite_articles'}" :to="{
                    name: 'profile',
                    query: {
                      page: 1,
                      tab:'favorite_articles'
                    },
                    params:{
                      username:user.username
                    }
                  }" class="nav-link" exact> Favorite Articles
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div v-for="(article,index) in articles" :key="index" class="article-preview">
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
            <a class="preview-link" href="">
              <h1>How to build webapps that scale</h1>
              <p>This is the description for the post.</p>
              <span>Read more...</span>
            </a>
          </div>

        </div>
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
                    name: 'profile',
                    query: {
                      page: item,
                      tab:tab
                    },
                    params:{
                      username:user.username
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
  </div>
</template>

<script>
import {getOwnProfiles} from '@/api/profile'
import {addFavorite, deleteFavorite, getArticles} from "@/api/article";
import {mapState} from 'vuex'

export default {
  name: "profileIndex",
  middleware: 'authenticated',
  async asyncData({params, query}) {
    const page = Number.parseInt(query.page || 1)
    const limit = 3
    const tab = query.tab || 'my_articles'
    const author = params.username
    let _data = tab === 'my_articles'
        ? {
          page,
          limit,
          author
        }
        : {
          page,
          limit,
          'favorited': author
        }
    const [{data}, articleRes] = await Promise.all([
      getOwnProfiles(params.username),
      getArticles(_data)
    ])
    const {articles, articlesCount} = articleRes.data ? articleRes.data : []
    const totalPage = Math.ceil(articlesCount / limit)
    articles.forEach(article => article.favoriteDisabled = false)
    return {
      profile: data.profile,
      articles,
      articlesCount,
      page,
      tab,
      totalPage
    }
  },
  watchQuery: ['page', 'tab'],
  computed: {
    ...mapState(['user']),

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

<style scoped>

</style>