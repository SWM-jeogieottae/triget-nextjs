interface pickedProducts {
  place: string;
  people_num: number;
  departure_date: any;
  arrival_date: any;
  departure_airport: string;
  budget: number;
  journey_theme: string;
  airport_prior: number;
  accommodation_prior: number;
  restaurant_prior: number;
  activity_prior: number;
}

async function fetchTravelPlanList(travelSpec: pickedProducts) {
  const testPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          travel_time: "12:30",
          product_id: 0,
          product_name: "롯데월드",
          thumbnail_url:
            "https://image.fmkorea.com/files/attach/new2/20210827/1378413927/100154207/3867607871/dd6b22fc4ee4a915b655b1594f0cdd85.png",
          product_type: "놀이공원",
          city: "서울",
          district: "잠실",
          address: "서울특별시 송파구 올림픽로 240",
          longitude: 0.77,
          latitude: 0.77,
          price: 50000,
          currency_code: "원",
          review_score: 4.5,
          popularity: 50,
          product_detail_url: "http://www.lotteworld.com/gate.html",
          keywords_array: ["재밌다", "신난다", "굉장해 엄청나"],
        },
        {
          travel_time: "14:00",
          product_id: 1,
          product_name: "하얏트 리젠시 와이키키 비치 리조트 & 스파",
          thumbnail_url:
            "https://image.fmkorea.com/files/attach/new2/20210827/1378413927/100154207/3867607871/dd6b22fc4ee4a915b655b1594f0cdd85.png",
          product_type: "놀이공원",
          city: "서울",
          district: "잠실",
          address: "서울특별시 송파구 올림픽로 240",
          longitude: 0.77,
          latitude: 0.77,
          price: 50000,
          currency_code: "원",
          review_score: 4.5,
          popularity: 50,
          product_detail_url: "http://www.lotteworld.com/gate.html",
          keywords_array: ["재밌다", "신난다", "굉장해 엄청나"],
        },
        {
          travel_time: "15:30",
          product_id: 2,
          product_name: "와이키키 비치",
          thumbnail_url:
            "https://image.fmkorea.com/files/attach/new2/20210827/1378413927/100154207/3867607871/dd6b22fc4ee4a915b655b1594f0cdd85.png",
          product_type: "놀이공원",
          city: "서울",
          district: "잠실",
          address: "서울특별시 송파구 올림픽로 240",
          longitude: 0.77,
          latitude: 0.77,
          price: 50000,
          currency_code: "원",
          review_score: 4.5,
          popularity: 50,
          product_detail_url: "http://www.lotteworld.com/gate.html",
          keywords_array: ["재밌다", "신난다", "굉장해 엄청나"],
        },
        {
          travel_time: "16:30",
          product_id: 3,
          product_name: "마이 타이 바",
          thumbnail_url:
            "https://image.fmkorea.com/files/attach/new2/20210827/1378413927/100154207/3867607871/dd6b22fc4ee4a915b655b1594f0cdd85.png",
          product_type: "놀이공원",
          city: "서울",
          district: "잠실",
          address: "서울특별시 송파구 올림픽로 240",
          longitude: 0.77,
          latitude: 0.77,
          price: 50000,
          currency_code: "원",
          review_score: 4.5,
          popularity: 50,
          product_detail_url: "http://www.lotteworld.com/gate.html",
          keywords_array: ["재밌다", "신난다", "굉장해 엄청나"],
        },
      ]);
    }, 500);
  });

  const travelList = await testPromise;

  return travelList;
}

export default fetchTravelPlanList;