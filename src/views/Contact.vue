<template>
  <div class="home">
    <h1>Test3</h1>
    <p> 
      이름: <input type="text" v-model="username" /> <br />
      <span v-show="validators.get('username').valid === false">{{validators.get("username").errMsg}}</span>
    </p>
    <p>
      이메일: <input type="text" v-model="useremail" /> <br />
      <span v-show="validators.get('useremail').valid === false">{{validators.get("useremail").errMsg}}</span>
    </p>
    <p>
      전화번호: <input type="text" v-model="userphone" /> <br />
      <span v-show="validators.get('userphone').valid === false">{{validators.get("userphone").errMsg}}</span>
    </p>
    <button @click="test">테스트</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { RegExps, Validate } from "@/decorators/validation";
@Component
export default class Contact extends Vue {
  @RegExps("NAME")
  username = "";

  @RegExps("EMAIL")
  useremail = "";

  @RegExps("PHONE")
  userphone = "";

  @Watch("username")
  @Watch("useremail")
  @Watch("userphone")
  @Validate()
  validate() { return null; }

  test() {
    console.log(this);
  }
}
</script>
