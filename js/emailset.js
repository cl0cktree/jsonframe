(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
    publicKey: "8stEfALCtlUyN_beC",
    });
})();
if(document.querySelector('.email_wrap')){
    var p_button;
    var h_button;
    var e_mail;
    var e_name;
    var e_title;
    var message_input;
    var popup_content;
    var dimm_filter;
    var popup_close;
    var vali;

    document.addEventListener("DOMContentLoaded", function(){
        e_mail =document.getElementById('email');
        e_name = document.getElementById('name');
        e_title = document.getElementById('title');
        message_input = document.getElementById('message');
        h_button = document.getElementById('h_button');
        dimm_filter = document.querySelector('.dimm_filter');
        p_button = document.getElementById('path_button');
        popup_close = document.getElementById('popup_close');
        popup_content = document.querySelector('.popup_content');

        function h_button_click(){
            // popup_content = document.querySelector('.popup_content');
            vali = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            console.log('dimm_filter = '+dimm_filter.className);

            dimm_filter.classList.add('on');
            if(e_mail.value==''){
                popup_content.querySelector('p').innerHTML+='<span>이메일을 입력 해주세요.</span><br>';
            };
            if((e_mail.value!=='')&&(!vali.test(e_mail.value))){
                popup_content.querySelector('p').innerHTML+='<span>이메일 주소가 형식에 맞지 않습니다.</span><br>';
            }
            if(e_name.value==''){
                popup_content.querySelector('p').innerHTML+='<span>이름을 입력 해주세요.</span><br>';
            };
            if(e_title.value==''){
                popup_content.querySelector('p').innerHTML+='<span>제목을 입력 해주세요.</span><br>';
            };
            if(message_input.value==''){
                popup_content.querySelector('p').innerHTML+='<span>내용을 입력 해주세요.</span><br>';
            };
            if(e_mail.value!=''&&e_name.value!=''&&e_title.value!=''&&message_input.value!=''&&vali.test(e_mail.value)){
                p_button.click();
                dimm_filter.classList.remove('on');
            };
            popup_close.focus();
        };
        popup_close.addEventListener('click',function(e){
            dimm_filter.classList.remove('on');
            popup_content.querySelector('p').innerHTML='';
        });
        // popup_content.addEventListener('keydown',function(e){
        //     if((e.keyCode=='27')||(e.key=='Escape')||(e.keyCode=='13')||(e.key=='Enter')){
        //         dimm_filter.classList.remove('on');
        //         popup_content.querySelector('p').innerHTML='';
        //     }
        // });
        h_button.addEventListener('click',h_button_click);


        document.getElementById('mail_form').addEventListener('submit', function(event) {
            event.preventDefault();
            popup_content = document.querySelector('.popup_content');
            dimm_filter = document.querySelector('.dimm_filter');
            // these IDs from the previous steps
            emailjs.sendForm('clocktree', 'template_n3hysjz', this)
                .then(() => {
                        // console.log('SUCCESS!');
                        dimm_filter.classList.add('on');
                        popup_content.querySelector('p').innerHTML+='<span>메일이 발송 되었습니다.</span><br>';
                        // alert('메일이 발송 되었습니다.');
                        e_mail.value='';
                        e_name.value='';
                        e_title.value='';
                        message_input.value='';
                    }, (error) => {
                        // console.log('FAILED...', error);
                        dimm_filter.classList.add('on');
                        popup_content.querySelector('p').innerHTML+='<span>메일 발송에 실패하였습니다.</span><br>';
                        // alert('메일 발송에 실패하였습니다.');
                    });
        });

    });
}
