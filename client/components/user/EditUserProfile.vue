<template>
    <div class="page profile">
        <div class="section section--profile profile__content">
            <div class="section__heading mt-10">
                <span class="section__title">Update Account</span>
            </div>
            <div class="section__content">
                <form @submit.prevent="handleSubmit" class="form">
                    <p class="lead">Edit Profile Details</p>
                    <div class="profile__item" v-if="user.id === null">
                        <img :src="user.image" alt class="profile__image" />
                        <v-spacer />
                        <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                    accept="image/*" class="input-file">      
                    <p v-if="isInitial">
                Drag your file(s) here to begin<br> or click to browse
                    </p>
                    <p v-if="isSaving">
                Uploading {{ fileCount }} files...
                    </p>

                    </div>
                    <div class="profile__item" v-else>
                        <img :src="user.image" alt class="profile__image" />
                       
                    </div>
                    <br />
                    <div class="form__input-group">
                        <ion-icon name="pricetags" class="form__icon"></ion-icon>
                        <input
                            type="text"
                            name="handle"
                            class="form__control"
                            placeholder="Enter New Handle"
                            v-model.trim="handle"
                        />
                        <label for="username" class="form__label">Display Handle</label>
                    </div>
                    <div class="form__input-group" v-if="this.getUserData.social.id === null">
                        <ion-icon name="person" class="form__icon"></ion-icon>
                        <input
                            type="email"
                            name="email"
                            class="form__control"
                            placeholder="Enter New Email"
                            v-model.trim="email"
                        />
                        <label for="email" class="form__label">Email</label>
                    </div>
                    <div class="form__input-group">
                        <ion-icon name="map" class="form__icon"></ion-icon>
                        <input
                            type="location"
                            name="location"
                            class="form__control"
                            placeholder="Enter New Location"
                            v-model.trim="location"
                        />
                        <label for="location" class="form__label">Location</label>
                    </div>
                    <Error :errors="errors" />
                    <div class="form__actions mt-3">
                        <a @click="handleBackBtn" class="btn btn--clear btn--info white--text">Back</a>
                        <button type="submit" class="btn btn--clear btn--danger">Update Account</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { upload } from '@/services/file-upload.service.js';
 const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import _ from 'lodash';
import slugify from 'slugify';
import Error from '../error/Error.vue';

export default {
    name: 'EditUserProfile',
    components: {
        Error
    },
    data: function() {
        return {
            user: {},
            email: '',
            handle: '',
            location: '',
            errors: [],
            uploadedFiles: [],
            uploadError: null,
            currentStatus: null,
            uploadFieldName: 'photos'
        };
    },
    computed: {
        ...mapGetters(['getUserData', 'isAuthorized']),

        isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
     }
    },
    methods: {
        ...mapActions(['saveUserData']),

        handleBackBtn() {
            this.$router.go(-1);
        },
        checkFields() {
            if (this.handle === this.getUserData.handle) {
                return true;
            }
        },
        handleSubmit() {
            const updatedUserDetails = {
                handle:
                    this.handle === this.getUserData.handle
                        ? null
                        : slugify(this.handle.toLowerCase()),
                email: this.email === this.getUserData.email ? null : this.email,
                location: this.location === this.getUserData.location ? null : this.location
            };

            if (localStorage.getItem('authToken')) {
                axios
                    .put(`/api/user/current`, updatedUserDetails)
                    .then(async res => {
                        if (res.data.errors) {
                            for (const error of res.data.errors) {
                                const [key] = Object.keys(error);
                                const [value] = Object.values(error);
                                this.errors.push({
                                    key,
                                    value
                                });
                            }
                        } else {
                            await this.$store.dispatch('saveUserData', res.data.user);
                            this.user = res.data.user;
                            this.$router.push({
                                name: 'UserProfile',
                                params: {
                                    handle:
                                        updatedUserDetails.handle === null
                                            ? this.getUserData.handle
                                            : updatedUserDetails.handle
                                }
                            });
                        }
                    })
                    .catch(err => console.log(err));

                setTimeout(() => {
                    this.errors = [];
                }, 1500);
            }
        },
         reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;

        upload(formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });
      },
      filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });

        // save it
        this.save(formData);
      }
    },
    created() {
        if (localStorage.getItem('authToken') && _.isEmpty(this.getUserData)) {
            axios
                .get(`/api/user/current`)
                .then(res => {
                    this.$store.dispatch('saveUserData', res.data);
                    this.$store.dispatch('toggleAuthState', true);
                    this.user = res.data;
                })
                .catch(err => err);
        } else {
            this.user = this.getUserData;
        }
        /** Assign model values */
        for (let key of Object.keys(this.$data)) {
            if (this.getUserData[key]) {
                this.$data[key] = this.getUserData[key];
            }
        }
    },
    mounted() {
        this.reset();
    }
};
</script>


<style lang="scss">
@import '@/assets/scss/views/profile.scss';
@import '@/assets/scss/components/form.scss';
</style>
