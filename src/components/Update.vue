<template>
    <div>
        <h3>这是更新页面</h3>
        <h3>{{$route.query.a}}</h3>
        <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input type="text" v-model="ruleForm.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="生日" prop="date">
                <el-input type="date" v-model="ruleForm.date"></el-input>
            </el-form-item>

            <el-form-item label="工资" prop="salary">
                <el-input type="text" v-model="ruleForm.salary"></el-input>
            </el-form-item>
            <el-form-item label="公司" prop="company">
                <el-input type="text" v-model="ruleForm.company"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Update",
    data() {
        return {
            ruleForm: {
                date: this.$route.query.c,
                name: this.$route.query.a,
                age: this.$route.query.b,
                company:this.$route.query.e,
                salary:this.$route.query.d,
                id:this.$route.query.id
            },
        };
    },
    methods: {
        submitForm() {
            console.log(this.id);
            this.$axios({
                url: "http://127.0.0.1:8000/stu/update_stu/",
                method: 'get',
                params: {
                    age:this.ruleForm.age,
                    name:this.ruleForm.name,
                    date:this.ruleForm.date,
                    salary:this.ruleForm.salary,
                    company:this.ruleForm.company,
                    id:this.ruleForm.id

                }
            }).then(res => {
                console.log(res.data);
            }).catch(error => {
                console.log(error);
            });
            this.$router.push('/first')
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();

        }
    }
}
</script>

<style scoped>

</style>
