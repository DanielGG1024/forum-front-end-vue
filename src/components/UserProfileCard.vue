<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img
        :src="profile.image"
        width="300px"
        height="300px"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{profile.name}}</h5>
        <p class="card-text">{{profile.email}}</p>
        <ul class="list-unstyled list-inline">
          <li><strong>{{profile.Comments.length}}</strong> 已評論餐廳</li>
          <li><strong>{{profile.FavoritedRestaurants.length}}</strong> 收藏的餐廳</li>
          <li><strong>{{profile.Followings.length}}</strong> followings (追蹤者)</li>
          <li><strong>{{profile.Followers.length}}</strong> followers (追隨者)</li>
        </ul>
        <p>
          <template v-if="currentUser.id === profile.id">
            <router-link
            :to="{name:'user-edit',params:{id:profile.id}}"
            >
            <button type="submit" class="btn btn-primary">edit</button>
            </router-link> 
          </template>
          <template v-else>
              <button 
              class="btn btn-danger"
              v-if="isFollowed"
              @click.stop.prevent="deleteFollowing()">
              Delete</button>
              <button 
              v-else
              @click.stop.prevent="addFollowing()"
              class="btn btn-primary"
              >
              Add
              </button>
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        profile:{
            type:Object,
            required:true
        },
        currentUser:{
            type:Object,
            required:true
        },
        initialIsFollowed:{
            type:Boolean,
            requried:true
        }
    },
    data () {
    return {
        isFollowed: this.initialIsFollowed
    }
    },
    methods: {
    addFollowing () {      
      this.isFollowed = true
    },
    deleteFollowing () {     
      this.isFollowed = false
    }
  }
}
</script>