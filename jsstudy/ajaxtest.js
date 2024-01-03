// 실습 3)
// http://172.30.1.34:9999/ajaxTest/members.xml
// 1. AJAX통신으로 xml데이터를 읽어온다.
// 2. JS로 member객체를 생성하고 admin객체와 user객체가
//    member객체를 상속받도록 한다.
// 3. 읽어온 데이터를 화면(HTML 또는 콘솔)에 출력한다.

const member = {mtype:'',mid:'',mname:''};
const admin = {mpart:''};
const user = {memail:''};
Object.setPrototypeOf(admin, member);
Object.setPrototypeOf(user, member);

$.get({
    url: 'http://172.30.1.34:9999/ajaxTest/members.xml',
    success: function(data) {
        const resultArray = [];
        $("#members_xml li").each(function(idx) {
            const mem = $(data).find('member').eq(idx);
            if (admin.mpart = mem.find('mpart').text()) {
                admin.mtype = mem.find('mtype').text();
                admin.mid = mem.find('mid').text();
                admin.mname = mem.find('mname').text();
                resultArray.push(admin);
            }
            if (user.memail = mem.find('memail').text()) {
                user.mtype = mem.find('mtype').text();
                user.mid = mem.find('mid').text();
                user.mname = mem.find('mname').text();
                resultArray.push(user);
            }
            $(this).text(JSON.stringify(resultArray[idx]));
        });
    }
});

// 실습 4)
// http://172.30.1.34:9999/ajaxTest/members.json
// 1. AJAX통신으로 json데이터를 읽어온다.
// 2. JS로 member객체를 생성하고 admin객체와 user객체가
//    member객체를 상속받도록 한다.
// 3. 읽어온 데이터를 화면(HTML 또는 콘솔)에 출력한다.

$.get({
    url: 'http://172.30.1.34:9999/ajaxTest/members.json',
    success: function(data) {
        const valueArray = Object.values(data);
        const resultArray = [];
        $("#members_json li").each(function(idx) {
            let eachObj = valueArray[idx];
            if (admin.mpart = eachObj.mpart) {
                admin.mtype = eachObj.mtype;
                admin.mid = eachObj.mid;
                admin.mname = eachObj.mname;
                resultArray.push(admin);              
            }
            if (user.memail = eachObj.memail) {
                user.mtype = eachObj.mtype;
                user.mid = eachObj.mid;
                user.mname = eachObj.mname;
                resultArray.push(user);              
            }            
            $(this).text(JSON.stringify(resultArray[idx]));
        });
    }
});
