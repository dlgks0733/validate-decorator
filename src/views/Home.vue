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
    <p>
      숫자만: <input type="text" v-model="num" /> <br />
      <span v-show="validators.get('num').valid === false">{{validators.get("num").errMsg}}</span>
    </p>
    <button @click="test"
     :disabled="!validators.get('phone').valid || !validators.get('email').valid || 
     !validators.get('name').valid || !validators.get('num').valid">테스트</button>
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

  @RegExps(/^[0-9]+$/, "숫자만 입력 가능")
  num = ""

  @Watch("name")
  @Watch("email")
  @Watch("phone")
  @Watch("num")
  @Validate()
  validate() { return null; }

  test() {
    console.log(this);
  }
}
</script>
