export default function formatDate(duration) {
    let seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24),
        days = parseInt((duration / (1000 * 60 * 60 * 24)))

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    let result = ""

    if (days != 0) result += days + "d"
    if (hours != 0) result += hours + "h"
    if (minutes != 0) result += minutes + "m"
    if (seconds != 0) result += seconds + "s"
    if (seconds == 0) result += "00s"

    if (result == "") result = "0s"

    return result
}