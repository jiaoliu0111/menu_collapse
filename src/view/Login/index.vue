<template>
    <el-row class='login' type='flex' justify="center" align='middle'>
      <el-col :xs="14" :sm="12" :md="10" :lg="8" >
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class='loginForm'>
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="loginForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn" @click="handleLogin">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{ required: true, message: '请填写用户名', trigger: blur }],
        password: [{ required: true, message: '请填写密码', trigger: blur }]
      }
    }
  },
  methods: {
    handleLogin () {
      if (this.loginForm.userName === 'liujiao' && this.loginForm.password === '333') {
        this.$router.push('/home')
        this.$message({message: '登录成功', type: 'success'})
      } else {
        this.$message.error('登录失败')
      }
    }
  }

}
</script>
<style scoped>
  .loginForm {
    background-color: #fff;
    padding: 50px 20px;
    border-radius: 10px;
  }
  .login {
    height: 100%;
    background-color: #2D434C;
  }
  .btn {
    margin: 0 auto;
  }
</style>
