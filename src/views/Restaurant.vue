<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
      :initialRestaurant="restaurant"
    />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments 
    :restaurant-comments="restaurantComments"
    @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
    :restaurant-id="restaurant.id" 
    @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>


import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from './../components/RestaurantComments'
import CreateComment from './../components/CreateComment'

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

const dummyData = {
  restaurant: {
    id: 5,
    name: "Salma Johnson",
    tel: "866.855.4905",
    address: "4722 Lionel Trafficway",
    opening_hours: "08:00",
    description:
      "Mollitia sit recusandae reiciendis voluptatibus commodi voluptas et. Culpa dolor qui quo esse saepe. Tempore et dolores sit voluptatem harum autem consequatur unde.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=76.09006422711376",
    viewCounts: 18,
    createdAt: "2021-07-05T09:58:39.000Z",
    updatedAt: "2021-08-25T12:59:22.657Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-08-09T07:00:13.000Z",
    },
    FavoritedUsers: [
      {
        id: 1,
        name: "root123",
        email: "root@example.com",
        password:
          "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
        isAdmin: true,
        image: "https://i.imgur.com/KVFFj35.jpeg",
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-08-08T16:49:05.000Z",
        Favorite: {
          UserId: 1,
          RestaurantId: 5,
          createdAt: "2021-08-22T02:31:40.000Z",
          updatedAt: "2021-08-22T02:31:40.000Z",
        },
      },
      {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
        isAdmin: false,
        image: null,
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-08-21T14:30:09.000Z",
        Favorite: {
          UserId: 2,
          RestaurantId: 5,
          createdAt: "2021-08-03T16:13:14.000Z",
          updatedAt: "2021-08-03T16:13:14.000Z",
        },
      },
      {
        id: 81,
        name: "test",
        email: "test@example.com",
        password:
          "$2a$10$w5bcczmxLzWr/lE9a6fgz.toso5IO1oetOBMHZJK/fM3mGAEtsrAK",
        isAdmin: false,
        image: null,
        createdAt: "2021-08-25T11:13:24.000Z",
        updatedAt: "2021-08-25T11:13:24.000Z",
        Favorite: {
          UserId: 81,
          RestaurantId: 5,
          createdAt: "2021-08-25T11:20:15.000Z",
          updatedAt: "2021-08-25T11:20:15.000Z",
        },
      },
    ],
    LikedUsers: [
      {
        id: 81,
        name: "test",
        email: "test@example.com",
        password:
          "$2a$10$w5bcczmxLzWr/lE9a6fgz.toso5IO1oetOBMHZJK/fM3mGAEtsrAK",
        isAdmin: false,
        image: null,
        createdAt: "2021-08-25T11:13:24.000Z",
        updatedAt: "2021-08-25T11:13:24.000Z",
        Like: {
          UserId: 81,
          RestaurantId: 5,
          createdAt: "2021-08-25T11:22:46.000Z",
          updatedAt: "2021-08-25T11:22:46.000Z",
        },
      },
    ],
    Comments: [
      {
        id: 5,
        text: "Voluptatem ad ut a exercitationem aut nemo.",
        UserId: 2,
        RestaurantId: 5,
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-07-05T09:58:39.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
          isAdmin: false,
          image: null,
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-08-21T14:30:09.000Z",
        },
      },
      {
        id: 55,
        text: "Tempore labore possimus reprehenderit qui provident est.",
        UserId: 2,
        RestaurantId: 5,
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-07-05T09:58:39.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
          isAdmin: false,
          image: null,
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-08-21T14:30:09.000Z",
        },
      },
      {
        id: 105,
        text: "Pariatur et natus culpa atque.",
        UserId: 2,
        RestaurantId: 5,
        createdAt: "2021-07-05T09:58:39.000Z",
        updatedAt: "2021-07-05T09:58:39.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
          isAdmin: false,
          image: null,
          createdAt: "2021-07-05T09:58:39.000Z",
          updatedAt: "2021-08-21T14:30:09.000Z",
        },
      },
    ],
  },
  isFavorited: true,
  isLiked: false,
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      currentUser:dummyUser.currentUser,
      restaurantComments: []
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("restaurantID", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId){
        console.log('Restaurant page id =',commentId)
        this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment(payload){
       const {commentId, restaurantId, text} = payload
       this.restaurantComments.push({
           id:commentId,
           RestaurantId:restaurantId,
           User:{
               id: this.currentUser.id,
               name: this.currentUser.name
           },
           text,
           createdAt: new Date()
       })
    } 
  },
};
</script>