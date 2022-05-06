window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  ActiveRegisterForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2d016RRQ1NzI3R9JoKBLKh", "ActiveRegisterForm");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        registerForm: cc.Layout,
        richText: cc.RichText,
        laBel: cc.Label
      },
      activeRegisterForm: function activeRegisterForm() {
        this.node.active = false;
        this.registerForm.node.active = true;
        this.richText.node.active = true;
        this.laBel.node.active = true;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  LoadingRegister: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f03c0umApHt7NijznyNUCi", "LoadingRegister");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        registerProgressBar: cc.ProgressBar,
        listViewLayout: cc.Layout
      },
      onLoad: function onLoad() {
        this.registerProgressBar.progress = 0;
      },
      start: function start() {},
      update: function update() {
        if (1 == Math.floor(this.registerProgressBar.progress)) {
          this.node.active = false;
          return this.listViewLayout.node.active = true;
        }
        this.registerProgressBar.progress += .015;
      }
    });
    cc._RF.pop();
  }, {} ],
  RegisterUser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef3e4XZHB1DRp2IZKprdXZv", "RegisterUser");
    "use strict";
    var user = {
      username: "",
      password: "",
      email: ""
    };
    var users = [];
    cc.Class({
      extends: cc.Component,
      properties: {
        username: {
          default: null,
          type: cc.EditBox
        },
        password: {
          default: null,
          type: cc.EditBox
        },
        email: {
          default: null,
          type: cc.EditBox
        },
        layoutRegister: cc.Layout,
        loadingProgressBar: cc.Layout,
        richText: cc.RichText,
        laBel: cc.Label,
        content: cc.Node,
        items: cc.Prefab
      },
      onLoad: function onLoad() {},
      addUser: function addUser() {
        this.node.active = true;
        if (!(this.username.string || this.password.string || this.email.string)) return alert("Please try enter your information!");
        if (!this.username.string) return alert("Please enter your username!");
        if (!this.password.string) return alert("Please enter your password!");
        if (!this.email.string) return alert("Please enter your email!");
        if (!this.checkEmail()) return alert("Wrong email!");
        cc.log(user);
        user.username = this.username.string;
        user.password = this.password.string;
        user.email = this.email.string;
        users.push(user);
        this.showUser();
        this.loadingRegister();
        this.addListView();
      },
      addListView: function addListView() {
        this.content.removeAllChildren();
        for (var i = 0; i < users.length; i++) {
          var item = cc.instantiate(this.items);
          item.parent = this.content;
          item.y = -30 - 60 * i;
          item.getChildByName("item").getComponent(cc.Label).string = users[i].username;
          this.content.height += 10;
        }
      },
      resizeFont: function resizeFont(slide) {},
      deleteListView: function deleteListView() {
        this.content.removeAllChildren();
        this.content.height = 220;
        users = [];
      },
      checkEmail: function checkEmail() {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)$/;
        if (this.email.string.match(validRegex)) return true;
        return false;
      },
      loadingRegister: function loadingRegister() {
        this.layoutRegister.node.active = false;
        this.richText.node.active = false;
        this.laBel.node.active = false;
        this.loadingProgressBar.node.active = true;
      },
      showUser: function showUser() {
        cc.log("username:" + this.username.string);
        cc.log("password:" + this.password.string);
        cc.log("email:" + this.email.string);
        cc.log(users);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  ReturnRegister: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08024Qa2WtBPJ/pd7olom0P", "ReturnRegister");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        listViewLayout: cc.Layout,
        registerForm: cc.Layout,
        registerRichTest: cc.RichText,
        registerLabel: cc.Label
      },
      returnRegister: function returnRegister() {
        this.listViewLayout.node.active = false;
        this.registerForm.node.active = true;
        this.registerRichTest.node.active = true;
        this.registerLabel.node.active = true;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "ActiveRegisterForm", "LoadingRegister", "RegisterUser", "ReturnRegister" ]);