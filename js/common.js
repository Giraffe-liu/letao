
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//添加登录拦截,验证是否登录
	$.ajax({
		url:'/api/employee/checkRootLogin',
		success:function(msg){
			console.log(msg);
			if(msg.error){
				location.href = '/login.html?url='+location.href;
			}
		}
	})