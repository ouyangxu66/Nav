import $ from 'jquery'

var alertUtil = {
  /**
   * 静态消息框--弹出消息框
   * @param msg 消息内容
   * @param type 消息框类型（参考bootstrap的alert）
   */
  alert: function (msg, type) {
    if (typeof (type) == "undefined") {
      type = "success";
    }
    var divElement = $("<div></div>")
      .addClass('alert')
      .addClass('alert-' + type)
      .addClass('alert-dismissible')
      .addClass('col-md-4')
      .addClass('col-md-offset-4');
    divElement.css({
      "position": "absolute",
      "right": "30px",
      "top": "80px",
      "z-index": "9999"
    });
    divElement.text(msg);
    // 消息框添加关闭按钮
    var closeBtn = $('<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');
    $(divElement).append(closeBtn);
    // 消息框放入到页面中
    $('body').append(divElement);
    return divElement;
  },

  /**
   * 动态消息框--短暂显示后上浮消失的消息框
   * @param msg 消息内容
   * @param type 消息框类型
   */
  message: function (msg, type) {
    var divElement = alertUtil.alert(msg, type);
    var isIn = false;

    // 在setTimeout执行之前先判定鼠标是否在消息框中
    divElement.on({
      mouseover: function () { isIn = true; },
      mouseout: function () { isIn = false; }
    });

    // 短暂延时后上浮消失
    setTimeout(function () {
      var IntervalMS = 20;
      var floatSpace = 60;
      var nowTop = divElement.offset().top;
      var stopTop = nowTop - floatSpace;
      divElement.fadeOut(IntervalMS * floatSpace);

      var upFloat = setInterval(function () {
        if (nowTop >= stopTop) {
          divElement.css({ "top": nowTop-- });
        } else {
          clearInterval(upFloat);
          divElement.remove();
        }
      }, IntervalMS);

      // 如果鼠标在setTimeout之前已经放在的消息框中，则停止上浮
      if (isIn) {
        clearInterval(upFloat);
        divElement.stop();
      }

      divElement.hover(function () {
        clearInterval(upFloat);
        divElement.stop();
      }, function () {
        divElement.fadeOut(IntervalMS * (nowTop - stopTop));
        upFloat = setInterval(function () {
          if (nowTop >= stopTop) {
            divElement.css({ "top": nowTop-- });
          } else {
            clearInterval(upFloat);
            divElement.remove();
          }
        }, IntervalMS);
      });
    }, 1500);
  },

  // 模拟延迟效果
  pushSleep: function (delay) {
    let t = Date.now();
    while (Date.now() - t <= delay) {
      continue;
    }
  }
}

export default alertUtil;