const fs = require('fs')

/*
// NOT USED
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
*/

exports.C_RESET = "\x1b[0m"
exports.C_UNDERSCORE  = "\x1b[4m"

exports.C_FG_BLACK = "\x1b[30m"
exports.C_FG_RED = "\x1b[31m"
exports.C_FG_GREEN = "\x1b[32m"
exports.C_FG_YELLOW = "\x1b[33m"
exports.C_FG_BLUE = "\x1b[34m"
exports.C_FG_MAGENTA = "\x1b[35m"
exports.C_FG_CYAN = "\x1b[36m"
exports.C_FG_WHITE = "\x1b[37m"

exports.C_BG_BLACK = "\x1b[40m"
exports.C_BG_RED = "\x1b[41m"
exports.C_BG_GREEN = "\x1b[42m"
exports.C_BG_YELLOW = "\x1b[43m"
exports.C_BG_BLUE = "\x1b[44m"
exports.C_BG_MAGENTA = "\x1b[45m"
exports.C_BG_CYAN = "\x1b[46m"
exports.C_BG_WHITE = "\x1b[47m"

function addZero(i) {
    return i.toString().padStart(2, '0')
}

function isDaylightSavingTime(date) {
    const januaryOffset = new Date(date.getFullYear(), 0, 1).getTimezoneOffset()
    const julyOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset()

    return Math.max(januaryOffset, julyOffset) !== date.getTimezoneOffset()
}

function getFormattedDate() {

    let now = new Date(Date.now());
        now.setUTCHours(now.getUTCHours() + (isDaylightSavingTime(now) ? 2 : 1));

    const date = addZero(now.getDate()) + "-" + addZero(now.getMonth() + 1) + "-" + now.getFullYear()
    const time = addZero(now.getUTCHours()) + ":" + addZero(now.getMinutes()) + ":" + addZero(now.getSeconds())

    return date + " " + time
}

exports.formatDuration = (duration) => {
    const seconds = Math.floor(duration / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;
    const remainingHours = hours % 24;
  
    const durationParts = [
      { value: days, label: 'j' },
      { value: remainingHours, label: 'h' },
      { value: remainingMinutes, label: 'm' },
      { value: remainingSeconds, label: 's' },
    ];
  
    let formattedDuration = '';
    let hasValue = false;
  
    for (let i = 0; i < durationParts.length; i++) {
      const { value, label } = durationParts[i];
      if (value > 0 || (i === durationParts.length - 1 && !hasValue)) {
        if (hasValue) {
          formattedDuration += ' ';
        }
        formattedDuration += `${value}${label}`;
        hasValue = true;
      }
    }
  
    return formattedDuration + ` (soit ${duration}ms)`
  }

exports.log = (source, content, file_path) => {
    let log_marker = `[${getFormattedDate()}] [${source}] `

    let log_content = log_marker + content.replace(/\u001b[^m]*?m/g,"") + '\n'
    let log_content_console = log_marker + content

	fs.appendFile(`./logs/${file_path}`, log_content, () => {})

    fs.appendFile(`./logs/global.log`, log_content, function () {
        console.log(log_content_console)
    })
}

exports.logSystemEvent = (content) => {
    this.log("system", content, "system.log")
}

exports.logErrorEvent = (content) => {
    this.log("error", content, "errors.log")
}

exports.logUserEvent = (username, content) => {
    this.log("user", content, `users/${username}_logs.log`)
}
