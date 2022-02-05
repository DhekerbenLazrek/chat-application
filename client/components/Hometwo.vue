<template>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="(image, i) in images"
      :key="image"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data: () => ({
      model: 0,
      images: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }),
  }
</script>

<v-container class="mt-5 mb-4 text-center text-md-left">
      <v-row class="mt-3">
        <v-col md="3" lg="4" xl="3" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Company name</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.</p>
        </v-col>
        <v-col md="2" lg="2" xl="2" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Products</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><a href="#!">MDBootstrap</a></p>
          <p><a href="#!">MDWordPress</a></p>
          <p><a href="#!">BrandFlow</a></p>
          <p><a href="#!">Bootstrap Angular</a></p>
        </v-col>
        <v-col md="3" lg="2" xl="2" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><a href="#!">Your Account</a></p>
          <p><a href="#!">Become an Affiliate</a></p>
          <p><a href="#!">Shipping Rates</a></p>
          <p><a href="#!">Help</a></p>
        </v-col>
        <v-col md="4" lg="3" xl="3" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
        </v-col>
      </v-row>
    </v-container>
    <ul class="snav__nav">
                <li @click="this.closeSideNav" class="snav__item">
                    <router-link to="/login" class="nav__link nav__link--rounded"
                        >Login</router-link
                    >
                </li>
            </ul>
                <li @click="this.closeSideNav" class="snav__item">
                    <router-link to="/register" class="nav__link nav__link--rounded"
                        >Register</router-link
                    >
                </li>