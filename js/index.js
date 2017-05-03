

function numchecked(){
		var numone = $('#usernumone>p>input').val();
		var numtwo = $('#usernumtwo>p>input').val();
		if($('#usernumtwo>p>input').val().length == 0){
				$('#inputcheck').css({'background':'','background-size':'cover'});
			}
		else if(numone === numtwo){
				$('#inputcheck').css({'background':'url(images/numnormal.png) center no-repeat','background-size':'cover'});
				}
		else{
				$('#inputcheck').css({'background':'url(images/numerror.png) center no-repeat','background-size':'cover'});
				}	
				
		if($('#usernumone>p>input').val().length == 0 || $('#usernumtwo>p>input').val().length == 0){
			$('#LJDG').css('background','#dfdfdf');
			$('#LJDG>p').css('color','#999999');
			$('#LJDG').unbind("click");			
			}else if(numone === numtwo){
				$('#LJDG').css('background','#0086cf');
				$('#LJDG>p').css('color','#fff');
				$('#LJDG').unbind("click");							
				$("#LJDG").click(function(){
					$("#mask").css("height",$(document).height());     
					$("#mask").css("width",$(document).width());    
					$("#mask").show(),$(".QRBL").animate({'bottom':'0rem'});
					$('#userQQnum').text($('#usernumtwo>p>input').val());
				}); 
				$('.QRuserinfo>div').click(function(){
					window.location.href="succ.html";		
				});				
				}else{
					$('#LJDG').unbind("click");								
					$('#LJDG').css('background','#0086cf');
					$('#LJDG>p').css('color','#fff');
					//生成灰色失败提示
				$("#LJDG").click(function(){
					$("#failed").fadeIn(),
					$("#failed").delay(1000).fadeOut();
					});
				}
		}
    function showMask(){   
        $("#mask").css("height",$(document).height());     
        $("#mask").css("width",$(document).width());     
        $("#mask").show();    			  
    }  
    function hideMask(){     
        $("#mask").hide(); 
    }  
	$(document).ready(function(){	
		hideMask();
		$('.more>div').hide();	
		$('#failed').hide();	
		$("#mask").click(function(){
		$(".QRBL").animate({'bottom':'-22rem'}),$("#mask").hide(); 
			});
	});
	function moreinfo(){
		$('.more>div').slideToggle(500,function(){
			if($(".more>p>a").text()== '点击加载更多'){
				$(".more>p>a").text('收起');
				}else{
					$(".more>p>a").text('点击加载更多');
					}
			});
	}

	