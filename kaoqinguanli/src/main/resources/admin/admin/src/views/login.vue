<template>
    <div>
        <div class="container loginIn" style="backgroundImage: url(/kaoqinguanli/img/back-img-bg.jpg)">

            <div :class="2 == 1 ? 'left' : 2 == 2 ? 'left center' : 'left right'" style="backgroundColor: rgba(237, 237, 237, 0.17)">
                <el-form class="login-form" label-position="left" :label-width="1 == 3 ? '56px' : '0px'">
                    <div class="title-container"><h3 class="title" style="color: var(--publicMainColor)">考勤管理系统</h3></div>
                    <el-form-item :label="1 == 3 ? '用户名' : ''" :class="'style'+1">
                        <span v-if="1 != 3" class="svg-container" style="color:rgba(136, 154, 164, 1);line-height:44px"><svg-icon icon-class="user" /></span>
                        <el-input placeholder="请输入用户名" name="username" type="text" v-model="rulesForm.username" />
                    </el-form-item>
                    <el-form-item :label="1 == 3 ? '密码' : ''" :class="'style'+1">
                        <span v-if="1 != 3" class="svg-container" style="color:rgba(136, 154, 164, 1);line-height:44px"><svg-icon icon-class="password" /></span>
                        <el-input placeholder="请输入密码" name="password" type="password" v-model="rulesForm.password" />
                    </el-form-item>
                    <el-form-item v-if="0 == '1'" class="code" :label="1 == 3 ? '验证码' : ''" :class="'style'+1">
                        <span v-if="1 != 3" class="svg-container" style="color:rgba(136, 154, 164, 1);line-height:44px"><svg-icon icon-class="code" /></span>
                        <el-input placeholder="请输入验证码" name="code" type="text" v-model="rulesForm.code" />
                        <div class="getCodeBt" @click="getRandCode(4)" style="height:44px;line-height:44px">
                            <span v-for="(item, index) in codes" :key="index" :style="{color:item.color,transform:item.rotate,fontSize:item.size}">{{ item.num }}</span>
                        </div>
                    </el-form-item>
                    <el-form-item v-if="roleOptions.length>1" label="角色" prop="loginInRole" class="role" style="display: flex;align-items: center;">
                        <el-radio
                                @change="menuChange"
                                v-for="item in roleOptions"
                                v-bind:key="item.value"
                                v-model="rulesForm.role"
                                :label="item.value"
                        >{{item.key}}</el-radio>
                    </el-form-item>
                    <el-button type="primary" @click="login()" class="loginInBt" style="padding:0;font-size:16px;border-radius:4px;height:44px;line-height:44px;width:100%;backgroundColor:var(--publicMainColor); borderColor:var(--publicMainColor); color:rgba(255, 255, 255, 1)">{{'1' == '1' ? '登录' : 'login'}}</el-button>          <el-form-item class="setting">
<!--            <div class="register" @click="register('yuangong')">员工注册</div>-->
          </el-form-item>
        </el-form>
      </div>
<!--
                    <el-form-item class="code" :label="3 == 3 ? '验证码' : ''" :class="'style'+3">
                        <span class="svg-container" style="color:rgba(136, 154, 164, 1);line-height:46px"><svg-icon icon-class="code" /></span>
                        <el-input placeholder="请输入验证码" name="code" type="text" v-model="rulesForm.code" />
                        <div class="getCodeBt" @click="getRandCode(4)" style="height:46px;line-height:46px">
                            <span v-for="(item, index) in codes" :key="index" :style="{color:item.color,transform:item.rotate,fontSize:item.size}">{{ item.num }}</span>
                        </div>
                    </el-form-item>

-->

    </div>
  </div>
</template>
<script>

    import menu from "@/utils/menu";

    export default {
        data() {1

            return {
                rulesForm: {
                    username: "",
                    password: "",
                    role: "users",
                    code: '',
                },
                roleOptions: [
                    {key:"管理员",value:"users"}
                    ,{key:"员工",value:"yuangong"}
                ],
                erjiMenuOptions: [
                    //{value:"huanyuan" ,label:'数据还原',children:[{value:"查看",label:'查看'}]},
                    //{value:"beifen"   ,label:'数据备份',children:[{value:"查看",label:'查看'}]},
                    {value:"dangan",label:'档案管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"dictionary",label:'字典管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"gonggao",label:'公告管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"menu",label:'菜单管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"qiandao",label:'员工签到管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'},{value:"签到",label:'签到'},{value:"报表",label:'报表'},{value:"导出",label:'导出'}]},
                    {value:"xinzi",label:'薪资管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"yuangong",label:'员工管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"yuangongchuchai",label:'员工出差管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'},{value:"审核",label:'审核'},{value:"报表",label:'报表'},{value:"导出",label:'导出'}]},
                    {value:"yuangongqingjia",label:'员工请假管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'},{value:"审核",label:'审核'},{value:"报表",label:'报表'},{value:"导出",label:'导出'}]},
                    //字典表相关
                    {value:"dictionaryBumen",label:'部门管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"dictionaryGonggao",label:'公告类型管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"dictionaryJinyong",label:'账户状态管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"dictionaryQiandaoShangban",label:'上班签到状态管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"dictionaryQiandaoXiaban",label:'下班签到类型管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"dictionaryYuangongchuchai",label:'出差类型管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"dictionaryYuangongchuchaiJiaotonggongju",label:'交通工具管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"dictionaryYuangongqingjia",label:'请假类型管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                    {value:"dictionaryZhiwei",label:'性别类型管理',children:[{value:"查看",label:'查看'},{value:"新增",label:'新增'},{value:"修改",label:'修改'},{value:"删除",label:'删除'}]},
                ],
                menus: [],
                roles: [],
                tableName: "",
                codes: [{
                    num: 1,
                    color: '#000',
                    rotate: '10deg',
                    size: '16px'
                },{
                    num: 2,
                    color: '#000',
                    rotate: '10deg',
                    size: '16px'
                },{
                    num: 3,
                    color: '#000',
                    rotate: '10deg',
                    size: '16px'
                },{
                    num: 4,
                    color: '#000',
                    rotate: '10deg',
                    size: '16px'
                }],
            };
        },
        mounted() {
            this.menuChange(this.rulesForm.role);
        },
        created() {
            this.getRandCode()

        },
        methods: {
            menuChange(role) {
                let _this = this;
                let menus = [];
                if(role==null){
                    _this.$message({
                        message: "查不到权限信息,请让管理人员核实权限.",
                        type: "error",
                        duration: 1500,
                        onClose: () => {
                            return false;
                        }
                    });
                }
                _this.$http({
                    url: "menu/page",
                    method: "get",
                    params: {
                        roleEnName:role,
                        direction:"back",
                        page:"1",
                        limit:"100",
                    }
                }).then(({data}) => {
                    if(data && data.code === 0){
                        let json={};
                        json["tableName"]=role;
                        this.roleOptions.forEach(function (item,index) {
                            if(item["value"]==role){
                                json["roleName"]=item["key"];
                            }
                        });
                        let backMenu=[];
                        data.data.list.forEach(function (item,index) {
                            let backMenuItem={};
                            backMenuItem["menu"]=item.yijiMenuName;//一级menu汉字
                            backMenuItem["appFrontIcon"]=item.yijiMenuIcon;//一级图标
                            backMenuItem["child"]=[];//二级列表

                            let erjiMenuList = JSON.parse(item.erjiMenu);
                            erjiMenuList.forEach(function (item1,index) {
                                let childList = backMenuItem["child"];//取出二级列表
                                let erjiTtemFlag=false;//二级菜单中是否存在当前,默认不存在
                                childList.forEach(function (item2,index) {
                                    if(item2["tableName"]==item1[0]){
                                        let buttons = item2["buttons"];
                                        buttons.push(item1[1]);//添加权限


                                        erjiTtemFlag = true;
                                    }
                                })
                                if(!erjiTtemFlag){//不存在
                                    let quanxianJson = {};
                                    quanxianJson["tableName"] = item1[0];
                                    quanxianJson["buttons"]=[];quanxianJson["buttons"].push(item1[1]);//添加第一个权限
                                    quanxianJson["menu"] = "未知管理";
                                    _this.erjiMenuOptions.forEach(function (item3,index) {
                                        if(item3.value==item1[0]){
                                            quanxianJson["menu"]=item3["label"];
                                        }
                                    })
                                    childList.push(quanxianJson);
                                }
                            });
                            backMenu.push(backMenuItem);
                        });
                        json["backMenu"]=backMenu;
                        menus.push(json);
                        _this.$storage.set("menus", menus);
                        _this.$storage.set("roleOptions",_this.roleOptions);
                        _this.$storage.set("erjiMenuOptions",_this.erjiMenuOptions);
                    }else{
                        _this.$message({
                            message: "查不到权限信息,请让管理人员核实权限",
                            type: "error",
                            duration: 1500,
                            onClose: () => {
                                return false;
                            }
                        });
                    }
                });
            },
            register(tableName){
                this.$storage.set("loginTable", tableName);
                this.$router.push({path:'/register'})
            },
            // 登陆
            login() {
                let _this=this;
                if (!_this.rulesForm.username) {
                    _this.$message.error("请输入用户名");
                    return;
                }
                if (!_this.rulesForm.password) {
                    _this.$message.error("请输入密码");
                    return;
                }
                if (!_this.rulesForm.role) {
                    _this.$message.error("请选择角色");
                    return;
                }

                _this.$http({
                    url: `${this.rulesForm.role}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
                    method: "post"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.$storage.set("Token", data.token);
                        _this.$storage.set("userId", data.userId);
                        _this.roleOptions.forEach(function (item, index) {
                            if(item.value==_this.rulesForm.role){
                                console.log(item.key)
                                _this.$storage.set("role",  item.key);//汉字表明
                            }
                        });
                        _this.$storage.set("sessionTable", _this.rulesForm.role);//英文表明
                        _this.$storage.set("adminName", _this.rulesForm.username);
                        _this.$router.replace({ path: "/index/" });
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            getRandCode(len = 4){
                this.randomString(len)
            },
            randomString(len = 4) {
                let chars = [
                    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
                    "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
                    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                    "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
                    "2", "4", "5", "6", "7", "8", "9"
                ]
                let colors = ["0", "1", "2","2", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
                let sizes = ['14', '15', '16', '17', '18']

                let output = [];
                for (let i = 0; i < len; i++) {
                    // 随机验证码
                    let key = Math.floor(Math.random()*chars.length)
                    this.codes[i].num = chars[key]
                    // 随机验证码颜色
                    let code = '#'
                    for (let j = 0; j < 6; j++) {
                        let key = Math.floor(Math.random()*colors.length)
                        code += colors[key]
                    }
                    this.codes[i].color = code
                    // 随机验证码方向
                    let rotate = Math.floor(Math.random()*60)
                    let plus = Math.floor(Math.random()*2)
                    if(plus == 1) rotate = '-'+rotate
                    this.codes[i].rotate = 'rotate('+rotate+'deg)'
                    // 随机验证码字体大小
                    let size = Math.floor(Math.random()*sizes.length)
                    this.codes[i].size = sizes[size]+'px'
                }
            },
        }
    };
</script>
<style lang="scss" scoped>
    .loginIn {
        min-height: 100vh;
        position: relative;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;

    .left {
        position: absolute;
        left: 0;
        top: 0;
        width: 360px;
        height: 100%;

    .login-form {
        background-color: #fff;
        width: 100%;
        right: inherit;
        padding: 0 12px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .title-container {
        text-align: center;
        font-size: 24px;

    .title {
        margin: 20px 0;
    }
    }

    .el-form-item {
        position: relative;

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: #889aa4;
        vertical-align: middle;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        padding: 0;
        line-height: 40px;
        width: 30px;
        text-align: center;
    }

    .el-input {
        display: inline-block;
        height: 40px;
        width: 100%;

    & /deep/ input {
          background: transparent;
          border: 0px;
          -webkit-appearance: none;
          padding: 0 15px 0 30px;
          color: var(--publicMainColor);
          height: 40px;
      }
    }

    }


    }

    .center {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 360px;
        transform: translate3d(-50%,-50%,0);
        height: 446px;
        border-radius: 8px;
    }

    .right {
        position: absolute;
        left: inherit;
        right: 0;
        top: 0;
        width: 360px;
        height: 100%;
    }

    .code {
    .el-form-item__content {
        position: relative;

    .getCodeBt {
        position: absolute;
        right: 0;
        top: 0;
        line-height: 40px;
        width: 100px;
        background-color: rgba(51,51,51,0.4);
        color: #fff;
        text-align: center;
        border-radius: 0 4px 4px 0;
        height: 40px;
        overflow: hidden;

    span {
        padding: 0 5px;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
    }
    }

    .el-input {
    & /deep/ input {
          padding: 0 130px 0 30px;
      }
    }
    }
    }

    .setting {
    & /deep/ .el-form-item__content {
          padding: 0 15px;
          box-sizing: border-box;
          line-height: 32px;
          height: 32px;
          font-size: 14px;
          color: #999;
          margin: 0 !important;

    .register {
        float: left;
        width: 50%;
    }

    .reset {
        float: right;
        width: 50%;
        text-align: right;
    }
    }
    }

    .style2 {
        padding-left: 30px;

    .svg-container {
        left: -30px !important;
    }

    .el-input {
    & /deep/ input {
          padding: 0 15px !important;
      }
    }
    }

    .code.style2, .code.style3 {
    .el-input {
    & /deep/ input {
          padding: 0 115px 0 15px;
      }
    }
    }

    .style3 {
    & /deep/ .el-form-item__label {
          padding-right: 6px;
      }

    .el-input {
    & /deep/ input {
          padding: 0 15px !important;
      }
    }
    }

    .role {
    & /deep/ .el-form-item__label {
          width: 56px !important;
          color: var(--publicMainColor);
      }

    & /deep/ .el-radio {
          margin-right: 12px;
          color: var(--publicMainColor);
      }
    }

    }
</style>
