<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" placeholder="Article Title" type="text">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control" placeholder="What's this article about?" type="text">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control" placeholder="Write your article (in markdown)" rows="8"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control" placeholder="Enter tags" type="text">
                <div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button">
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
export default {
  middleware:'authenticated',
  name: "editorIndex"
}
</script>

<style scoped>

</style>