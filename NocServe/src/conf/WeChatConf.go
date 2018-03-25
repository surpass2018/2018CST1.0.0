package conf

const (
	Appid  = "wx4dd685cdf8bbb83e"
	Secret = "e63fb27477842acd75ecca6f898b6e06"
	// http://ccx.natappvip.cc/WeChatLogin====http%3A%2F%2Fccx.natappvip.cc%2FWXLogin
	Redirect_uri  = "http%3A%2F%2Fccx.natappvip.cc%2Fapi%2FWXLogin"
	Response_type = "code"
	Scope         = "snsapi_base"
	GetCodeUrl    = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + Appid + "&redirect_uri=" + Redirect_uri + "&response_type=" + Response_type + "&scope=" + Scope + "&#wechat_redirect"
)
