import "../styles/Cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards () {
  const commentsOne = [
    {
      id: 1,
      user: "raffagrassetti",
      text: "Woah dude, this is awesome!!!",
    },
    {
      id: 2,
      user: "raffagrassetti",
      text: "Woah dude, this is awesome!!!",
    },
    {
      id: 3,
      user: "raffagrassetti",
      text: "Woah dude, this is awesome!!!",
    },
    {
      id: 4,
      user: "raffagrassetti",
      text: "Woah dude, this is awesome!!!",
    },
    {
      id: 5,
      user: "raffagrassetti",
      text: "Niceeeee",
    },
    {
      id: 6,
      user: "raffagrassetti",
      text: "Likee",
    }
  ];

  const commentsTwo = [
    {
      id: 1,
      user: "raffagrassetti",
      text: "Woah dude, this is awesome!!!",
    }
  ];

  const commentsThree = [
    {
      id: 1,
      user: "raffagrassetti",
      text: "Woah dude, this is awesome!!!",
    }
  ];

  return (
    <div className="cards">
      <Stories />

      <Card
        accountName="raffagrassetti"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={11}
      />
      <Card
        accountName="askjdpjklaihjs"
        storyBorder={false}
        image="https://picsum.photos/800/1000"
        comments={commentsTwo}
        likedByText="dadatlacak"
        likedByNumber={18}
        hours={12}
      />
      <Card
        accountName="asdasdasdasd"
        storyBorder={true}
        image="https://picsum.photos/800"
        comments={commentsThree}
        likedByText="dadatlacak"
        likedByNumber={100}
        hours={1}
      />
    </div>
  )
}

export default Cards;