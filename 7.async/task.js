class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = 0;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
  }
}
