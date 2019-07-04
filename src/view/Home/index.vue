<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="职位" prop="department">
        <el-input v-model="ruleForm.department"></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
// import { standardEmail3 } from '@/utils/standardValidators'

export default {
  data () {
    return {
      ruleForm: {
        name: '',
        department: '',
        email: ''
      },
      rules: {
        name: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
        department: [{ required: false, max: 20, message: '职位长度为：0-20', trigger: 'blur' }],
        // email: [{ required: false, max: 50, message: '邮箱最大长度是50', trigger: 'blur' }, { validator: standardEmail(), trigger: 'blur' }]
        email: [{ required: false, max: 50, message: '邮箱最大长度是50', trigger: 'blur' }]
      }
    }
  },
  methods: {

  }

}
</script>

<style>
.el-form-item {
  width: 600px;
}
</style>
