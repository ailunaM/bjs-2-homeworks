function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks = [...this.marks, ...marks];
  }
};

Student.prototype.getAverage = function () {};

Student.prototype.exclude = function (reason) {};
