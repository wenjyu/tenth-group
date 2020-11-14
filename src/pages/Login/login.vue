<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'username',
          {
            rules: [{ required: true, message: '请输入用户名!' }],
          },
        ]"
        placeholder="用户名"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [{ required: true, message: '请输入密码!' }],
          },
        ]"
        type="password"
        placeholder="密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
      <a class="login-form-forgot" href=""> Forgot password </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      Or
      <a href=""> register now! </a>
    </a-form-item>
  </a-form>
</template>
<script>
export default {
  name: "",
};
</script>
<style lang="less" rel="${stylesheet/less}" scoped>
.login-form {
  max-width: 300px;
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
}
</style>
