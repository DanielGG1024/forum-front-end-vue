<template>
  <div class="container py-5">
    <AdminRestaurantForm 
    @after-submit="handleAfterSubmit" 
    :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'
const dummyData = {
  restaurant: {
    id: 4,
    name: "Mckayla Hintz",
    tel: "1-240-532-2429",
    address: "167 Rogahn Mission",
    opening_hours: "08:00",
    description: "Impedit nesciunt ad id delectus magnam aspernatur fugit.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014",
    viewCounts: 36,
    createdAt: "2021-07-05T09:58:39.000Z",
    updatedAt: "2021-08-27T07:25:51.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
    },
  },
};
export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
    };
  },
  created(){
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    handleAfterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id:", restaurantId);
      const { restaurant } = dummyData
      this.restaurant = {
        ...this.restaurant,
        id: restaurant.id,
        name: restaurant.name,
        categoryId: restaurant.CategoryId,
        tel: restaurant.tel,
        address: restaurant.address,
        description: restaurant.description,
        image: restaurant.image,
        openingHours: restaurant.opening_hours,
      };
    },
  },
};
</script>