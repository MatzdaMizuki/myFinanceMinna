function initCourseTemplates() {
  var courseData = {
      course_start_date: "31.10",
      course_end_date: "08.12",
      option1_date_1: "31_10",
      option1_date_display_1: "Tue 31.10 at 12:00-14:00cet",
      option2_date_1: "02_11",
      option2_date_display_1: "Thu 2.11 at 19:30-21:30cet",

      option1_date_2: "28_11",
      option1_date_display_2: "Tue 28.11 at 12:00-14:00cet",
      option2_date_2: "21_9",
      option2_date_display_2: "Thu 31.11 at 19:30-21:30cet",
      
  };

  var courseTemplate = Handlebars.compile(document.getElementById("course-template").innerHTML);
  document.getElementById("course").innerHTML = courseTemplate(courseData);
}

document.addEventListener('DOMContentLoaded', initCourseTemplates);
