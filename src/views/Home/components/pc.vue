<template>
  <div class="home">
    <ul>
      <li>123</li>
    </ul>
  </div>
</template>

<script>
import {
  companyList
} from "@/api/banner";
import { mapMutations } from "vuex";

var that = null;
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  created() {
    this.getData()
  },
  mounted() {},
  computed: {},
  methods: {
    async getData() {
      let data = await companyList();
      console.log('list:', data);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
  ul {
    li {
      background: red;
    }
  }
}
</style>
