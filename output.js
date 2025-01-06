NAME = "宝骏汽车";
VLAA = "bjqc";
VALY = [VLAA + "app"];
LOGS = 0;
CK = "";
var dldz = process.env.bjqcdldz,
  userList = [];
let bfs = 10;
usid = 0;
let msg = "";
const CryptoJS = require("crypto-js"),
  NodeRSA = require("node-rsa");
class Bar {
  constructor(_0x10c10e) {
    this.accessToken = _0x10c10e.split("#")[0];
    this.num = ++usid;
    this.headers = {
      "Host": "hapi.baojun.net",
      "Connection": "keep-alive",
      "Content-Length": "17",
      "platformNo": "Wx_mini",
      "content-type": "application/json",
      "accessToken": this.accessToken
    };
  }
  async ["hqdl"]() {
    let _0xf2c425 = await task("get", dldz, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0xf2c425.split("\n")[0];
    console.log("ÕËºÅ" + this.num + "£º»ñÈ¡´úÀíIP³É¹¦£º" + this.dlip);
  }
  async ["start"]() {
    dldz == undefined ? (await this.info(), await wait(getRandomNumber(2, 3)), await this.postList()) : await this.info();
  }
  async ["info"]() {
    try {
      this.client_id = "20200113181123916714";
      this.nonce = "4857289347289375";
      this.oauthConsumerKey = "20200113181123916714";
      this.client_secret = "JNWSY6RXYGXIWR2YCI2HOAGYG9LVQXYZ";
      this.salt = "8d33d72c27994bdc9a9e9fdda2545690";
      this.timestamp = new Date().getTime();
      let _0x5bc51f = this.accessToken + this.client_id + this.timestamp + this.nonce + this.client_secret + this.salt;
      this.signatrue = MD5(_0x5bc51f);
      this.headers.oauthConsumerKey = this.oauthConsumerKey;
      this.headers.timestamp = this.timestamp;
      this.headers.nonce = this.nonce;
      this.headers.signatrue = this.signatrue;
      let _0x17da44 = await this.task("get", "https://hapi.baojun.net/base/account/pocket/draw/info", this.headers);
      _0x17da44.result == true ? (this.jrcs = 0, this.noDrawMoney = Number(_0x17da44.data.noDrawMoney) / 100, console.log("账号[" + this.num + "]：可提现余额: [" + this.noDrawMoney + "] 元"), await wait(getRandomNumber(2, 3)), await this.csjc(1), await wait(getRandomNumber(2, 3)), await this.csjc(2), console.log("ÕËºÅ[" + this.num + "]：今日已获得奖励次数：" + this.jrcs)) : console.log("ÕËºÅ[" + this.num + "]£º" + _0x17da44.msg);
    } catch (_0x35455c) {
      console.log("ÕËºÅ[" + this.num + "]", _0x35455c);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["postList"]() {
    try {
      this.client_id = "20200113181123916714";
      this.nonce = "4857289347289375";
      this.oauthConsumerKey = "20200113181123916714";
      this.client_secret = "JNWSY6RXYGXIWR2YCI2HOAGYG9LVQXYZ";
      this.salt = "8d33d72c27994bdc9a9e9fdda2545690";
      this.timestamp = new Date().getTime();
      let _0x22a8d2 = this.accessToken + this.client_id + this.timestamp + this.nonce + this.client_secret + this.salt;
      this.signatrue = MD5(_0x22a8d2);
      this.headers.oauthConsumerKey = this.oauthConsumerKey;
      this.headers.timestamp = this.timestamp;
      this.headers.nonce = this.nonce;
      this.headers.signatrue = this.signatrue;
      let _0x4a034d = await this.task("get", "https://hapi.baojun.net/base/community/post/postList?postTypeId=1&postClassifyId=61&publishSmallProgram=2&pageNo=5&pageSize=30", this.headers);
      if (_0x4a034d.result == true) {
        let _0x396dde = _0x4a034d.data;
        if (_0x396dde.length < 30 - this.jrcs) for (let _0xccca6d = 0; _0xccca6d < _0x396dde.length; _0xccca6d++) {
          this.postId = _0x396dde[_0xccca6d].postId;
          console.log("ÕËºÅ[" + this.num + "]：视频id [" + this.postId + "] 获取：成功！");
          await this.lookVideo();
          await wait(getRandomNumber(10, 13));
        } else {
          if (_0x396dde.length > 30 - this.jrcs) for (let _0x55be5b = 0; _0x55be5b < 30 - this.jrcs; _0x55be5b++) {
            this.postId = _0x396dde[_0x55be5b].postId;
            console.log("账号[" + this.num + "]：视频id [" + this.postId + "] 获取：成功！");
            await this.lookVideo();
            await wait(getRandomNumber(10, 13));
          }
        }
      } else console.log("账号[" + this.num + "]£º" + _0x4a034d.msg);
    } catch (_0x48fe81) {
      console.log("账号[" + this.num + "]", _0x48fe81);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["lookVideo"]() {
    try {
      this.client_id = "20200113181123916714";
      this.nonce = "4857289347289375";
      this.oauthConsumerKey = "20200113181123916714";
      this.client_secret = "JNWSY6RXYGXIWR2YCI2HOAGYG9LVQXYZ";
      this.salt = "8d33d72c27994bdc9a9e9fdda2545690";
      this.timestamp = new Date().getTime();
      let _0x31b58f = this.accessToken + this.client_id + this.timestamp + this.nonce + this.client_secret + this.salt;
      this.signatrue = MD5(_0x31b58f);
      this.headers.oauthConsumerKey = this.oauthConsumerKey;
      this.headers.timestamp = this.timestamp;
      this.headers.nonce = this.nonce;
      this.headers.signatrue = this.signatrue;
      let _0x5acc24 = await this.task("post", "https://hapi.baojun.net/base/activity/fission/lookVideo", this.headers, "{\"postId\":" + this.postId + "}");
      if (_0x5acc24.result == true) {
        console.log("账号[" + this.num + "]£º" + _0x5acc24.data);
      } else console.log("账号[" + this.num + "]£º" + _0x5acc24.msg);
    } catch (_0xf81996) {
      console.log("账号[" + this.num + "]", _0xf81996);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["csjc"](_0x482567) {
    try {
      this.client_id = "20200113181123916714";
      this.nonce = "4857289347289375";
      this.oauthConsumerKey = "20200113181123916714";
      this.client_secret = "JNWSY6RXYGXIWR2YCI2HOAGYG9LVQXYZ";
      this.salt = "8d33d72c27994bdc9a9e9fdda2545690";
      this.timestamp = new Date().getTime();
      let _0x2c956d = this.accessToken + this.client_id + this.timestamp + this.nonce + this.client_secret + this.salt;
      this.signatrue = MD5(_0x2c956d);
      this.headers.oauthConsumerKey = this.oauthConsumerKey;
      this.headers.timestamp = this.timestamp;
      this.headers.nonce = this.nonce;
      this.headers.signatrue = this.signatrue;
      let _0x26753e = await this.task("get", "https://hapi.baojun.net/base/ucenter/user/wallet/detail/v2?pocketClassType=" + _0x482567 + "&pageNo=1&pageSize=30", this.headers);
      if (_0x26753e.result == true) {
        for (let _0x44668c of _0x26753e.data) {
          rqdb(_0x44668c.expireDateStr) && this.jrcs++;
        }
      } else console.log("ÕËºÅ[" + this.num + "]£º" + _0x26753e.msg);
    } catch (_0x333319) {
      console.log("账号[" + this.num + "]", _0x333319);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["task"](_0xa96d3a, _0x219256, _0x5ae8d3, _0x3f86f7) {
    if (_0xa96d3a == "delete") _0xa96d3a = _0xa96d3a.toUpperCase();else {
      _0xa96d3a = _0xa96d3a;
    }
    const _0x3cda6b = require("request");
    if (_0xa96d3a == "post") {
      delete _0x5ae8d3["Content-Type"];
      delete _0x5ae8d3["content-type"];
      delete _0x5ae8d3["Content-Length"];
      delete _0x5ae8d3["content-length"];
      if (safeGet(_0x3f86f7)) {
        _0x5ae8d3["Content-Type"] = "application/json";
      } else _0x5ae8d3["Content-Type"] = "application/x-www-form-urlencoded";
      if (_0x3f86f7) {
        _0x5ae8d3["Content-Length"] = lengthInUtf8Bytes(_0x3f86f7);
      }
    }
    if (_0xa96d3a == "get") {
      delete _0x5ae8d3["Content-Type"];
      delete _0x5ae8d3["content-length"];
      delete _0x5ae8d3["content-type"];
      delete _0x5ae8d3["Content-Length"];
    }
    _0x5ae8d3.Host = _0x219256.replace("//", "/").split("/")[1];
    if (_0xa96d3a.indexOf("T") < 0) {
      var _0x5a5c71 = {
        "url": _0x219256,
        "headers": _0x5ae8d3,
        "body": _0x3f86f7,
        "followRedirect": false,
        "timeout": 20000
      };
    } else var _0x5a5c71 = {
      "url": _0x219256,
      "headers": _0x5ae8d3,
      "form": JSON.parse(_0x3f86f7),
      "followRedirect": false,
      "timeout": 20000
    };
    return dldz !== undefined && (_0x5a5c71.proxy = "http://" + this.dlip), new Promise(async _0x23a293 => {
      _0x3cda6b[_0xa96d3a.toLowerCase()](_0x5a5c71, async (_0x23ee3c, _0x33ecd0, _0x2e93ae) => {
        try {
          if (LOGS == 1) {
            console.log("==================请求==================");
            console.log(JSON.stringify(_0x5a5c71));
            console.log("==================返回==================");
            console.log(_0x23ee3c);
            console.log(JSON.stringify(_0x33ecd0));
          }
        } catch (_0x4d7f86) {} finally {
          if (!_0x23ee3c) {
            if (safeGet(_0x2e93ae)) _0x2e93ae = JSON.parse(_0x2e93ae);else {
              _0x2e93ae = _0x2e93ae;
            }
          } else {
            dldz == undefined ? _0x2e93ae = await this.task(_0xa96d3a, _0x219256, _0x5ae8d3, _0x3f86f7) : (await this.hqdl(), _0x2e93ae = await this.task(_0xa96d3a, _0x219256, _0x5ae8d3, _0x3f86f7));
          }
          return _0x23a293(_0x2e93ae);
        }
      });
    });
  }
}
(async () => {
  const _0xcedb9c = Date.now();
  console.log(NAME);
  console.log("北京时间：" + formatDate());
  checkEnv();
  dldz === undefined ? console.log("当前使用本地网络运行脚本") : console.log("当前使用代理网络运行脚本");
  const _0x545eba = bfs;
  await startWithConcurrency(userList, _0x545eba);
  await SendMsg(msg);
  const _0x213031 = Date.now();
  done(_0xcedb9c, _0x213031);
})().catch(_0x396480 => {
  console.log(_0x396480);
});
async function SendMsg(_0x171185) {
  if (!_0x171185) return;
  var _0x268fd5 = require("./sendNotify");
  await _0x268fd5.sendNotify(NAME, _0x171185);
}
async function startWithConcurrency(_0x423077, _0x2e5c9e) {
  const _0x317494 = [..._0x423077];
  async function _0xa7a728() {
    if (_0x317494.length === 0) return;
    const _0x416e9a = _0x317494.shift();
    try {
      await _0x416e9a.start();
    } catch (_0x2d4c9d) {
      console.log(_0x2d4c9d);
    }
    if (_0x317494.length > 0) {
      await _0xa7a728();
    }
  }
  const _0x1eba61 = Array.from({
    "length": _0x2e5c9e
  }, _0xa7a728);
  await Promise.all(_0x1eba61);
}
function task(_0x21a804, _0x49704c, _0x58bc9d, _0x53f6ae) {
  if (_0x21a804 == "delete") {
    _0x21a804 = _0x21a804.toUpperCase();
  } else _0x21a804 = _0x21a804;
  const _0x2bdcaf = require("request");
  _0x21a804 == "post" && (delete _0x58bc9d["Content-Type"], delete _0x58bc9d["content-type"], delete _0x58bc9d["Content-Length"], delete _0x58bc9d["content-length"], safeGet(_0x53f6ae) ? _0x58bc9d["Content-Type"] = "application/json" : _0x58bc9d["Content-Type"] = "application/x-www-form-urlencoded", _0x53f6ae && (_0x58bc9d["Content-Length"] = lengthInUtf8Bytes(_0x53f6ae)));
  _0x21a804 == "get" && (delete _0x58bc9d["Content-Type"], delete _0x58bc9d["content-length"], delete _0x58bc9d["content-type"], delete _0x58bc9d["Content-Length"]);
  _0x58bc9d.Host = _0x49704c.replace("//", "/").split("/")[1];
  if (_0x21a804.indexOf("T") < 0) {
    var _0x31131d = {
      "url": _0x49704c,
      "headers": _0x58bc9d,
      "body": _0x53f6ae,
      "followRedirect": false,
      "timeout": 20000
    };
  } else var _0x31131d = {
    "url": _0x49704c,
    "headers": _0x58bc9d,
    "form": JSON.parse(_0x53f6ae),
    "followRedirect": false,
    "timeout": 20000
  };
  return new Promise(async _0x37cafa => {
    _0x2bdcaf[_0x21a804.toLowerCase()](_0x31131d, async (_0x2680fc, _0x56a570, _0x5a4774) => {
      try {
        LOGS == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x31131d)), console.log("==================返回=================="), console.log(_0x2680fc), console.log(JSON.stringify(_0x56a570)));
      } catch (_0x368d36) {} finally {
        if (!_0x2680fc) {
          safeGet(_0x5a4774) ? _0x5a4774 = JSON.parse(_0x5a4774) : _0x5a4774 = _0x5a4774;
        } else {
          await wait(2);
          _0x5a4774 = await task(_0x21a804, _0x49704c, _0x58bc9d, _0x53f6ae);
        }
        return _0x37cafa(_0x5a4774);
      }
    });
  });
}
function sign(_0x1556df) {
  _0x1556df = _0x1556df + "&signature=140156b9f8964254b9636550c3b770d4";
  let _0x1fe0b9 = _0x1556df.match(/=(.*?)(?:&|$)/g).map(_0x1df2e9 => _0x1df2e9.slice(1));
  _0x1fe0b9.sort();
  let _0x5c372f = _0x1fe0b9.join("").replace(/[^a-zA-Z0-9.]/g, "");
  return "&signature=" + MD5(_0x5c372f);
}
function safeGet(_0x52f137) {
  try {
    if (typeof JSON.parse(_0x52f137) == "object") return true;
  } catch (_0x309d2a) {
    return false;
  }
}
function lengthInUtf8Bytes(_0x855e28) {
  let _0x320ef4 = encodeURIComponent(_0x855e28).match(/%[89ABab]/g);
  return _0x855e28.length + (_0x320ef4 ? _0x320ef4.length : 0);
}
async function checkEnv() {
  let _0x338559 = process.env[VALY] || CK,
    _0x1121a4 = 0;
  if (_0x338559) {
    for (let _0x3eed3d of _0x338559.split("\n").filter(_0x50c843 => !!_0x50c843)) {
      userList.push(new Bar(_0x3eed3d));
    }
    _0x1121a4 = userList.length;
  } else {
    console.log("\n¡¾" + NAME + "】：未填写变量: " + VALY);
    process.exit();
  }
  return console.log("¹²ÕÒµ½" + _0x1121a4 + "个账号"), userList;
}
function timestamp(_0x476527) {
  const _0x203ba9 = new Date().getTime();
  return Math.round(_0x203ba9 / 10 ** (13 - _0x476527)).toString();
}
function base64pjjm(_0x2ebb39) {
  const _0x27801a = Buffer.from(_0x2ebb39, "base64"),
    _0x34ee68 = _0x27801a.slice(0, 16).toString("base64"),
    _0x3c21d = _0x27801a.slice(16, _0x27801a.length).toString("base64");
  return [_0x34ee68, _0x3c21d];
}
function wait(_0x2f9783) {
  return new Promise(function (_0x5c61fe) {
    setTimeout(_0x5c61fe, _0x2f9783 * 1000);
  });
}
function base64pj(_0x13e935, _0x4a26d8) {
  const _0x37fefb = Buffer.from(_0x13e935, "base64"),
    _0x55930d = Buffer.from(_0x4a26d8, "base64"),
    _0x308b2c = Buffer.concat([_0x37fefb, _0x55930d]);
  return _0x308b2c.toString("base64");
}
function extractCaptcha(_0x2baf6d) {
  const _0xfcd23a = /\b\d{4,8}\b/,
    _0x21fd58 = _0x2baf6d.match(_0xfcd23a);
  return _0x21fd58 ? _0x21fd58[0] : null;
}
function randomString(_0x2169ba, _0x468c7f) {
  _0x2169ba = _0x2169ba || 32;
  let _0x3c15ba = "";
  if (_0x468c7f == 0) {
    _0x3c15ba += "0123456789";
  } else {
    if (_0x468c7f == 1) {
      _0x3c15ba += "0123456789";
      _0x3c15ba += "abcdef";
    } else {
      if (_0x468c7f == 2) _0x3c15ba += "abcdefghijklmnopqrstuvwxyz", _0x3c15ba += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";else {
        if (_0x468c7f == 3) _0x3c15ba += "0123456789", _0x3c15ba += "abcdefghijklmnopqrstuvwxyz", _0x3c15ba += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";else {
          if (_0x468c7f == 4) _0x3c15ba += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";else _0x468c7f == 5 && (_0x3c15ba += "123456789");
        }
      }
    }
  }
  const _0x3063f4 = _0x3c15ba.length;
  let _0x3e7974 = "";
  for (let _0x5c9074 = 0; _0x5c9074 < _0x2169ba; _0x5c9074++) {
    _0x3e7974 += _0x3c15ba.charAt(Math.floor(Math.random() * _0x3063f4));
  }
  return _0x3e7974;
}
function randomUUID() {
  return randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
}
function randomPattern(_0x498312, _0x504bdc = "abcdef0123456789") {
  let _0x2b5b1c = "";
  for (let _0xc9440e of _0x498312) {
    if (_0xc9440e == "x") _0x2b5b1c += _0x504bdc.charAt(Math.floor(Math.random() * _0x504bdc.length));else {
      if (_0xc9440e == "X") {
        _0x2b5b1c += _0x504bdc.charAt(Math.floor(Math.random() * _0x504bdc.length)).toUpperCase();
      } else _0x2b5b1c += _0xc9440e;
    }
  }
  return _0x2b5b1c;
}
function rqdb(_0x11da36) {
  {
    const _0x40156a = new Date(_0x11da36);
    _0x40156a.setDate(_0x40156a.getDate() - 30);
    const _0x445586 = new Date(),
      _0xdcb749 = _0x445586.toISOString().split("T")[0],
      _0x46b458 = _0x40156a.toISOString().split("T")[0];
    return _0xdcb749 === _0x46b458;
  }
}
function formatDate() {
  let _0x48c7aa = new Date();
  const _0x536bdd = _0x48c7aa.getFullYear(),
    _0x132ffe = padZero(_0x48c7aa.getMonth() + 1),
    _0x311698 = padZero(_0x48c7aa.getDate()),
    _0x530abc = padZero(_0x48c7aa.getHours()),
    _0x27c3b4 = padZero(_0x48c7aa.getMinutes()),
    _0x2161f2 = padZero(_0x48c7aa.getSeconds());
  return _0x536bdd + "-" + _0x132ffe + "-" + _0x311698 + " " + _0x530abc + ":" + _0x27c3b4 + ":" + _0x2161f2;
}
function padZero(_0xb4fb57) {
  return _0xb4fb57.toString().padStart(2, "0");
}
function getRandomNumber(_0xb50769, _0x52399e) {
  var _0x56c8fc = Math.floor(Math.random() * (_0x52399e - _0xb50769 + 1) + _0xb50769),
    _0x1d9954 = Math.random() < 0.5 ? Math.floor(Math.random() * 100) : Math.floor(Math.random() * 101);
  return _0x56c8fc + "." + _0x1d9954.toString().padStart(2, "0");
}
function done(_0x12d9d4, _0x1bfa03) {
  const _0x44090f = (_0x1bfa03 - _0x12d9d4) / 1000;
  console.log("\n[任务执行完毕 " + NAME + "] 耗时：" + _0x44090f.toFixed(2) + "Ãë");
  process.exit(0);
}
function MD5(_0x2322d5) {
  return CryptoJS.MD5(_0x2322d5).toString();
}
function SHA1(_0x34ab78) {
  return CryptoJS.SHA1(_0x34ab78).toString();
}
function SHA256(_0x245e87) {
  return CryptoJS.SHA256(_0x245e87).toString();
}
function base64(_0x335bd7, _0x4625f8) {
  if (_0x335bd7 == 0) return Buffer.from(_0x4625f8).toString("base64");
  if (_0x335bd7 == 1) return Buffer.from(_0x4625f8, "base64").toString("utf-8");
}
function AESECB(_0x3178a7, _0x34cc30, _0xf65229) {
  const _0x28b8e6 = CryptoJS.enc.Utf8.parse(_0xf65229);
  if (_0x3178a7 == 0) {
    let _0x3aeb2b = CryptoJS.enc.Utf8.parse(_0x34cc30),
      _0x22e552 = CryptoJS.AES.encrypt(_0x3aeb2b, _0x28b8e6, {
        "mode": CryptoJS.mode.ECB,
        "padding": CryptoJS.pad.Pkcs7
      }).toString();
    return _0x22e552;
  }
  if (_0x3178a7 == 1) {
    let _0x2ce216 = CryptoJS.AES.decrypt(_0x34cc30, _0x28b8e6, {
      "mode": CryptoJS.mode.ECB,
      "padding": CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x2ce216;
  }
}
function AESCBC(_0x55271f, _0x527803, _0x2ad9a5, _0x56240a) {
  const _0x1fb10a = CryptoJS.enc.Utf8.parse(_0x2ad9a5);
  let _0x5e5d49 = CryptoJS.enc.Utf8.parse(_0x56240a);
  if (_0x55271f == 0) {
    let _0x351481 = CryptoJS.enc.Utf8.parse(_0x527803),
      _0x1e1755 = CryptoJS.AES.encrypt(_0x351481, _0x1fb10a, {
        "iv": _0x5e5d49,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      }).toString();
    return _0x1e1755;
  }
  if (_0x55271f == 1) {
    let _0x195135 = CryptoJS.AES.decrypt(_0x527803, _0x1fb10a, {
      "iv": _0x5e5d49,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x195135;
  }
}
function AESCBCHEX(_0x3885d3, _0x174d9b, _0x4eab5c, _0x343309) {
  const _0x3a45aa = CryptoJS.enc.Hex.parse(_0x4eab5c);
  let _0x47461b = CryptoJS.enc.Hex.parse(_0x343309);
  if (_0x3885d3 == 0) {
    let _0x5a03e4 = CryptoJS.enc.Utf8.parse(_0x174d9b),
      _0x50f7a3 = CryptoJS.AES.encrypt(_0x5a03e4, _0x3a45aa, {
        "iv": _0x47461b,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      }).toString();
    return _0x50f7a3;
  }
  if (_0x3885d3 == 1) {
    let _0x458cc6 = CryptoJS.AES.decrypt(_0x174d9b, _0x3a45aa, {
      "iv": _0x47461b,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x458cc6;
  }
}
function DESCBC(_0x3f1b19, _0x3cb5ac, _0x18fe53, _0x27c0db) {
  const _0x5c4546 = CryptoJS.enc.Utf8.parse(_0x18fe53);
  let _0x2af6e2 = CryptoJS.enc.Utf8.parse(_0x27c0db);
  if (_0x3f1b19 == 0) {
    let _0x533c85 = CryptoJS.enc.Utf8.parse(_0x3cb5ac),
      _0x1577fb = CryptoJS.DES.encrypt(_0x533c85, _0x5c4546, {
        "iv": _0x2af6e2,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      }).toString();
    return _0x1577fb;
  }
  if (_0x3f1b19 == 1) {
    let _0x2e017f = CryptoJS.DES.decrypt(_0x3cb5ac, _0x5c4546, {
      "iv": _0x2af6e2,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x2e017f;
  }
}
function AESECBb64(_0x5ef984, _0x3f3d8c, _0x592b51) {
  const _0x561dc3 = CryptoJS.enc.Base64.parse(_0x592b51);
  if (_0x5ef984 == 0) {
    let _0x128209 = CryptoJS.enc.Utf8.parse(_0x3f3d8c),
      _0x523f4a = CryptoJS.AES.encrypt(_0x128209, _0x561dc3, {
        "mode": CryptoJS.mode.ECB,
        "padding": CryptoJS.pad.Pkcs7
      }).toString();
    return _0x523f4a;
  }
  if (_0x5ef984 == 1) {
    let _0x253bf5 = CryptoJS.AES.decrypt(_0x3f3d8c, _0x561dc3, {
      "mode": CryptoJS.mode.ECB,
      "padding": CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x253bf5;
  }
}
function AESCBCb64(_0x25bf90, _0x4254ff, _0x23941d, _0x53eb26) {
  const _0x5a8eb7 = CryptoJS.enc.Base64.parse(_0x23941d);
  let _0x6747c4 = CryptoJS.enc.Base64.parse(_0x53eb26);
  if (_0x25bf90 == 0) {
    let _0x1e6227 = CryptoJS.enc.Utf8.parse(_0x4254ff),
      _0x1d55bf = CryptoJS.AES.encrypt(_0x1e6227, _0x5a8eb7, {
        "iv": _0x6747c4,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      }).toString();
    return _0x1d55bf;
  }
  if (_0x25bf90 == 1) {
    let _0x21d7fc = CryptoJS.AES.decrypt(_0x4254ff, _0x5a8eb7, {
      "iv": _0x6747c4,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x21d7fc;
  }
}
function RSAJM(_0x162aaa, _0x47840a) {
  const _0x1f7096 = "-----BEGIN PUBLIC KEY-----" + _0x47840a + "-----END PUBLIC KEY-----",
    _0x3fbf25 = new NodeRSA(_0x1f7096);
  _0x3fbf25.setOptions({
    "encryptionScheme": "pkcs1"
  });
  const _0x259fcb = _0x3fbf25.encrypt(_0x162aaa, "base64");
  return _0x259fcb;
}
function RSAJEM(_0x4cccce, _0x298f70) {
  const _0x31ff47 = "-----BEGIN PRIVATE KEY-----" + _0x298f70 + "-----END PRIVATE KEY-----",
    _0x17c913 = new NodeRSA(_0x31ff47);
  _0x17c913.setOptions({
    "encryptionScheme": "pkcs1"
  });
  const _0x657f4c = _0x17c913.decrypt(_0x4cccce, "utf8");
  return _0x657f4c;
}
async function replaceCurrentScript(_0x406d47) {
  const _0x5b3c88 = require("fs").promises,
    _0xc4d473 = process.argv[1];
  await _0x5b3c88.writeFile(_0xc4d473, _0x406d47);
  console.log("脚本更新完成，请重新运行脚本");
  process.exit();
}
function hmacsha256(_0x1b7a32, _0x4ba86c) {
  return CryptoJS.HmacSHA256(_0x1b7a32, _0x4ba86c).toString();
}
function pxzh(_0x40f64d) {
  for (var _0x90b78f = {}, _0x2fca60 = Object.keys(_0x40f64d).sort(), _0x3e5a52 = 0; _0x3e5a52 < _0x2fca60.length; _0x3e5a52++) _0x90b78f[_0x2fca60[_0x3e5a52]] = _0x40f64d[_0x2fca60[_0x3e5a52]];
  return _0x90b78f;
}
function zhjdz(_0x23343c) {
  let _0x1be599 = "";
  for (const [_0xc680fc, _0x32800c] of Object.entries(_0x23343c)) {
    _0x1be599 += _0xc680fc + "=" + _0x32800c + "&";
  }
  return _0x1be599 = _0x1be599.slice(0, -1);
}
function zfcpx(_0x301649) {
  const _0xd6bb71 = new URLSearchParams(_0x301649),
    _0xd31c97 = Array.from(_0xd6bb71.entries()).sort((_0x55d126, _0x1bff45) => _0x55d126[0].localeCompare(_0x1bff45[0])),
    _0x885cb8 = _0xd31c97.map(_0x429f54 => _0x429f54[0] + "=" + _0x429f54[1]).join("&");
  return _0x885cb8;
}
function randomInt(_0x478ac7, _0x3653bc) {
  return Math.round(Math.random() * (_0x3653bc - _0x478ac7) + _0x478ac7);
}
function DES3ECB(_0x2665b7, _0x3b8644, _0x551057) {
  const _0x25e919 = CryptoJS.enc.Utf8.parse(_0x551057);
  if (_0x2665b7 == 0) {
    let _0x531e68 = CryptoJS.enc.Utf8.parse(_0x3b8644),
      _0x53fa28 = CryptoJS.TripleDES.encrypt(_0x531e68, _0x25e919, {
        "mode": CryptoJS.mode.ECB,
        "padding": CryptoJS.pad.Pkcs7
      }).toString();
    return _0x53fa28;
  }
  if (_0x2665b7 == 1) {
    let _0x4ad652 = CryptoJS.TripleDES.decrypt(_0x3b8644, _0x25e919, {
      "mode": CryptoJS.mode.ECB,
      "padding": CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return _0x4ad652;
  }
}