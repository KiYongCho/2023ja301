let btn = document.getElementById("btn");
btn.onclick = function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://apis.data.go.kr/B552881/kmooc/courseList?ServiceKey=zdcLWo1S7NHYWqvcfEoiha9REwwXCbFApvxzGS7jvyb72D3x4UASxWn3uKv%2FcVa2aEkk5Yc8X2mwsBAlN2GvKQ%3D%3D&page=1", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState==4 && xhr.status==200) {
            let jsonStr = xhr.responseText;
            const jsonObj = JSON.parse(jsonStr);
            document.getElementById("content").innerHTML
                = jsonObj.pagination.count;
        }
    }
}

/*
{
  "pagination": {
    "count": 1333,
    "previous": null,
    "num_pages": 134,
    "next": "http://www.kmooc.kr/api/courses/v1/courses/?page=2"
  },
  "results": [
    {
      "blocks_url": "http://www.kmooc.kr/api/courses/v1/blocks/?course_id=course-v1%3AFUNMOOC%2Btest1%2Btest1",
      "effort": "09:08@07#04:03$06:05",
      "end": "2031-01-01T00:00:00Z",
      "enrollment_start": "2030-01-02T00:00:00Z",
      "enrollment_end": "2031-01-01T00:00:00Z",
      "id": "course-v1:FUNMOOC+test1+test1",
      "media": {
        "course_image": {
          "uri": "/asset-v1:FUNMOOC+test1+test1+type@asset+block@images_course_image.jpg"
        },
        "course_video": {
          "uri": null
        },
        "image": {
          "raw": "http://www.kmooc.kr/asset-v1:FUNMOOC+test1+test1+type@asset+block@images_course_image.jpg",
          "small": "http://www.kmooc.kr/asset-v1:FUNMOOC+test1+test1+type@asset+block@images_course_image.jpg",
          "large": "http://www.kmooc.kr/asset-v1:FUNMOOC+test1+test1+type@asset+block@images_course_image.jpg"
        }
      },
      "name": "강좌생성테스트",
      "number": "test1",
      "org": "FUNMOOC",
      "short_description": "",
      "start": "2030-01-02T00:00:00Z",
      "start_display": "2030년 1월 2일",
      "start_type": "timestamp",
      "pacing": "instructor",
      "mobile_available": true,
      "hidden": false,
      "invitation_only": false,
      "ai_sec_yn": "Y",
      "basic_science_sec_yn": "N",
      "course_id": "course-v1:FUNMOOC+test1+test1"
    }    
  ]
}
*/