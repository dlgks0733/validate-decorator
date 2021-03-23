<template>
  <div class="home">
    <h1>Test1</h1>
    <p> 
      이름: <input type="text" v-model="name" /> <br />
      <span v-show="validators.get('name').valid === false">{{validators.get("name").errMsg}}</span>
    </p>
    <p>
      이메일: <input type="text" v-model="email" /> <br />
      <span v-show="validators.get('email').valid === false">{{validators.get("email").errMsg}}</span>
    </p>
    <p>
      전화번호: <input type="text" v-model="phone" /> <br />
      <span v-show="validators.get('phone').valid === false">{{validators.get("phone").errMsg}}</span>
    </p>
    <button @click="test">테스트</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { RegExps, Validate } from "@/decorators/validation";
@Component
export default class Home extends Vue {
  @RegExps("NAME")
  name = "";

  @RegExps("EMAIL")
  email = "";

  @RegExps("PHONE")
  phone = "";

  @Watch("name")
  @Watch("email")
  @Watch("phone")
  @Validate()
  validate() { return null; }

  test() {
    console.log(this);
  }
}
</script>
