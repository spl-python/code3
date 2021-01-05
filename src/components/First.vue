<template>


    <el-row :gutter="20">
        <el-col :span="7">
            <div class="grid-content bg-purple">&nbsp;</div>
        </el-col>
        <el-col :span="9.5">
            <div class="grid-content bg-purple">
                <el-table :data="stu" border style="width: 100%">
                    <el-table-column prop="id" label="id" width="80"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="100"></el-table-column>
                    <el-table-column prop="age" label="年龄" width="100"></el-table-column>
                    <el-table-column prop="data" label="日期" width="100"></el-table-column>
                    <el-table-column prop="salary" label="工资" width="100"></el-table-column>
                    <el-table-column prop="company" label="公司" width="100"></el-table-column>
                    <el-table-column width="100" label="操作">
                        <template slot-scope="scope">
                            <el-button @click="editor(scope.row.id,scope.row.name,scope.row.age,scope.row.data,scope.row.salary,scope.row.company,)" type="text" size="small" icon="el-icon-edit">编辑
                            </el-button>
                            <el-button type="text" size="small" icon="el-icon-delete-solid" @click="del(scope.row.id)">
                                删除
                            </el-button>
                            <el-button type="text" size="small" icon="el-icon-plus" @click="add_stu(scope.row.id)">添加
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">&nbsp;</div>
        </el-col>
    </el-row>

</template>

<script>
export default {
    name: "First",
    methods: {
        editor(id,a,b,c,d,e) {
            this.$router.push('/update?a='+a+'&b='+b+'&c='+c+'&d='+d+'&e='+e+'&id='+id)
        }
        ,
        del(id) {
            console.log(id);
            this.$axios({
                url: 'http://127.0.0.1:8000/stu/delstu/',
                method: 'get',
                params: {
                    stu_id: id,
                }
            }).then(res => {
                console.log(res.data);
            }).catch(error => {
                console.log(error);
            })
        },
        add_stu(id) {
            console.log('add_stu=', id);
            this.$router.push('/add')
        },
    },

    data() {
        return {
            stu: [],
        }
    },
    created() {
        this.$axios({
            url: 'http://127.0.0.1:8000/stu/student/',
            method: 'get'
        }).then(response => {
            console.log('data=', response.data);
            this.stu = response.data
        }).catch(error => {
            console.log(error, '123')
        })
    }
}
</script>
.el-row {
margin-bottom: 20px;
&:last-child {
margin-bottom: 0;
}
}
.el-col {
border-radius: 4px;
}
.bg-purple-dark {
background: #99a9bf;
}
.bg-purple {
background: #d3dce6;
}
.bg-purple-light {
background: #e5e9f2;
}
.grid-content {
border-radius: 4px;
min-height: 36px;
}
.row-bg {
padding: 10px 0;
background-color: #f9fafc;
}
<style scoped>

</style>
