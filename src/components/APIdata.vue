<template>
  <div>
    <h2 class="text-light bg-danger">Record of Books and Their Authors</h2>
    <!-- <div class="t-body"> -->
    <table class="table table-hover table-striped">
      <tr>
        <th>Id</th>
        <!-- <th>User Id</th> -->
        <th class="">Title</th>
        <th class="">Author</th>
        <th colspan="2">Actions</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td class="">{{ user.title }}</td>
        <td class="">{{ user.author }}</td>
        <td>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary text-dark"
            data-bs-toggle="modal"
            data-bs-target="#edit"
            @click="beforeupdate(user)"
          >
            <!-- @click="beforeupdate(user.id)" -->
            Edit
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="edit"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Update Data
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="input-align">
                    <div>
                      <label class="mx-2" for="">Title: </label>
                      <input
                        class="rounded my-2 px-2"
                        type="text"
                        v-model="update.title"
                      />
                    </div>
                    <div>
                      <label class="mx-2" for="">Author: </label>
                      <input
                        class="rounded my-2 px-2"
                        type="text"
                        v-model="update.author"
                      />
                    </div>
                  </div>
                  <div>
                    <!-- <p>{{ update.title }}</p>
                      <p>{{ update.author }}</p> -->
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    @click="updated(update.id)"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <button class="btn btn-danger text-dark" @click="deleteItem(user.id)">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
  <!-- </div> -->
</template>
<script>
import axios from "axios";
// import $ from "jquery";

export default {
  name: "APIdata",
  data() {
    return {
      users: [],
      update: {
        id: "",
        title: "",
        author: "",
      },
    };
  },
  methods: {
    beforeupdate(user) {
      // this.update.title = user.title;
      // this.update.author = user.author;
      // this.update.id = user.id;
      this.update = user;
    },
    // async beforeupdate(id) {
    //   let result = await axios.get("http://localhost:3000/posts/" + id);
    //   console.log(result.data);
    //   this.update = result.data;
    // console.log(this.$route.params.id);
    // },
    async updated(id) {
      let result = await axios.put("http://localhost:3000/posts/" + id, {
        title: this.update.title,
        author: this.update.author,
      });
      // let modal = document.getElementById("edit");
      if (result.status == 200) {
        this.getData();
        // $("#edit").modal("hide");

        // modal.style.display = "none";
        alert("Data Have Been Successfully updated");
        // else {
        //   alert("Error");
        // }
      }
    },
    async deleteItem(id) {
      console.log(id);
      let rlt = await axios.delete("http://localhost:3000/posts/" + id);
      // console.log(rlt);
      if (rlt.status == 200) {
        this.getData();
      }
    },
    async getData() {
      let result = await axios.get("http://localhost:3000/posts");
      console.log(result.data);
      this.users = result.data;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
h2 {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.t-body {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  outline: none;
  border: 1px solid black;
  height: 40px;
}
/* th,
td {
  padding: 10px 15px;
} */

.router {
  background-color: aquamarine;
  margin-top: 50px;
}
.title {
  width: 450px;
}
.author {
  width: 200px;
}
.link {
  text-decoration: none;
  color: white;
}
tr {
  border-bottom: 1px solid rgb(129, 129, 129);
}
</style>
