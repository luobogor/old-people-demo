import { config } from '../config.js'


class HTTP {
  constructor() {
    this.baseRestUrl = config.api_blink_url
  }

  request(params) {
    const url = this.baseRestUrl + params.url;
    if (!params.method) {
      params.method = 'GET';
    }
    wx.request({
      url,
      data: params.data,
      header: {
        'content-type': 'application/json',
      },
      success(res) {
        const code = res.statusCode.toString();
        const startChar = code.charAt(0);
        if (startChar == '2') {
          params.success && params.success(res.data);
        } else {
          params.error && params.error(res);
        }
      },
      fail(err) {
        params.fail && params.fail(err);
      }
    });
  }
}

export {
  HTTP,
};
