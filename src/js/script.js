function dataShow() {
  $.getJSON("data/project.json", function (data) {
    let project = data.project;
    $.each(project, function (i, data) {
      $("#project-list").append(
        '<div class="relative flex flex-col bg-white shadow-md shadow-primary/20 rounded-lg w-full"><div class="relative overflow-hidden text-white rounded-t-lg"><img src="src/img/project/' +
          data.image +
          '" class="object-cover h-44" alt="Image Not Found" /></div><div class="p-4 space-y-2"><span class="bg-primary/10 inline-block rounded-lg py-1 px-2 text-xs font-semibold text-dark/75">' +
          data.category +
          '</span><h6 class="text-slate-800 text-xl font-semibold">' +
          data.name +
          '</h6><p class="text-slate-600 leading-normal font-light">' +
          data.description +
          '</p></div><div class="px-4 pb-6 pt-0"><a href="' +
          data.link +
          '" target="_blank"class="rounded-md bg-primary py-2 px-4 text-center text-sm font-semibold text-white hover:bg-primary/80">Explore</a></div></div>'
      );
    });
  });
}

dataShow();

$(".link").on("click", function () {
  $(".link").removeClass("bg-slate-300");
  $(this).addClass("bg-slate-300");

  let category = $(this).html();

  if (category == "All Category") {
    $("#project-list").html("");
    dataShow();
    return;
  }

  $.getJSON("data/project.json", function (data) {
    let project = data.project;
    let content = "";

    $.each(project, function (i, data) {
      if (data.category == category) {
        content +=
          '<div class="relative flex flex-col bg-white shadow-md shadow-primary/20 rounded-lg w-full"><div class="relative overflow-hidden text-white rounded-t-lg"><img src="src/img/project/' +
          data.image +
          '" class="object-cover h-44" alt="Image Not Found" /></div><div class="p-4 space-y-2"><span class="link bg-primary/10 inline-block rounded-lg py-1 px-2 text-xs font-semibold text-dark/75">' +
          data.category +
          '</span><h6 class="text-slate-800 text-xl font-semibold">' +
          data.name +
          '</h6><p class="text-slate-600 leading-normal font-light">' +
          data.description +
          '</p></div><div class="px-4 pb-6 pt-0"><a href="' +
          data.link +
          '" target="_blank"class="rounded-md bg-primary py-2 px-4 text-center text-sm font-semibold text-white hover:bg-primary/80">Explore</a></div></div>';
      }
    });

    if (content === "") {
      $("#project-list").html(
        '<p class="py-32 text-center text-slate-600">Data Not Found!</p>'
      );
    } else {
      $("#project-list").html(content);
    }
  });
});
