//Sat Jan 31 2026 02:44:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const ScriptVersion = "1.1.4";
module.exports.ScriptVersion = ScriptVersion;
if (typeof require === "undefined") {
  require = importModule;
}
const {
  DmYY,
  Runing
} = require("./DmYY");
const FM = FileManager.local();
const BASE_DIR = FM.joinPath(FM.libraryDirectory(), "Caishow_Data_OM");
if (!FM.fileExists(BASE_DIR)) {
  FM.createDirectory(BASE_DIR);
}
try {
  const cachePath = FM.joinPath(BASE_DIR, "weather_cache.json");
  if (FM.fileExists(cachePath)) {
    FM.remove(cachePath);
  }
} catch (a0_0x1953d2) {}
const ConfigManager = {
  getPath: _0x24820f => FM.joinPath(BASE_DIR, _0x24820f),
  load: () => {
    const _0xe2595d = FM.joinPath(BASE_DIR, "settings.json");
    if (FM.fileExists(_0xe2595d)) {
      try {
        return JSON.parse(FM.readString(_0xe2595d));
      } catch (_0x2f758f) {
        return {};
      }
    }
    return {};
  },
  save: _0x88e776 => {
    try {
      FM.writeString(FM.joinPath(BASE_DIR, "settings.json"), JSON.stringify(_0x88e776));
    } catch (_0x1eeaf1) {}
  },
  saveCache: (_0x274d9e, _0x1c1f61) => {
    try {
      FM.writeString(FM.joinPath(BASE_DIR, _0x274d9e), JSON.stringify(_0x1c1f61));
    } catch (_0x5c2e83) {}
  },
  readCache: _0xb5a06a => {
    try {
      const _0x21b680 = FM.joinPath(BASE_DIR, _0xb5a06a);
      if (FM.fileExists(_0x21b680)) {
        return JSON.parse(FM.readString(_0x21b680));
      }
    } catch (_0x106398) {}
    return null;
  },
  saveImg: (_0x4799f7, _0x1dce2b) => {
    try {
      FM.writeImage(FM.joinPath(BASE_DIR, _0x4799f7), _0x1dce2b);
    } catch (_0x476d44) {}
  },
  getImg: _0x312972 => {
    const _0x1060cd = FM.joinPath(BASE_DIR, _0x312972);
    return FM.fileExists(_0x1060cd) ? FM.readImage(_0x1060cd) : null;
  },
  rmImg: _0x1dcb01 => {
    try {
      FM.remove(FM.joinPath(BASE_DIR, _0x1dcb01));
    } catch (_0x312c3d) {}
  },
  clear: () => {
    try {
      if (FM.fileExists(BASE_DIR)) {
        const _0x3d1637 = FM.listContents(BASE_DIR);
        for (const _0x566ac3 of _0x3d1637) FM.remove(FM.joinPath(BASE_DIR, _0x566ac3));
      }
    } catch (_0x3d136c) {}
  }
};
const lunarInfo = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42448, 83315, 21200, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46496, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 3031, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448];
const weekTitle = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const weekTitleShort = ["日", "一", "二", "三", "四", "五", "六"];
const zodiacAnimals = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
const heavenlyStems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const earthlyBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const yellowBlackDays = ["建", "除", "满", "平", "定", "执", "破", "危", "成", "收", "开", "闭"];
const twentyEightMansions = ["角", "亢", "氐", "房", "心", "尾", "箕", "斗", "牛", "女", "虚", "危", "室", "壁", "奎", "娄", "胃", "昴", "毕", "觜", "参", "井", "鬼", "柳", "星", "张", "翼", "轸"];
const baseConfigKeys = {
  size_greeting: "100",
  size_date: "100",
  size_lunar: "100",
  size_info: "100",
  size_weather: "100",
  size_weatherLarge: "100",
  size_poetry: "100",
  size_timeInfo: "100",
  size_calendar: "100",
  size_holiday: "100",
  size_schedule_title: "100",
  size_schedule_item: "100",
  size_lotteryTitle: "100",
  size_lotteryItem: "100",
  size_lotteryInfo: "100",
  show_battery: "true",
  show_poetry: "true",
  birthday_list: "",
  color_greeting: "#ffffff",
  color_date: "#ffcc99",
  color_lunar: "#99ccff",
  color_info: "#ffffff",
  color_weather: "#ffffff",
  color_weatherLarge: "#ffffff",
  color_poetry: "#ffffff",
  color_timeInfo: "#99ccff",
  color_calendar: "#ffffff",
  color_holiday: "#ffffff",
  color_schedule_title: "#ffffff",
  color_schedule_bg: "#666666",
  color_schedule_item_1: "#ffffff",
  color_schedule_item_2: "#ffffff",
  color_schedule_item_3: "#ffffff",
  color_schedule_item_4: "#ffffff",
  color_schedule_item_5: "#ffffff",
  color_schedule_item_6: "#ffffff",
  color_lotteryTitle: "#ffffff",
  color_lotteryItem: "#ffffff",
  color_lotteryInfo: "#99ccff",
  color_bg: "#000000",
  color_bg_2: "",
  color_bg_day: "",
  color_bg_2_day: "",
  color_bg_night: "",
  color_bg_2_night: "",
  layout_med_left_x: "0",
  layout_med_left_y: "0",
  layout_med_right_x: "0",
  layout_med_right_y: "0",
  layout_lg_tl_x: "0",
  layout_lg_tl_y: "0",
  layout_lg_tr_x: "0",
  layout_lg_tr_y: "0",
  layout_lg_mid_x: "0",
  layout_lg_mid_y: "0",
  layout_lg_week_x: "0",
  layout_lg_week_y: "0",
  layout_lg_cal_x: "0",
  layout_lg_cal_y: "0",
  layout_lg_holiday_x: "0",
  layout_lg_holiday_y: "0",
  layout_lg_schedule_x: "0",
  layout_lg_schedule_y: "0",
  space_week_w: "28",
  space_cal_w: "28",
  space_cal_h: "3",
  space_holiday_h: "2",
  space_schedule_h: "2",
  schedule_count: "4",
  schedule_offset: "0"
};
class CaishowWidget extends DmYY {
  constructor(_0x42aa8a) {
    super(_0x42aa8a);
    this.name = "全能日历天气";
    this.en = "CalendarWeather";
    this.logo = "https://raw.githubusercontent.com/Orz-3/task/master/scriptable/icon/caiyun.png";
    this.defaultData = {
      apiKey: "",
      lockLocation: false,
      fixedLng: "",
      fixedLat: "",
      fixedCity: "",
      fixedSubCity: "",
      refreshInterval: "60",
      styleModel: "classic",
      global_font_size: "100",
      lottery_type: "none",
      text_greeting_night: "",
      text_greeting_morning: "",
      text_greeting_noon: "",
      text_greeting_afternoon: "",
      text_greeting_evening: ""
    };
    for (const [_0x4f48b5, _0x35f753] of Object.entries(baseConfigKeys)) {
      this.defaultData["s1_" + _0x4f48b5] = _0x35f753;
      this.defaultData["s2_" + _0x4f48b5] = _0x35f753;
      this.defaultData["s3_" + _0x4f48b5] = _0x35f753;
      this.defaultData["s4_" + _0x4f48b5] = _0x35f753;
    }
    this.defaultData.s1_space_week_w = "30";
    this.defaultData.s1_space_cal_w = "27.2";
    this.defaultData.s3_size_calendar = "89";
    this.defaultData.s4_size_calendar = "89";
    this.defaultData.s2_space_week_w = "30";
    this.defaultData.s2_space_cal_w = "27.2";
    this.defaultData.s3_space_week_w = "9.1";
    this.defaultData.s3_space_cal_w = "6.2";
    this.defaultData.s3_space_cal_h = "0";
    this.defaultData.s3_space_holiday_h = "4";
    this.defaultData.s4_space_week_w = "9.1";
    this.defaultData.s4_space_cal_w = "6.2";
    this.defaultData.s4_space_cal_h = "0";
    this.defaultData.s4_space_schedule_h = "0";
    this.defaultData.s4_schedule_count = "4";
    const _0x35f488 = ConfigManager.load();
    this.settings = Object.assign({}, this.defaultData, _0x35f488);
    this.Run();
  }
  saveSettings(_0x306035 = true) {
    ConfigManager.save(this.settings);
    super.saveSettings(false);
    if (_0x306035) {
      this.notify("设置成功", "配置已保存到本地文件，稍后刷新");
    }
    return JSON.stringify(this.settings);
  }
  Run() {
    config.runsInApp && (this.registerAction("基础设置", async () => {
      await this.setBasicConfig();
    }, {
      name: "gearshape.fill",
      color: "#007aff",
      desc: "定位、API、刷新频率"
    }), this.registerAction("彩票与问候", async () => {
      await this.handleGreetingSettings(this.getActivePrefix());
    }, {
      name: "ticket.fill",
      color: "#FF2D55",
      desc: "选择显示的彩票或问候语"
    }), this.registerAction("第一套（三天天气）", async () => {
      await this.handleStyleSettingsMenu("s1");
    }, {
      name: "doc.text.image",
      color: "#FF9500",
      desc: "第一套 (经典)"
    }), this.registerAction("第二套（七天天气）", async () => {
      await this.handleStyleSettingsMenu("s2");
    }, {
      name: "doc.text",
      color: "#34C759",
      desc: "第二套 (简约)"
    }), this.registerAction("第三套（节假日倒计时）", async () => {
      await this.handleStyleSettingsMenu("s3");
    }, {
      name: "gift.fill",
      color: "#FF2D55",
      desc: "第三套 (节日)"
    }), this.registerAction("第四套（日历日程）", async () => {
      await this.handleStyleSettingsMenu("s4");
    }, {
      name: "calendar.badge.clock",
      color: "#007AFF",
      desc: "第四套 (日程)"
    }), this.registerAction("组件切换", async () => {
      await this.handleStyleSwitch();
    }, {
      name: "arrow.triangle.2.circlepath",
      color: "#5856d6",
      desc: "切换当前显示样式"
    }), this.registerAction("重置配置", async () => {
      const _0x3c4d29 = new Alert();
      _0x3c4d29.title = "确认重置？";
      _0x3c4d29.message = "所有个性化颜色、布局、Key都将丢失。";
      _0x3c4d29.addAction("确认重置");
      _0x3c4d29.addCancelAction("取消");
      const _0x559e8b = await _0x3c4d29.presentAlert();
      _0x559e8b === 0 && (ConfigManager.clear(), this.settings = Object.assign({}, this.defaultData), this.saveSettings(false), this.notify("已重置", "请重新运行脚本"));
    }, {
      name: "trash.fill",
      color: "#ff3b30",
      desc: "修复所有问题"
    }), this.registerAction("检查更新", async () => {
      await this.updateScript(false);
    }, {
      name: "cloud.fill",
      color: "#007aff",
      desc: "当前版本 v" + ScriptVersion
    }), Timer.schedule(800, false, async () => {
      await this.updateScript(true);
    }));
  }
  getActivePrefix() {
    let _0x4a7d9f = this.settings.styleModel || "classic";
    if (_0x4a7d9f === "modern") {
      return "s2";
    }
    if (_0x4a7d9f === "holiday") {
      return "s3";
    }
    if (_0x4a7d9f === "schedule") {
      return "s4";
    }
    return "s1";
  }
  async updateScript(_0x566798 = false) {
    const _0x33c813 = "https://raw.githubusercontent.com/loveyuwy/hao/refs/heads/main/wtk.js?ts=" + Date.now();
    const _0x3fb20c = new Alert();
    try {
      const _0x59036e = new Request(_0x33c813);
      _0x59036e.method = "GET";
      const _0x265a6d = await _0x59036e.loadString();
      const _0x29b4fa = _0x265a6d.match(/const\s+ScriptVersion\s*=\s*["'](.*?)["']/);
      const _0x2f4c19 = _0x29b4fa ? _0x29b4fa[1] : null;
      console.log("[更新检测] 本地: " + ScriptVersion + ", 远程: " + _0x2f4c19 + ", 静默: " + _0x566798);
      if (!_0x2f4c19) {
        if (_0x566798) {
          return;
        }
        _0x3fb20c.title = "⚠️ 无法检测远程版本";
        _0x3fb20c.message = "无法解析远程文件版本号，是否强制覆盖？";
        _0x3fb20c.addAction("强制更新");
        _0x3fb20c.addCancelAction("取消");
        if ((await _0x3fb20c.presentAlert()) === 0) {
          await this.doUpdate(_0x265a6d);
        }
        return;
      }
      const _0x15fab7 = (_0x42ad55, _0x33f7a3) => {
        const _0x14f499 = _0x42ad55.split(".").map(Number);
        const _0xd3942f = _0x33f7a3.split(".").map(Number);
        const _0x1aa36a = Math.max(_0x14f499.length, _0xd3942f.length);
        for (let _0x14c1f0 = 0; _0x14c1f0 < _0x1aa36a; _0x14c1f0++) {
          const _0x33f478 = _0x14f499[_0x14c1f0] || 0;
          const _0x3fde72 = _0xd3942f[_0x14c1f0] || 0;
          if (_0x33f478 > _0x3fde72) {
            return 1;
          }
          if (_0x33f478 < _0x3fde72) {
            return -1;
          }
        }
        return 0;
      };
      if (_0x15fab7(_0x2f4c19, ScriptVersion) > 0) {
        _0x3fb20c.title = "🚀 发现新版本 v" + _0x2f4c19;
        _0x3fb20c.message = "当前版本: v" + ScriptVersion + "\n建议您立即更新以获得最新功能。";
        _0x3fb20c.addAction("立即更新");
        _0x3fb20c.addCancelAction("稍后");
        const _0x5932f2 = await _0x3fb20c.presentAlert();
        if (_0x5932f2 === 0) {
          await this.doUpdate(_0x265a6d);
        }
      } else {
        if (_0x566798) {
          return;
        }
        _0x3fb20c.title = "✅ 已是最新版本";
        _0x3fb20c.message = "远程版本: v" + _0x2f4c19 + "\n当前版本: v" + ScriptVersion + "\n\n您的版本是最新的（或比远程版本更高）。";
        _0x3fb20c.addAction("好的");
        await _0x3fb20c.presentAlert();
      }
    } catch (_0x3fe19c) {
      console.log("[更新检测失败] " + _0x3fe19c.message);
      if (_0x566798) {
        return;
      }
      _0x3fb20c.title = "❌ 更新检测失败";
      _0x3fb20c.message = "网络请求错误：\n" + _0x3fe19c.message;
      _0x3fb20c.addAction("确定");
      await _0x3fb20c.presentAlert();
    }
  }
  async doUpdate(_0x4578bb) {
    if (_0x4578bb && _0x4578bb.includes("CaishowWidget")) {
      const _0x38c2b9 = FileManager.local();
      _0x38c2b9.writeString(module.filename, _0x4578bb);
      const _0x5216da = new Alert();
      _0x5216da.title = "✅ 更新成功";
      _0x5216da.message = "脚本已覆盖，请退出并重新运行脚本以生效。";
      _0x5216da.addAction("好的");
      await _0x5216da.presentAlert();
    } else {
      this.notify("更新失败", "下载的内容似乎不正确");
    }
  }
  async handleStyleSettingsMenu(_0x508314) {
    let _0x3a26a7 = "经典";
    if (_0x508314 === "s2") {
      _0x3a26a7 = "简约";
    }
    if (_0x508314 === "s3") {
      _0x3a26a7 = "节日";
    }
    if (_0x508314 === "s4") {
      _0x3a26a7 = "日程";
    }
    let _0x375e6c = [{
      title: "布局微调",
      val: "menu_layout",
      icon: {
        name: "arrow.up.and.down.and.arrow.left.and.right",
        color: "#5856D6"
      },
      desc: "调整组件位置",
      onClick: async () => await this.handleLayoutMenu(_0x508314)
    }, {
      title: "间距/数量",
      val: "menu_spacing",
      icon: {
        name: "arrow.up.left.and.arrow.down.right",
        color: "#FF2D55"
      },
      desc: "调整行列间距/数量",
      onClick: async () => await this.handleSpacingMenu(_0x508314)
    }, {
      title: "显示开关",
      val: "menu_vis",
      icon: {
        name: "eye.fill",
        color: "#007AFF"
      },
      desc: "隐藏/显示部分元素",
      onClick: async () => await this.handleVisibilityMenu(_0x508314, _0x3a26a7)
    }, {
      title: "字体大小",
      val: "menu_size",
      icon: {
        name: "textformat.size",
        color: "#FF9500"
      },
      desc: "调整全局或局部缩放",
      onClick: async () => await this.handleSizeMenu(_0x508314)
    }, {
      title: "颜色配置",
      val: "menu_color",
      icon: {
        name: "paintpalette.fill",
        color: "#34C759"
      },
      desc: "自定义文字颜色",
      onClick: async () => await this.handleColorMenu(_0x508314)
    }, {
      title: "背景设置",
      val: "menu_bg",
      icon: {
        name: "photo.fill",
        color: "#007AFF"
      },
      desc: "日夜模式/图片/渐变",
      onClick: async () => await this.handleBackgroundMenu(_0x508314)
    }];
    _0x508314 === "s3" && _0x375e6c.splice(1, 0, {
      title: "生日管理",
      val: "menu_birthday",
      icon: {
        name: "cake.fill",
        color: "#FF2D55"
      },
      desc: "添加/管理家人朋友生日",
      onClick: async () => await this.handleBirthdaySettings(_0x508314)
    });
    await this.renderAppView([{
      title: _0x3a26a7 + "配置菜单",
      menu: _0x375e6c
    }]);
  }
  async handleBirthdaySettings(_0x348f88) {
    let _0x414584 = _0x348f88 + "_birthday_list";
    let _0x40797c = this.settings[_0x414584] || "";
    let _0x3f1564 = _0x40797c.split("\n").filter(_0x5935bd => _0x5935bd.trim() !== "");
    const _0x586cb0 = new Alert();
    _0x586cb0.title = "🎂 生日管理";
    _0x586cb0.message = "【输入说明】\n请在下方输入框中填写，格式为：\n姓名,日期,类型\n\n【示例】\n老公,10-27,农历\n老婆,05-20,公历\n\n(输入框留空则不显示)";
    for (let _0x4bb504 = 0; _0x4bb504 < 10; _0x4bb504++) {
      let _0x355896 = _0x3f1564[_0x4bb504] || "";
      _0x586cb0.addTextField("姓名,MM-DD,公历/农历", _0x355896);
    }
    _0x586cb0.addAction("保存生效");
    _0x586cb0.addCancelAction("取消");
    const _0x4d4bc4 = await _0x586cb0.presentAlert();
    if (_0x4d4bc4 === 0) {
      let _0x32905b = [];
      for (let _0x2b03c7 = 0; _0x2b03c7 < 10; _0x2b03c7++) {
        let _0x31feb0 = _0x586cb0.textFieldValue(_0x2b03c7).trim();
        _0x31feb0 && _0x32905b.push(_0x31feb0);
      }
      this.settings[_0x414584] = _0x32905b.join("\n");
      this.saveSettings();
    }
  }
  async handleVisibilityMenu(_0x3729c7, _0x4316b5) {
    const _0x41afa3 = _0x3729c7 + "_show_battery";
    const _0x5b06ee = _0x3729c7 + "_show_poetry";
    const _0x5e2e85 = _0x2c2482 => {
      let _0x23d05a = this.settings[_0x2c2482];
      return _0x23d05a === undefined || _0x23d05a === null || _0x23d05a === "true";
    };
    let _0x2b8584 = _0x5e2e85(_0x41afa3);
    let _0x2e53a9 = _0x5e2e85(_0x5b06ee);
    let _0x2bb87a = _0x2b8584 ? "当前状态：✅ 已开启" : "当前状态：🔴 已关闭";
    let _0x256425 = _0x2e53a9 ? "当前状态：✅ 已开启" : "当前状态：🔴 已关闭";
    await this.renderAppView([{
      title: "显示设置 - " + _0x4316b5 + "模式",
      menu: [{
        title: "🔋 电量显示",
        desc: _0x2bb87a,
        icon: {
          name: "battery.100",
          color: _0x2b8584 ? "#34C759" : "#FF3B30"
        },
        val: "toggle_bat",
        onClick: async () => {
          const _0xd73ec6 = new Alert();
          _0xd73ec6.title = "设置 " + _0x4316b5 + " 电量显示";
          _0xd73ec6.addAction(_0x2b8584 ? "开启 (当前)" : "开启");
          _0xd73ec6.addAction(!_0x2b8584 ? "关闭 (当前)" : "关闭");
          _0xd73ec6.addCancelAction("取消");
          const _0x10a16c = await _0xd73ec6.presentSheet();
          if (_0x10a16c !== -1) {
            const _0x3d540b = _0x10a16c === 0 ? "true" : "false";
            this.settings[_0x41afa3] = _0x3d540b;
            this.saveSettings(false);
            this.notify("设置已保存", _0x10a16c === 0 ? "已开启电量显示" : "已关闭电量显示");
            await this.handleVisibilityMenu(_0x3729c7, _0x4316b5);
          }
        }
      }, {
        title: "📜 诗词与天气联动",
        desc: _0x256425 + (_0x2e53a9 ? " (显诗词+3天天气)" : " (隐诗词+7天天气)"),
        icon: {
          name: "text.quote",
          color: _0x2e53a9 ? "#007AFF" : "#FF3B30"
        },
        val: "toggle_poe",
        onClick: async () => {
          const _0x401c46 = new Alert();
          _0x401c46.title = "设置 " + _0x4316b5 + " 诗词显示";
          _0x401c46.addAction(_0x2e53a9 ? "开启 (当前)" : "开启");
          _0x401c46.addAction(!_0x2e53a9 ? "关闭 (当前)" : "关闭");
          _0x401c46.addCancelAction("取消");
          const _0x13c841 = await _0x401c46.presentSheet();
          if (_0x13c841 !== -1) {
            const _0xe9d2ad = _0x13c841 === 0 ? "true" : "false";
            this.settings[_0x5b06ee] = _0xe9d2ad;
            this.saveSettings(false);
            this.notify("设置已保存", _0x13c841 === 0 ? "已开启诗词" : "已关闭诗词");
            await this.handleVisibilityMenu(_0x3729c7, _0x4316b5);
          }
        }
      }]
    }]);
  }
  async handleGreetingSettings() {
    const _0x1aa09f = [{
      t: "🚫 不显示彩票 (使用问候语)",
      v: "none"
    }, {
      t: "🟡🔵 大乐透 (DLT)",
      v: "dlt"
    }, {
      t: "🔴🔵 双色球 (SSQ)",
      v: "ssq"
    }, {
      t: "🔢 排列三 (PL3)",
      v: "pl3"
    }, {
      t: "🎲 福彩3D (FC3D)",
      v: "fc3d"
    }, {
      t: "7️⃣ 七星彩 (QXC)",
      v: "qxc"
    }, {
      t: "🌈 七乐彩 (QLC)",
      v: "qlc"
    }, {
      t: "🖐 排列五 (PL5)",
      v: "pl5"
    }];
    let _0x116a5e = this.settings.lottery_type || "none";
    let _0xd009f5 = _0x1aa09f.find(_0x1a6ad2 => _0x1a6ad2.v === _0x116a5e) || _0x1aa09f[0];
    await this.renderAppView([{
      title: "彩票显示设置",
      menu: [{
        title: "点击选择模式",
        val: "click_select_lottery_type",
        desc: _0xd009f5.t,
        icon: {
          name: "checklist",
          color: "#FF2D55"
        },
        onClick: async () => {
          const _0x18d412 = new Alert();
          _0x18d412.title = "选择显示的彩票";
          _0x18d412.message = "选择后将替换问候语位置显示开奖信息";
          _0x1aa09f.forEach(_0x3525e6 => {
            _0x3525e6.v === _0x116a5e ? _0x18d412.addAction("✅ " + _0x3525e6.t) : _0x18d412.addAction(_0x3525e6.t);
          });
          _0x18d412.addCancelAction("取消");
          const _0x27d8e8 = await _0x18d412.presentSheet();
          if (_0x27d8e8 !== -1) {
            const _0x37bb72 = _0x1aa09f[_0x27d8e8];
            this.settings.lottery_type = _0x37bb72.v;
            this.saveSettings(false);
            this.notify("设置已更新", "当前模式：" + _0x37bb72.t);
          }
        }
      }]
    }, {
      title: "自定义问候语 (当彩票选择\"不显示\"时生效)",
      menu: [{
        title: "凌晨/深夜 (23:00-05:00)",
        type: "input",
        val: "text_greeting_night",
        placeholder: "默认: 🦉火华,可以来一发了~"
      }, {
        title: "早上 (05:00-11:00)",
        type: "input",
        val: "text_greeting_morning",
        placeholder: "默认: 💫火华,早上心情美美哒~"
      }, {
        title: "中午 (11:00-13:00)",
        type: "input",
        val: "text_greeting_noon",
        placeholder: "默认: 🥳火华,中午好呀~"
      }, {
        title: "下午 (13:00-18:00)",
        type: "input",
        val: "text_greeting_afternoon",
        placeholder: "默认: 🐡火华,下午好呀~"
      }, {
        title: "晚上 (18:00-23:00)",
        type: "input",
        val: "text_greeting_evening",
        placeholder: "默认: 🌙火华,（晚上好呀）"
      }]
    }]);
    this.saveSettings(false);
  }
  async handleLayoutMenu(_0x43a860) {
    const _0x42414e = [{
      title: "[中号] 左侧信息区",
      code: "med_left"
    }, {
      title: "[中号] 右侧天气区",
      code: "med_right"
    }, {
      title: "[大号] 左上信息区",
      code: "lg_tl"
    }, {
      title: "[大号] 右上天气区",
      code: "lg_tr"
    }, {
      title: "[大号] 中间黄历条",
      code: "lg_mid"
    }, {
      title: "[大号] 日历-星期栏",
      code: "lg_week"
    }, {
      title: "[大号] 日历-日期区",
      code: "lg_cal"
    }];
    _0x43a860 === "s3" && _0x42414e.push({
      title: "[大号] 左下-节日倒数",
      code: "lg_holiday"
    });
    _0x43a860 === "s4" && _0x42414e.push({
      title: "[大号] 左下-日历事件",
      code: "lg_schedule"
    });
    await this.renderAppView([{
      title: "选择调整区域 (" + _0x43a860 + ")",
      menu: _0x42414e.map(_0x5b95da => ({
        title: _0x5b95da.title,
        val: "layout_" + _0x5b95da.code,
        icon: {
          name: "square.dashed",
          color: "#8E8E93"
        },
        desc: "点击设置XY偏移",
        onClick: async () => await this.renderLayoutInput(_0x5b95da.title, _0x5b95da.code, _0x43a860)
      }))
    }]);
  }
  async renderLayoutInput(_0x423e83, _0x3bea2d, _0x30c971) {
    await this.renderAppView([{
      title: _0x423e83 + " - 偏移 (X/Y)",
      menu: [{
        title: "X轴偏移",
        desc: "正右负左",
        type: "input",
        val: _0x30c971 + "_layout_" + _0x3bea2d + "_x",
        placeholder: "0"
      }, {
        title: "Y轴偏移",
        desc: "正下负上",
        type: "input",
        val: _0x30c971 + "_layout_" + _0x3bea2d + "_y",
        placeholder: "0"
      }]
    }]);
    this.saveSettings(false);
  }
  async handleSpacingMenu(_0x4a1d9e) {
    let _0x30cc3c = [{
      title: "星期栏-横向",
      desc: "(左右间距)",
      type: "input",
      val: _0x4a1d9e + "_space_week_w",
      placeholder: "28"
    }, {
      title: "日期区-横向",
      desc: "(左右间距,调小防溢出)",
      type: "input",
      val: _0x4a1d9e + "_space_cal_w",
      placeholder: "28"
    }, {
      title: "日期区-行高",
      desc: "(上下行距)",
      type: "input",
      val: _0x4a1d9e + "_space_cal_h",
      placeholder: "3"
    }];
    _0x30cc3c.push({
      title: "日程关键词(重要)",
      desc: "(只显示含此词的日程,留空显示所有)",
      type: "input",
      val: _0x4a1d9e + "_schedule_keyword",
      placeholder: "例如: 柴油"
    });
    _0x4a1d9e !== "s4" && _0x30cc3c.push({
      title: "指定显示第几条",
      desc: "(筛选后的第几条, 0是第一条)",
      type: "input",
      val: _0x4a1d9e + "_schedule_index",
      placeholder: "0"
    });
    _0x4a1d9e === "s3" && _0x30cc3c.push({
      title: "倒计时-行高",
      type: "input",
      val: _0x4a1d9e + "_space_holiday_h",
      placeholder: "4"
    });
    _0x4a1d9e === "s4" && (_0x30cc3c.push({
      title: "日程列表-行高",
      type: "input",
      val: _0x4a1d9e + "_space_schedule_h",
      placeholder: "0"
    }), _0x30cc3c.push({
      title: "最大显示数量",
      desc: "建议3或4",
      type: "input",
      val: _0x4a1d9e + "_schedule_count",
      placeholder: "4"
    }), _0x30cc3c.push({
      title: "跳过指定序号",
      desc: "如: 2,4 (跳过第2和第4个)",
      type: "input",
      val: _0x4a1d9e + "_schedule_offset",
      placeholder: "2,4"
    }));
    await this.renderAppView([{
      title: "间距调整 (" + _0x4a1d9e + ")",
      menu: _0x30cc3c
    }]);
    this.saveSettings(false);
  }
  async handleSizeMenu(_0x321702) {
    const _0x386b57 = [{
      id: "greeting",
      t: "问候语"
    }, {
      id: "lotteryTitle",
      t: "彩票标题(期号)"
    }, {
      id: "lotteryItem",
      t: "彩票开奖球号"
    }, {
      id: "lotteryInfo",
      t: "今日开奖状态"
    }, {
      id: "date",
      t: "公历日期"
    }, {
      id: "lunar",
      t: "农历日期"
    }, {
      id: "info",
      t: "电量与定位"
    }, {
      id: "weather",
      t: "天气描述"
    }, {
      id: "weatherLarge",
      t: "大温度数字"
    }, {
      id: "poetry",
      t: "诗词与预报"
    }, {
      id: "timeInfo",
      t: "底部时间条"
    }, {
      id: "calendar",
      t: "月历区域"
    }];
    if (_0x321702 === "s3") {
      _0x386b57.push({
        id: "holiday",
        t: "节日倒数"
      });
    }
    _0x321702 === "s4" && (_0x386b57.push({
      id: "schedule_title",
      t: "日程标题"
    }), _0x386b57.push({
      id: "schedule_item",
      t: "日程列表"
    }));
    const _0x31aafb = _0x386b57.map(_0x3d97ef => ({
      title: _0x3d97ef.t,
      type: "input",
      val: _0x321702 + "_size_" + _0x3d97ef.id,
      placeholder: "100"
    }));
    const _0x3e60fd = [{
      title: "🌐 全局缩放",
      desc: "所有文字按比例缩放(默认100)",
      type: "input",
      val: "global_font_size",
      placeholder: "100"
    }];
    await this.renderAppView([{
      title: "全局设置 (影响所有组件)",
      menu: _0x3e60fd
    }, {
      title: "局部微调 (" + _0x321702 + ")",
      menu: [{
        title: "✏️ 修改局部数值",
        val: "size_edit",
        icon: {
          name: "pencil",
          color: "#007AFF"
        },
        desc: "进入单独调整",
        onClick: async () => {
          await this.renderAppView([{
            title: "局部缩放 (百分比)",
            menu: _0x31aafb
          }]);
          this.saveSettings(false);
        }
      }, {
        title: "↩️ 恢复默认",
        val: "size_reset",
        icon: {
          name: "arrow.counterclockwise",
          color: "#FF3B30"
        },
        desc: "重置当前套系字体",
        onClick: async () => {
          _0x386b57.forEach(_0x53f469 => this.settings[_0x321702 + "_size_" + _0x53f469.id] = "100");
          this.settings.global_font_size = "100";
          this.saveSettings(false);
          this.notify("已恢复", "字体大小已重置");
        }
      }]
    }]);
  }
  async handleColorMenu(_0x5689f5) {
    const _0x4b6909 = [{
      id: "greeting",
      t: "问候语"
    }, {
      id: "lotteryTitle",
      t: "彩票标题"
    }, {
      id: "lotteryInfo",
      t: "今日开奖状态"
    }, {
      id: "date",
      t: "公历日期"
    }, {
      id: "lunar",
      t: "农历日期"
    }, {
      id: "info",
      t: "电量与定位"
    }, {
      id: "weather",
      t: "天气描述"
    }, {
      id: "weatherLarge",
      t: "大温度数字"
    }, {
      id: "poetry",
      t: "诗词与预报"
    }, {
      id: "timeInfo",
      t: "底部时间条"
    }, {
      id: "calendar",
      t: "月历区域"
    }];
    if (_0x5689f5 === "s3") {
      _0x4b6909.push({
        id: "holiday",
        t: "节日倒数"
      });
    }
    if (_0x5689f5 === "s4") {
      _0x4b6909.push({
        id: "schedule_title",
        t: "日程标题"
      });
      _0x4b6909.push({
        id: "schedule_bg",
        t: "日程背景(底框)"
      });
      for (let _0x350c8f = 1; _0x350c8f <= 6; _0x350c8f++) {
        _0x4b6909.push({
          id: "schedule_item_" + _0x350c8f,
          t: "日程列表-第" + _0x350c8f + "行"
        });
      }
    }
    const _0x575303 = _0x4b6909.map(_0x33c1c9 => ({
      title: _0x33c1c9.t,
      type: "color",
      val: _0x5689f5 + "_color_" + _0x33c1c9.id
    }));
    await this.renderAppView([{
      title: "颜色配置 (" + _0x5689f5 + ")",
      menu: [{
        title: "🎨 修改颜色",
        val: "color_edit",
        icon: {
          name: "paintpalette",
          color: "#007AFF"
        },
        desc: "进入选色页面",
        onClick: async () => {
          await this.renderAppView([{
            title: "自定义颜色",
            menu: _0x575303
          }]);
          this.saveSettings(false);
        }
      }, {
        title: "↩️ 恢复默认",
        val: "color_reset",
        icon: {
          name: "arrow.counterclockwise",
          color: "#FF3B30"
        },
        desc: "重置当前套系颜色",
        onClick: async () => {
          _0x4b6909.forEach(_0x26436d => this.settings[_0x5689f5 + "_color_" + _0x26436d.id] = baseConfigKeys["color_" + _0x26436d.id]);
          this.saveSettings(false);
          this.notify("已恢复", "颜色已重置");
        }
      }]
    }]);
  }
  async handleBackgroundMenu(_0x5c4654) {
    const _0x3512d9 = "bg_" + _0x5c4654 + ".jpg";
    const _0x40fcd2 = "bg_" + _0x5c4654 + "_day.jpg";
    const _0x34fb19 = "bg_" + _0x5c4654 + "_night.jpg";
    await this.renderAppView([{
      title: "背景模式 (" + _0x5c4654 + ")",
      menu: [{
        title: "🪄 制作透明背景",
        val: "bg_make_transparent",
        icon: {
          name: "wand.and.stars",
          color: "#FF2D55"
        },
        desc: "加载最新云端算法制作",
        onClick: async () => await this.loadAndRunEditor(_0x5c4654)
      }, {
        title: "☀️ 白天模式 - 图片",
        val: "bg_select_day",
        icon: {
          name: "sun.max.fill",
          color: "#FF9500"
        },
        desc: "选择白天显示的图片",
        onClick: async () => {
          try {
            let _0x4b5794 = await Photos.fromLibrary();
            ConfigManager.saveImg(_0x40fcd2, _0x4b5794);
            ConfigManager.saveImg(_0x3512d9, _0x4b5794);
            this.notify("成功", "白天图片已保存");
          } catch (_0x4d01b5) {}
        }
      }, {
        title: "🌙 夜间模式 - 图片",
        val: "bg_select_night",
        icon: {
          name: "moon.fill",
          color: "#5856D6"
        },
        desc: "选择深色模式图片",
        onClick: async () => {
          try {
            let _0x1a58b5 = await Photos.fromLibrary();
            ConfigManager.saveImg(_0x34fb19, _0x1a58b5);
            this.notify("成功", "夜间图片已保存");
          } catch (_0x18ae93) {}
        }
      }, {
        title: "☀️ 白天 - 颜色1 (主色)",
        type: "color",
        val: _0x5c4654 + "_color_bg_day",
        desc: "无图片时显示"
      }, {
        title: "☀️ 白天 - 颜色2 (渐变)",
        type: "color",
        val: _0x5c4654 + "_color_bg_2_day",
        desc: "可选: 设置后显示渐变"
      }, {
        title: "🌙 夜间 - 颜色1 (主色)",
        type: "color",
        val: _0x5c4654 + "_color_bg_night",
        desc: "无图片时显示"
      }, {
        title: "🌙 夜间 - 颜色2 (渐变)",
        type: "color",
        val: _0x5c4654 + "_color_bg_2_night",
        desc: "可选: 设置后显示渐变"
      }, {
        title: "🗑 清除所有图片",
        val: "bg_clear",
        icon: {
          name: "trash",
          color: "#FF3B30"
        },
        desc: "恢复纯色背景",
        onClick: async () => {
          ConfigManager.rmImg(_0x3512d9);
          ConfigManager.rmImg(_0x40fcd2);
          ConfigManager.rmImg(_0x34fb19);
          this.notify("成功", "背景已清除");
        }
      }]
    }]);
    this.saveSettings(false);
  }
  async loadAndRunEditor(_0x1c0920) {
    const _0x21a03e = "https://raw.githubusercontent.com/loveyuwy/huohua/refs/heads/main/TransparencyEditor.js";
    const _0x2da1f7 = FileManager.local();
    const _0x17457d = _0x2da1f7.joinPath(_0x2da1f7.libraryDirectory(), "Caishow_Editor_Cache.js");
    try {
      this.notify("⏳ 加载中", "正在拉取最新编辑器...");
      const _0x104bd9 = new Request(_0x21a03e);
      _0x104bd9.headers = {
        "Cache-Control": "no-cache"
      };
      const _0x29a065 = await _0x104bd9.loadString();
      _0x2da1f7.writeString(_0x17457d, _0x29a065);
      const _0x10490e = importModule(_0x17457d);
      await _0x10490e(this, ConfigManager, _0x1c0920);
    } catch (_0x3cfbac) {
      console.error(_0x3cfbac);
      const _0x3fc9dd = new Alert();
      _0x3fc9dd.title = "加载失败";
      _0x3fc9dd.message = "无法连接 GitHub 获取编辑器代码，请检查网络或 URL 配置。\n\n" + _0x3cfbac.message;
      _0x3fc9dd.addAction("确定");
      await _0x3fc9dd.presentAlert();
    }
  }
  async setBasicConfig() {
    const _0xd2183b = async () => {
      try {
        const _0xd8ed6 = await Location.current();
        const _0xf0aca = await Location.reverseGeocode(_0xd8ed6.latitude, _0xd8ed6.longitude, "zh_cn");
        this.settings.fixedLat = String(_0xd8ed6.latitude);
        this.settings.fixedLng = String(_0xd8ed6.longitude);
        this.settings.fixedCity = _0xf0aca[0].locality;
        this.settings.fixedSubCity = _0xf0aca[0].subLocality;
        this.saveSettings(false);
        this.notify("定位成功", "已保存");
        await this.setBasicConfig();
      } catch (_0x1a44cd) {
        this.notify("定位失败", _0x1a44cd.message);
        await this.setBasicConfig();
      }
    };
    const _0xcc2e6c = [{
      title: "刷新间隔(分)",
      type: "input",
      val: "refreshInterval",
      placeholder: "60"
    }, {
      title: "📍 获取定位",
      val: "get_location_btn",
      icon: {
        name: "location",
        color: "#007AFF"
      },
      onClick: _0xd2183b
    }, {
      title: "锁定定位",
      type: "switch",
      val: "lockLocation"
    }];
    await this.renderAppView([{
      title: "基础设置 (全局生效)",
      menu: _0xcc2e6c
    }, {
      title: "固定坐标",
      menu: [{
        title: "经度",
        type: "input",
        val: "fixedLng"
      }, {
        title: "纬度",
        type: "input",
        val: "fixedLat"
      }, {
        title: "城市",
        type: "input",
        val: "fixedCity"
      }, {
        title: "区域",
        type: "input",
        val: "fixedSubCity"
      }]
    }]);
    this.saveSettings(false);
  }
  async handleStyleSwitch() {
    const _0xed821 = ConfigManager.load();
    this.settings = Object.assign({}, this.defaultData, _0xed821);
    const _0x41b029 = [{
      t: "第一套(三天天气)",
      v: "classic"
    }, {
      t: "第二套(七天天气)",
      v: "modern"
    }, {
      t: "第三套(节日倒计时)",
      v: "holiday"
    }, {
      t: "第四套(日历事件)",
      v: "schedule"
    }];
    const _0x30cda0 = this.settings.styleModel || "classic";
    await this.renderAppView([{
      title: "选择组件样式",
      menu: _0x41b029.map(_0x3395db => ({
        title: (_0x30cda0 === _0x3395db.v ? "✅ " : "") + _0x3395db.t,
        val: "style_" + _0x3395db.v,
        icon: {
          name: "circle.grid.2x2",
          color: "#5856D6"
        },
        onClick: async () => {
          const _0x3f7fd5 = new Alert();
          _0x3f7fd5.title = "确认切换？";
          _0x3f7fd5.message = "即将切换为：" + _0x3395db.t + "\n\n切换后请点击脚本右下角的“运行”按钮以刷新预览。";
          _0x3f7fd5.addAction("确认切换");
          _0x3f7fd5.addCancelAction("取消");
          const _0x58d455 = await _0x3f7fd5.presentAlert();
          _0x58d455 === 0 && (this.settings.styleModel = _0x3395db.v, this.saveSettings(false), this.notify("✅ 样式已切换", "当前模式：" + _0x3395db.t + " (请重新运行)"));
        }
      }))
    }]);
  }
  async setKeyConfig() {
    await this.setBasicConfig();
  }
  async setRefreshConfig() {
    await this.setBasicConfig();
  }
  async fetchData() {
    const _0x3f82ff = ConfigManager.load();
    this.settings = Object.assign({}, this.defaultData, _0x3f82ff);
    let _0x3cb4cf = {
      latitude: 39.9,
      longitude: 116.4,
      locality: "定位中",
      subLocality: ""
    };
    const _0x45d758 = this.settings.lockLocation === true || this.settings.lockLocation === "true";
    if (_0x45d758) {
      this.settings.fixedLat && this.settings.fixedLng && (_0x3cb4cf = {
        latitude: this.settings.fixedLat,
        longitude: this.settings.fixedLng,
        locality: this.settings.fixedCity || "固定",
        subLocality: this.settings.fixedSubCity || "位置"
      });
    } else {
      try {
        let _0x25c45c = await Location.current();
        let _0x28ebe6 = await Location.reverseGeocode(_0x25c45c.latitude, _0x25c45c.longitude, "zh_cn");
        _0x3cb4cf = {
          latitude: _0x25c45c.latitude,
          longitude: _0x25c45c.longitude,
          locality: _0x28ebe6[0].locality,
          subLocality: _0x28ebe6[0].subLocality
        };
        ConfigManager.saveCache("location_cache.json", _0x3cb4cf);
        this.settings.fixedLat = String(_0x25c45c.latitude);
        this.settings.fixedLng = String(_0x25c45c.longitude);
        this.settings.fixedCity = _0x28ebe6[0].locality;
        this.settings.fixedSubCity = _0x28ebe6[0].subLocality;
        this.saveSettings(false);
      } catch (_0x13aec6) {
        const _0x167cf7 = ConfigManager.readCache("location_cache.json");
        if (_0x167cf7) {
          _0x3cb4cf = _0x167cf7;
        } else {
          _0x3cb4cf.locality = "定位失败";
        }
      }
    }
    this.location = _0x3cb4cf;
    let _0x77e476 = {};
    try {
      const _0x43303c = "https://api.open-meteo.com/v1/forecast?latitude=" + _0x3cb4cf.latitude + "&longitude=" + _0x3cb4cf.longitude + "&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto&forecast_days=14";
      const _0x13e1c8 = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=" + _0x3cb4cf.latitude + "&longitude=" + _0x3cb4cf.longitude + "&current=us_aqi&timezone=auto";
      const _0xd8d736 = new Request(_0x43303c);
      _0xd8d736.timeoutInterval = 8;
      const _0x144dd0 = new Request(_0x13e1c8);
      _0x144dd0.timeoutInterval = 8;
      const [_0xbf9a82, _0x254afd] = await Promise.all([_0xd8d736.loadJSON(), _0x144dd0.loadJSON()]);
      _0x77e476 = this.processOpenMeteo(_0xbf9a82, _0x254afd);
      if (_0x77e476.temp) {
        ConfigManager.saveCache("weather_cache.json", _0x77e476);
      }
    } catch (_0x552b28) {
      const _0x57f357 = ConfigManager.readCache("weather_cache.json");
      if (_0x57f357) {
        _0x77e476 = _0x57f357;
      }
    }
    let _0x1e728f = {};
    let _0xe9d24e = this.settings.styleModel === "modern" || args.widgetParameter && args.widgetParameter.indexOf("style2") > -1;
    if (!_0xe9d24e) {
      try {
        const _0x2b9f53 = new Request("https://v2.jinrishici.com/sentence");
        _0x2b9f53.timeoutInterval = 5;
        const _0x26743c = await _0x2b9f53.loadJSON();
        _0x1e728f = _0x26743c.data ? _0x26743c : {};
      } catch (_0x1a874d) {}
    }
    let _0xdd11c6 = [];
    try {
      const _0x192330 = await CalendarEvent.today([]);
      _0xdd11c6 = _0x192330.filter(_0x2c98dd => !_0x2c98dd.title.startsWith("Canceled")).map(_0x1925fb => ({
        title: _0x1925fb.title
      }));
    } catch (_0x490030) {}
    const _0xc6d04e = await this.fetchLotteryData();
    return {
      weather: _0x77e476,
      poetry: _0x1e728f,
      schedules: _0xdd11c6,
      lottery: _0xc6d04e
    };
  }
  async fetchLotteryData() {
    let _0x1c4d92 = this.settings.lottery_type || "dlt";
    if (!_0x1c4d92 || _0x1c4d92 === "none") {
      return null;
    }
    if (_0x1c4d92.includes("双色球") || _0x1c4d92.includes("SSQ")) {
      _0x1c4d92 = "ssq";
    } else {
      if (_0x1c4d92.includes("大乐透") || _0x1c4d92.includes("DLT")) {
        _0x1c4d92 = "dlt";
      } else {
        if (_0x1c4d92.includes("排列三") || _0x1c4d92.includes("PL3")) {
          _0x1c4d92 = "pl3";
        } else {
          if (_0x1c4d92.includes("福彩3D") || _0x1c4d92.includes("FC3D")) {
            _0x1c4d92 = "fc3d";
          } else {
            if (_0x1c4d92.includes("七星彩") || _0x1c4d92.includes("QXC")) {
              _0x1c4d92 = "qxc";
            } else {
              if (_0x1c4d92.includes("七乐彩") || _0x1c4d92.includes("QLC")) {
                _0x1c4d92 = "qlc";
              } else {
                if (_0x1c4d92.includes("排列五") || _0x1c4d92.includes("PL5")) {
                  _0x1c4d92 = "pl5";
                }
              }
            }
          }
        }
      }
    }
    const _0x18ed63 = "lottery_cache_" + _0x1c4d92;
    const _0x24d75d = ConfigManager.readCache(_0x18ed63);
    if (_0x24d75d && _0x24d75d.timestamp && Date.now() - _0x24d75d.timestamp < 1800000 && _0x24d75d.data.pool) {
      return _0x24d75d.data;
    }
    let _0x29414b = {
      full: "",
      pool: "",
      type: _0x1c4d92
    };
    const _0xdb3849 = {
      ssq: "双色球",
      dlt: "大乐透",
      pl3: "排列三",
      fc3d: "福彩3D",
      qxc: "七星彩",
      qlc: "七乐彩",
      pl5: "排列五"
    };
    const _0xc1fb94 = _0xdb3849[_0x1c4d92] || "彩票";
    const _0x257710 = {
      dlt: 85,
      pl3: 35,
      pl5: 81,
      qxc: "04"
    };
    if (_0x257710[_0x1c4d92]) {
      try {
        const _0xd9ff35 = _0x257710[_0x1c4d92];
        const _0x581f69 = "https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=" + _0xd9ff35 + "&provinceId=0&pageSize=1&isVerify=1&pageNo=1";
        const _0x5589dd = new Request(_0x581f69);
        const _0x5c4a3a = await _0x5589dd.loadJSON();
        if (_0x5c4a3a && _0x5c4a3a.success && _0x5c4a3a.value && _0x5c4a3a.value.list && _0x5c4a3a.value.list.length > 0) {
          const _0x505d4b = _0x5c4a3a.value.list[0];
          let _0x5b7f7e = _0x505d4b.lotteryDrawResult.replace(/ /g, " ");
          if (_0x1c4d92 === "dlt") {
            const _0x43bebd = _0x505d4b.lotteryDrawResult.split(" ");
            _0x5b7f7e = _0x43bebd.slice(0, 5).join(" ") + " + " + _0x43bebd.slice(5).join(" ");
          }
          _0x29414b.full = _0xc1fb94 + " " + _0x505d4b.lotteryDrawNum + "期: " + _0x5b7f7e;
          let _0x5a186b = _0x505d4b.poolMoney || "0";
          _0x29414b.pool = this.formatMoney(_0x5a186b);
        }
      } catch (_0x5a1541) {
        console.log("Sporttery Error: " + _0x5a1541.message);
      }
    } else {
      try {
        let _0x53c0eb = _0x1c4d92;
        if (_0x1c4d92 === "fc3d") {
          _0x53c0eb = "3d";
        }
        const _0x5a8148 = "https://www.cwl.gov.cn/cwl_admin/front/cwlkj/search/kjxx/findDrawNotice?name=" + _0x53c0eb + "&issueCount=1";
        const _0x48a02f = new Request(_0x5a8148);
        _0x48a02f.headers = {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
          Referer: "https://www.cwl.gov.cn/",
          Accept: "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest"
        };
        const _0x3246e0 = await _0x48a02f.loadJSON();
        if (_0x3246e0 && _0x3246e0.result && _0x3246e0.result.length > 0) {
          const _0x3d6918 = _0x3246e0.result[0];
          let _0x53c592 = _0x3d6918.red;
          _0x3d6918.blue && _0x3d6918.blue.length > 0 && (_0x53c592 = _0x53c592 + " + " + _0x3d6918.blue);
          _0x53c592 = _0x53c592.replace(/,/g, " ");
          _0x29414b.full = _0xc1fb94 + " " + _0x3d6918.code + "期: " + _0x53c592;
          let _0x3bee74 = _0x3d6918.poolmoney || "0";
          _0x29414b.pool = this.formatMoney(_0x3bee74);
        }
      } catch (_0x551057) {
        console.log("CWL Error: " + _0x551057.message);
      }
    }
    if (_0x29414b.full) {
      ConfigManager.saveCache(_0x18ed63, {
        data: _0x29414b,
        timestamp: Date.now()
      });
      return _0x29414b;
    }
    return null;
  }
  formatMoney(_0x5b64b0) {
    let _0x563999 = parseFloat(_0x5b64b0.replace(/,/g, ""));
    if (isNaN(_0x563999)) {
      return "统计中";
    }
    if (_0x563999 > 100000000) {
      return (_0x563999 / 100000000).toFixed(2) + "亿";
    } else {
      if (_0x563999 > 10000) {
        return (_0x563999 / 10000).toFixed(1) + "万";
      }
    }
    return _0x563999 + "元";
  }
  getLotterySchedule(_0x498397) {
    const _0x4924ef = new Date().getDay();
    const _0x49edfc = {
      ssq: [0, 2, 4],
      dlt: [1, 3, 6],
      qlc: [1, 3, 5],
      qxc: [0, 2, 5],
      fc3d: [0, 1, 2, 3, 4, 5, 6],
      pl3: [0, 1, 2, 3, 4, 5, 6],
      pl5: [0, 1, 2, 3, 4, 5, 6]
    };
    let _0x551064 = "21:30";
    if (["ssq", "qlc", "fc3d"].includes(_0x498397)) {
      _0x551064 = "21:15";
    }
    return _0x49edfc[_0x498397] && _0x49edfc[_0x498397].includes(_0x4924ef) ? "今日开奖: " + _0x551064 : "今日不开奖";
  }
  processOpenMeteo(_0x3bbf03, _0x5395c1) {
    if (!_0x3bbf03 || !_0x3bbf03.current || !_0x3bbf03.daily) {
      return {};
    }
    let _0x553fe3 = {
      temp: Math.round(_0x3bbf03.current.apparent_temperature),
      hum: _0x3bbf03.current.relative_humidity_2m + "%",
      ico: this.wmCodeToIcon(_0x3bbf03.current.weather_code, _0x3bbf03.current.is_day)
    };
    _0x3bbf03.daily.uv_index_max && _0x3bbf03.daily.uv_index_max[0] !== undefined ? _0x553fe3.uv = Math.round(_0x3bbf03.daily.uv_index_max[0]) : _0x553fe3.uv = "-";
    _0x5395c1 && _0x5395c1.current && _0x5395c1.current.us_aqi !== undefined ? _0x553fe3.aqi = this.airQuality(_0x5395c1.current.us_aqi) : _0x553fe3.aqi = "-";
    const _0x3d6925 = _0x3bbf03.current.temperature_2m;
    if (_0x3d6925 <= 5) {
      _0x553fe3.comfort = "寒冷";
    } else {
      if (_0x3d6925 <= 15) {
        _0x553fe3.comfort = "凉爽";
      } else {
        if (_0x3d6925 <= 26) {
          _0x553fe3.comfort = "舒适";
        } else {
          if (_0x3d6925 <= 32) {
            _0x553fe3.comfort = "炎热";
          } else {
            _0x553fe3.comfort = "酷热";
          }
        }
      }
    }
    if (_0x3bbf03.daily.sunrise && _0x3bbf03.daily.sunrise[0]) {
      _0x553fe3.sunrise = _0x3bbf03.daily.sunrise[0].split("T")[1];
    } else {
      _0x553fe3.sunrise = "--:--";
    }
    if (_0x3bbf03.daily.sunset && _0x3bbf03.daily.sunset[0]) {
      _0x553fe3.sunset = _0x3bbf03.daily.sunset[0].split("T")[1];
    } else {
      _0x553fe3.sunset = "--:--";
    }
    _0x3bbf03.daily.temperature_2m_min && _0x3bbf03.daily.temperature_2m_min[0] !== undefined ? (_0x553fe3.min = Math.round(_0x3bbf03.daily.temperature_2m_min[0]), _0x553fe3.max = Math.round(_0x3bbf03.daily.temperature_2m_max[0])) : (_0x553fe3.min = "-", _0x553fe3.max = "-");
    const _0x3f1346 = {
      0: "晴朗",
      1: "多云",
      2: "多云",
      3: "阴",
      45: "雾",
      51: "小雨",
      61: "雨",
      71: "雪",
      95: "雷雨"
    };
    let _0x3eb337 = _0x3f1346[_0x3bbf03.current.weather_code] || "有雨";
    _0x553fe3.desc = "今日" + _0x3eb337 + "，最高" + _0x553fe3.max + "°，最低" + _0x553fe3.min + "°";
    _0x553fe3.alertTitle = "";
    _0x553fe3.future = [];
    for (let _0x33924b = 1; _0x33924b < 14; _0x33924b++) {
      try {
        if (!_0x3bbf03.daily.time[_0x33924b]) {
          break;
        }
        let _0x33f25a = _0x3bbf03.daily.time[_0x33924b];
        let _0x3fdc54 = parseInt(_0x33f25a.split("-")[2]);
        _0x553fe3.future.push({
          day: _0x3fdc54 + "日",
          min: Math.round(_0x3bbf03.daily.temperature_2m_min[_0x33924b]),
          max: Math.round(_0x3bbf03.daily.temperature_2m_max[_0x33924b]),
          ico: this.wmCodeToIcon(_0x3bbf03.daily.weather_code[_0x33924b], 1)
        });
      } catch (_0x3f11ca) {}
    }
    return _0x553fe3;
  }
  wmCodeToIcon(_0x58632b, _0x408c0e) {
    const _0x3f4148 = {
      0: _0x408c0e ? "sun.max.fill" : "moon.fill",
      1: _0x408c0e ? "cloud.sun.fill" : "cloud.moon.fill",
      2: _0x408c0e ? "cloud.sun.fill" : "cloud.moon.fill",
      3: "cloud.fill",
      45: "cloud.fog.fill",
      48: "cloud.fog.fill",
      51: "cloud.drizzle.fill",
      53: "cloud.drizzle.fill",
      55: "cloud.drizzle.fill",
      61: "cloud.rain.fill",
      63: "cloud.rain.fill",
      65: "cloud.rain.fill",
      80: "cloud.rain.fill",
      81: "cloud.rain.fill",
      82: "cloud.rain.fill",
      71: "cloud.snow.fill",
      73: "cloud.snow.fill",
      75: "cloud.snow.fill",
      95: "cloud.bolt.rain.fill",
      96: "cloud.bolt.rain.fill",
      99: "cloud.bolt.rain.fill"
    };
    return _0x3f4148[_0x58632b] || "cloud.fill";
  }
  async render() {
    const _0x571865 = ConfigManager.load();
    this.settings = Object.assign({}, this.defaultData, _0x571865);
    const _0x25bae9 = await this.fetchData();
    const _0x285c60 = new ListWidget();
    let _0x58698b = this.settings.styleModel || "classic";
    if (!config.runsInApp && args.widgetParameter) {
      if (args.widgetParameter.indexOf("style2") > -1) {
        _0x58698b = "modern";
      }
      if (args.widgetParameter.indexOf("style3") > -1) {
        _0x58698b = "holiday";
      }
      if (args.widgetParameter.indexOf("style4") > -1) {
        _0x58698b = "schedule";
      }
    }
    if (_0x58698b === "modern") {
      this.activePrefix = "s2_";
    } else {
      if (_0x58698b === "holiday") {
        this.activePrefix = "s3_";
      } else {
        _0x58698b === "schedule" ? this.activePrefix = "s4_" : this.activePrefix = "s1_";
      }
    }
    let _0x580966 = parseInt(this.settings.refreshInterval) || 60;
    if (_0x580966 < 5) {
      _0x580966 = 5;
    }
    _0x285c60.refreshAfterDate = new Date(new Date().getTime() + _0x580966 * 60000);
    const _0x4c1f6c = Device.isUsingDarkAppearance();
    const _0x58d3ef = _0x4c1f6c ? "_night" : "_day";
    const _0x4cd237 = "bg_" + this.activePrefix.replace("_", "") + ".jpg";
    const _0x3380d6 = "bg_" + this.activePrefix.replace("_", "") + _0x58d3ef + ".jpg";
    let _0x281f70 = ConfigManager.getImg(_0x3380d6);
    if (!_0x281f70) {
      _0x281f70 = ConfigManager.getImg(_0x4cd237);
    }
    if (_0x281f70) {
      _0x285c60.backgroundImage = _0x281f70;
    } else {
      let _0xd7d59 = _0x4c1f6c ? this.activePrefix + "color_bg_night" : this.activePrefix + "color_bg_day";
      let _0x432627 = _0x4c1f6c ? this.activePrefix + "color_bg_2_night" : this.activePrefix + "color_bg_2_day";
      let _0x1348fd = this.settings[_0xd7d59] || this.settings[this.activePrefix + "color_bg"] || "#000000";
      let _0x6cbae3 = this.settings[_0x432627] || this.settings[this.activePrefix + "color_bg_2"];
      if (_0x6cbae3 && _0x6cbae3.length > 0) {
        let _0x12cd66 = new LinearGradient();
        _0x12cd66.colors = [new Color(_0x1348fd), new Color(_0x6cbae3)];
        _0x12cd66.locations = [0, 1];
        _0x285c60.backgroundGradient = _0x12cd66;
      } else {
        _0x285c60.backgroundColor = new Color(_0x1348fd);
      }
    }
    _0x285c60.setPadding(10, 4, 5, 4);
    if (this.widgetFamily === "medium") {
      await this.renderMedium(_0x285c60, _0x25bae9);
    } else {
      await this.renderLarge(_0x285c60, _0x25bae9);
    }
    return _0x285c60;
  }
  async renderMedium(_0x618e0f, _0x1f702b) {
    let _0x7991a4 = _0x618e0f.addStack();
    _0x7991a4.layoutHorizontally();
    _0x7991a4.centerAlignContent();
    let _0x6485ec = _0x7991a4.addStack();
    _0x6485ec.layoutVertically();
    this.applyLayout(_0x6485ec, "med_left", {
      t: 0,
      l: 8,
      b: 0,
      r: 0
    });
    await this.renderInfoSide(_0x6485ec, _0x1f702b);
    _0x7991a4.addSpacer();
    let _0x50c7c9 = _0x7991a4.addStack();
    _0x50c7c9.size = new Size(this.s(110, "weather"), 0);
    _0x50c7c9.layoutVertically();
    this.applyLayout(_0x50c7c9, "med_right", {
      t: 0,
      l: 0,
      b: 0,
      r: 5
    });
    await this.renderWeatherSide(_0x50c7c9, _0x1f702b.weather);
  }
  async renderLarge(_0x1e1f70, _0x211d4e) {
    const _0x1b8633 = this.activePrefix === "s3_";
    const _0x1b27a1 = this.activePrefix === "s4_";
    const _0x27119a = _0x1b8633 || _0x1b27a1;
    let _0x1bf22b = _0x1e1f70.addStack();
    _0x1bf22b.layoutHorizontally();
    _0x1bf22b.size = new Size(0, this.s(_0x27119a ? 149 : 149, "weather"));
    let _0x27c465 = _0x1bf22b.addStack();
    _0x27c465.layoutVertically();
    this.applyLayout(_0x27c465, "lg_tl", {
      t: 0,
      l: 8,
      b: 0,
      r: 0
    });
    await this.renderInfoSide(_0x27c465, _0x211d4e);
    _0x1bf22b.addSpacer();
    let _0x116ab6 = _0x1bf22b.addStack();
    _0x116ab6.size = new Size(this.s(110, "weather"), 0);
    _0x116ab6.layoutVertically();
    this.applyLayout(_0x116ab6, "lg_tr", {
      t: 0,
      l: 0,
      b: 0,
      r: 5
    });
    await this.renderWeatherSide(_0x116ab6, _0x211d4e.weather);
    _0x1e1f70.addSpacer(_0x27119a ? 0 : 4);
    let _0x27c13a = _0x1e1f70.addStack();
    _0x27c13a.layoutVertically();
    this.applyLayout(_0x27c13a, "lg_mid", {
      t: 0,
      l: 0,
      b: 0,
      r: 0
    });
    await this.renderTimeInfo(_0x27c13a);
    if (_0x27119a) {
      let _0xfea7ca = _0x1e1f70.addStack();
      _0xfea7ca.layoutHorizontally();
      let _0x5473c2 = _0xfea7ca.addStack();
      _0x5473c2.layoutVertically();
      _0x1b8633 ? (this.applyLayout(_0x5473c2, "lg_holiday", {
        t: 0,
        l: 5,
        b: 0,
        r: 0
      }), await this.renderHolidayBox(_0x5473c2)) : (this.applyLayout(_0x5473c2, "lg_schedule", {
        t: 0,
        l: 5,
        b: 0,
        r: 0
      }), await this.renderScheduleBox(_0x5473c2, _0x211d4e.schedules));
      _0xfea7ca.addSpacer();
      let _0x5741e5 = _0xfea7ca.addStack();
      _0x5741e5.layoutVertically();
      let _0x2499a5 = _0x5741e5.addStack();
      _0x2499a5.layoutVertically();
      this.applyLayout(_0x2499a5, "lg_week", {
        t: 0,
        l: 18,
        b: 0,
        r: 0
      });
      await this.renderWeekRow(_0x2499a5);
      let _0x24f835 = _0x5741e5.addStack();
      _0x24f835.layoutVertically();
      this.applyLayout(_0x24f835, "lg_cal", {
        t: 0,
        l: 18,
        b: 0,
        r: 0
      });
      await this.renderCalendarGrid(_0x24f835);
    } else {
      _0x1e1f70.addSpacer(4);
      let _0x24f842 = _0x1e1f70.addStack();
      _0x24f842.layoutVertically();
      this.applyLayout(_0x24f842, "lg_week", {
        t: 0,
        l: 0,
        b: 0,
        r: 0
      });
      await this.renderWeekRow(_0x24f842);
      let _0x190e48 = _0x1e1f70.addStack();
      _0x190e48.layoutVertically();
      this.applyLayout(_0x190e48, "lg_cal", {
        t: 0,
        l: 0,
        b: 0,
        r: 0
      });
      await this.renderCalendarGrid(_0x190e48);
    }
    _0x1e1f70.addSpacer();
  }
  async renderHolidayBox(_0x192608) {
    _0x192608.centerAlignContent();
    let _0x2ccc4f = _0x192608.addStack();
    _0x2ccc4f.size = new Size(this.s(110, "holiday"), 0);
    _0x2ccc4f.layoutVertically();
    let _0xdec34d = parseFloat(this.settings[this.activePrefix + "space_holiday_h"] || 2);
    let _0x2442ac = _0x2ccc4f.addStack();
    _0x2442ac.centerAlignContent();
    let _0xc6b9b7 = this.s(15, "holiday");
    let _0xf991a7 = _0x2442ac.addImage(this.getSFIco("gift.fill"));
    _0xf991a7.imageSize = new Size(_0xc6b9b7, _0xc6b9b7);
    _0xf991a7.tintColor = new Color("#FF5555");
    _0x2442ac.addSpacer(4);
    this.addText(_0x2442ac, "节日倒数", 17, "holiday", true);
    _0x2ccc4f.addSpacer(_0xdec34d);
    const _0x11002d = this.getNextHolidays();
    for (let _0x5589d2 of _0x11002d) {
      let _0x5851ff = _0x2ccc4f.addStack();
      _0x5851ff.centerAlignContent();
      this.addText(_0x5851ff, _0x5589d2.name, 17, "holiday");
      _0x5851ff.addSpacer();
      let _0x57f36f = _0x5851ff.addStack();
      _0x57f36f.backgroundColor = _0x5589d2.days === 0 ? new Color("#FF5555") : new Color("#ffffff", 0.2);
      _0x57f36f.cornerRadius = 3;
      _0x57f36f.setPadding(1, 4, 1, 4);
      let _0x58520c = _0x57f36f.addText(_0x5589d2.days === 0 ? "今天" : _0x5589d2.days + "天");
      _0x58520c.font = Font.boldSystemFont(this.s(13, "holiday"));
      _0x58520c.textColor = _0x5589d2.days === 0 ? Color.white() : this.getConfColor("holiday");
      _0x2ccc4f.addSpacer(_0xdec34d);
    }
  }
  async renderScheduleBox(_0x4c0681, _0x58bdf8) {
    _0x4c0681.centerAlignContent();
    let _0x3f6978 = _0x4c0681.addStack();
    _0x3f6978.size = new Size(this.s(100, "schedule_title"), 0);
    _0x3f6978.layoutVertically();
    let _0x58c0c4 = parseFloat(this.settings[this.activePrefix + "space_schedule_h"] || 2);
    let _0x5759b1 = parseInt(this.settings[this.activePrefix + "schedule_count"]) || 3;
    let _0x3e1be1 = this.settings[this.activePrefix + "schedule_offset"] || "";
    let _0x55f29f = new Set(_0x3e1be1.replace(/，/g, ",").split(/[, ]+/).map(_0x43f9c7 => parseInt(_0x43f9c7)).filter(_0x5a5640 => !isNaN(_0x5a5640) && _0x5a5640 > 0).map(_0x5bba58 => _0x5bba58 - 1));
    let _0x55c2f1 = this.settings[this.activePrefix + "schedule_keyword"];
    let _0x5c1749 = _0x58bdf8;
    _0x55c2f1 && _0x55c2f1.trim() !== "" && (_0x5c1749 = _0x58bdf8.filter(_0x43e33b => _0x43e33b.title.includes(_0x55c2f1)));
    let _0x5bb8ac = _0x58bdf8.filter((_0x470ad1, _0x45a6ba) => !_0x55f29f.has(_0x45a6ba));
    let _0x4f02b1 = _0x3f6978.addStack();
    _0x4f02b1.centerAlignContent();
    let _0x35ae84 = this.s(15, "schedule_title");
    let _0x426301 = _0x4f02b1.addImage(this.getSFIco("calendar.badge.clock"));
    _0x426301.imageSize = new Size(_0x35ae84, _0x35ae84);
    _0x426301.tintColor = new Color("#55BEF0");
    _0x4f02b1.addSpacer(4);
    this.addText(_0x4f02b1, "日程安排", 17, "schedule_title", true);
    _0x3f6978.addSpacer(_0x58c0c4);
    if (_0x5bb8ac.length === 0) {
      let _0x5d7dcb = _0x3f6978.addStack();
      _0x5d7dcb.centerAlignContent();
      this.addText(_0x5d7dcb, "无后续安排", 12.2, "schedule_item");
    } else {
      let _0x5d4e1d = _0x3f6978.addStack();
      _0x5d4e1d.layoutVertically();
      let _0x2aa5ca = this.activePrefix + "color_schedule_bg";
      let _0x250eae = this.settings[_0x2aa5ca];
      if (!_0x250eae) {
        _0x250eae = "#666666";
      }
      let _0x1858ad;
      try {
        let _0x24b01e = new Color(_0x250eae);
        _0x1858ad = new Color(_0x24b01e.hex, 0.3);
      } catch (_0x18c329) {
        _0x1858ad = new Color("#666666", 0.3);
      }
      _0x5d4e1d.backgroundColor = _0x1858ad;
      _0x5d4e1d.cornerRadius = 4;
      _0x5d4e1d.setPadding(4, 4, 4, 4);
      let _0x17fa1c = Math.min(_0x5bb8ac.length, _0x5759b1);
      for (let _0x23e592 = 0; _0x23e592 < _0x17fa1c; _0x23e592++) {
        let _0x2549a9 = _0x5bb8ac[_0x23e592];
        let _0x260862 = _0x5d4e1d.addStack();
        _0x260862.topAlignContent();
        let _0xcb7008 = _0x260862.addStack();
        _0xcb7008.setPadding(6, 0, 0, 0);
        let _0xe4dc6d = _0xcb7008.addStack();
        _0xe4dc6d.size = new Size(4, 4);
        _0xe4dc6d.cornerRadius = 2;
        let _0x262484;
        _0x23e592 < 6 ? _0x262484 = this.getConfColor("schedule_item_" + (_0x23e592 + 1)) : _0x262484 = new Color("#ffffff");
        _0xe4dc6d.backgroundColor = _0x262484;
        _0x260862.addSpacer(4);
        let _0x294c0e = _0x2549a9.title;
        let _0x27b547 = -1;
        if (_0x294c0e.includes("柴油")) {
          _0x27b547 = _0x294c0e.indexOf("柴油") + 2;
        } else {
          if (_0x294c0e.includes("汽油")) {
            _0x27b547 = _0x294c0e.indexOf("汽油") + 2;
          }
        }
        if (_0x27b547 > -1) {
          let _0xfde959 = _0x260862.addStack();
          _0xfde959.layoutVertically();
          let _0x3f5f46 = _0x294c0e.substring(0, _0x27b547);
          let _0x3fbdf0 = _0x294c0e.substring(_0x27b547).trim();
          this.addText(_0xfde959, _0x3f5f46, 12.2, "schedule_item", false, 0, 1, _0x262484);
          this.addText(_0xfde959, _0x3fbdf0, 12.2, "schedule_item", false, 0, 1, _0x262484);
        } else {
          let _0x331f9c = this.addText(_0x260862, _0x294c0e, 12.2, "schedule_item", false, 0, 2, _0x262484);
          _0x331f9c.lineLimit = 2;
        }
        _0x23e592 < _0x17fa1c - 1 && _0x5d4e1d.addSpacer(_0x58c0c4);
      }
    }
  }
  getNextHolidays() {
    const _0x32c0f2 = new Date();
    const _0x3eade0 = _0x32c0f2.getFullYear();
    const _0x337fa8 = [{
      name: "元旦",
      m: 1,
      d: 1
    }, {
      name: "情人节",
      m: 2,
      d: 14
    }, {
      name: "妇女节",
      m: 3,
      d: 8
    }, {
      name: "劳动节",
      m: 5,
      d: 1
    }, {
      name: "儿童节",
      m: 6,
      d: 1
    }, {
      name: "建军节",
      m: 8,
      d: 1
    }, {
      name: "教师节",
      m: 9,
      d: 10
    }, {
      name: "国庆节",
      m: 10,
      d: 1
    }, {
      name: "万圣节",
      m: 11,
      d: 1
    }, {
      name: "圣诞节",
      m: 12,
      d: 25
    }];
    const _0x3ea20d = {
      2025: ["01-29", "04-04", "05-31", "10-06"],
      2026: ["02-17", "04-05", "06-19", "09-25"],
      2027: ["02-06", "04-05", "06-09", "09-15"],
      2028: ["01-26", "04-04", "05-28", "10-03"],
      2029: ["02-13", "04-04", "06-16", "09-22"],
      2030: ["02-03", "04-05", "06-05", "09-12"],
      2031: ["01-23", "04-05", "06-24", "10-01"]
    };
    let _0x4035d8 = [];
    const _0x568c50 = (_0x55584d, _0x54f826, _0x5bb883) => new Date(_0x55584d, _0x54f826 - 1, _0x5bb883);
    const _0x57f362 = (_0x4fcb95, _0x5aedc7) => {
      const _0x5986b4 = _0x5aedc7.split(/[-/]/);
      return new Date(_0x4fcb95, parseInt(_0x5986b4[0]) - 1, parseInt(_0x5986b4[1]));
    };
    for (let _0x5a456d = _0x3eade0 - 1; _0x5a456d <= _0x3eade0 + 1; _0x5a456d++) {
      _0x5a456d >= _0x3eade0 && _0x337fa8.forEach(_0x5bc5a7 => {
        _0x4035d8.push({
          name: _0x5bc5a7.name,
          date: _0x568c50(_0x5a456d, _0x5bc5a7.m, _0x5bc5a7.d)
        });
      });
      if (_0x5a456d >= _0x3eade0 && _0x3ea20d[_0x5a456d]) {
        const [_0x5eed3e, _0x2c443d, _0x2f1262, _0x2c7733] = _0x3ea20d[_0x5a456d];
        let _0x2f6f1c = _0x57f362(_0x5a456d, _0x5eed3e);
        _0x4035d8.push({
          name: "春节",
          date: _0x2f6f1c
        });
        _0x4035d8.push({
          name: "除夕",
          date: new Date(_0x2f6f1c.getTime() - 86400000)
        });
        _0x4035d8.push({
          name: "元宵",
          date: new Date(_0x2f6f1c.getTime() + 1209600000)
        });
        _0x4035d8.push({
          name: "清明",
          date: _0x57f362(_0x5a456d, _0x2c443d)
        });
        _0x4035d8.push({
          name: "端午",
          date: _0x57f362(_0x5a456d, _0x2f1262)
        });
        _0x4035d8.push({
          name: "中秋",
          date: _0x57f362(_0x5a456d, _0x2c7733)
        });
      }
      let _0x43eef5 = this.settings[this.activePrefix + "birthday_list"] || "";
      if (_0x43eef5) {
        let _0x291ac4 = _0x43eef5.split("\n");
        for (let _0x2e5db2 of _0x291ac4) {
          _0x2e5db2 = _0x2e5db2.replace(/，/g, ",");
          let _0x2ebd0d = _0x2e5db2.split(",");
          if (_0x2ebd0d.length < 2) {
            continue;
          }
          let _0x297a1f = _0x2ebd0d[0].trim();
          let _0x28bb69 = _0x2ebd0d[1].trim();
          let _0x1d9c29 = _0x2ebd0d.length > 2 && (_0x2ebd0d[2].includes("农") || _0x2ebd0d[2].includes("Lunar")) ? "lunar" : "solar";
          let _0x1c0568 = _0x28bb69.split(/[-/]/);
          if (_0x1c0568.length !== 2) {
            continue;
          }
          let _0x5aee4e = parseInt(_0x1c0568[0]);
          let _0x2e0c1a = parseInt(_0x1c0568[1]);
          let _0x358919 = null;
          try {
            _0x1d9c29 === "lunar" ? _0x358919 = getSolarFromLunar(_0x5a456d, _0x5aee4e, _0x2e0c1a) : _0x358919 = _0x568c50(_0x5a456d, _0x5aee4e, _0x2e0c1a);
          } catch (_0x326184) {}
          _0x358919 && !isNaN(_0x358919.getTime()) && _0x4035d8.push({
            name: _0x297a1f,
            date: _0x358919
          });
        }
      }
    }
    let _0x401c51 = new Date();
    _0x401c51.setHours(0, 0, 0, 0);
    let _0x3d5417 = _0x4035d8.map(_0x2b113c => {
      if (!_0x2b113c.date) {
        return null;
      }
      let _0x846b4c = (_0x2b113c.date - _0x401c51) / 86400000;
      return {
        name: _0x2b113c.name,
        days: Math.ceil(_0x846b4c),
        date: _0x2b113c.date
      };
    }).filter(_0x8a60fb => _0x8a60fb && !isNaN(_0x8a60fb.days) && _0x8a60fb.days >= 0).sort((_0x1e5b2f, _0x18657f) => _0x1e5b2f.days - _0x18657f.days);
    let _0x552b35 = [];
    let _0x254b22 = new Set();
    for (let _0x1e67d9 of _0x3d5417) {
      let _0xdd36be = _0x1e67d9.name + "_" + _0x1e67d9.days;
      !_0x254b22.has(_0xdd36be) && (_0x254b22.add(_0xdd36be), _0x552b35.push(_0x1e67d9));
      if (_0x552b35.length >= 5) {
        break;
      }
    }
    return _0x552b35;
  }
  applyLayout(_0x2b1071, _0x14ce9a, _0x1aa169 = {
    t: 0,
    l: 0,
    b: 0,
    r: 0
  }) {
    let _0x150143 = parseInt(this.settings[this.activePrefix + "layout_" + _0x14ce9a + "_x"]) || 0;
    let _0x4779ef = parseInt(this.settings[this.activePrefix + "layout_" + _0x14ce9a + "_y"]) || 0;
    let _0x312a25 = _0x1aa169.t + _0x4779ef;
    let _0x117708 = _0x1aa169.l + _0x150143;
    let _0x176cb8 = _0x1aa169.b;
    let _0xd60c4e = _0x1aa169.r;
    _0x312a25 < 0 && (_0x176cb8 += Math.abs(_0x312a25), _0x312a25 = 0);
    _0x176cb8 < 0 && (_0x312a25 += Math.abs(_0x176cb8), _0x176cb8 = 0);
    _0x117708 < 0 && (_0xd60c4e += Math.abs(_0x117708), _0x117708 = 0);
    _0xd60c4e < 0 && (_0x117708 += Math.abs(_0xd60c4e), _0xd60c4e = 0);
    _0x2b1071.setPadding(_0x312a25, _0x117708, _0x176cb8, _0xd60c4e);
  }
  renderLotteryBalls(_0x1acaf8, _0x193438, _0x2ddb42, _0x179968 = false) {
    const _0x3421d8 = new Color("#FF3B30");
    const _0x30cd95 = new Color("#007AFF");
    let _0x309de7 = _0x193438.split("+");
    let _0x30fc90 = _0x309de7[0].trim().split(/[\s,]+/);
    let _0x3627a7 = [];
    _0x309de7.length > 1 && (_0x3627a7 = _0x309de7[1].trim().split(/[\s,]+/));
    let _0x4211a1 = this.s(14, "lotteryItem");
    let _0x4378b2 = Math.round(_0x4211a1 * (_0x179968 ? 1.5 : 1.7));
    const _0x59d261 = (_0x4375e7, _0x420ed5) => {
      if (!_0x4375e7 || _0x4375e7.trim() === "") {
        return;
      }
      let _0x43a595 = _0x1acaf8.addStack();
      _0x43a595.size = new Size(_0x4378b2, _0x4378b2);
      _0x43a595.cornerRadius = _0x4378b2 / 2;
      _0x43a595.backgroundColor = _0x420ed5;
      _0x43a595.centerAlignContent();
      let _0x46a374 = _0x43a595.addText(_0x4375e7);
      _0x46a374.font = Font.boldSystemFont(_0x4211a1);
      _0x46a374.textColor = Color.white();
      _0x1acaf8.addSpacer(_0x179968 ? 3 : 4);
    };
    for (let _0x404f1e of _0x30fc90) _0x59d261(_0x404f1e, _0x3421d8);
    for (let _0x470f7b of _0x3627a7) _0x59d261(_0x470f7b, _0x30cd95);
  }
  async renderInfoSide(_0x352e68, _0x4b87ab) {
    const _0x352b3d = this.activePrefix === "s2_";
    const _0x33c425 = this.settings[this.activePrefix + "show_battery"];
    const _0x33811c = this.settings[this.activePrefix + "show_poetry"];
    const _0x30833d = _0x33c425 === undefined || _0x33c425 === "true";
    const _0x36d793 = _0x33811c === undefined || _0x33811c === "true";
    const _0x301736 = new Date();
    let _0x3ccd32 = _0x352e68.addStack();
    _0x3ccd32.centerAlignContent();
    let _0x3c012a = this.settings.lottery_type && this.settings.lottery_type !== "none" && _0x4b87ab.lottery;
    if (_0x3c012a) {
      let _0x4a59de = _0x4b87ab.lottery.full.split(":");
      let _0x48f2cc = _0x4a59de[0];
      let _0x4a4387 = _0x4a59de.length > 1 ? _0x4a59de[1].trim() : "";
      this.addText(_0x3ccd32, _0x48f2cc, 14, "lotteryTitle", true);
      _0x3ccd32.addSpacer(25);
      let _0x4cd913 = _0x3ccd32.addStack();
      _0x4cd913.backgroundColor = new Color("#666666", 0.3);
      _0x4cd913.cornerRadius = 4;
      _0x4cd913.setPadding(1, 4, 1, 4);
      _0x4cd913.centerAlignContent();
      let _0x5811d0 = this.getLotterySchedule(_0x4b87ab.lottery.type);
      this.addText(_0x4cd913, _0x5811d0, 10, "lotteryInfo", false, 0, 1, this.getConfColor("lotteryInfo"));
      _0x352e68.addSpacer(2);
      let _0x4c27dc = _0x352e68.addStack();
      _0x4c27dc.centerAlignContent();
      this.renderLotteryBalls(_0x4c27dc, _0x4a4387, this.settings.lottery_type, _0x352b3d);
      if (_0x352b3d) {
        _0x352e68.addSpacer(2);
      }
    } else {
      this.addText(_0x3ccd32, this.getGreeting(_0x301736), 22, "greeting", true);
      let _0x58d085 = _0x352e68.addStack();
      _0x58d085.centerAlignContent();
      this.addText(_0x58d085, this.getDateStr(_0x301736), 16, "date");
      _0x58d085.addSpacer(4);
      let _0x3f792f = this.getLunarDate_Precise(_0x301736);
      this.addText(_0x58d085, _0x3f792f.month + _0x3f792f.day, 16, "lunar");
    }
    _0x352e68.addSpacer(2);
    let _0x3cbfe2 = _0x352e68.addStack();
    _0x3cbfe2.centerAlignContent();
    this.addText(_0x3cbfe2, weekTitle[_0x301736.getDay()], 16, "info");
    _0x30833d && (_0x3cbfe2.addSpacer(4), this.addText(_0x3cbfe2, "🔋" + Math.round(Device.batteryLevel() * 100) + "%", 15, "info"));
    _0x3cbfe2.addSpacer(4);
    let _0x561739 = this.location.locality || "";
    if (this.location.subLocality) {
      _0x561739 += " " + this.location.subLocality;
    }
    if (!_0x561739) {
      _0x561739 = "定位中";
    }
    this.addText(_0x3cbfe2, "📍" + _0x561739, 15, "info");
    let _0x54b322 = _0x4b87ab.weather.alertTitle || _0x4b87ab.weather.desc || "暂无数据";
    this.addText(_0x352e68, _0x54b322, 12, "weather", false, 2, 3);
    _0x352e68.addSpacer(2);
    let _0x565d44 = _0x352e68.addStack();
    _0x565d44.centerAlignContent();
    if (_0x4b87ab.weather.future && _0x4b87ab.weather.future.length > 0) {
      let _0x3375cf = _0x565d44.addStack();
      let _0x3f9580 = _0x352b3d || !_0x36d793;
      let _0x40e046 = _0x3f9580 ? 7 : 3;
      let _0xe37ee6 = Math.min(_0x4b87ab.weather.future.length, _0x40e046);
      let _0x11981c = _0x3f9580 ? 6 : 8;
      for (let _0x40e690 = 0; _0x40e690 < _0xe37ee6; _0x40e690++) {
        let _0x34f99c = _0x4b87ab.weather.future[_0x40e690];
        let _0x343ae6 = _0x3375cf.addStack();
        _0x343ae6.layoutVertically();
        _0x343ae6.centerAlignContent();
        if (_0x3f9580) {
          let _0x403f99 = _0x343ae6.addText(_0x34f99c.day);
          _0x403f99.font = Font.systemFont(this.s(9, "poetry"));
          _0x403f99.textColor = this.getConfColor("poetry");
          _0x343ae6.addSpacer(1);
          let _0x569c14 = this.s(13, "weather");
          let _0x4a98de = _0x343ae6.addImage(this.getSFIco(_0x34f99c.ico));
          _0x4a98de.imageSize = new Size(_0x569c14, _0x569c14);
          _0x4a98de.tintColor = this.getConfColor("weather");
          _0x343ae6.addSpacer(1);
          let _0x4c4300 = _0x343ae6.addText(_0x34f99c.min + "/" + _0x34f99c.max + "°");
          _0x4c4300.font = Font.systemFont(this.s(8, "poetry"));
          _0x4c4300.textColor = this.getConfColor("poetry");
        } else {
          this.addText(_0x343ae6, _0x34f99c.day, 10, "poetry");
          _0x343ae6.addSpacer(1);
          let _0x584635 = _0x343ae6.addImage(this.getSFIco(_0x34f99c.ico));
          let _0x259d35 = this.s(15, "weather");
          _0x584635.imageSize = new Size(_0x259d35, _0x259d35);
          _0x584635.tintColor = this.getConfColor("weather");
          _0x343ae6.addSpacer(1);
          this.addText(_0x343ae6, _0x34f99c.min + "/" + _0x34f99c.max + "°", 9, "poetry");
        }
        if (_0x40e690 < _0xe37ee6 - 1) {
          _0x3375cf.addSpacer(_0x11981c);
        }
      }
      if (_0x3f9580 && _0xe37ee6 < 7) {
        _0x565d44.addSpacer(4);
        let _0x23f313 = _0x565d44.addText("API仅" + _0xe37ee6 + "天");
        _0x23f313.font = Font.systemFont(8);
        _0x23f313.textColor = Color.red();
      }
    } else {
      let _0x274da0 = _0x565d44.addText("无预报数据");
      _0x274da0.font = Font.systemFont(10);
      _0x274da0.textColor = Color.red();
    }
    _0x565d44.addSpacer(10);
    if (_0x36d793 && !_0x352b3d && _0x4b87ab.poetry && _0x4b87ab.poetry.data) {
      let _0x2ce4bc = _0x565d44.addStack();
      _0x2ce4bc.layoutVertically();
      _0x2ce4bc.backgroundColor = new Color("#666", 0.3);
      _0x2ce4bc.cornerRadius = 4;
      _0x2ce4bc.setPadding(2, 4, 2, 4);
      let _0x2d4417 = _0x4b87ab.poetry.data.content.replace(/[。，！]$/, "");
      let _0x2e02cf = this.addText(_0x2ce4bc, _0x2d4417, 10, "poetry");
      _0x2e02cf.lineLimit = 3;
      _0x2ce4bc.addSpacer(2);
      let _0x21fe1c = _0x4b87ab.poetry.data.origin.dynasty + "·" + _0x4b87ab.poetry.data.origin.author;
      let _0xba1a1d = this.addText(_0x2ce4bc, "— " + _0x21fe1c, 8, "poetry");
      _0xba1a1d.rightAlignText();
    }
    if (this.activePrefix !== "s4_" && _0x4b87ab.schedules.length > 0) {
      let _0x17a4d7 = _0x4b87ab.schedules;
      let _0x165a12 = this.settings[this.activePrefix + "schedule_keyword"];
      let _0xa56dc1 = parseInt(this.settings[this.activePrefix + "schedule_index"]) || 0;
      _0x165a12 && _0x165a12.trim() !== "" && (_0x17a4d7 = _0x17a4d7.filter(_0x401066 => _0x401066.title.includes(_0x165a12)));
      let _0x37097b = _0x17a4d7[_0xa56dc1];
      if (_0x37097b) {
        _0x352e68.addSpacer(4);
        let _0x46062b = _0x352e68.addStack();
        _0x46062b.centerAlignContent();
        let _0xfedfab = _0x46062b.addImage(this.getSFIco("megaphone"));
        _0xfedfab.imageSize = new Size(10, 10);
        _0xfedfab.tintColor = this.getConfColor("info");
        _0x46062b.addSpacer(4);
        this.addText(_0x46062b, _0x37097b.title, 11, "info");
      }
    }
  }
  async renderWeatherSide(_0xfedfa9, _0x418c59) {
    let _0x1d6d51 = _0xfedfa9.addStack();
    _0x1d6d51.bottomAlignContent();
    _0xfedfa9.addSpacer(0);
    _0x1d6d51.addSpacer();
    let _0x415fa6 = _0x1d6d51.addImage(this.getSFIco(_0x418c59.ico));
    let _0xfe9b1f = this.s(30, "weatherLarge");
    _0x415fa6.imageSize = new Size(_0xfe9b1f, _0xfe9b1f);
    _0x415fa6.tintColor = this.getConfColor("weatherLarge");
    _0x1d6d51.addSpacer(4);
    let _0x30c89a = this.addText(_0x1d6d51, (_0x418c59.temp || "-") + "°", 20, "weatherLarge");
    _0x30c89a.font = Font.boldMonospacedSystemFont(this.s(20, "weatherLarge"));
    _0xfedfa9.addSpacer(4);
    const _0x3396c9 = _0xfeeba1 => {
      let _0x3ca158 = _0xfedfa9.addStack();
      _0x3ca158.addSpacer();
      this.addText(_0x3ca158, _0xfeeba1, 12, "weather");
    };
    _0x3396c9("湿度：" + (_0x418c59.hum || "-"));
    _0x3396c9("舒适：" + (_0x418c59.comfort || "-"));
    _0x3396c9("紫外：" + (_0x418c59.uv || "-"));
    _0x3396c9("空气：" + (_0x418c59.aqi || "-"));
    _0xfedfa9.addSpacer(2);
    let _0xee712 = _0xfedfa9.addStack();
    _0xee712.addSpacer();
    let _0x14dcc2 = _0xee712.addText("↑" + (_0x418c59.max || "-") + "°");
    _0x14dcc2.font = Font.systemFont(this.s(11, "weather"));
    _0x14dcc2.textColor = new Color("#ff5555");
    _0xee712.addSpacer(4);
    let _0xef2f3 = _0xee712.addText("↓" + (_0x418c59.min || "-") + "°");
    _0xef2f3.font = Font.systemFont(this.s(11, "weather"));
    _0xef2f3.textColor = new Color("#55ff55");
    _0xfedfa9.addSpacer(1);
    let _0xcdc238 = _0xfedfa9.addStack();
    _0xcdc238.addSpacer();
    let _0xcc4643 = this.s(12, "weather");
    let _0xcc4642 = _0xcdc238.addImage(this.getSFIco("sunrise.fill"));
    _0xcc4642.imageSize = new Size(_0xcc4643, _0xcc4643);
    this.addText(_0xcdc238, _0x418c59.sunrise || "--:--", 11, "weather");
    _0xcdc238.addSpacer(4);
    let _0x261885 = _0xcdc238.addImage(this.getSFIco("sunset.fill"));
    _0x261885.imageSize = new Size(_0xcc4643, _0xcc4643);
    this.addText(_0xcdc238, _0x418c59.sunset || "--:--", 11, "weather");
    _0xfedfa9.addSpacer(2);
    let _0xcc1399 = _0xfedfa9.addStack();
    _0xcc1399.addSpacer();
    let _0xed820 = new Date();
    let _0x41b027 = _0xed820.getMinutes();
    this.addText(_0xcc1399, "更新 " + _0xed820.getHours() + ":" + (_0x41b027 < 10 ? "0" + _0x41b027 : _0x41b027), 10, "weather");
  }
  async renderTimeInfo(_0x3f6993) {
    let _0x3f9941 = _0x3f6993.addStack();
    _0x3f9941.layoutHorizontally();
    _0x3f9941.setPadding(0, 4, 0, 4);
    const _0x3ff7de = new Date();
    const _0x3cfcfa = this.getLunarDate_Precise(_0x3ff7de);
    const _0x3c9e5d = zodiacAnimals[(_0x3cfcfa.year - 4) % 12];
    const _0x30b169 = getWeekOfYear(_0x3ff7de);
    const _0x4a05f5 = getDayOfYear(_0x3ff7de);
    const _0x30b494 = _0x3ff7de.getFullYear() % 4 === 0 ? 366 : 365;
    let _0x3cb7ca = [];
    let _0x3f8005 = [];
    try {
      const _0x367aa1 = await CalendarEvent.today([]);
      for (const _0x419b5d of _0x367aa1) {
        if (!_0x419b5d.isAllDay) {
          continue;
        }
        let _0x419b5e = _0x419b5d.title;
        if (_0x419b5e.includes("宜")) {
          let _0x5aef8a = _0x419b5e.substring(_0x419b5e.indexOf("宜") + 1);
          if (_0x5aef8a.includes("忌")) {
            _0x5aef8a = _0x5aef8a.split("忌")[0];
          }
          _0x5aef8a = _0x5aef8a.replace(/^[:：\s]+/, "");
          let _0x598b6d = _0x5aef8a.split(/[\s,，、\.．]+/).filter(_0x432ef3 => _0x432ef3.trim().length > 0 && _0x432ef3.length < 6);
          if (_0x598b6d.length > 0) {
            _0x3cb7ca = _0x598b6d;
          }
        }
        if (_0x419b5e.includes("忌")) {
          let _0x372bc3 = _0x419b5e.substring(_0x419b5e.indexOf("忌") + 1);
          if (_0x372bc3.includes("宜")) {
            _0x372bc3 = _0x372bc3.split("宜")[0];
          }
          _0x372bc3 = _0x372bc3.replace(/^[:：\s]+/, "");
          let _0x3a594f = _0x372bc3.split(/[\s,，、\.．]+/).filter(_0x465c80 => _0x465c80.trim().length > 0 && _0x465c80.length < 6);
          if (_0x3a594f.length > 0) {
            _0x3f8005 = _0x3a594f;
          }
        }
      }
    } catch (_0x167c5b) {}
    if (_0x3cb7ca.length === 0) {
      _0x3cb7ca = getYiJiSimple(_0x3ff7de, 0);
    }
    if (_0x3f8005.length === 0) {
      _0x3f8005 = getYiJiSimple(_0x3ff7de, 1);
    }
    let _0x337ccf = _0x3f9941.addStack();
    _0x337ccf.layoutVertically();
    let _0x3084e6 = _0x337ccf.addStack();
    _0x3084e6.centerAlignContent();
    this.addText(_0x3084e6, _0x3c9e5d + "年 " + _0x3cfcfa.month + _0x3cfcfa.day, 12, "timeInfo");
    _0x337ccf.addSpacer(0);
    let _0x36d93e = _0x337ccf.addStack();
    _0x36d93e.centerAlignContent();
    this.addText(_0x36d93e, "第" + _0x30b169 + "/53周 第 " + _0x4a05f5 + "/" + _0x30b494 + "天", 10, "date");
    _0x3f9941.addSpacer();
    let _0x39d421 = _0x3f9941.addStack();
    _0x39d421.centerAlignContent();
    this.renderYiJi(_0x39d421, "宜", "#D32F2F", _0x3cb7ca, "#D32F2F");
    _0x3f9941.addSpacer();
    let _0x397585 = _0x3f9941.addStack();
    _0x397585.centerAlignContent();
    this.renderYiJi(_0x397585, "忌", "#000000", _0x3f8005, "#ffffff");
  }
  renderYiJi(_0x10e53c, _0xdea590, _0x2c9a28, _0x1fd6ab, _0x1fd6ac) {
    let _0x699f7 = _0x10e53c.addStack();
    let _0x19c0f6 = this.s(30, "timeInfo");
    _0x699f7.size = new Size(_0x19c0f6, _0x19c0f6);
    _0x699f7.cornerRadius = _0x19c0f6 / 2;
    _0x699f7.backgroundColor = new Color(_0x2c9a28);
    _0x699f7.centerAlignContent();
    let _0x4bb503 = _0x699f7.addText(_0xdea590);
    _0x4bb503.font = Font.boldSystemFont(this.s(17, "timeInfo"));
    _0x4bb503.textColor = Color.white();
    _0x10e53c.addSpacer(8);
    let _0x2b03c6 = _0x10e53c.addStack();
    _0x2b03c6.layoutVertically();
    if (_0x1fd6ab.length > 0) {
      let _0x34f988 = _0x2b03c6.addStack();
      this.addText(_0x34f988, _0x1fd6ab.slice(0, 3).join("  "), 10, "timeInfo", false, 0, 1, new Color(_0x1fd6ac));
      if (_0x1fd6ab.length > 3) {
        let _0x3a249f = _0x2b03c6.addStack();
        this.addText(_0x3a249f, _0x1fd6ab.slice(3, 6).join("  "), 10, "timeInfo", false, 0, 1, new Color(_0x1fd6ac));
      }
    }
  }
  async renderWeekRow(_0x46118d) {
    let _0x44aa7b = _0x46118d.addStack();
    _0x44aa7b.setPadding(0, 5, 0, 3);
    let _0x5e01d2 = this.activePrefix === "s3_" || this.activePrefix === "s4_" ? 9.1 : 30;
    let _0x5b33a1 = parseFloat(this.settings[this.activePrefix + "space_week_w"] || _0x5e01d2);
    for (let _0x16a9aa = 0; _0x16a9aa < 7; _0x16a9aa++) {
      let _0x138213 = _0x44aa7b.addStack();
      _0x138213.size = new Size(this.s(24, "calendar"), this.s(22, "calendar"));
      _0x138213.centerAlignContent();
      let _0x462b14 = _0x138213.addText(weekTitleShort[_0x16a9aa]);
      _0x462b14.font = Font.boldSystemFont(this.s(14, "calendar"));
      _0x462b14.textColor = _0x16a9aa === 0 || _0x16a9aa === 6 ? new Color("#ff5555") : this.getConfColor("calendar");
      if (_0x16a9aa < 6) {
        _0x44aa7b.addSpacer(_0x5b33a1);
      }
    }
  }
  async renderCalendarGrid(_0x16dca0) {
    let _0x10884b = new Date();
    let _0x1748a8 = _0x10884b.getFullYear();
    let _0xef47fe = _0x10884b.getMonth();
    let _0x2845e1 = getMonthGrid(_0x1748a8, _0xef47fe);
    let _0x106ec4;
    let _0xda6951;
    this.activePrefix === "s3_" || this.activePrefix === "s4_" ? (_0x106ec4 = parseFloat(this.settings[this.activePrefix + "space_cal_w"] || 6.2), _0xda6951 = parseFloat(this.settings[this.activePrefix + "space_cal_h"] || 0)) : (_0x106ec4 = parseFloat(this.settings[this.activePrefix + "space_cal_w"] || 27.2), _0xda6951 = parseFloat(this.settings[this.activePrefix + "space_cal_h"] || 3));
    let _0xe63cd9 = this.s(27, "calendar");
    for (let _0x58e338 = 0; _0x58e338 < _0x2845e1.length; _0x58e338++) {
      let _0x55b5b8 = _0x16dca0.addStack();
      _0x55b5b8.setPadding(0, 7, 0, 2);
      for (let _0x29031a = 0; _0x29031a < 7; _0x29031a++) {
        let _0x2f5772 = _0x2845e1[_0x58e338][_0x29031a];
        let _0x2c5c8e = _0x55b5b8.addStack();
        _0x2c5c8e.size = new Size(_0xe63cd9, _0xe63cd9);
        _0x2c5c8e.layoutVertically();
        _0x2c5c8e.centerAlignContent();
        if (_0x2f5772 !== null) {
          let _0x25b408 = new Date(_0x1748a8, _0xef47fe, _0x2f5772);
          let _0x19ca15 = _0x2f5772 === _0x10884b.getDate();
          let _0x1862fd = _0x29031a === 0 || _0x29031a === 6;
          let _0x2095a7 = _0x2c5c8e.addStack();
          _0x2095a7.size = new Size(this.s(17, "calendar"), this.s(17, "calendar"));
          _0x2095a7.centerAlignContent();
          if (_0x19ca15) {
            let _0x182d30 = _0x2095a7.addStack();
            _0x182d30.size = new Size(this.s(16, "calendar"), this.s(16, "calendar"));
            _0x182d30.cornerRadius = this.s(8, "calendar");
            _0x182d30.backgroundColor = new Color("#ffcc00");
            _0x182d30.centerAlignContent();
            let _0x241a24 = _0x182d30.addText(_0x2f5772.toString());
            _0x241a24.font = Font.boldSystemFont(this.s(12, "calendar"));
            _0x241a24.textColor = Color.black();
          } else {
            let _0x1d3e15 = _0x2095a7.addText(_0x2f5772.toString());
            _0x1d3e15.font = Font.boldSystemFont(this.s(12, "calendar"));
            _0x1d3e15.textColor = _0x1862fd ? new Color("#ff5555") : this.getConfColor("calendar");
          }
          let _0x1865c8 = this.getLunarDate_Precise(_0x25b408);
          let _0x3b6a0e = getSolarTerm(_0x25b408);
          let _0x483ffd = _0x2c5c8e.addStack();
          _0x483ffd.setPadding(-1, 1.5, 0, 0);
          _0x483ffd.centerAlignContent();
          let _0x1b8d5e = _0x483ffd.addText(_0x3b6a0e || _0x1865c8.day);
          _0x1b8d5e.font = Font.systemFont(this.s(8, "calendar"));
          _0x1b8d5e.textColor = new Color(this.getConfColor("calendar").hex, 0.7);
        }
        if (_0x29031a < 6) {
          _0x55b5b8.addSpacer(_0x106ec4);
        }
      }
      if (_0x58e338 < _0x2845e1.length - 1) {
        _0x16dca0.addSpacer(_0xda6951);
      }
    }
  }
  addText(_0xe73b7f, _0xcdcf1c, _0x263449, _0xe5d2bd, _0x58dca1 = false, _0x564716 = 0, _0x5b8a03 = 1, _0x4fa010 = null) {
    if (_0x564716 > 0) {
      _0xe73b7f.addSpacer(_0x564716);
    }
    let _0x5c3cb9 = _0xe73b7f.addText(String(_0xcdcf1c));
    _0x5c3cb9.font = _0x58dca1 ? Font.boldSystemFont(this.s(_0x263449, _0xe5d2bd)) : Font.systemFont(this.s(_0x263449, _0xe5d2bd));
    _0x5c3cb9.textColor = _0x4fa010 || this.getConfColor(_0xe5d2bd);
    if (_0x5b8a03 > 1) {
      _0x5c3cb9.lineLimit = _0x5b8a03;
    }
    return _0x5c3cb9;
  }
  s(_0x5ad8a2, _0x5a7a05) {
    let _0x442057 = this.activePrefix + "size_" + _0x5a7a05;
    let _0x5a76db = (parseInt(this.settings[_0x442057]) || 100) / 100;
    let _0x59b6a4 = (parseInt(this.settings.global_font_size) || 100) / 100;
    return Math.round(_0x5ad8a2 * _0x5a76db * _0x59b6a4);
  }
  getConfColor(_0x41dfe6) {
    let _0x42a01d = this.activePrefix + "color_" + _0x41dfe6;
    let _0x54dfbc = this.settings[_0x42a01d];
    return _0x54dfbc ? new Color(_0x54dfbc) : new Color(baseConfigKeys["color_" + _0x41dfe6]);
  }
  getSFIco(_0x5a22aa) {
    try {
      return SFSymbol.named(_0x5a22aa).image;
    } catch {
      return SFSymbol.named("sun.max.fill").image;
    }
  }
  getDateStr(_0x484191) {
    let _0x47e2f4 = new DateFormatter();
    _0x47e2f4.locale = "zh_cn";
    _0x47e2f4.dateFormat = "yyyy年MM月d日";
    return _0x47e2f4.string(_0x484191);
  }
  getGreeting(_0x3189a4) {
    const _0x3e2653 = _0x3189a4.getHours();
    let _0x5482cd = "";
    if (_0x3e2653 < 5 || _0x3e2653 >= 23) {
      _0x5482cd = this.settings.text_greeting_night;
      if (!_0x5482cd) {
        _0x5482cd = "🦉火华,可以来一发了~";
      }
    } else {
      if (_0x3e2653 < 11) {
        _0x5482cd = this.settings.text_greeting_morning;
        if (!_0x5482cd) {
          _0x5482cd = "💫火华,早上心情美美哒~";
        }
      } else {
        if (_0x3e2653 < 13) {
          _0x5482cd = this.settings.text_greeting_noon;
          if (!_0x5482cd) {
            _0x5482cd = "🥳火华,中午好呀~";
          }
        } else {
          if (_0x3e2653 < 18) {
            _0x5482cd = this.settings.text_greeting_afternoon;
            if (!_0x5482cd) {
              _0x5482cd = "🐡火华,下午好呀~";
            }
          } else {
            _0x5482cd = this.settings.text_greeting_evening;
            if (!_0x5482cd) {
              _0x5482cd = "🌙火华,（晚上好呀）";
            }
          }
        }
      }
    }
    return _0x5482cd;
  }
  airQuality(_0x556f00) {
    if (_0x556f00 <= 50) {
      return "优";
    }
    if (_0x556f00 <= 100) {
      return "良";
    }
    if (_0x556f00 <= 150) {
      return "轻";
    }
    if (_0x556f00 <= 200) {
      return "中";
    }
    if (_0x556f00 <= 300) {
      return "重";
    }
    return "严";
  }
  getLunarDate_Precise(_0x3c1d9f) {
    const _0x53f45d = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"];
    const _0x559e7f = ["初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"];
    let _0x3dc7c1 = _0x3c1d9f.getFullYear();
    let _0x3eb32b = _0x3c1d9f.getMonth() + 1;
    let _0x3f1352 = _0x3c1d9f.getDate();
    let _0x33f266;
    let _0x33923f = 348;
    let _0x3f7c39 = (Date.UTC(_0x3dc7c1, _0x3eb32b - 1, _0x3f1352) - Date.UTC(1900, 0, 31)) / 86400000;
    for (_0x33f266 = 1900; _0x33f266 < 2101 && _0x3f7c39 > 0; _0x33f266++) {
      _0x33923f = lYearDays(_0x33f266);
      _0x3f7c39 -= _0x33923f;
    }
    _0x3f7c39 < 0 && (_0x3f7c39 += _0x33923f, _0x33f266--);
    let _0x432626 = lunarInfo[_0x33f266 - 1900] & 15;
    let _0x210578 = false;
    let _0x1b6e5c;
    let _0x1b0fca;
    for (_0x1b6e5c = 1; _0x1b6e5c < 13 && _0x3f7c39 > 0; _0x1b6e5c++) {
      _0x1b0fca = _0x432626 === _0x1b6e5c - 1 && !_0x210578 ? lunarInfo[_0x33f266 - 1900] & 65536 ? 30 : 29 : lunarInfo[_0x33f266 - 1900] & 65536 >> _0x1b6e5c ? 30 : 29;
      if (_0x210578 && _0x1b6e5c === _0x432626 + 1) {
        _0x210578 = false;
      } else {
        _0x432626 > 0 && _0x1b6e5c === _0x432626 + 1 && !_0x210578 && (_0x210578 = true, --_0x1b6e5c);
      }
      _0x3f7c39 -= _0x1b0fca;
    }
    _0x3f7c39 < 0 && (_0x3f7c39 += _0x1b0fca, --_0x1b6e5c);
    if (_0x1b6e5c < 1) {
      _0x1b6e5c = 1;
    }
    if (_0x1b6e5c > 12) {
      _0x1b6e5c = 12;
    }
    return {
      year: _0x33f266,
      month: (_0x210578 ? "闰" : "") + _0x53f45d[_0x1b6e5c - 1],
      day: _0x559e7f[Math.floor(_0x3f7c39)] || "初一"
    };
  }
}
function getSolarFromLunar(_0x26f9c4, _0x1bda53, _0x27dc3c) {
  if (_0x26f9c4 < 1900 || _0x26f9c4 > 2100) {
    return null;
  }
  let _0x11828d = 0;
  for (let _0x548b99 = 1900; _0x548b99 < _0x26f9c4; _0x548b99++) {
    _0x11828d += lYearDays(_0x548b99);
  }
  let _0x27d911 = lunarInfo[_0x26f9c4 - 1900] & 15;
  for (let _0x5759bd = 1; _0x5759bd < _0x1bda53; _0x5759bd++) {
    let _0x24b17c = lunarInfo[_0x26f9c4 - 1900] & 65536 >> _0x5759bd ? 30 : 29;
    _0x11828d += _0x24b17c;
    _0x27d911 > 0 && _0x5759bd === _0x27d911 && (_0x11828d += lunarInfo[_0x26f9c4 - 1900] & 65536 ? 30 : 29);
  }
  _0x11828d += _0x27dc3c - 1;
  let _0x100253 = new Date(1900, 0, 31);
  _0x100253.setDate(_0x100253.getDate() + _0x11828d);
  return _0x100253;
}
function lYearDays(_0x19b717) {
  let _0x185300;
  let _0x7be2d = 348;
  for (_0x185300 = 32768; _0x185300 > 8; _0x185300 >>= 1) {
    _0x7be2d += lunarInfo[_0x19b717 - 1900] & _0x185300 ? 1 : 0;
  }
  return _0x7be2d + (lunarInfo[_0x19b717 - 1900] & 15 ? lunarInfo[_0x19b717 - 1900] & 65536 ? 30 : 29 : 0);
}
function getSolarTerm(_0x3a96f3) {
  const _0xab90b = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
  const _0x64131e = _0x3a96f3.getFullYear();
  const _0x6a14c3 = _0x3a96f3.getMonth() + 1;
  const _0x135777 = _0x3a96f3.getDate();
  const _0x2cac03 = [5.4055, 20.12, 3.87, 18.73, 5.63, 20.646, 4.81, 20.1, 5.52, 21.04, 5.678, 21.37, 7.108, 22.83, 7.5, 23.13, 7.646, 23.042, 8.318, 23.438, 7.438, 22.36, 7.18, 21.94];
  if (_0x64131e < 2000 || _0x64131e > 2099) {
    return "";
  }
  function _0x1ff459(_0xad2453, _0xb01f31) {
    return Math.floor((_0xad2453 - 2000) * 0.2422 + _0x2cac03[_0xb01f31]) - Math.floor((_0xad2453 - 2000) / 4);
  }
  let _0x1e608e = (_0x6a14c3 - 1) * 2;
  let _0x80a0a4 = _0x1ff459(_0x64131e, _0x1e608e);
  if (_0x135777 === _0x80a0a4) {
    return _0xab90b[_0x1e608e];
  }
  let _0x2141e4 = (_0x6a14c3 - 1) * 2 + 1;
  let _0x22a8f7 = _0x1ff459(_0x64131e, _0x2141e4);
  if (_0x135777 === _0x22a8f7) {
    return _0xab90b[_0x2141e4];
  }
  return null;
}
function getMonthGrid(_0x37b54a, _0x315f77) {
  const _0x3e15a8 = new Date(_0x37b54a, _0x315f77, 1);
  const _0x3e75b7 = new Date(_0x37b54a, _0x315f77 + 1, 0);
  const _0x31bf86 = _0x3e75b7.getDate();
  const _0x3da97f = _0x3e15a8.getDay();
  const _0x328a3f = [];
  let _0x31232c = Array(_0x3da97f).fill(null);
  for (let _0x306477 = 1; _0x306477 <= _0x31bf86; _0x306477++) {
    _0x31232c.push(_0x306477);
    _0x31232c.length === 7 && (_0x328a3f.push(_0x31232c), _0x31232c = []);
  }
  if (_0x31232c.length > 0) {
    while (_0x31232c.length < 7) {
      _0x31232c.push(null);
    }
    _0x328a3f.push(_0x31232c);
  }
  return _0x328a3f;
}
function getStemBranchDay(_0x49bbce) {
  const _0x33191f = new Date(1900, 0, 31);
  const _0x34aceb = Math.floor((_0x49bbce - _0x33191f) / 86400000);
  return heavenlyStems[(_0x34aceb % 10 + 10) % 10] + earthlyBranches[(_0x34aceb % 12 + 12) % 12];
}
function getYellowBlackDay(_0x4c83fc) {
  let _0x1d0882 = getLunarDate_Precise_Simple(_0x4c83fc);
  return yellowBlackDays[(_0x1d0882.m + _0x1d0882.d - 2) % 12];
}
function getLunarDate_Precise_Simple(_0x1ca85c) {
  let _0x294681 = _0x1ca85c.getFullYear();
  let _0x29a6a6 = _0x1ca85c.getMonth() + 1;
  let _0x1dbcb3 = _0x1ca85c.getDate();
  let _0x28e7ee;
  let _0x4a7a84 = 348;
  let _0xf90a2c = (Date.UTC(_0x294681, _0x29a6a6 - 1, _0x1dbcb3) - Date.UTC(1900, 0, 31)) / 86400000;
  for (_0x28e7ee = 1900; _0x28e7ee < 2101 && _0xf90a2c > 0; _0x28e7ee++) {
    _0x4a7a84 = lYearDays(_0x28e7ee);
    _0xf90a2c -= _0x4a7a84;
  }
  _0xf90a2c < 0 && (_0xf90a2c += _0x4a7a84, _0x28e7ee--);
  let _0x104f5b = lunarInfo[_0x28e7ee - 1900] & 15;
  let _0x4716b2 = false;
  let _0x5d582b;
  let _0x1c31f0;
  for (_0x5d582b = 1; _0x5d582b < 13 && _0xf90a2c > 0; _0x5d582b++) {
    _0x1c31f0 = _0x104f5b === _0x5d582b - 1 && !_0x4716b2 ? lunarInfo[_0x28e7ee - 1900] & 65536 ? 30 : 29 : lunarInfo[_0x28e7ee - 1900] & 65536 >> _0x5d582b ? 30 : 29;
    if (_0x4716b2 && _0x5d582b === _0x104f5b + 1) {
      _0x4716b2 = false;
    } else {
      _0x104f5b > 0 && _0x5d582b === _0x104f5b + 1 && !_0x4716b2 && (_0x4716b2 = true, --_0x5d582b);
    }
    _0xf90a2c -= _0x1c31f0;
  }
  _0xf90a2c < 0 && (_0xf90a2c += _0x1c31f0, --_0x5d582b);
  if (_0x5d582b < 1) {
    _0x5d582b = 1;
  }
  if (_0x5d582b > 12) {
    _0x5d582b = 12;
  }
  return {
    m: _0x5d582b,
    d: Math.floor(_0xf90a2c) + 1
  };
}
function getMansion(_0x5678bf) {
  const _0x53aa9b = new Date(1900, 0, 31);
  const _0x2c41a8 = Math.floor((_0x5678bf - _0x53aa9b) / 86400000);
  return twentyEightMansions[(_0x2c41a8 % 28 + 28) % 28];
}
function isAuspiciousDay(_0x12d542) {
  const _0x1a9b37 = getYellowBlackDay(_0x12d542);
  const _0x4a7bfd = getMansion(_0x12d542);
  const _0x1dc8bc = ["除", "危", "定", "执", "成", "开"];
  const _0x1a6ed2 = ["角", "房", "尾", "箕", "斗", "室", "壁", "娄", "胃", "毕", "参", "井", "张", "轸"];
  return _0x1dc8bc.includes(_0x1a9b37) && _0x1a6ed2.includes(_0x4a7bfd);
}
function getTraditionalYiJi(_0x1acd7a) {
  const _0x25ee30 = getStemBranchDay(_0x1acd7a);
  const _0x1ff891 = getYellowBlackDay(_0x1acd7a);
  const _0x2be285 = isAuspiciousDay(_0x1acd7a);
  let _0x128b39 = [];
  let _0x76bcfa = [];
  let _0x8cfe73 = _0x25ee30[0];
  if (["甲", "乙"].includes(_0x8cfe73)) {
    _0x128b39.push("祭祀", "祈福", "入学", "栽种");
    _0x76bcfa.push("动土", "开市", "破屋");
  } else {
    if (["丙", "丁"].includes(_0x8cfe73)) {
      _0x128b39.push("嫁娶", "开市", "出行");
      _0x76bcfa.push("祭祀", "动土", "安葬");
    } else {
      if (["戊", "己"].includes(_0x8cfe73)) {
        _0x128b39.push("修造", "动土", "入宅");
        _0x76bcfa.push("开市", "嫁娶", "出行");
      } else {
        ["庚", "辛"].includes(_0x8cfe73) ? (_0x128b39.push("求医", "诉讼", "交易"), _0x76bcfa.push("祈福", "祭祀", "安床")) : (_0x128b39.push("出行", "移徙", "纳财"), _0x76bcfa.push("修造", "动土", "开仓"));
      }
    }
  }
  const _0x811314 = {
    "建": [["祭祀", "祈福"], ["嫁娶", "开市"]],
    "除": [["治病", "扫舍"], ["出行", "诉讼"]],
    "满": [["祭祀", "开市"], ["嫁娶", "安葬"]],
    "平": [["修造", "安床"], ["开市", "交易"]],
    "定": [["嫁娶", "订盟"], ["词讼", "开渠"]],
    "执": [["捕捉", "破土"], ["嫁娶", "移徙"]],
    "破": [["破屋", "坏垣"], ["嫁娶", "开市"]],
    "危": [["安床", "入宅"], ["破土", "开渠"]],
    "成": [["嫁娶", "开市"], ["造桥", "安床"]],
    "收": [["纳财", "交易"], ["开市", "安葬"]],
    "开": [["开市", "交易"], ["破土", "安葬"]],
    "闭": [["筑堤", "补垣"], ["开市", "出行"]]
  };
  _0x811314[_0x1ff891] && (_0x128b39.push(..._0x811314[_0x1ff891][0]), _0x76bcfa.push(..._0x811314[_0x1ff891][1]));
  if (_0x2be285) {
    _0x128b39.push("嫁娶", "开市", "入宅");
  } else {
    _0x76bcfa.push("嫁娶", "开市", "出行");
  }
  return {
    yi: [...new Set(_0x128b39)].slice(0, 6),
    ji: [...new Set(_0x76bcfa)].slice(0, 6)
  };
}
function getYiJiSimple(_0x1e6d9f, _0x425b2a) {
  const _0x95ebc9 = getTraditionalYiJi(_0x1e6d9f);
  return _0x425b2a === 0 ? _0x95ebc9.yi : _0x95ebc9.ji;
}
function getWeekOfYear(_0xaf582f) {
  const _0x2135da = new Date(Date.UTC(_0xaf582f.getFullYear(), _0xaf582f.getMonth(), _0xaf582f.getDate()));
  const _0x361143 = _0x2135da.getUTCDay() || 7;
  _0x2135da.setUTCDate(_0x2135da.getUTCDate() + 4 - _0x361143);
  const _0x6968d9 = new Date(Date.UTC(_0x2135da.getUTCFullYear(), 0, 1));
  return Math.ceil(((_0x2135da - _0x6968d9) / 86400000 + 1) / 7);
}
function getDayOfYear(_0x393ec9) {
  return Math.floor((_0x393ec9 - new Date(_0x393ec9.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}
function pad(_0x35e501) {
  return _0x35e501 < 10 ? "0" + _0x35e501 : _0x35e501;
}
await Runing(CaishowWidget, args.widgetParameter, false);