class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  // 14:50
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    for (let i = 0; i < this.alarmCollection.length; i++) {
      if (this.alarmCollection[i].time === time) {
        console.warn('Уже присутствует звонок на это же время');
      }
    }

    this.alarmCollection.push({
      time: time,
      callback: callback,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
