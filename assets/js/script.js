$(".accordion-button").click((function () { "none" == $(".text-white-space").css("display") && $(".accordion-body").hide() })), "false" == $("AccordionAnyRidge").attr("aria-expanded") && ($(".AnyRidge-implant").css({ display: "none" }), $(".AnyRidge-abutment").css({ display: "none" }), $(".AnyRidge-surgical").css({ display: "none" })), $((function () { AOS.init() })), $("#menuButton").click((function () { "none" == $(".text-white-space").css("display") ? (window.matchMedia("(max-width: 990px)").matches ? ($(".accordion-flex").css({ display: "block" }), $(".accordin-col-sidebar").width("100%"), $(".accordin-col-content").css({ width: "100%" })) : ($(".accordion-flex").css({ display: "flex" }), $(".accordin-col-sidebar").width("470px"), $(".accordin-col-content").css({ width: "100%", "margin-left": "15px" })), $(".all").removeClass("col-xl-4").removeClass("col-lg-4").removeClass("col-md-4"), $(".all").addClass("col-xl-6").removeClass("col-lg-6").removeClass("col-md-6"), $(".text-white-space").css({ display: "block" }), $(".accordion-body").show(), $(".btn-contact").css({ "justify-content": "left" }), $(".btn-contact i").css({ "margin-right": "8px" })) : ($(".accordion-flex").css({ display: "flex" }), $(".accordin-col-sidebar").width("85px"), $(".accordin-col-content").css({ width: "100%", "margin-left": "15px" }), $(".all").removeClass("col-xl-6").removeClass("col-lg-6").removeClass("col-md-6"), $(".all").addClass("col-xl-4").addClass("col-lg-4").addClass("col-md-4"), $(".text-white-space").css({ display: "none" }), $(".accordion-body").hide().addClass("transition-0"), $(".btn-contact").css({ "justify-content": "center" }), $(".btn-contact i").css({ "margin-right": "0px" })) }));