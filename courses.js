function initCourseTemplates() {
  var courseData = {
      course_start_date: "Mon 28.8",
      course_end_date: "Tue 15.10",
      option1_date_1: "29_8",
      option1_date_display_1: "Tue 29.9 at 12:00-14:00cet",
      option2_date_1: "31_8",
      option2_date_display_1: "Thu 31.8 at 19:30-21:30cet",

      option1_date_2: "19_9",
      option1_date_display_2: "Tue 19.9 at 12:00-14:00cet",
      option2_date_2: "21_9",
      option2_date_display_2: "Thu 21.9 at 19:30-21:30cet",
      //... other course data ...
  };

  var courseTemplate = Handlebars.compile(document.getElementById("course-template").innerHTML);
  document.getElementById("course").innerHTML = courseTemplate(courseData);
}

document.addEventListener('DOMContentLoaded', initCourseTemplates);
