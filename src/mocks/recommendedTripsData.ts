const getData = () => ({
  title: "지금 인기있는 여행들이에요",
  trips: [
    {
      id: 1,
      title: "런던 여행",
      imageUrl:
        "https://res.klook.com/image/upload/Mobile/City/n9sn4fajwa1skldmdeex.jpg",
      writer: {
        nickname: "양파쿵야",
        imagUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/f9/Open_Happiness_Piccadilly_Circus_Blue-Pink_Hour_120917-1126-jikatu.jpg",
      },
      cities: [
        {
          id: 1,
          name: "런던",
        },
        {
          id: 2,
          name: "애든버러",
        },
      ],
      startDate: "2023-06-13",
      endDate: "2023-06-20",
      description:
        "어쩌구 저쩌구 좌충우돌좌충우돌좌충우돌좌충우돌좌충우돌좌충우돌 라곤의 런던 여행기",
      likeCount: 123,
      isLike: true,
    },
    {
      id: 2,
      title: "파리 여행",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/586ebc34d482e9c69268b69a/1624386887478-9Z3XA27D8WFVDWKW00QS/20201230173806551_JRT8E1VC.png",
      writer: {
        nickname: "양파쿵야",
        imagUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/f9/Open_Happiness_Piccadilly_Circus_Blue-Pink_Hour_120917-1126-jikatu.jpg",
      },
      cities: [
        {
          id: 1,
          name: "런던",
        },
        {
          id: 2,
          name: "애든버러",
        },
      ],
      startDate: "2023-06-13",
      endDate: "2023-06-20",
      description: "어쩌구 저쩌구 좌충우돌 라곤의 런던 여행기44",
      likeCount: 123,
      isLike: true,
    },
    {
      id: 3,
      title: "서울 여행",
      imageUrl:
        "https://a.cdn-hotels.com/gdcs/production144/d992/418cd5c1-7f91-4c44-9f39-3016b033eaa1.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      writer: {
        nickname: "양파쿵야",
        imagUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/f9/Open_Happiness_Piccadilly_Circus_Blue-Pink_Hour_120917-1126-jikatu.jpg",
      },
      cities: [
        {
          id: 1,
          name: "런던",
        },
        {
          id: 2,
          name: "애든버러",
        },
      ],
      startDate: "2023-06-13",
      endDate: "2023-06-20",
      description: "어쩌구 저쩌구 좌충우돌 라곤의 런던 여행기33",
      likeCount: 123,
      isLike: true,
    },
    {
      id: 4,
      title: "도쿄 여행",
      imageUrl:
        "https://www.jamonfive.com/files/attach/images/1032/015/002/aa092a675ca23b89e818562389d62c12.jpg",
      writer: {
        nickname: "양파쿵야",
        imagUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/f9/Open_Happiness_Piccadilly_Circus_Blue-Pink_Hour_120917-1126-jikatu.jpg",
      },
      cities: [
        {
          id: 1,
          name: "런던",
        },
        {
          id: 2,
          name: "애든버러",
        },
      ],
      startDate: "2023-06-13",
      endDate: "2023-06-20",
      description: "어쩌구 저쩌구 좌충우돌 라곤의 런던 여행기22",
      likeCount: 123,
      isLike: true,
    },
    {
      id: 5,
      title: "런던2 여행3",
      imageUrl:
        "https://www.discoverlosangeles.com/sites/default/files/images/2023-02/IMG_0410-Edit-3.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp",
      writer: {
        nickname: "양파쿵야",
        imagUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/f9/Open_Happiness_Piccadilly_Circus_Blue-Pink_Hour_120917-1126-jikatu.jpg",
      },
      cities: [
        {
          id: 1,
          name: "런던",
        },
        {
          id: 2,
          name: "애든버러",
        },
      ],
      startDate: "2023-06-13",
      endDate: "2023-06-20",
      description: "어쩌구 저쩌구 좌충우돌 라곤의 런던 여행기99",
      likeCount: 123,
      isLike: true,
    },
  ],
});

const getRecommendedTripsData = { getData };
export default getRecommendedTripsData;
