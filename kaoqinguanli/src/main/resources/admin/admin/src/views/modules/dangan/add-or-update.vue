<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <input id="updateId" name="id" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="档案编号" prop="danganUuidNumber">
                       <el-input v-model="ruleForm.danganUuidNumber"
                                 placeholder="档案编号" clearable  :readonly="ro.danganUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="档案编号" prop="danganUuidNumber">
                           <el-input v-model="ruleForm.danganUuidNumber"
                                     placeholder="档案编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="员工姓名" prop="danganName">
                       <el-input v-model="ruleForm.danganName"
                                 placeholder="员工姓名" clearable  :readonly="ro.danganName"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="员工姓名" prop="danganName">
                           <el-input v-model="ruleForm.danganName"
                                     placeholder="员工姓名" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="员工手机号" prop="danganPhone">
                       <el-input v-model="ruleForm.danganPhone"
                                 placeholder="员工手机号" clearable  :readonly="ro.danganPhone"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="员工手机号" prop="danganPhone">
                           <el-input v-model="ruleForm.danganPhone"
                                     placeholder="员工手机号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="员工身份证号" prop="danganIdNumber">
                       <el-input v-model="ruleForm.danganIdNumber"
                                 placeholder="员工身份证号" clearable  :readonly="ro.danganIdNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="员工身份证号" prop="danganIdNumber">
                           <el-input v-model="ruleForm.danganIdNumber"
                                     placeholder="员工身份证号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.danganPhoto" label="员工照片" prop="danganPhoto">
                        <file-upload
                            tip="点击上传员工照片"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.danganPhoto?$base.url+ruleForm.danganPhoto:''"
                            @change="danganPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.danganPhoto" label="员工照片" prop="danganPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.danganPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="出生年月" prop="danganChusheng">
                       <el-input v-model="ruleForm.danganChusheng"
                                 placeholder="出生年月" clearable  :readonly="ro.danganChusheng"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="出生年月" prop="danganChusheng">
                           <el-input v-model="ruleForm.danganChusheng"
                                     placeholder="出生年月" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="upload" v-if="type!='info' && !ro.danganFile" label="附件" prop="danganFile">
                        <file-upload
                                tip="点击上传附件"
                                action="file/upload"
                                :limit="3"
                                :multiple="true"
                                :fileUrls="ruleForm.danganFile?$base.url+ruleForm.danganFile:''"
                                @change="danganFileUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.danganFile" label="附件" prop="danganFile">
                            <a type="text" style="text-decoration:none" class="el-button" :href="$base.url+ruleForm.danganFile"  >附件下载</a>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="性别" prop="sexTypes">
                        <el-select v-model="ruleForm.sexTypes" :disabled="ro.sexTypes" placeholder="请选择性别">
                            <el-option
                                v-for="(item,index) in sexTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="性别" prop="sexValue">
                        <el-input v-model="ruleForm.sexValue"
                            placeholder="性别" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="邮箱" prop="danganEmail">
                       <el-input v-model="ruleForm.danganEmail"
                                 placeholder="邮箱" clearable  :readonly="ro.danganEmail"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="邮箱" prop="danganEmail">
                           <el-input v-model="ruleForm.danganEmail"
                                     placeholder="邮箱" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info' && !ro.ruzhiTime"  class="input" label="入职时间" prop="ruzhiTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.ruzhiTime"
                                type="datetime"
                                placeholder="入职时间"
                                :disabled="ro.ruzhiTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.ruzhiTime" label="入职时间" prop="ruzhiTime">
                            <span v-html="ruleForm.ruzhiTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.danganXueliContent"  label="学历情况" prop="danganXueliContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.danganXueliContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.danganXueliContent" label="学历情况" prop="danganXueliContent">
                            <span v-html="ruleForm.danganXueliContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.danganShixiContent"  label="实习情况" prop="danganShixiContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.danganShixiContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.danganShixiContent" label="实习情况" prop="danganShixiContent">
                            <span v-html="ruleForm.danganShixiContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.danganGongzuoContent"  label="工作情况" prop="danganGongzuoContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.danganGongzuoContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.danganGongzuoContent" label="工作情况" prop="danganGongzuoContent">
                            <span v-html="ruleForm.danganGongzuoContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info' && !ro.danganBeizhuContent"  label="备注" prop="danganBeizhuContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.danganBeizhuContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.danganBeizhuContent" label="备注" prop="danganBeizhuContent">
                            <span v-html="ruleForm.danganBeizhuContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                ro:{
                    danganUuidNumber: true,
                    danganName: false,
                    danganPhone: false,
                    danganIdNumber: false,
                    danganPhoto: false,
                    danganChusheng: false,
                    danganFile: false,
                    sexTypes: false,
                    danganEmail: false,
                    ruzhiTime: false,
                    danganXueliContent: false,
                    danganShixiContent: false,
                    danganGongzuoContent: false,
                    danganBeizhuContent: false,
                    insertTime: false,
                    updateTime: false,
                },
                ruleForm: {
                    danganUuidNumber: new Date().getTime(),
                    danganName: '',
                    danganPhone: '',
                    danganIdNumber: '',
                    danganPhoto: '',
                    danganChusheng: '',
                    danganFile: '',
                    sexTypes: '',
                    danganEmail: '',
                    ruzhiTime: '',
                    danganXueliContent: '',
                    danganShixiContent: '',
                    danganGongzuoContent: '',
                    danganBeizhuContent: '',
                    insertTime: '',
                    updateTime: '',
                },
                sexTypesOptions : [],
                rules: {
                   danganUuidNumber: [
                              { required: true, message: '档案编号不能为空', trigger: 'blur' },
                          ],
                   danganName: [
                              { required: true, message: '员工姓名不能为空', trigger: 'blur' },
                          ],
                   danganPhone: [
                              {  required: true, message: '员工手机号不能为空', trigger: 'blur' },
                              {  pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                                 message: '员工手机号格式不对',
                                 trigger: 'blur'
                              }
                          ],
                   danganIdNumber: [
                              { required: true, message: '员工身份证号不能为空', trigger: 'blur' },
                              { pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
                                message: '员工身份证号格式有误！',
                                trigger: 'blur'
                              }
                          ],
                   danganPhoto: [
                              { required: true, message: '员工照片不能为空', trigger: 'blur' },
                          ],
                   danganChusheng: [
                              { required: true, message: '出生年月不能为空', trigger: 'blur' },
                          ],
                   danganFile: [
                              { required: true, message: '附件不能为空', trigger: 'blur' },
                          ],
                   sexTypes: [
                              { required: true, message: '性别不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   danganEmail: [
                              { required: true, message: '邮箱不能为空', trigger: 'blur' },
                              { pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                                message: '邮箱只能是邮箱格式',
                                trigger: 'blur'
                              }
                          ],
                   ruzhiTime: [
                              { required: true, message: '入职时间不能为空', trigger: 'blur' },
                          ],
                   danganXueliContent: [
                              { required: true, message: '学历情况不能为空', trigger: 'blur' },
                          ],
                   danganShixiContent: [
                              { required: true, message: '实习情况不能为空', trigger: 'blur' },
                          ],
                   danganGongzuoContent: [
                              { required: true, message: '工作情况不能为空', trigger: 'blur' },
                          ],
                   danganBeizhuContent: [
                              { required: true, message: '备注不能为空', trigger: 'blur' },
                          ],
                   insertTime: [
                              { required: true, message: '上传时间不能为空', trigger: 'blur' },
                          ],
                   updateTime: [
                              { required: true, message: '最后更新时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }else{
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=sex_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.sexTypesOptions = data.data.list;
                    }
                });


        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `dangan/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.ruleForm.danganXueliContent = _this.ruleForm.danganXueliContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                        _this.ruleForm.danganShixiContent = _this.ruleForm.danganShixiContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                        _this.ruleForm.danganGongzuoContent = _this.ruleForm.danganGongzuoContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                        _this.ruleForm.danganBeizhuContent = _this.ruleForm.danganBeizhuContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.danganXueliContent = this.ruleForm.danganXueliContent.replaceAll(this.$base.url,"");
                        this.ruleForm.danganShixiContent = this.ruleForm.danganShixiContent.replaceAll(this.$base.url,"");
                        this.ruleForm.danganGongzuoContent = this.ruleForm.danganGongzuoContent.replaceAll(this.$base.url,"");
                        this.ruleForm.danganBeizhuContent = this.ruleForm.danganBeizhuContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`dangan/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.danganCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.danganCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            danganPhotoUploadChange(fileUrls){
                this.ruleForm.danganPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },
            danganFileUploadChange(fileUrls){
                this.ruleForm.danganFile = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

