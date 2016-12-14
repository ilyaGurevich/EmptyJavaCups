filepicker.setKey("A3pU77029QpuIkSOrjMkHz");

function NAP_upload_portal() {
  this.filestack_unit = document.getElementById("filestack-unit");
  this.filestack_name = document.getElementById("filestack-name");
  this.filestack_type = document.getElementById("filestack-type");
  this.filestack_upload_button = document.getElementById("filestack-upload-button");

  this.youtube_unit = document.getElementById("youtube-unit");
  this.youtube_name = document.getElementById("youtube-name");
  this.youtube_url = document.getElementById("youtube-url");
  this.youtube_upload_button = document.getElementById("youtube-upload-button");

  this.student_name = document.getElementById("student-name");
  this.student_proficiency = document.getElementById("student-proficiency");
  this.student_language = document.getElementById("student-nativeLanguage");
  this.student_nationality = document.getElementById("student-nationality");
  this.student_unit = document.getElementById("student-unit");
  this.student_upload_button = document.getElementById("student-upload-button");

  this.filestack_upload_button.addEventListener('click', this.pick.bind(this));
  this.youtube_upload_button.addEventListener('click', this.add_youtube_url_to_firebase.bind(this));
  this.student_upload_button.addEventListener('click', this.add_student_to_firebase.bind(this));

  this.initialize_firebase();
}

NAP_upload_portal.prototype.initialize_firebase = function() {
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
};

NAP_upload_portal.prototype.pick = function() {
    filepicker.pick(
        function(blob) {
            this.blob = blob;
            this.add_filestack_datagram_url_to_firebase();
        }.bind(this));
};

NAP_upload_portal.prototype.add_filestack_datagram_url_to_firebase = function() {
	this.documentsRef = this.database.ref("documents");
  var url_literal = this.blob.url;
  var datagram_name = this.filestack_name.value;
  var unit_num = this.filestack_unit.value;
  var type = this.filestack_type.value;
  var el = new Everlive('vp5xxkeb34dhj029');
  var data = el.data('documents');
  data.create({ 
      'name' : datagram_name,  
      'url': url_literal,
      'unit': unit_num,
      'type': type});
	// this.documentsRef.push({
 //    name: datagram_name,
 //    url: url_literal,
 //    unit: unit_num,
 //    type: "document",
 //    isPrivate: false
 //  });
  alert("Item successfully added");
  this.filestack_unit.value = '';
  this.filestack_name.value = '';
};

NAP_upload_portal.prototype.add_youtube_url_to_firebase = function() {
  this.videoRef = this.database.ref("videos");
  var video_name = this.youtube_name.value;
  var unit_num = this.youtube_unit.value;
  var video_url = this.youtube_url.value;
  var el = new Everlive('vp5xxkeb34dhj029');
  var data = el.data('videos');
  data.create({ 
      'name' : video_name,  
      'url': video_url,
      'unit': unit_num,
      'type': "video"});
  var el = new Everlive('vp5xxkeb34dhj029');
  var data = el.data('documents');
  data.create({ 
      'name' : video_name,  
      'url': video_url,
      'unit': unit_num,
      'type': "video"});
 // this.videoRef.push({
 //    name: video_name,
 //    url: video_url,
 //    unit: unit_num,
 //    type: "video",
 //    isPrivate: false
 //  });
  alert("Item successfully added");
  this.youtube_name.value = '';
  this.youtube_unit.value = '';
  this.youtube_url.value = '';
};

NAP_upload_portal.prototype.add_student_to_firebase = function() {
  this.studentRef = this.database.ref("students");
  var stu_name = this.student_name.value;
  var stu_proficiency = this.student_proficiency.value;
  var language = this.student_language.value;
  var stu_nationality = this.student_nationality.value;
  var unit_num = this.student_unit.value;
  var el = new Everlive('vp5xxkeb34dhj029');
  var data = el.data('students');
  data.create({ 
      'unit' : unit_num,  
      'proficiency': stu_proficiency,
      'nativeLanguage': language,
      'nationality': stu_nationality,
      'name': stu_name});
  // this.studentRef.push({
  //   name: stu_name,
  //   proficiency: stu_proficiency,
  //   native_language: language,
  //   nationality: stu_nationality,
  //   unit: unit_num
  // });
  alert("Item successfully added");
  this.student_name.value = '';
  this.student_proficiency.value = '';
  this.student_language.value = '';
  this.student_nationality.value = '';
  this.student_unit.value = '';
};

window.onload = function() {
  window.NAP_upload_portal = new NAP_upload_portal();
};
